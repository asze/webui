/*
Copyright Emil A Eklund - Column List Widget 1.03
  (http://webfx.eae.net/dhtml/collist/columnlist.html)
Copyright Erik Arvidsson - Sortable Table 1.12
  (http://webfx.eae.net/dhtml/sortabletable/sortabletable.html)
Copyright (c) 2011 BitTorrent, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var TYPE_STRING = 0;
var TYPE_NUMBER = 1;
var TYPE_DATE = 2;
var TYPE_NUM_ORDER = 3;
var TYPE_NUM_PROGRESS = 4;
var TYPE_CUSTOM = 5;

var ALIGN_AUTO = 0;
var ALIGN_LEFT = 1;
var ALIGN_CENTER = 2;
var ALIGN_RIGHT  = 3;

var MODE_PAGE = 0;
var MODE_VIRTUAL = 1;

var NO_CHANGE = 0;
var HAS_CHANGED = 1;

var MATH_CEIL = Math.ceil;
var MATH_FLOOR = Math.floor;

var TD = new Element("td");
var TR = new Element("tr");
var DIV = new Element("div");
var SPAN = new Element("span");

function simpleClone(element, content) {
	element = $(element.cloneNode(!!content));
	element.uid = null;
	Slick.uidOf(element);
	return element;
}

var PBAR =
	simpleClone(DIV, false).addClass("stable-progress").grab(
		simpleClone(DIV, false).addClass("stable-progress-bar").grab(
			simpleClone(DIV, false)
		)
	);

function progressBar(pcnt) {
	var pcntp = pcnt.toFixedNR(1) + "%";
	var pbar = simpleClone(PBAR, true);
	(pbar.appendText(pcntp, 'top')
		.children[0].setStyle('width', pcntp)
			.children[0].appendText(pcntp, 'top').setStyle('width', (pcnt ? (100 * 100/pcnt).toFixedNR(1) + "%" : 0))
	);
	return pbar;
}

var STable = new Class({

	"Implements": [Options, Events],
	"rows": 0, // # of rows
	"rowData": {}, // the rows' raw data (unformatted)
	"rowId": [], // row ids in their current sorted order
	"rowSel": {}, // rows' select state
	"selectedRows": [], // the selected rows
	"stSel": null, //
	"activeId": [], // position -> id
	"cols": 0, // # of columns
	"colData": [], // columns' data
	"sortCustom": null, // the custom sort function callback, function(col, datax, datay)
	"dCont": null, // the main container
	"dHead": null, // head container
	"dBody": null, // body container
	"tHead" : null, // <table> element for the header
	"tBody" : null, // <table> element for the body
	"tb" : {
		"head": null,
		"body": null,
		"rowheight": 0
	}, // <tbody> elements for header & body
	// sorting
	"sIndex": -1,
	"reverse": 0,
	"secIndex": 0,
	"secRev": 0,
	"colOrder": [],
	"colHeader": [],
	"options": {
		"format": function() { return arguments[0]; },
		"maxRows": 25,
		"alternateRows": true,
		"mode": MODE_PAGE,
		"rowsSelectable": true,
		"rowMultiSelect": true,
		"refreshable": false
	},
	"tHeadCols": [],
	"tBodyCols": [],
	"cancelSort": false,
	"cancelMove": false,
	"hotCell": -1,
	"colMove": null,
	"colSep": null,
	"isMoving": false,
	"isResizing": false,
	"isSorting": false,
	"isScrolling": false,
	"curPage": 0,
	"pageCount": 0,
	"rowCache": [],
	"rowModel" : null,
	"resetText": null,
	"filterShow": false,
	"filterQuery": null,

	"create": function(id, columns, options) {
		this.cols = columns.length;

		var strIdx = -1;
		this.colIcon = [];
		this.colFilter = [];
		this.colHeader = columns.map(function(col, idx) {
			if (strIdx < 0 && col.type === TYPE_STRING) strIdx = idx;
			if (!!col.icon) this.colIcon.push(idx);
			if (!!col.filter) this.colFilter.push(idx);
			return {
				  "id": (col.id || "")
				, "align": [col.align, ALIGN_AUTO].pick()
				, "filter": (col.filter && col.type === TYPE_STRING)
				, "hidden": !![col.hidden, !col.width].pick()
				, "icon": !!col.icon
				, "text": (col.text || col.id || "")
				, "type": [col.type, TYPE_STRING].pick()
				, "width": (col.width || 0)
			};

		}, this);
		if (!this.colIcon.length) {
			this.colHeader[0].icon = true;
			this.colIcon.push(0);
		}
		if (!this.colFilter.length && strIdx >= 0) {
			this.colHeader[strIdx].filter = true;
			this.colFilter.push(strIdx);
		}

		this.colOrder = (options.colOrder && (options.colOrder.length == this.cols)) ? options.colOrder : columns.map(function(item, i) { return i; });
		this.sIndex = isNaN(options.sIndex) ? -1 : options.sIndex.toInt().limit(-1, this.cols - 1);
		delete options.colOrder;
		delete options.sIndex;
		if (options.sortCustom) {
			this.sortCustom = options.sortCustom;
			delete options.sortCustom;
		}
		this.setOptions(options);

		this.cmp = (function() {
			var map = {
				"DEFAULT": function(x, y) {
					return Comparator.compare(x.v, y.v);
				}
			};

			map[TYPE_STRING] =
				this.sortAlphaNumeric.bind(this);

			map[TYPE_DATE] =
			map[TYPE_NUMBER] =
			map[TYPE_NUM_PROGRESS] =
				this.sortNumeric.bind(this);

			map[TYPE_NUM_ORDER] =
				this.sortNumOrder.bind(this);

			return map;
		}).apply(this);

		var badIE = (Browser.ie && Browser.version <= 7);
		var tr, td, div, $me = this;

		this.id = "stable-" + id;
		this.idprefix = new RegExp("^" + this.id + "-row-", "")
		this.dCont = $(id).addClass("stable");
		this.dHead = simpleClone(DIV, false).addClass("stable-head").inject(this.dCont);
		this.dBody = simpleClone(DIV, false).addClass("stable-body").inject(this.dCont);

		this.dHead.addEvents({
			"mousedown": function(ev) {
				if (ev.isRightClick())
					$me.colMenu.delay(0, $me, ev.page);
			}
		});

		this.tHead = new Element("table", {
			"cellpadding": 0,
			"cellspacing": 0
		}).inject(this.dHead);

		this.tb.head = new Element("tbody").inject(this.tHead);
		tr = simpleClone(TR, false);
		var nDrag = new Drag(tr, {
			"modifiers" : {"x": "left", "y": false},
			"snap" : 1,
			"onStart" : function(){ ColumnHandler.start($me, this); },
			"onDrag" : function(){ ColumnHandler.drag($me, this); },
			"onComplete" : function(){ ColumnHandler.end($me, this); },
/*			"onRightClick" : this.colMenu.bind(this),*/
			"onCancel" : function(_, ev) {
				this.detach();
				$me.cancelSort = false;
				if (!ev.isRightClick()) {
					if (this.element.tagName !== "TD")
						this.element = this.element.getParent("td");

					$me.sort(this.element, ev.shift, true);
				}
			}
		}).detach();
		tr.addEvents({
			"mousemove": function(ev) {
				var ele = ev.target;
				if (!ele || ele.tagName === "TR") return;
				if (ele.tagName !== "TD")
					ele = ele.getParent("td");

				if (ele.tagName === "TD")
					ColumnHandler.check.apply($me, [ev, ele]);
			},
			"mousedown": function(ev) {
				var ele = ev.target;
				if (!ele || ele.tagName === "TR") return;
				if (ele.tagName !== "TD")
					ele = ele.getParent("td");

				if (ele.tagName === "TD") {
					nDrag.element = nDrag.handles = ele;
					nDrag.attach().start(ev);
				}
			}
		});

		var len = this.cols;
		this.rowModel = simpleClone(TR, false);

		for (var i = 0; i < len; i++) {
			this.colOrder[i] = (typeOf(this.colOrder[i]) == 'number') ? this.colOrder[i].limit(0, len - 1) : i;
			this.colData[i] = this.colHeader[this.colOrder[i]];

			this.rowModel.grab(simpleClone(TD, false)
				.addClass(this.id + "-col-" + this.colOrder[i])
				.setStyle(
					badIE ? "visibility" : "display",
					badIE ? (this.colData[i].hidden ? "hidden" : "visible") : (this.colData[i].hidden ? "none" : "")
				)
			);

			td = simpleClone(TD, false)
				.grab(new Element("div#" + this.id + "-head-" + this.colData[i].id, {"text": this.colData[i].text}))
				.setStyles({"width": this.colHeader[i].width, "display": this.colData[i].hidden ? "none" : ""})
				.store("index", i)
				.inject(tr);

			this.tHeadCols[i] = td;
		}
		this.tb.head.grab(tr);

		this.dPad = simpleClone(DIV, false).addClass("stable-pad").inject(this.dBody);

		this.tBody = new Element("table", {
			"cellpadding": 0,
			"cellspacing": 0
		}).inject(this.dPad);

		var cg = new Element("colgroup").inject(this.tBody);
		for (var i = 0; i < len; i++) {
			this.tBodyCols[i] = new Element("col", {
				"styles": {
					"width": this.colHeader[i].width,
					"display": this.colData[i].hidden ? "none" : ""
				},
				"width": this.colHeader[i].width,
				"span": 1
			}).inject(cg);
		}
		this.tb.body = new Element("tbody");
		if (Browser.ie) {
			this.tb.body.addEvent("selectstart", function() {
				return false;
			});
		}

		this.colDragEle = null;
		this.colDragObj = simpleClone(DIV, false).addClass("stable-move-header").inject(this.dHead);
		this.colSep = simpleClone(DIV, false).addClass("stable-separator-header").inject(this.dHead);

		if (this.options.rowsSelectable) {
			this.dBody.addEvent("mousedown", function(ev) {
				var ele = ev.target;
				if (ele.get("tag") != "td")
					ele = ele.getParent("td");

				if (ele) {
					$me.selectRow(ev, ele.getParent());
				}

				if (Browser.ie9 && document.documentMode >= 9) { // allow scrollbars to work on IE9
					ContextMenu.hide();
					ev.stopPropagation();
				}
			}).addEvent("click", function(ev) {
				if (ev.control || ev.shift || ev.meta) return;

				var ele = ev.target;
				if (!(ele.get("tag") == "td" || ele.getParent("td"))) {
					var pos = this.getPosition();
					if ((this.clientWidth > ev.page.x - pos.x - this.scrollLeft + 2) && (this.clientHeight > ev.page.y - pos.y - this.scrollTop + 2)) {
						$me.clearSelection();
						$me.fireEvent.delay(0, $me, ["onSelect", [ev, ""]]);
					}
				}

				ev.preventDefault();
			}).addEvent("dblclick", function(ev) {
				if (ev.control || ev.shift || ev.meta) return;

				var ele = ev.target;
				if (ele.get("tag") != "td")
					ele = ele.getParent("td");

				if (ele) {
					$me.fireEvent("onDblClick", ele.getParent().id.replace($me.idprefix, ""));
				}

				ev.preventDefault();
			});
		}

		for (var i = 0; i < this.options.maxRows; i++)
			this.tb.body.appendChild(simpleClone(this.rowModel, true).hide());

		this.tBody.grab(this.tb.body);

		this.infoBar = simpleClone(DIV, false).addClass("stable-infobar").inject(this.dCont);

		this.filterBar = (new Element("span.filterbar")
			.appendText("Find:")
			.grab(new Element("a.filterbar-close", {href: "#"})
				.addStopEvent("click", this.hideFilterBar.bind(this))
			)
			.grab(new Element("input.filterbar-query")
				.addEvents({
					"keydown": (function(ev) {
						var key = eventToKey(ev).trim();

						switch (key) {
							case "delete":
								ev.stopPropagation();
							break;

							case "esc":
								this.hideFilterBar();
								ev.stop();
							break;
						}
					}).bind(this),

					"keyup": (function(ev) {
						this.applyFilter(ev.target.get("value"));
					}).bind(this)
				})
			)
			.inject(this.infoBar)
		);

		this.filterBarQueryInput = this.filterBar.getElement(".filterbar-query");

		if (this.options.refreshable) {
			this.infoBar.grab(new Element("div.refreshBtn")
				.grab(new Element("span.refreshIcon")
					.addEvent("click", function(ev) {
						if ($me.rows)
							$me.fireEvent("onRefresh");
					})
				)
			);
		}

		this.pageChanger = new Element("div.pageChanger").inject(this.infoBar);

		this.pagePrev = (new Element("a.prevlink.disabled")
			.addEvent("click", this.prevPage.bind(this))
			.inject(this.pageChanger)
		);

		this.pageSelect = (new Element("select.pageSelector")
			.addEvent("change", function() {
				$me.gotoPage(this.get("value").toInt());
			})
			.inject(this.pageChanger)
		);

		this.pageNext = (new Element("a.nextlink.disabled")
			.addEvent("click", this.nextPage.bind(this))
			.inject(this.pageChanger)
		);

		this.assignEvents();
		this.setAlignment();
	},

	"assignEvents": function() {
		this.lastScrollUp = false;
		this.lastScroll = 0;

		var dBody = this.dBody;

		//--------------------------------------------------

		var updateVirtual = (function() {
			var dScroll = dBody.scrollTop;
			if (this.lastScroll !== dScroll) {
				this.lastScrollUp = (dScroll < this.lastScroll);
				this.resizePads();
				this.lastScroll = dScroll;
			}
		}).bind(this);

		var badIE = (Browser.ie && Browser.version <= 7);
		var performScroll = (function(){
			try {
				this.dHead.scrollLeft = dBody.scrollLeft;

				if (this.options.mode === MODE_VIRTUAL) {
					if (badIE) {
						this.keepScroll(updateVirtual);
					}
					else {
						updateVirtual();
					}
				}
			}
			catch(e) {}

			this.isScrolling = false;
		}).bind(this);

		this.scrollEvent = (function() {
			if (this.isScrolling) return;
			this.isScrolling = true;

			performScroll.delay(0);

			return false;
		}).bind(this);

		dBody.addEvent("scroll", this.scrollEvent);

		//--------------------------------------------------

		if (this.options.rowsSelectable) {
			this.dBody.addEvent("mousedown", function(ev) {
				this.focus();
				try { document.activeElement = this; } catch(e) {}
			}).setProperty("tabIndex", -1);

			// Keyboard shortcuts
			var keyBindings = {
				"ctrl a": this.selectAll.bind(this),
				"ctrl e": this.unselectAll.bind(this),
				"ctrl f": this.showFilterBar.bind(this)
			};

			if (Browser.Platform.mac) {
				ctrlToMeta(keyBindings);
			}

			this.dCont.addStopEvent("keydown", function(ev) {
				var key = eventToKey(ev);
				if (keyBindings[key]) {
					keyBindings[key](ev);
				}
				else {
					return true;
				}
			});

			this.dCont.addEvent("keydown", (function(ev) {
				this.fireEvent("onKeyDown", ev);
			}).bind(this));
		}
	},

	"setAlignment": function() {
		var sb = "", cols = this.tBody.getElement("colgroup").getElements("col");
		var tbBody = this.tb.body, tbc = tbBody.childNodes, tbcCount = tbc.length;
		for (var i = 0, il = this.cols; i < il; ++i) {
			var align = "left";
			switch (this.colData[i].align) {
				case ALIGN_LEFT: break;
				case ALIGN_CENTER: align = "center"; break;
				case ALIGN_RIGHT: align = "right"; break;

				case ALIGN_AUTO:
				default:
					switch (this.colData[i].type) {
						case TYPE_NUM_ORDER:
						case TYPE_NUMBER: align = "right"; break;
						case TYPE_NUM_PROGRESS: align = "center"; break;
					}
			}

			this.tHeadCols[i].setStyle("textAlign", align);
			for (var j = 0; j < tbcCount; ++j) {
				tbc[j].childNodes[i].setStyle("textAlign", align);
			}
		}
	},

	"isValidCol": function(iCol, allowUpEdge) {
		return ($chk(iCol) && 0 <= iCol && (allowUpEdge ? iCol <= this.cols : iCol < this.cols));
	},

	"setColumnHidden": function(iCol, hidden) {
		if (!this.isValidCol(iCol)) return;

		var badIE = (Browser.ie && Browser.version <= 7);
		this.colData[iCol].hidden = hidden;
		this.tHeadCols[iCol].setStyle("display", hidden ? "none" : "");
		this.tBodyCols[iCol].setStyle("display", hidden ? "none" : "");
		var sname = badIE ? "visibility" : "display";
		var svalue = badIE ? (hidden ? "hidden" : "visible") : (hidden ? "none" : "");
		this.rowModel.childNodes[iCol].setStyle(sname, svalue); // update "model" row in case it's needed again (adding more rows)
		var tbc = this.tb.body.childNodes;
		for (var i = 0, il = tbc.length; i < il; i++)
			tbc[i].childNodes[iCol].setStyle(sname, svalue);
	},

	"setColumnPosition": function(iCol, iNew) {
		iCol = this.colOrder[iCol];
		if (iNew < 0 || iCol == iNew) return;

		// Move DOM elements around
		var headTarg = this.tHeadCols[iNew], headCol = this.tHeadCols[iCol];
		var bodyParent = this.tBody.getElement("colgroup"), bodyTarg = bodyParent.childNodes[iNew], bodyCol = bodyParent.childNodes[iCol].dispose();

		if (iNew == this.cols) {
			headCol.getParent().grab(headCol.dispose(), "bottom");
			bodyParent.grab(bodyCol, "bottom");

			this.rowModel.grab(this.rowModel.childNodes[iCol].dispose(), "bottom"); // update "model" row in case it's needed again (adding more rows)
			$each(this.tb.body.childNodes, function(row) {
				row.grab(row.childNodes[iCol].dispose(), "bottom");
			});
		}
		else {
			headCol.dispose().inject(headTarg, "before");
			bodyCol.inject(bodyTarg, "before");

			var cellTarg = this.rowModel.childNodes[iNew];
			this.rowModel.childNodes[iCol].dispose().inject(cellTarg, "before"); // update "model" row in case it's needed again (adding more rows)
			$each(this.tb.body.childNodes, function(row) {
				cellTarg = row.childNodes[iNew];
				row.childNodes[iCol].dispose().inject(cellTarg, "before");
			});
		}

		// Slide internal data structures around
		function slide(arr) { arr.splice(iNew - (iCol < iNew ? 1 : 0), 0, arr.splice(iCol, 1)[0]); }
		slide(this.tHeadCols);
		slide(this.tBodyCols);
		slide(this.colData);

		// Update column order
		this.colOrder = this.colHeader.map(function(item) {
			return this.colData.indexOf(item);
		}, this);
	},

	"getColumnWidths": function() {
		return this.colHeader.map(function(item) {
			return item.width;
		});
	},

	"setColumnWidth": function(iCol, iWidth) {
		if (!this.isValidCol(iCol)) return;

		var badIE = (Browser.ie && Browser.version <= 7);
		var minX = 32;//(this.tb.body.childNodes[0].childNodes[iCol].hasClass("stable-icon") ? 32 : 16);

		// Set column header width
		var colHead = this.tHeadCols[iCol];
		var offset = (colHead.offsetWidth - parseInt(colHead.style.width, 10)).max(0);

		if (iWidth < minX) {
			iWidth = minX;
		}

		colHead.setStyle("width", (iWidth - offset).max(0));

		// Set column body width
		this.tBodyCols[iCol].setStyle("width", iWidth - (badIE ? 10 : 0));

		// Set column header row width
		this.tBody.setStyle("width", this.tHead.getWidth());
		this.tb.body.setStyle("width", this.tHead.getWidth());

		// Store width
		this.colData[iCol].width = iWidth;
	},

	"setConfig": function(options) {
		// NOTE: The order in which these settings are applied may be important
		//       in some cases. Watch out for regressions if changes are required.

		var val, refresh = false;

		// Map column header IDs to indices
		var colHdr = this.colHeader;
		var colHdrIdx = colHdr.map(function(item, idx) {
			return idx;
		}).associate(colHdr.map(function(item) {
			return item.id;
		}));

		//--------------------------------------------------
		// COLUMN OPTIONS
		//--------------------------------------------------

		// -- Column "Reset" Text
		val = options.resetText; // string
		if (typeOf(val) === 'string') {
			this.resetText = val;
		}

		// -- Column Header Text
		val = options.colText; // { colID : colText, ... }
		if (typeOf(val) === 'object') {
			this.outOfDOM((function() {
				var ind, div, span;
				var thc = this.dHead.getElement("tr").childNodes;
				Object.each(val, function(v, k) {
					ind = colHdrIdx[k];
					if ($chk(colHdr[ind])) {
						div = thc[this.colOrder[ind]].getElement("div");
						span = div.getElement("span");
						if (span) span.dispose();
						div.set("html", v);
						if (span) div.grab(span);

						colHdr[ind].text = v;
					}
				}, this);
			}).bind(this));
		}

		// -- Column Type
		val = options.colType; // { colID : colType, ... }
		if (typeOf(val) === 'object') {
			var changedCols = [];
			Object.each(val, function(v, k) {
				ind = colHdrIdx[k];
				if ($chk(colHdr[ind]) && colHdr[ind].type != v) {
					changedCols.push(ind);
					colHdr[ind].type = v;
				}
			}, this);

			refresh = true;
		}

		// -- Column Alignment
		val = options.colAlign; // { colID : colAlign, ... }
		if (typeOf(val) === 'object') {
			Object.each(val, function(v, k) {
				ind = colHdrIdx[k];
				if ($chk(colHdr[ind])) {
					colHdr[ind].align = v;
				}
			}, this);

			this.setAlignment();
		}

		// -- Column Visibility
		val = options.colMask; // bitfield
		if (typeOf(val) === 'number') {
			this.outOfDOM((function() {
				for (var i = 0, bit = 1, len = this.cols; i < len; ++i, bit <<= 1) {
					this.setColumnHidden(this.colOrder[i], !!(val & bit));
				}
			}).bind(this));

			this.calcSize();

			refresh = true;
		}

		// -- Column Order
		val = options.colOrder; // [ colMIdx, colNIdx, ... ]
		if (typeOf(val) === 'array') {
			if (val.length == this.cols) {
				this.outOfDOM((function() {
					var orderOK = true, orderT = Array.clone(val).sort(function(a, b) { return (a-b); });
					for (var i = 0, l = orderT.length; i < l; ++i) {
						if (i != orderT[i]) {
							orderOK = false;
							break;
						}
					}

					if (orderOK) {
						Array.each(val, function(v, k, a) {
							if (a.indexOf(k) != this.colOrder.indexOf(k)) {
								this.setColumnPosition(a.indexOf(k), k);
							}
						}, this);
					}
				}).bind(this));
			}
		}

		// -- Column Width
		val = options.colWidth; // [ col1Width, col2Width, ... ]
		if (typeOf(val) === 'array') {
			if (val.length == this.cols) {
				this.outOfDOM((function() {
					Array.each(val, function(v, k) {
						this.setColumnWidth(this.colOrder[k], v);
					}, this);
				}).bind(this));
			}
		}

		// -- Column Sort
		val = options.colSort; // [colIdx, reverse]
		if (typeOf(val) === 'array') {
			this.outOfDOM((function() {
				if ($chk(val[1])) this.options.reverse = !!val[1];
				this.sort(val[0]);
			}).bind(this));
		}

		//--------------------------------------------------
		// ROW OPTIONS
		//--------------------------------------------------

		// -- Row Count
		val = parseInt(options.rowMaxCount, 10); // integer
		if (!isNaN(val) && (val >= 1)) {
			var tbBody = this.tb.body, tbcCount = tbBody.childNodes.length;

			this.outOfDOM((function() {
				while (tbcCount++ < val)
					tbBody.appendChild(simpleClone(this.rowModel, true).hide());
			}).bind(this));

			this.options.maxRows = val;
			this.curPage = 0;
			this.setAlignment();
			this.updatePageMenu();
			refresh = true;
		}

		// -- Row Color Alternation
		val = options.rowAlternate; // boolean
		if (typeOf(val) === 'boolean' && val !== this.options.alternateRows) {
			this.options.alternateRows = !!val;
			refresh = true;
		}

		// -- Row Mode
		val = parseInt(options.rowMode, 10); // integer
		if (!isNaN(val) && (val != this.options.mode)) {
			this.pageChanger.setStyle("display", (val == MODE_VIRTUAL ? "none" : "block"));

			this.options.mode = val;
			this.calcSize();
		}

		//--------------------------------------------------
		if (refresh) {
			this.refreshRows();
		}
	},

	"getCache": function(index) {
		if (!this.isValidCol(index)) return;
		if (this.rowCache.length != this.rows) {
			this.clearCache();
			this.rowCache = new Array(this.rows);
		}
		var c = 0;
		for (var key in this.rowData) {
			this.rowCache[c++] = {
				"key": key,
				"v": this.rowData[key].data[index]
			};
		}
	},

	"clearCache": function(a) {
		var len = this.rowCache.length;
		while (len--) {
			this.rowCache[len].key = null;
			this.rowCache[len].v = null;
			this.rowCache[len] = null;
		}
		this.rowCache.empty();
	},

	"sort": function(col, shift, revtoggle) {
		if (this.cancelSort) return;
		this.isSorting = true;
		var rev = true, simpleReverse = true;

		if (!$chk(col))
			col = this.sIndex;

		if (typeOf(col) == 'number') {
			if (!this.isValidCol(col)) return;

			col = this.tHeadCols[this.colOrder[col]];
			rev = !!this.options.reverse;
			simpleReverse = false;
		}

		if (col.get("tag") != "td")
			col = col.getParent("td");
		if (!$chk(col))
			return;

		var ind = col.retrieve("index");
		if (shift) { //secondary sorting
			if (ind == this.sIndex || !this.isValidCol(this.sIndex)) {
				this.secIndex = 0;
				return;
			}
			if (this.secIndex == ind) {
				this.secRev = 1 - this.secRev;
			} else {
				this.secRev = 0;
			}
			this.secIndex = ind;
			ind = this.sIndex;
			rev = false;
			col = this.tHeadCols[this.colOrder[ind]];
			simpleReverse = false;
		}

		if (rev && !!revtoggle)
			this.options.reverse = (this.sIndex == ind) ? !this.options.reverse : false;

		if ((this.sIndex != ind) || (this.rowCache.length != this.rows)) {
			simpleReverse = false;
			this.getCache(ind);
			if (this.isValidCol(this.sIndex))
				this.tHeadCols[this.colOrder[this.sIndex]].removeClass("sorted").getElements("span").destroy();
		}

		col.getElements("span").destroy();
		col.addClass("sorted").getElement("div").grab(
			new Element("span.sorticon." + ((this.options.reverse) ? "desc" : "asc"))
		);
		this.calcSize();

		this.sIndex = ind;
		if (!simpleReverse) {
			var colType = this.colHeader[ind].type;
			var comp = (TYPE_CUSTOM === colType ? this.sortCustomWrap(ind) : comp = this.cmp[colType]) || this.cmp.DEFAULT;

			this.rowCache.sort(comp);
		}

		this.clearActive();
		var end = this.rows, i = 0, diff = 1;
		if (this.options.reverse) {
			end = diff = -1;
			i = this.rows - 1;
		}
		while (i != end) {
			var key = this.rowCache[i].key;
			if (!this.rowData[key].hidden) {
				this.rowData[key].activeIndex = this.activeId.length;
				this.activeId.push(key);
			}
			this.rowData[key].index = i;
			i += diff;
		}
		if (this.options.mode == MODE_PAGE)
			this.pageCount = MATH_CEIL([this.activeId.visCount, this.activeId.length].pick() / this.options.maxRows);

		this.isSorting = false;

		this.curPage = 0;
		this.refreshRows();

		this.fireEvent("onSort", [this.sIndex, this.options.reverse]);
	},

	"cmp": {}, // map for compare functions, type -> function

	"sortCustomWrap": function(idx) {
		if (this.sortCustom) {
			if (!this.sortCustomCache) {
				this.sortCustomCache = [];
			}

			return this.sortCustomCache[idx] || (this.sortCustomCache[idx] =
				(function(x, y) {
					var r = this.sortCustom(idx, this.rowData[x.key].data, this.rowData[y.key].data);
					return (((r == 0) && (this.secIndex != this.sIndex)) ? this.sortSecondary(x, y) : r);
				}).bind(this)
			);
		}
	},

	"sortNumeric": function(x, y) {
		var r = Comparator.compareNumeric(x.v, y.v);
		return (((r == 0) && (this.secIndex != this.sIndex)) ? this.sortSecondary(x, y) : r);
	},

	"sortNumOrder": function(x, y) {
		var r = Comparator.compareNumeric(x.v, y.v);
		if (r != 0) {
			if (x.v == -1)
				r = 1;
			else if (y.v == -1)
				r = -1;
		}
		return (((r == 0) && (this.secIndex != this.sIndex)) ? this.sortSecondary(x, y) : r);
	},

	"sortAlphaNumeric": function(x, y) {
		var r = Comparator.compareAlphaNumeric(x.v, y.v);
		return (((r == 0) && (this.secIndex != this.sIndex)) ? this.sortSecondary(x, y) : r);
	},

	"sortSecondary": function(x, y) {
		var index = this.secIndex;
		if (!this.isValidCol(index)) return;
		var m = this.rowData[x.key].data[index];
		var n = this.rowData[y.key].data[index];
		var r = 0;
		switch (this.colHeader[index].type) {
			case TYPE_STRING:
				r = Comparator.compareAlphaNumeric(m, n);
			break;

			case TYPE_DATE:
			case TYPE_NUMBER:
			case TYPE_NUM_PROGRESS:
				r = Comparator.compareNumeric(m, n);
			break;

			case TYPE_NUM_ORDER:
				r = Comparator.compareNumeric(m, n);
				if (r != 0) {
					if (m == -1)
						r = 1;
					else if (n == -1)
						r = -1;
				}
			break;

			case TYPE_CUSTOM:
				if (this.sortCustom) {
					r = this.sortCustom(index, this.rowData[x.key].data, this.rowData[y.key].data);
					break;
				}

			default:
				r = Comparator.compare(m, n);
		}
		if (r == 0)
			r = this.rowData[x.key].index - this.rowData[y.key].index;
		if (this.options.reverse)
			r = -r;
		if (this.secRev)
			r = -r;
		return r;
	},

	"getActiveRange": function() {
		var max = this.options.maxRows, mni = 0, mxi = 0;
		if (this.options.mode == MODE_VIRTUAL) {
			mni = (this.activeId.length > 0 ? (MATH_FLOOR(this.tBody.offsetTop / this.tb.rowheight) || 0) : 0).min(this.activeId.length - max).max(0);
		} else {
			mni = max * this.curPage;
		}
		mxi = (mni + max - 1).min(this.activeId.length - 1).max(0);
		mni = mni.max(0);

		// Extend range if rows in "default" range are filtered out
		var actId = this.activeId, rData = this.rowData;
		var visCount = 0;

		for (var i = mni; i <= mxi; ++i) {
			var row = rData[actId[i]];
			if (row && !(row.hidden || row.filtOut)) {
				++visCount;
			}
		}
		for (var hi = this.activeId.length - 1; visCount < max && mxi < hi; ++mxi) {
			var row = rData[actId[mxi]];
			if (row && !(row.hidden || row.filtOut)) {
				++visCount;
			}
		}

		return (this.activeRange = [mni, mxi, visCount]);
	},

	"refreshRows": function() {
		if (this.__refreshRows_refreshing__) return;
		this.__refreshRows_refreshing__ = true;

		this.refresh();

		var range = this.getActiveRange(), count = filtCount = 0, tbc = this.tb.body.childNodes, altRows = this.options.alternateRows;
		var actId = this.activeId, rData = this.rowData;
		for (var i = range[0], il = range[1]; i <= il; i++) {
			var id = actId[i], row = rData[id], ele = tbc[count-filtCount];
			if (!(row && ele)) continue;

			row.rowIndex = count++ - filtCount;

			if (row.filtOut) {
				++filtCount;
				continue;
			}

			var clsName = "", clsChanged = false;
			if (has(this.rowSel, id))
				clsName += "selected";
			clsChanged = (clsName.test("selected") != ele.hasClass("selected"));
			if (altRows) {
				if ((i - filtCount) & 1) {
					clsName += " odd";
					clsChanged = clsChanged || !ele.hasClass("odd");
				} else {
					clsName += " even";
					clsChanged = clsChanged || !ele.hasClass("even");
				}
			}
			else {
				clsChanged = clsChanged || ele.hasClass("odd") || ele.hasClass("even");
			}
			if (clsChanged)
				ele.className = clsName.clean();

			var data = this.options.format(Array.clone(row.data));
			this.fillRow(ele, data);
			ele.setProperties({
				"title": data[0],
				"id": this.id + "-row-" + id
			}).show(true);
			this.setIcon(id, row.icon);
		}

		for (var i = count - filtCount, il = tbc.length; i < il; i++)
			tbc[i].setProperty("id", "").hide();

		if (Browser.ie && Browser.version <= 7) {
			// NOTE: This hack is needed for IE7 and below because it doesn't hide
			//       rows properly otherwise if the listview displays progressbars.
			this.outOfDOM(Function.from());
		}

		this.requiresRefresh = false;

		this.__refreshRows_refreshing__ = false;
	},

	"refresh": function() {
		if (this.isScrolling) return;
		this.updatePageMenu();
		this.dHead.setStyle("width", this.dBody.clientWidth);
		//if (this.options.mode == MODE_VIRTUAL)
		//	this.resizePads();
	},

	"selectRow": function(ev, row) {
		var id = row.id.replace(this.idprefix, "");
		if (!(ev.isRightClick() && has(this.rowSel, id))) {
			var multi = !!this.options.rowMultiSelect;
			var ctrl = ((Browser.Platform.mac && ev.meta) || (!Browser.Platform.mac && ev.control));

			if (multi && ev.shift) {
				if (this.stSel === null) {
					this.stSel = id;
					this.rowSel[id] = 0;
					this.selectedRows.push(id);
				} else {
					var la = this.rowData[this.stSel].activeIndex;
					var lb = this.rowData[id].activeIndex;
					var lo = la.min(lb);
					var hi = la.max(lb);
					this.selectedRows.empty();
					delete this.rowSel;
					this.rowSel = {};
					for (var i = lo; i <= hi; i++) {
						var key = this.activeId[i];
						this.rowSel[key] = this.selectedRows.length;
						this.selectedRows.push(key);
					}
				}
			} else if (multi && ctrl) {
				this.stSel = id;
				if (has(this.rowSel, id)) {
					this.selectedRows.splice(this.rowSel[id], 1);
					for (var i = this.rowSel[id], j = this.selectedRows.length; i < j; i++)
						this.rowSel[this.selectedRows[i]] = i;
					delete this.rowSel[id];
				} else {
					this.rowSel[id] = this.selectedRows.length;
					this.selectedRows.push(id);
				}
			} else {
				this.stSel = id;
				this.selectedRows.empty();
				delete this.rowSel;
				this.rowSel = {};
				this.rowSel[id] = 0;
				this.selectedRows.push(id);
			}

			if (this.selectedRows.length == 0)
				this.stSel = null;

			this.refreshSelection();
		}

		this.fireEvent.delay(0, this, ["onSelect", [ev, id]]);
	},

	"addRow": function(data, id, icon, hidden, sortin) {
		if (data.length != this.cols) return;
		id = id || (1000 + this.rows);
		this.rowData[id] = {
			"data": data,
			"icon": icon || "",
			"hidden": hidden || false,
			"index": -1,
			"rowIndex": -1,
			"activeIndex": -1
		};
		if ([sortin, true].pick())
			this._insertRow(id);
		this.rows++;
	},

	"_insertRow": function(id, skipOrderCheck) {
		var actId = this.activeId;
		var sIndex = this.sIndex;
		var reverse = this.options.reverse;

		var rCache = this.rowCache;
		var rData = this.rowData;
		var row = rData[id];
		var index;

		if (this.isValidCol(sIndex)) {
			if (!skipOrderCheck) {
				var item = { "key": id, "v": row.data[sIndex] };
				var min = 0, max = rCache.length, rIndex = row.index;

				var colType = this.colHeader[sIndex].type;
				var comp = (TYPE_CUSTOM === colType ? this.sortCustomWrap(sIndex) : comp = this.cmp[colType]) || this.cmp.DEFAULT;

				if (rIndex >= 0) {
					if ((rIndex != 0) && (comp(item, rCache[rIndex - 1]) < 0)) {
						max = rIndex + 1;
					}
					else if ((rIndex < rCache.length - 1) && (comp(item, rCache[rIndex + 1]) > 0)) {
						min = rIndex;
					}
				}

				index = rCache.binarySearch(item, comp, min, max);

				if (index < 0) {
					index = -(index + 1);
				}

				if (index == rIndex) {
					rCache[index].v = item.v;
					item = item.key = item.v = null;
				}
				else {
					if (rIndex >= 0) {
						if (rIndex < index) {
							index--;
						}

						rCache.splice(rIndex, 1);
					}

					rCache.splice(index, 0, item);

					if (rIndex == -1) {
						for (var i = index, j = rCache.length; i < j; i++) {
							rData[rCache[i].key].index = i;
						}
					}
					else {
						var lo = rIndex, hi = index;
						if (index < rIndex) {
							lo = index; hi = rIndex;
						}

						for (var i = lo; i < max; i++) {
							rData[rCache[i].key].index = i;
						}
					}
				}
			}
			if (row.activeIndex != -1) {
				actId.splice(row.activeIndex, 1);
				row.rowIndex = row.activeIndex = -1;

				for (var i = 0, j = actId.length; i < j; i++) {
					rData[actId[i]].activeIndex = i;
				}

				if (row.hidden) {
					this.requiresRefresh = true;
				}
			}
			if (!row.hidden) {
				index = actId.binarySearch(id, (reverse
					? function(idA, idB) { return rData[idB].index - rData[idA].index; }
					: function(idA, idB) { return rData[idA].index - rData[idB].index; }
				));

				if (index < 0) {
					index = -(index + 1);
				}

				actId.splice(index, 0, id);
				for (var i = index, j = actId.length; i < j; i++) {
					rData[actId[i]].activeIndex = i;
				}

				var range = (this.activeRange || this.getActiveRange());
				if ((range[0] <= index) && (index <= range[1])) {
					row.rowIndex = (index - range[0]);
					this.requiresRefresh = true;
				}
			}
		}
		else {
			if (row.hidden) {
				index = row.activeIndex;

				if (index != -1) {
					row.activeIndex = -1;
					actId.splice(index, 1);

					for (var i = index, j = actId.length; i < j; i++) {
						rData[actId[i]].activeIndex = i;
					}

					this.requiresRefresh = true;
				}
			}
			else {
				if (row.activeIndex == -1) {
					index = row.activeIndex = actId.length;
					actId.push(id);

					var range = (this.activeRange || this.getActiveRange());
					if ((range[0] <= index) && (index <= range[1])) {
						this.requiresRefresh = true;
					}
				}
			}
		}

		if (this.options.mode == MODE_PAGE) {
			this.pageCount = MATH_CEIL(actId.length / this.options.maxRows);
		}
	},

	"clearActive": function() {
		var actId = this.activeId, rData = this.rowData
		for (var i = 0, j = this.activeId.length; i < j; i++) {
			rData[actId[i]].activeIndex = -1;
		}
		this.activeId.empty();
	},

	"requiresRefresh": false,

	"fillRow": function(row, data) {
		var rowc = row.childNodes;
		var colh = this.colHeader;
		this.colOrder.each(function(v, k) {
			switch (colh[k].type) {
				case TYPE_DATE:
					rowc[v].set("text", (data[k] > 0 ? new Date(data[k]).toISOString() : ""));
				break;

				case TYPE_NUM_PROGRESS:
					rowc[v].set("html", "").grab(progressBar(parseFloat(data[k]) || 0));
				break;

				default:
					if (colh[k].icon) {
						rowc[v].set("html", "").grab(
							simpleClone(DIV, false).grab(
								simpleClone(SPAN, false).set("class", "icon")
							).appendText(data[k])
						);
					}
					else {
						rowc[v].set("text", data[k]);
					}
			}
		});
	},

	"isDetached": false,

	"detachBody": function() {
		if (this.isDetached) return;
		this.tb.body.dispose();
		this.isDetached = true;
	},

	"attachBody": function() {
		if (!this.isDetached) return;
		this.tBody.grab(this.tb.body);
		this.isDetached = false;
	},

	"removeRow": function(id) {
		var rd = this.rowData[id], row;
		if (rd == null) return;
		if (row = $(id))
			row.setProperty("id", "");
		var index = rd.activeIndex;
		if (index != -1) {
			this.activeId.splice(index, 1);
			for (var i = index, j = this.activeId.length; i < j; i++)
				this.rowData[this.activeId[i]].activeIndex = i;
			if (this.options.mode == MODE_PAGE) {
				this.pageCount = MATH_CEIL([this.activeId.visCount, this.activeId.length].pick() / this.options.maxRows);
				if (this.curPage > this.pageCount)
					this.curPage--;
			}
			this.requiresRefresh = true;
		}
		if (has(this.rowSel, id)) {
			index = this.rowSel[id];
			this.selectedRows.splice(index, 1);
			for (var i = index, j = this.selectedRows.length; i < j; i++)
				this.rowSel[this.selectedRows[i]] = i;
			delete this.rowSel[id];
		}
		if (this.sIndex >= 0) {
			this.rowCache.splice(rd.index, 1);
			for (var i = rd.index, j = this.rowCache.length; i < j; i++)
				this.rowData[this.rowCache[i].key].index = i;
		}
		if (this.stSel == id)
			this.stSel = null;
		rd = null;
		delete this.rowData[id];
		this.rows--;
		this.refresh();
	},

	"clearRows": function(keepMeta) {
		if (this.rows <= 0) return;

		this.stSel = null;
		this.clearCache();

		Array.each(this.tb.body.rows, function(row) {
			Array.each(row.cells, function(cell) {
				cell.set("html", "");
			});
			row.setProperty("id", "").hide();
		});
		delete this.rowData;
		this.rowData = {};
		this.rows = this.curPage = this.pageCount = 0;
		this.activeId.empty();

		if (!keepMeta) {
			this.resetScroll();
			this.resizePads();

			delete this.rowSel;
			this.rowSel = {};
			this.selectedRows.empty();
		}

		this.updatePageMenu();
	},

	"calcRowHeight": function() {
		var dummy = simpleClone(this.rowModel, true);
		dummy.children[0].set("html", "&nbsp;");
		this.tb.body.appendChild(dummy);

		this.tb.rowheight = (
			dummy.getDimensions({computeSize: true}).totalHeight || dummy.getDimensions().height
		);

		dummy.destroy();

		return this.tb.rowheight;
	},

	"calcSize": function() {
		var showPC = (this.options.mode == MODE_PAGE);
		if (showPC) {
			this.pageChanger.show();
		}
		else {
			this.pageChanger.hide();
		}

		var showFBC = !(showPC || this.options.refreshable);
		var showIB = (!showFBC || this.filterShow);
		if (showIB) {
			this.infoBar.show();

			if (showFBC) {
				(this.filterBar
					.setStyle("paddingLeft", "20px")
					.getElement("a.filterbar-close").show()
				);
			}
			else {
				(this.filterBar
					.setStyle("paddingLeft")
					.getElement("a.filterbar-close").hide()
				);
			}
		}
		else {
			this.infoBar.hide();
		}

		this.dBody.setStyles({
			"height": (this.dCont.clientHeight - this.dHead.offsetHeight - (showIB ? this.infoBar.offsetHeight : 0)),
			"width": (this.dCont.offsetWidth - 2).max(0)
		});

		this.dHead.setStyle("width", this.dBody.clientWidth);

		this.calcRowHeight();

		if (!this.isResizing) {
			for (var i = 0, j = this.cols; i < j; i++) {
				if (this.colData[i].hidden) continue;

				var offset = (this.tHeadCols[i].offsetWidth - parseInt(this.tHeadCols[i].style.width, 10)).max(0);
				this.tHeadCols[i].setStyle("width", (this.colData[i].width - offset).max(offset))
			}
		}

		this.tBody.setStyle("width", this.tHead.getWidth());
	},

	"hideRow": function(id) {
		this.rowData[id].hidden = true;
		this.rowData[id].rowIndex = -1;
		this._insertRow(id, true);
	},

	"unhideRow": function(id) {
		this.rowData[id].hidden = false;
		this._insertRow(id, true);
	},

	"refreshSelection": function() {
		if (!this.options.rowsSelectable) return;
		var idprefix = this.idprefix;
		var tbc = this.tb.body.childNodes;
		for (var i = 0, il = tbc.length; i < il; ++i) {
			if (has(this.rowSel, tbc[i].id.replace(idprefix, ""))) {
				tbc[i].addClass("selected");
			}
			else {
				tbc[i].removeClass("selected");
			}
		}
	},

	"clearSelection": function(noRefresh) {
		if (this.selectedRows.length == 0) return;
		this.selectedRows.empty();
		delete this.rowSel;
		this.rowSel = {};
		this.stSel = null;
		if (!noRefresh)
			this.refreshSelection();
	},

	"fillSelection": function(noRefresh) {
		var actId = this.activeId, rData = this.rowData;

		this.selectedRows = [];
		for (var i = 0, j = actId.length; i < j; ++i) {
			var row = rData[actId[i]];
			if (row && !(row.hidden || row.filtOut)) {
				this.selectedRows.push(actId[i]);
			}
		}
		for (var i = 0, j = this.selectedRows.length; i < j; ++i)
			this.rowSel[this.selectedRows[i]] = i;
		if (!noRefresh)
			this.refreshSelection();
	},

	"copySelection": function(delim) {
		delim = [delim, "\t"].pick();

		var selCols = this.colOrder.map(function(idx) {
			if (!this.colHeader[idx].hidden) return idx;
		}, this).clean();

		return (
			selCols.map(function(idx) { return this.colHeader[idx].text; }, this).join(delim) + "\r\n" +
			this.getSortedSelection().map(function(id) {
				var data = Array.clone(this.rowData[id].data);
				return selCols.map(function(idx) {
					return this.options.format(data, idx);
				}, this).join(delim);
			}, this).join("\r\n")
		);
	},

	"getSortedSelection": function() {
		var rowIdx = Object.map(this.rowData, function(r) { return r.activeIndex; });

		return Array.clone(this.selectedRows).sort(function(x, y) {
			// Sort according to the table's logical row order
			if (rowIdx[x] < rowIdx[y]) return -1;
			if (rowIdx[y] < rowIdx[x]) return 1;
			return 0;
		}, this);
	},

	"matchFilter": function(id) {
		var row = this.rowData[id];
		if (!row) return false;

		if (!this.filterQuery) return true;

		for (var i = 0, il = this.colFilter.length; i < il; ++i) {
			if (String(row.data[this.colFilter[i]]).toLowerCase().indexOf(this.filterQuery) >= 0) {
				return true;
			}
		}

		return false;
	},

	"applyFilter": function(query) {
		if (typeof(query) === 'undefined') {
			query = this.filterQuery;
		}

		if (!query) {
			this.resetFilter();
		}
		else {
			this.filterQuery = query.toLowerCase();

			var visCount = 0;
			var rData = this.rowData;
			for (var id in rData) {
				var row = rData[id];
				if (row && !row.hidden) {
					row.filtOut = !this.matchFilter(id);
					if (!row.filtOut) ++visCount;
				}
			}
			this.activeId.visCount = visCount;

			this.refreshRows();
			this.resizePads();
		}
	},

	"resetFilter": function() {
		this.filterQuery = null;

		var rData = this.rowData;
		for (var id in rData) {
			var row = rData[id];
			if (row && !row.hidden) row.filtOut = false;
		}
		this.activeId.visCount = this.activeId.length;

		this.refreshRows();
	},

	"hideFilterBar": function() {
		this.filterShow = false;
		this.calcSize();

		this.filterBarQueryInput.blur();
		this.filterBarQueryInput.set("value", "");

		this.dBody.focus();
		try { document.activeElement = this.dBody; } catch(e) {}

		this.resetFilter();
	},

	"showFilterBar": function() {
		this.filterShow = true;
		this.calcSize();

		this.filterBarQueryInput.focus();
		this.filterBarQueryInput.select();

		try { document.activeElement = this.filterBarQueryInput; } catch(e) {}
	},

	"selectAll": function(ev) {
		if (this.options.rowMultiSelect) {
			this.clearSelection();
			this.fillSelection();
			this.fireEvent("onSelect", ev);
		}
	},

	"unselectAll": function(ev) {
		this.clearSelection();
		this.fireEvent("onSelect", ev);
	},

	"updateCell": function(id, col, data) {
		var row = this.rowData[id];
		if (row == null) return;
		data = (data || row.data);
		var isSortedCol = ((this.sIndex >= 0) && (col == this.sIndex));
		var hasSortedChanged = ((row.data[col] != data[col]) && isSortedCol);
		row.data[col] = data[col];
		if (isSortedCol)
			this._insertRow(id);
		if (this.requiresRefresh || row.hidden || (row.rowIndex == -1) || !$(this.id + "-row-" + id)) return hasSortedChanged;
		var r = this.tb.body.childNodes[row.rowIndex], cell = r.childNodes[this.colOrder[col]], fval = this.options.format(Array.clone(data), col);
		switch (this.colHeader[col].type) {
			case TYPE_DATE:
				cell.set("text", (fval > 0 ? new Date(fval).toISOString() : ""));
			break;

			case TYPE_NUM_PROGRESS:
				cell.set("html", "").grab(progressBar(parseFloat(fval) || 0));
			break;

			default:
				if (this.colHeader[col].icon) {
					cell.set("html", "").grab(
						simpleClone(DIV, false).grab(
							simpleClone(SPAN, false).set("class", "icon")
						).appendText(fval)
					);
				}
				else {
					cell.set("text", fval);
				}
		}
		return hasSortedChanged;
	},

	"setIcon": function(id, icon) {
		var row = this.rowData[id];
		if (!row || (row.rowIndex < 0) || !$(this.id + "-row-" + id)) return;

		var r = this.tb.body.childNodes[row.rowIndex];
		var rc = r.childNodes;
		var oldicon = r.retrieve("icon");

		var col;
		for (var i = 0, il = this.colIcon.length; i < il; ++i) {
			var curcol = this.colOrder[this.colIcon[i]];
			if (this.colHeader[this.colIcon[i]].icon) {
				rc[curcol].removeClass(oldicon).removeClass("stable-icon");
				if (col === undefined && !this.colHeader[i].hidden) {
					col = curcol;
				}
			}
		}

		if (col === undefined || this.colHeader[col].hidden) {
			col = this.colOrder[0];
		}

		if (icon) {
			icon = icon.trim();
			rc[col].addClass("stable-icon").addClass(icon);
		}

		r.store("icon", icon);
		row.icon = icon;
	},

	"resizeTo": function(w, h) {
		var style = {};
		if (typeof(w) !== 'number' || w > 0)
			style.width = w;
		if (typeof(h) !== 'number' || h > 0)
			style.height = h;

		this.isResizing = true;
		this.dCont.setStyles(style);
		this.calcSize();
		this.isResizing = false;
	},

	"scrollTo": function(id) {
		var actId = this.activeId, rData = this.rowData;
		var sRow = rData[id];

		if (sRow && !(sRow.hidden || sRow.filtOut)) {
			var visIdx = 0;
			for (var i = 0, il = actId.length; i < il && actId[i] != id; ++i) {
				var row = rData[actId[i]];
				if (row && !(row.hidden || row.filtOut)) {
					++visIdx;
				}
			}

			this.dBody.scrollTop = (visIdx * this.tb.rowheight);
		}
	},

	"colMenu": function(coords) {
		ContextMenu.clear();
		this.colHeader.each(function(col, idx) {
			var opts = [col.text, this.toggleColumn.bind(this, idx)];
			if (!col.hidden)
				opts.unshift(CMENU_CHECK);
			ContextMenu.add(opts);
		}, this);
		if (this.resetText) {
			ContextMenu.add([CMENU_SEP]);
			ContextMenu.add([this.resetText, (function() {
				this.fireEvent("onColReset");
				this.scrollEvent();
			}).bind(this)]);
		}
		ContextMenu.show(coords);
	},

	"toggleColumn": function(index) {
		var hide = !this.colHeader[index].hidden;
		this.setColumnHidden(this.colOrder[index], hide);
		this.calcSize();
		this.fireEvent("onColToggle", [index, hide]);
		this.refreshRows(); // makes sure icons are properly shown
		return true;
	},

	"resizePads": function() {
		var resized = false;

		this.noScrollEvent((function() {
			switch (this.options.mode) {
				case MODE_PAGE:
					this.dPad.setStyle("height", 0);
					this.tBody.setStyle("top", 0);
				break;

				case MODE_VIRTUAL:
					var rHeight = this.tb.rowheight;
					var pHeight = [this.activeId.visCount, this.activeId.length].pick() * rHeight;
					var tHeight = (this.options.maxRows * rHeight).min(pHeight);

					var top = this.dBody.scrollTop;
					var tHiddenHeight = tHeight - this.dBody.clientHeight;

					top -= (top % tHiddenHeight);

					if (top + tHeight > pHeight) {
						top  = pHeight - tHeight;
					}
					top = top.max(0) || 0;

					resized = !(
						(this.__resizePads_prevTop__ === top) &&
						(this.__resizePads_prevHeight__ === pHeight)
					);
					this.__resizePads_prevTop__ = top;
					this.__resizePads_prevHeight__ = pHeight;

					this.dPad.setStyle("height", pHeight);
					this.tBody.setStyles({
						"paddingBottom": (pHeight <= 0 ? 1 : undefined), // Prevent horizontal scrollbar from disappearing
						"top": top
					});
				break;
			}

			if (resized || this.requiresRefresh) {
				this.applyFilter();
			}
		}).bind(this));

		return resized;
	},

	"resetScroll": function() {
//		if (this.options.mode != MODE_VIRTUAL) return;
		this.noScrollEvent((function() {
			this.lastScrollUp = false;
			++this.dBody.scrollTop; --this.dBody.scrollTop;
			this.dBody.scrollTop = this.lastScroll = 0;
			if (this.activeId.length > 0) {
				this.resizePads();
			}
		}).bind(this));
	},

	"restoreScroll": function() {
//		if (this.options.mode != MODE_VIRTUAL) return;
		this.noScrollEvent((function() {
			if (this.activeId.length > 0) {
				this.resizePads();
			}
			++this.dBody.scrollTop; --this.dBody.scrollTop;
			this.dBody.scrollTop = this.lastScroll || 0;
		}).bind(this));
	},

	"keepScroll": function(fn) {
		if (typeof(fn) !== 'function') return;

		this.noScrollEvent((function() {
			var up = this.lastScrollUp;
			var top = this.dBody.scrollTop;
			fn();
			this.lastScrollUp = up;
			this.dBody.scrollTop = this.lastScroll = top;
		}).bind(this));
	},

	"noScrollEvent": function(fn) {
		if (typeof(fn) !== 'function') return;

		if (this.__noScrollEvent_removed__) {
			// NOTE: We don't want to inadvertently restore the scroll events in
			//       the case that noScrollEvent() is called several times in
			//       some nested call stack.
			fn();
		}
		else {
			this.__noScrollEvent_removed__ = true;
			this.dBody.removeEvents("scroll", this.scrollEvent);

			fn();

			this.dBody.addEvent("scroll", this.scrollEvent);
			this.__noScrollEvent_removed__ = false;
		}
	},

	"outOfDOM": function(fn) {
		if (typeof(fn) !== 'function') return;

		if (this.__outOfDOM_removed__) {
			// NOTE: We don't want to inadvertently restore the elements in the
			//       case that outOfDOM() is called several times in some nested
			//       call stack.
			fn();
		}
		else {
			this.__outOfDOM_removed__ = true;
			this.dBody.dispose();

			fn();

			this.dBody.inject(this.dCont);
			this.__outOfDOM_removed__ = false;
		}
	},

	"updatePageMenu": function() {
		if (this.options.mode != MODE_PAGE) {
			this.pageCount = 0;
		}
		else {
			this.pageCount = MATH_CEIL([this.activeId.visCount, this.activeId.length].pick() / this.options.maxRows);
		}

		if (this.curPage >= this.pageCount)
			this.curPage = this.pageCount - 1;

		if (this.curPage > 0)
			this.pagePrev.removeClass("disabled");
		else
			this.pagePrev.addClass("disabled");

		if (this.curPage < this.pageCount - 1)
			this.pageNext.removeClass("disabled");
		else
			this.pageNext.addClass("disabled");

		this.pageSelect.options.length = 0;
		this.pageSelect.set("html", "");
		if (this.pageCount <= 1) {
			this.pageSelect.disabled = true;
			return;
		}
		this.pageSelect.disabled = false;
		for (var i = 0; i < this.pageCount; i++) {
			this.pageSelect.options[i] = new Option(i + 1, i);
			if (i == this.curPage)
				this.pageSelect.options[i].selected = true;
		}
	},

	"gotoPage": function(i) {
		if (this.curPage == i) return;
		this.curPage = i;
		var range = this.getActiveRange();
		for (var j = range[0]; j <= range[1]; j++)
			this.rowData[this.activeId[j]].rowIndex = -1;
//		this.updatePageMenu(); // handled in this.refreshRows() call to this.refresh()
		this.refreshRows();
	},

	"prevPage": function() {
		if (this.curPage > 0)
			this.gotoPage(this.curPage - 1);
	},

	"nextPage": function() {
		if (this.curPage < this.pageCount - 1)
			this.gotoPage(this.curPage + 1);
	}

});

var ColumnHandler = {

	"check": function(ev, cell) {
		if (this.isResizing) return;
		var x = ev.page.x - cell.getPosition().x;
		var i = this.colOrder[cell.retrieve("index")];

		if ((x <= 4) && (i > 0)) { // resizing, mouse slightly to right of resize grip
			// Skip hidden columns...
			var j = i - 1;
			while (j >= 0 && this.colData[j].hidden) --j;
			if (j >= 0) {
				x += cell.offsetWidth;
				i = j;
			}
		}

		if (x >= cell.offsetWidth - 6) { // resizing, mouse slightly to left of resize grip
			this.hotCell = i;
			cell.setStyle("cursor", "e-resize");
		} else { // reordering
			this.hotCell = -1;
			cell.setStyle("cursor", "default");
		}
	},

	"start": function initColAct(st, drag) {
		st.cancelSort = true; // just to be sure
		if (st.hotCell != -1) { // resizing
			var col = st.tHeadCols[st.hotCell];
			var w = col.getWidth();
			var left = col.getPosition(st.dCont).x + w + st.dBody.scrollLeft;
			st.resizeCol = {"width": col.getStyle("width").toInt(), "left": left};
			drag.value.now.x = left;
			drag.mouse.pos.x = drag.mouse.start.x - left;
			st.cancelMove = true;
			st.isResizing = true;
			st.colDragEle = drag.element;
			drag.limit.x = [];
			drag.options.limit = true;
		} else { // reordering
			var left = drag.element.getPosition(st.dCont).x + st.dBody.scrollLeft - ((Browser.firefox && Browser.version >= 3) ? 4 : 0);
			drag.value.now.x = left;
			drag.mouse.pos.x = drag.mouse.start.x - left;
			st.colDragObj.set("html", drag.element.get("text")).setStyles({
				  "visibility": "visible"
				, "left": left
				, "width": drag.element.getStyle("width").toInt()
				, "textAlign": drag.element.getStyle("textAlign")
			});

			st.colDragEle = drag.element;
			drag.element = drag.handle = st.colDragObj;
			st.cancelMove = false;
			st.colMove = { "from": st.colDragEle.retrieve("index"), "to": -1 };
			document.body.setStyle("cursor", "move");
		}
	},

	"drag": function(st, drag) {
		if (st.cancelMove) { // resizing
			var colHead = st.tHeadCols[st.hotCell];
			var w = drag.value.now.x - st.resizeCol.left + st.resizeCol.width + (colHead.offsetWidth - parseInt(colHead.style.width, 10));
			drag.limit.x[0] = colHead.getPosition(st.dCont).x + st.dBody.getScrollLeft();
//			colHead.setStyle("width", w.max(14));
//			st.setColumnWidth(st.hotCell, colHead.getWidth());
			st.setColumnWidth(st.hotCell, w);
			$(document.body).setStyle("cursor", "e-resize");
		} else { // reordering
			var i = 0, x = drag.mouse.now.x;
			while ((i < st.cols) && (st.colData[i].hidden || ((st.tHeadCols[i].getLeft() + (st.tHeadCols[i].getWidth() / 2)) < x))) ++i;

			if (i >= st.cols) {
				i = st.cols;
				st.colSep.setStyle("left", st.tHeadCols[i - 2].offsetLeft + st.tHeadCols[i - 2].getWidth() - 1);
			} else {
				st.colSep.setStyle("left", st.tHeadCols[i].offsetLeft);
			}
			st.colSep.setStyle("visibility", "visible");
			st.colMove.to = i;
		}
	},

	"end": function(st, drag) {
		drag.element = drag.handle = st.colDragEle;
		st.colDragEle = null;
		if (st.isResizing) { // resizing
			st.isResizing = false;
//			st.setColumnWidth(st.hotCell, st.tHeadCols[st.hotCell].getWidth());
			st.fireEvent("onColResize");
			document.body.setStyle("cursor", "default");
			drag.options.limit = false;
		} else { // reordering
			st.colDragObj.setStyles({"left": 0, "width": 0, "visibility": "hidden"});
			st.colSep.setStyle("visibility", "hidden");
			document.body.setStyle("cursor", "default");
			st.setColumnPosition(st.colMove.from, st.colMove.to);
			st.cancelSort = false;
			st.fireEvent("onColMove");
		}
		st.cancelSort = false;
	}

};

var Comparator = {

	"compare": function(x, y) {
		var a = '' + x, b = '' + y;
		return (a < b) ? -1 :
			   (a > b) ? 1 : 0;
	},

	"compareNumeric": function(x, y) {
		return (parseFloat(x) - parseFloat(y));
	},

	"compareAlphaNumeric": function(x, y) {
		var a = ('' + x).toLowerCase(), b = ('' + y).toLowerCase();
		return (a < b) ? -1 :
			   (a > b) ? 1 : 0;
	}

};
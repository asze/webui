/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

//==============================================================================
// LOGGER
//==============================================================================

var Logger = {

	"element": null,
	"log_date": false,

	"init": function(ele) {
		this.element = document.id(ele);
	},

	"log": function() {
		if (!this.element) return;

		var time = (new Date()).format((this.log_date ? "%Y-%m-%d " : "") + "%H:%M:%S")
		var text = Array.from(arguments).join(" ");

		this.element.grab(new Element("p")
			.grab(new Element("span.timestamp", {"text": "[" + time + "] "}))
			.appendText(text)
		);

		this.scrollBottom();
	},

	"scrollBottom": function() {
		if (!this.element) return;
		this.element.scrollTo(0, this.element.getScrollSize().y)
	},

	"setLogDate": function(log_date) {
		this.log_date = !!log_date;
	}

};

//==============================================================================
// OVERLAY
//==============================================================================

var Overlay = {

	"element": null,
	"msgBody": null,

	"init": function(ele) {
		this.element = document.id(ele);
		this.msgBody = this.element.getElement(".msg");
	},

	"err": function(err) {
		var errArr = [];
		switch (typeof(err)) {
			case 'object':
				for (var prop in err) {
					errArr.push(prop.toUpperCase() + ' : ' + err[prop]);
				}
			break;

			default:
				errArr.push(err);
		}

		this.msg(
			'<p>An error has occurred.</p>' +
			'<textarea readonly="readonly" class="error">' + (new Element("p", { "text": errArr.join('\n\n') })).get("html") + '</textarea>' +
			'<p>Try <a href="#" onclick="window.location.reload(true);">reloading</a> the page.</p>'
		);
	},

	"hide": function() {
		if (!this.element) return;
		this.element.hide();
	},

	"msg": function(html) {
		if (!this.msgBody) return;

		if (typeOf(html) === 'element') {
			this.msgBody.clear().grab(html);
		}
		else {
			this.msgBody.set("html", html);
		}

		this.show();
	},

	"show": function() {
		if (!this.element) return;
		this.element.show();
	},

	"visible": function() {
		if (!this.element) return false;
		return (this.element.getStyle("display").trim().toLowerCase() !== "none");
	}

};

//==============================================================================
// BROWSER LOGGING
//==============================================================================

(function(global) {

	global.log = function() {
		Logger.log.apply(Logger, arguments);
	};

	//--------------------------------------------------------------------------
	// GLOBAL ERROR HANDLER
	//--------------------------------------------------------------------------

	global.onerror = function(msg, url, linenumber) {
		log("JS error: [" + url.split("/").slice(-1)[0] + ":" + linenumber + "] " + msg);
		//return true;
	};

	//--------------------------------------------------------------------------
	// CONSOLE OBJECT
	//--------------------------------------------------------------------------

	var console = (global.console || {});

	// -- Logging

	if (!console.log) { console.log = global.log; }
	if (!console.info) { console.info = global.log; }
	if (!console.warn) { console.warn = global.log; }
	if (!console.error) { console.error = global.log; }
	if (!console.debug) { console.debug = global.log; }

	// -- Assertions

	if (!console.assert) {
		console.assert = function() {
			if (!arguments[0]) {
				throw new Error(arguments[1]);
			}
		};
	}

	// -- Timer

	var timers = {};

	if (!console.time) {
		console.time = function(name) {
			if (name) {
				timers[name] = Date.now();
			}
		};
	}

	if (!console.timeEnd) {
		console.timeEnd = function(name) {
			if (timers.hasOwnProperty(name)) {
				console.log(name + ": " + (Date.now() - timers[name]) + "ms");
				delete timers[name];
			}
		};
	}

	// -- Counter

	var counts = {}

	if (!console.count) {
		console.count = function(name) {
			if (name) {
				if (!counts[name]) {
					counts[name] = 0;
				}

				console.log(name + ": " + (++counts[name]));
			}
		};
	}

	// -- Export the console object

	if (!global.console) { global.console = console; }

})(this);

/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Skedat torrent||*.torrent||Gjithë skedat (*.*)||*.*||"
	, "OK"
	, "Anulo"
	, "Zbato"
	, "Po"
	, "Jo"
	, "Mbyll"
	, "Pëlqimet"
	, "Gjuha"
	, "Gjuha:"
	, "Privatësi"
	, "Verifiko automatikisht ridatimet"
	, "Ridatohu në versionet beta"
	, "Dërgo informacione anonime kur verifikon ridatimet"
	, "Gjatë Shkarkimit"
	, "Shto .!ut te skedat e papërfunduara"
	, "Paradepozito gjithë skedat"
	, "Parandalo standby kur ka torrente aktive"
	, "Mundësitë e Shfaqjes"
	, "Mirato fshirjen e torrenteve"
	, "Miratoj fshirjen e gjurmuesve"
	, "Tregoj tabelën e miratimit në dalje"
	, "Ndërro ngjyrën e sfondit të listës"
	, "Trego shpejtësinë aktuale në shiritin e titullit"
	, "Tregoj kufijtë e shpejtësisë në brez"
	, "Kur Shtoj Torrentet"
	, "Mos nis të autoshkarkosh"
	, "Aktivizoj dritaren e programit"
	, "Tregoj një dritare që shfaq skedat brenda torrentit"
	, "Veprimet e Klikimit të Dyfishtë"
	, "Për mbjelljen e torrenteve:"
	, "Për shkarkimin e torrenteve:"
	, "Vendndodhja e Skedave të Shkarkuara"
	, "Vendosi shkarkesat e reja në:"
	, "Gjithmonë trego tabelën e shtimit"
	, "Lëvizi shkarkesat e përfunduara në:"
	, "Shto edhe etiketën e torrentit"
	, "Lëvizi vetëm nga direktoria tipike e shkarkimit"
	, "Vendndodhja e .torrenteve"
	, "Depozitoji .torrentet në:"
	, "Lëvizi .torrentet për punët e përfunduara në:"
	, "Automatikisht ngarko .torrentet nga:"
	, "Fshiji .torrentet e ngarkuara"
	, "Porti i Dëgjimit"
	, "Porti i përdorur për lidhjet e hyra:"
	, "Port rastësor"
	, "Rastësoje portin në çdo fillesë"
	, "Lejo gjetjen UPnP të portit"
	, "Lejo gjetjen NAT-PMP të portit"
	, "Serveri Proxy"
	, "Lloji:"
	, "Proxy:"
	, "Porti:"
	, "Certifikimi"
	, "Përdoruesi:"
	, "Fjalëkalimi:"
	, "Zgjidhi emrat e hosteve përmes proxy-t"
	, "Përdor një server proxy për lidhjet pikë më pikë"
	, "Përjashtohu te Fajruolli i Windows"
	, "Proxy Privacy"
	, "Disable all local DNS lookups"
	, "Disable all features that leak identifying information"
	, "Disable connections unsupported by the proxy"
	, "Kufizimi i Raportit Global të Ngarkimit"
	, "Raporti maksimal i ngarkimit (kB/s): [0: pa kufi]"
	, "Automatik"
	, "Ndërro raportin e ngarkimit kur nuk shkarkohet (kB/s):"
	, "Kufizimi i Raportit Global të Shkarkimit"
	, "Raporti maksimal i shkarkimit (kB/s): [0: pa kufi]"
	, "Numri i Lidhjeve"
	, "Numri maksimal i lidhjeve globale:"
	, "Numri maksimal i pikave të lidhura për torrent:"
	, "Numri i paketave të ngarkimit për torrent:"
	, "Përdor paketa ngarkimi shtesë nëse shpejtësia e ngarkimit < 90 %"
	, "Global Rate Limit Options"
	, "Apply rate limit to transport overhead"
	, "Apply rate limit to uTP connections"
	, "Veçoritë Bazale të BitTorrent"
	, "Lejo Rrjetin DHT"
	, "Pyete gjurmuesin për informacionin e grirjes"
	, "Lejo DHT-në për torrentet e reja"
	, "Lejo Shkëmbimin e Pikave"
	, "Lejo Zbulimin Lokal të Pikave"
	, "Kufizo shtrirjen lokale të bandës për pikën"
	, "IP/Emri i hostit që raportohet tek gjurmuesi:"
	, "Kriptimi i Protokollit"
	, "Daljet:"
	, "Lejo lidhjet e hyra të trashëguara"
	, "Enable bandwidth management [uTP]"
	, "Enable UDP tracker support"
	, "Lejo Kap. e Transferimit"
	, "Vendosjet e Kap."
	, "Limit Type:"
	, "Bandwidth Cap:"
	, "Time Period (days):"
	, "Historia e përdorimit për periudhën e seleksionuar:"
	, "Ngarkuar:"
	, "Shkarkuar:"
	, "Ngarkuar + Shkarkuar:"
	, "Periudha kohore:"
	, "%d ditët e fundit"
	, "Rivendos Historinë"
	, "Vendosjet e Radhës"
	, "Numri maksimal i torrenteve aktive (ngarkim ose shkarkim):"
	, "Numri maksimal i shkarkesave aktive:"
	, "Mbill Kur [Vlerat Tipike]"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Detyrat e mbjelljes kanë përparësi më të lartë sesa detyrat e shkarkimit"
	, "Kur µTorrent Arrin Synimin e Mbjelljes"
	, "Kufizo raportin e ngarkimit në (kB/s): [0: ndalo]"
	, "Lejo Planifikuesin"
	, "Tabela e Planifikuesit"
	, "Vendosjet e Planifikuesit"
	, "Raporti i kufizuar i ngarkimit (kB/s):"
	, "Raporti i kufizuar i shkarkimit (kB/s):"
	, "Mos lejo DHT-në kur fikesh"
	, "Lejo Web UI"
	, "Certifikimi"
	, "Përdoruesi:"
	, "Fjalëkalimi:"
	, "Lejo llogarinë I Ftuar me emër përdoruesi:"
	, "Lidhja"
	, "Porti dëgjues alternativ (tipike është porti i lidhjes):"
	, "Pengo hyrjen tek IP-të më poshtë (ndaji hyrjet e shumëfishta me një presje):"
	, "Enable µTorrent Remote Access"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "Mundësi të Avancuara [KUJDES: Mos i modifiko!]"
	, "Vlera"
	, "Vërtet"
	, "False"
	, "Vendos"
	, "Lista e Kërcyeseve të Shpejta [Ndaj vlerat e shumëfishta me një presje]"
	, "Mbikaloj listën automatike të kërcyeseve të shpejta"
	, "Lista e shpejt. së ng.:"
	, "Lista e shpejt. së shk.:"
	, "Etiketat e Zgjatura [Ndaji etiketat e shumëfishta me një shkronjë |]"
	, "Motorët e Kërkimit [Formati: emër|URL]"
	, "Vendosjet Bazale të Depos"
	, "Depoja e diskut përdoret për të mbajtur të dhënat e hapura shpesh në kujtesë që të ulet numri i leximeve dhe i shkrimeve në drajvin e ngurtë. µTorrent normalisht e menaxhon depon automatikisht, por ju mund ta ndryshoni sjelljen e tij duke i modifikuar këto vendosje."
	, "Mbikaloje masën automatike të depos dhe përcakto masën me dorë (MB):"
	, "Ule shfrytëzimin e kujtesës kur depoja nuk nevojitet"
	, "Vendosjet e Avancuara të Depos"
	, "Lejo fshehjen e shkrimeve në disk"
	, "Shkruaji blloqet e paprekura çdo 2 minuta"
	, "Shkruaji menjëherë copat e përfunduara"
	, "Lejo fshehjen e leximeve në disk"
	, "Fike fshehjen nëse shpejtësia e ngarkimit është e ngadaltë"
	, "Hiqi blloqet e vjetra nga depoja"
	, "Rrite masën automatike të depos kur depoja goditet"
	, "Mos lejo fshehjen e Windows gjatë shkrimeve në disk"
	, "Mos lejo fshehjen e Windows gjatë leximeve në disk"
	, "Run Program"
	, "Run this program when a torrent finishes:"
	, "Run this program when a torrent changes state:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Vetitë e Torrentit"
	, "Gjurmuesit (ndaji lidhësit me një rresht bosh)"
	, "Vendosjet e Shtrirjes së Bandës"
	, "Raporti maksimal i ngarkimit (kB/s): [0: tipike]"
	, "Raporti maksimal i shkarkimit (kB/s): [0: tipike]"
	, "Numri i paketave të ngarkimit: [0: tipike]"
	, "Mbill Kur"
	, "Mbikalo vendosjet tipike"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Vendosjet e Tjera"
	, "Mbjellje e Parë"
	, "Lejo DHT-në"
	, "Shkëmbe Pikat"
	, "Fluks"
	, "URL Fluksi:"
	, "Anësi me Porosi:"
	, "Abonimi"
	, "Nuk shkarkoj automatikisht tërë njësitë"
	, "Shkarkoj automatikisht tërë njësitë e publikuara në fluks"
	, "Përdor filtër inteligjent për episodet"
	, "Feeds||Favorite||Histori||"
	, "Tërë Flukset"
	, "Vendosjet e Filtrit"
	, "Emri:"
	, "Filtri:"
	, "Mos:"
	, "Ruaj në:"
	, "Fluksi:"
	, "Cilësia:"
	, "Numri i Episodit: [p.sh. 1x12-14]"
	, "Filtri krahason emrat origjinalë, jo ata të dekoduar"
	, "Nuk nis të autoshkarkoj"
	, "Filtër inteligjent ep."
	, "Shkarkoj me përparësi të lartë"
	, "Intervali minimal:"
	, "Etiketa e torrentit të ri:"
	, "Shtoj një Fluks RSS..."
	, "Editoj Fluksin..."
	, "Çaktivizoj Fluksin"
	, "Aktivizoj Fluksin"
	, "Ridatoj Fluksin"
	, "Fshij Fluksin"
	, "Shkarkoj"
	, "Hap URL-në në Shfletues"
	, "Shtoj te Favoritet"
	, "Shtoj"
	, "Fshij"
	, "GJITHÇKA"
	, "(Gjithçka)"
	, "(krahaso përherë)||(krahaso një herë)||12 orë||1 ditë||2 ditë||3 ditë||4 ditë||1 javë||2 javë||3 javë||1 muaj||"
	, "Shtoj një Fluks RSS"
	, "Editoj Fluksin RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Vërtet do e fshini Fluksin RSS \"%s\"?"
	, "Emri i Plotë"
	, "Emri"
	, "Episodi"
	, "Formati"
	, "Kodeku"
	, "Date"
	, "Fluksi"
	, "URL"
	, "IP"
	, "Porti"
	, "Klienti"
	, "Flamuj"
	, "%"
	, "Përkatësi"
	, "Shpejt. Poshtë"
	, "Shpejt. Lart"
	, "Kërkesa"
	, "Pritur"
	, "Ngarkuar"
	, "Shkarkuar"
	, "Hasheri"
	, "Sh. i Pikës"
	, "Lart-Maks."
	, "Poshtë-Maks."
	, "Radhitur"
	, "Joaktiv"
	, "Kryer"
	, "Pjesë e Parë"
	, "Emri"
	, "# i Pjesëve"
	, "%"
	, "Përparësi"
	, "Përmasë"
	, "kapërce"
	, "ulët"
	, "normale"
	, "lart"
	, "Shkarkuar:"
	, "Ngarkuar:"
	, "Farat:"
	, "Kohë e mbetur:"
	, "Shkarkimi:"
	, "Ngarkimi:"
	, "Pikat:"
	, "Shpërndarë:"
	, "Ruaj Si:"
	, "Hashi:"
	, "Përgjithësi"
	, "Transferimi"
	, "%d nga %d të lidhur (%d në tufë)"
	, "S:%s N:%s - %s"
	, "Kopjoj"
	, "Rivendose"
	, "Pa kufi"
	, "Zbërthej IP-të"
	, "Get File(s)"
	, "Mos Shkarko"
	, "Përparësi e Lartë"
	, "Përparësi e Ulët"
	, "Përparësi Normale"
	, "Kopjoj URI-n Magnet"
	, "Fshiji të Dhënat"
	, "Fshij .torrent-in"
	, "Fshij .torrent-in + të Dhënat"
	, "Detyro RiVerifikimin"
	, "Detyro"
	, "Etiketë"
	, "Pusho"
	, "Vetitë"
	, "Lëvize Poshtë Radhës"
	, "Lëvize Sipër Radhës"
	, "Hiqe"
	, "Hiqe Dhe"
	, "Nise"
	, "Ndalo"
	, "Aktivë"
	, "Gjithçka"
	, "Përfunduar"
	, "Shkarkohet"
	, "Joaktivë"
	, "Pa etiketë"
	, "||Vlef.||Vlefshmëri"
	, "Shtuar Më"
	, "Përfunduar Më"
	, "Kryer"
	, "Shkarkuar"
	, "Shpejt. Poshtë"
	, "ETA"
	, "Etiketë"
	, "Emri"
	, "#"
	, "Pikat"
	, "Kohë e Mbetur"
	, "Farat"
	, "Farat/Pikat"
	, "Raporti"
	, "Përmasë"
	, "URL Burimi"
	, "Statusi"
	, "Ngarkuar"
	, "Shpejt. Lart"
	, "A jeni i sigurt se doni të fshini d torrentet e zgjedhura dhe gjithë të dhënat që shoqërohen me to?"
	, "A jeni i sigurt se doni të fshini torrentin e zgjedhur dhe gjithë të dhënat që shoqërohen me të?"
	, "A jeni i sigurt se doni të fshini d torrentet e zgjedhura?"
	, "A jeni i sigurt se doni të fshini torrentin e zgjedhur?"
	, "Vërtet do e fshini Filtrin RSS \"%s\"?"
	, "Verifikohet %:.1d%%"
	, "Shkarkohet"
	, "Gabim: %s"
	, "Ka përfunduar"
	, "Pushuar"
	, "Radhitur"
	, "Farë e radhitur"
	, "Mbillet"
	, "Ndaluar"
	, "Shkruani një etiketë"
	, "Shkruani një etiketë të re për torrentin e zgjedhur:"
	, "Etiketë e Re..."
	, "Hiqe Etiketën"
	, "Përgjithësi||Gjurmuesit||Pikat||Pjesët||Skedat||Shpejtësi||Ditarizuesi||"
	, "Shto një Torrent"
	, "Shtoj një Torrent me URL"
	, "Pusho"
	, "Pëlqimet"
	, "Lëvize Poshtë në Radhë"
	, "Lëvize Lart në Radhë"
	, "Fshije"
	, "Shkarkuesi RSS"
	, "Nise"
	, "Ndalo"
	, "Skedar"
	, "Shtoj një Torrent..."
	, "Shtoj një Torrent me URL..."
	, "Mundësi"
	, "Pëlqime"
	, "Tregoj Listën e Kategorive"
	, "Tregoj Info me Detaje"
	, "Tregoj Brezin e Statusit"
	, "Tregoj Brezin e Mjeteve"
	, "Ikonat mbi Fusha"
	, "Ndihmë"
	, "Faqja e Rrjetës"
	, "Forumet e µTorrent-it"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pushoj tërë torrentet"
	, "Rimarr tërë torrentet"
	, "S: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "N: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avancuar"
	, "Shtrirje"
	, "Lidhje"
	, "Depo Disku"
	, "Direktori"
	, "Përgjithësi"
	, "Planifikimi"
	, "Pritje"
	, "Shtesa UI"
	, "Vendosjet UI"
	, "BitTorrent"
	, "UI Rrjeti"
	, "Kap. i Transferimit"
	, "Run Program"
	, "Remote"
	, "Tregoj Vetitë||Nis/Ndaloj||Hap Dosjen||Tregoj Brezin e Shkarkimit||"
	, "Të Palejuara||Të Lejuara||Të Detyruara||"
	, "(asnjë)||Socks4||Socks5||HTTPS||HTTP||"
	, "Ngarkime||Shkarkime||Ngarkime + Shkarkime||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Emri"
	, "Vlera"
	, "Hën||Mar||Mër||Enj||Pre||Sht||Die||"
	, "Hënë||Martë||Mërkurë||Enjte||Premte||Shtunë||Diel||"
	, "Shpejtësi e Plotë"
	, "Shpejtësi e plotë - Përdor kufijtë normalë globalë të shtrirjes së bandës"
	, "Kufizuar"
	, "E kufizuar - Përdor kufijtë e shtrirjes së bandës të përcaktuar nga planifikuesi"
	, "Vetëm mbillet"
	, "Vetëm mbjell - Vetëm ngarkon të dhënat (përfshirë të papërfunduarat)"
	, "Fikur"
	, "Fikur - Ndalon tërë torrentet që nuk janë detyruar"
	, "<= %d orë"
	, "(Përbuze)"
	, "<= %d minuta"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];

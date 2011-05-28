/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Torrenti failid||*.torrent||Kõik failid (*.*)||*.*||"
	, "OK"
	, "Loobu"
	, "Rakenda"
	, "Jah"
	, "Ei"
	, "Sulge"
	, "Eelistused"
	, "Keel"
	, "Keel:"
	, "Privaatsus"
	, "Kontrolli uuendusi automaatselt"
	, "Uuenda beetaversioonideks"
	, "Saada anonüümset informatsiooni uuendusi kontrollides"
	, "Allalaadimise ajal"
	, "Lisa .!ut lõpetamata failidele"
	, "Hõiva kõigi failide ruum"
	, "Hoia ära puhkerežiim kui on aktiivseid torrenteid"
	, "Vaate valikud"
	, "Kinnita torrentite kustutamine"
	, "Kinnita jälitajate kustutamine"
	, "Näita väljumisel kinnitamisdialoogi"
	, "Nimekirjal vahelduv taustavärv"
	, "Näita hetkekiirust tiitliribal"
	, "Näita kiiruselimiite olekuribal"
	, "Torrentite lisamisel"
	, "Ära alusta allalaadimist automaatselt"
	, "Aktiveeri programmiaken"
	, "Näita akent, mis näitab torrentis olevaid faile"
	, "Topeltklõpsu tegevused"
	, "Jagatavatel torrentitel:"
	, "Allalaaditavatel torrentitel:"
	, "Allalaaditud failide asukoht"
	, "Paiguta uued allalaadimised:"
	, "Näita dialoogi manuaalsel lisamisel"
	, "Liiguta lõpetatud allalaadimised:"
	, "Lisa torrenti silt"
	, "Liiguta ainult vaikimisi allalaadimiste kaustast"
	, ".torrentite asukoht"
	, "Hoia .torrenteid:"
	, "Liiguta lõpetatud tööde .torrentid:"
	, "Automaatselt laadi .torrentid:"
	, "Kustuta laetud .torrentid"
	, "Kuulatav port"
	, "Port sissetulevate ühenduste jaoks:"
	, "Suvaline port"
	, "Suvaline port igal käivitumisel"
	, "Luba UPnP pordi sidumine"
	, "Luba NAT-PMP pordi sidumine"
	, "Puhverserver"
	, "Tüüp:"
	, "Server:"
	, "Port:"
	, "Autentimine"
	, "Kasutaja:"
	, "Parool:"
	, "Lahenda hostinimed läbi puhverserveri"
	, "Kasuta puhverserverit P2P ühendusteks"
	, "Lisa erand Windowsi tulemüüri"
	, "Puhverserveri privaatsus"
	, "Keela kõik kohalikud DNS lookup päringud"
	, "Keela võimalused, mis lekitavad identifitseeritavat infot"
	, "Keela ühendused, mis pole puhverserveri poolt toetatud"
	, "Üldine üleslaadimise piirang"
	, "Maks. üleslaadimine (kB/s): [0: piiramatu]"
	, "Automaatne"
	, "Üleslaadimise kiirus kui allalaadimist ei toimu (kB/s):"
	, "Üldine allalaadimise piirang"
	, "Maks. allalaadimine (kB/s): [0: piiramatu]"
	, "Ühenduste arv"
	, "Üldine maksimaalne arv ühendusi:"
	, "Maksimaalne arv ühendusi torrenti kohta:"
	, "Üleslaadimise pesasid torrenti kohta:"
	, "Kasuta lisapesasid, kui üleslaadimiskiirus on < 90%"
	, "Global Rate Limit Options"
	, "Rakenda kiirusepiirang transpordiülekulule"
	, "Rakenda kiirusepiirang uTP ühendustele"
	, "Põhilised BitTorrenti omadused"
	, "Luba DHT võrk"
	, "Küsi jälitajalt kaapimise infot"
	, "Luba DHT uutele torrentitele"
	, "Luba peeride vahetus"
	, "Luba kohalike peeride leidmine"
	, "Piira kohalike peeride võrgukoormus"
	, "Jälitajale näidatav IP/hostinimi:"
	, "Protokolli krüpteering"
	, "Väljuvad:"
	, "Luba vanemat tüüpi ühendusi"
	, "Luba võrgukoormuse haldamine [uTP]"
	, "Luba UDP jälitaja tugi"
	, "Luba mahupiirang"
	, "Piiraja seaded"
	, "Piirangu tüüp:"
	, "Võrgukoormuse piirang:"
	, "Ajaperiood (päeva):"
	, "Kasutamise ajalugu valitud perioodile:"
	, "Üles laaditud:"
	, "Alla laaditud:"
	, "Üles + alla laaditud:"
	, "Ajaperiood:"
	, "Viimased %d päeva"
	, "Nulli ajalugu"
	, "Järjekorra seaded"
	, "Aktiivseid torrenteid kokku (üles- või allalaadimisi):"
	, "Aktiivseid allalaadimisi kokku:"
	, "Jaga kuni [vaikimisi väärtused]"
	, "Minimaalne suhe (%):"
	, "Minimaalne jagamise aeg (minutit):"
	, "Jagamine on prioriteetsem kui allalaadimine"
	, "Kui µTorrent jõuab jagamise eesmärgini"
	, "Piira üleslaadimise kiirus (kB/s): [0: seiska]"
	, "Käivita planeerija"
	, "Planeerija tabel"
	, "Planeerija seaded"
	, "Piiratud üleslaadimine (kB/s):"
	, "Piiratud allalaadimine (kB/s):"
	, "Keela DHT kui väljas"
	, "Luba veebiliides"
	, "Autentimine"
	, "Kasutaja:"
	, "Parool:"
	, "Luba külalise konto kasutajanimega:"
	, "Ühendatavus"
	, "Alternatiivne kuulamise port (vaikimisi on ühenduse port):"
	, "Keela järgmised IP-d (eralda erinevad IP-d komaga):"
	, "Enable µTorrent Remote Access"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "Täpsemad valikud [HOIATUS: mitte muuta!]"
	, "Väärtus:"
	, "tõene"
	, "väär"
	, "Määra"
	, "Kiiruste menüü [eralda erinevad väärtused komaga]"
	, "Võta üle kiiruste menüü"
	, "Üleslaadimise kiirused:"
	, "Allalaadimise kiirused:"
	, "Püsivad sildid [Eralda erinevad sildid | märgiga]"
	, "Otsingumootorid [formaat: nimi|URL]"
	, "Põhilised vahemälu seaded"
	, "Ketta vahemälu on tihedalt kasutatavate andmete mälus hoidmiseks, et vähendada lugemiste ja kirjutamiste arvu kettale. µTorrent haldab vahemälu automaatselt, aga võid selle käitumist muuta nende seadete muutmisega."
	, "Võta üle automaatne vahemälu suurus ja määra suurus käsitsi (MB):"
	, "Vähenda mälukasutust, kui vahemälu ei vajata"
	, "Täpsemad vahemälu seaded"
	, "Luba kettale kirjutamise vahemälu"
	, "Kirjuta puutumata plokid välja iga 2 minuti tagant"
	, "Kirjuta lõpetatud tükid kohe välja"
	, "Luba kettale lugemiste vahemälu"
	, "Lülita lugemiste vahemälu välja, kui madal üleslaadimise kiirus"
	, "Eemalda vanad plokid vahemälust"
	, "Suurenda automaatse vahemälu suurust kui vahemälu risustub"
	, "Keela Windowsi kettale kirjutamise vahemälu"
	, "Keela Windowsi kettalt lugemise vahemälu"
	, "Käivita programm"
	, "Käivita see programm kui torrent lõpetab:"
	, "Käivita see programm kui torrenti olek muutub:"
	, "Võid kasutada neid käske:\r\n%F - Alla laaditud faili nimi (ühe failiga torrentid)\r\n%D - Kataloog kuhu failid salvestatakse\r\n%N - Torrenti nimi\r\n%S - Torrenti staatus\r\n%L - Silt\r\n%T - Jälitaja\r\n%M - Olekuteate tekst (sama mis olekuveerg)\r\n%I - hex encoded info-hash\r\n\r\nOlek on nende kombinatsioon:\r\nalustatud = 1, kontrollin = 2, käivita-peale-kontrolli = 4,\r\nkontrollitud = 8, viga = 16, peatatud = 32, auto = 64, laaditud = 128"
	, "Torrenti omadused"
	, "Jälitajad (eralda üksteisest tühja reaga)"
	, "Võrgukoormuse seaded"
	, "Maks. üleslaadimine (kB/s): [0: vaikimisi]"
	, "Maks. allalaadimine (kB/s): [0: vaikimisi]"
	, "Üleslaadimise pesasid: [tühi: kasuta vaikimisi]"
	, "Jaga kuni"
	, "Võta üle vaikimisi seaded"
	, "Minimaalne suhe (%):"
	, "Minimaalne jagamise aeg (minutit):"
	, "Teised seaded"
	, "Algjagamine"
	, "Luba DHT"
	, "Peeride vahetus"
	, "Voog"
	, "Voo URL:"
	, "Enda nimetus:"
	, "Tellimus"
	, "Ära laadi kõiki faile automaatselt alla"
	, "Automaatselt laadi alla kõik kanalis avaldatud failid"
	, "Kasuta tarka episoodifiltrit"
	, "Vood||Lemmikud||Ajalugu||"
	, "All Feeds"
	, "Filtri seaded"
	, "Nimi:"
	, "Filter:"
	, "Mitte:"
	, "Salvesta:"
	, "Voog:"
	, "Kvaliteet:"
	, "Episoodi number: [näit. 1x12-14]"
	, "Filter võrdleb originaalnime dekodeeritud nime asemel"
	, "Ära alusta allalaadimist automaatselt"
	, "Tark episoodifilter"
	, "Allalaadimisel kõrgeim prioriteet"
	, "Minimaalne intervall:"
	, "Silt uue torrenti jaoks:"
	, "Lisa RSS-voog..."
	, "Muuda voogu..."
	, "Keela voog"
	, "Luba voog"
	, "Uuenda voogu"
	, "Kustuta voog"
	, "Laadi alla"
	, "Ava URL brauseris"
	, "Lisa lemmikutesse"
	, "Lisa"
	, "Kustuta"
	, "KÕIK"
	, "(Kõik)"
	, "(sobita alati)||(sobita ainult korra)||12 tundi||1 päev||2 päeva||3 päeva||4 päeva||1 nädal||2 nädalat||3 nädalat||1 kuu||"
	, "Lisa RSS-voog"
	, "Muuda RSS-voogu"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Päriselt kustutada RSS-voog \"%s\"?"
	, "Täielik nimi"
	, "Nimi"
	, "Episood"
	, "Formaat"
	, "Koodek"
	, "Date"
	, "Voog"
	, "Allika URL"
	, "IP"
	, "Port"
	, "Klient"
	, "Tähised"
	, "%"
	, "Tähtsus"
	, "Alla kiirus"
	, "Üles kiirus"
	, "Päringud"
	, "Oodanud"
	, "Üles laaditud"
	, "Alla laaditud"
	, "Hashivigu"
	, "Peeri al."
	, "Maks. alla"
	, "Maks. üles"
	, "Järjekorras"
	, "Passiivne"
	, "Valmis"
	, "Esimene tükk"
	, "Nimi"
	, "Tükke"
	, "%"
	, "Prioriteet"
	, "Suurus"
	, "jäta vahele"
	, "madal"
	, "normaalne"
	, "kõrge"
	, "Alla laaditud:"
	, "Üles laaditud:"
	, "Seemneid:"
	, "Aega jäänud:"
	, "Allalaadimiskiirus:"
	, "Üleslaadimiskiirus:"
	, "Peere:"
	, "Jagamise suhe:"
	, "Salvesta kui:"
	, "Hash:"
	, "Üldine"
	, "Edastus"
	, "%d/%d ühendatud (sülemis %d)"
	, "A:%s Ü:%s - %s"
	, "Kopeeri"
	, "Taasta"
	, "Piiramatu"
	, "Lahenda IPd"
	, "Get File(s)"
	, "Ära lae alla"
	, "Kõrge prioriteet"
	, "Madal prioriteet"
	, "Normaalne prioriteet"
	, "Kopeeri Magneti URI"
	, "Kustuta andmed"
	, "Kustuta .torrent"
	, "Kustuta .torrent + andmed"
	, "Sunni uuestikontrolli"
	, "Sunni käivituma"
	, "Silt"
	, "Peata"
	, "Omadused"
	, "Liiguta järjekorras alla"
	, "Liiguta järjekorras üles"
	, "Eemalda"
	, "Eemalda ja"
	, "Käivita"
	, "Seiska"
	, "Aktiivsed"
	, "Kõik"
	, "Lõpetatud"
	, "Alla laadimas"
	, "Passiivne"
	, "Ilma sildita"
	, "||Saadavus||Saadavus"
	, "Lisatud"
	, "Lõpetanud"
	, "Valmis"
	, "Alla laaditud"
	, "Alla kiirus"
	, "Aega jäänud"
	, "Silt"
	, "Nimi"
	, "Nr."
	, "Peerid"
	, "Jäänud"
	, "Seemned"
	, "Seemneid/peere"
	, "Suhe"
	, "Suurus"
	, "Allika URL"
	, "Olek"
	, "Üles laaditud"
	, "Üles kiirus"
	, "Oled kindel, et tahad eemaldada %d valitud torrentit ja kõik nendega seotud andmed?"
	, "Oled kindel, et tahad eemaldada valitud torrenti ja kõik sellega seotud andmed?"
	, "Oled kindel, et tahad eemaldada %d valitud torrentit?"
	, "Oled kindel, et tahad eemaldada valitud torrenti?"
	, "Päriselt kustutada RSS-i filter \"%s\"?"
	, "Kontrollitud %:.1d%%"
	, "Laadin alla"
	, "Viga: %s"
	, "Lõpetatud"
	, "Peatatud"
	, "Järjekorras"
	, "Järjekorras seeme"
	, "Lõpetatud"
	, "Seisatud"
	, "Sisesta silt"
	, "Sisesta uus silt valitud torrentitele:"
	, "Uus silt..."
	, "Eemalda silt"
	, "Üldine||Jälitajad||Peerid||Tükid||Failid||Kiirus||Logija||"
	, "Lisa torrent"
	, "Lisa torrent URList"
	, "Peata"
	, "Eelistused"
	, "Liiguta järjekorras alla"
	, "Liiguta järjekorras üles"
	, "Eemalda"
	, "RSS-i laadija"
	, "Käivita"
	, "Seiska"
	, "Fail"
	, "Lisa torrent..."
	, "Lisa torrent URL-ist..."
	, "Valikud"
	, "Eelistused"
	, "Näita kategooriate nimekirja"
	, "Näita detailset infot"
	, "Näita olekuriba"
	, "Näita tööriistariba"
	, "Ikoonid vahelehtedel"
	, "Abi"
	, "µTorrenti koduleht"
	, "µTorrenti foorum"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrentid"
	, "Peata kõik torrentid"
	, "Jätka kõiki torrenteid"
	, "A: %s%z/s"
	, " P: %z/s"
	, " Ü: %z/s"
	, " L: %Z"
	, "Ü: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Täpsem"
	, "Võrgukoormus"
	, "Ühendus"
	, "Ketta vahemälu"
	, "Kataloogid"
	, "Üldine"
	, "Planeerija"
	, "Järjekord"
	, "Kasutajaliides"
	, "Kasutajaliides"
	, "BitTorrent"
	, "Veebiliides"
	, "Mahupiirang"
	, "Käivita programm"
	, "Remote"
	, "Näita omadusi||Käivita/seiska||Ava kaust||Näita allalaadimisriba||"
	, "Keelatud||Lubatud||Sunnitud||"
	, "(pole)||Socks4||Socks5||HTTPS||HTTP||"
	, "Üleslaadimised||Allalaadimised||Üleslaadimised + allalaadimised||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nimi"
	, "Väärtus"
	, "E||T||K||N||R||L||P||"
	, "Esmaspäev||Teisipäev||Kolmapäev||Neljapäev||Reede||Laupäev||Pühapäev||"
	, "Täiskiirusel"
	, "Täiskiirus - Kasutab üldiseid ühenduse limiite"
	, "Piiratud"
	, "Piiratud - Kasutab planeerija poolt määratud limiite"
	, "Ainult jagamine"
	, "Ainult jagamine - Ainult laadib üles (k.a. lõpetamata)"
	, "Väljas"
	, "Lülita välja - Peatab kõik torrentid mis pole sunnitud"
	, "<= %d tundi"
	, "(ignoreeri)"
	, "<= %d minutit"
	, "%dp %dt"
	, "%dt %dm"
	, "%dm %ds"
	, "%ds"
	, "%dn %dp"
	, "%da %dn"
];

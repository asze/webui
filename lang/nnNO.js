/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Torrent filer||*.torrent||Alle filer (*.*)||*.*||"
	, "OK"
	, "Avbryt"
	, "Bruk"
	, "Yes"
	, "No"
	, "Lat att"
	, "Innstillingar"
	, "Språk"
	, "språk:"
	, "Personvern"
	, "Sjå etter oppdateringar automatisk"
	, "Oppdater til betaversjonar"
	, "Send anonym informasjon når ein ser etter oppdateringar"
	, "Ved nedlasting"
	, "legg til.!ut til ufullstendige filer"
	, "Førehandstildel alle filer"
	, "Hindre ventemodus ved aktive torrentar"
	, "Vis val"
	, "Stadfest sletting av torentar"
	, "Stadfest sletting av sporfølgjar"
	, "Vis stadfestingsmelding ved avslutting"
	, "Alternate farge for listebakgrunn"
	, "Vis gjeldande fart i tittellinja"
	, "Vis fartsgrense i statusfeltet"
	, "Når torrentar vert lagt til"
	, "Ikkje start nedlastinga automatisk"
	, "Aktiver programvindauge"
	, "Opne eit vindauge som viser filene i torrenten"
	, "Handlingar ved dobbelklikk"
	, "Ved kjeldedeling av torrentar"
	, "Ved nedlasting av torrentar:"
	, "Plassering til nedlasta filer"
	, "Legg nye nedlastingar i:"
	, "Alltid vis dialog ved manuell tillegging"
	, "Flytt ferdige nedlastingar til:"
	, "Legg til torrentens merkelapp"
	, "Berre flytt frå standard nedlastingsmappe"
	, "Plassering av torrentar"
	, "Lagre .torrentar i:"
	, "Flytt .torrentar med avslutta jobbar til:"
	, "Automatisk last .torrentar frå"
	, "Slett lasta .torrentar"
	, "Lytteport"
	, "Port brukt for innkomande samband:"
	, "Tilfeldig port"
	, "Tilfeldiggjer port ved kvar oppstart"
	, "Slå på UPnP port-mapping"
	, "Slå på NAT-PMP port-mapping"
	, "Mellomtenar"
	, "Type:"
	, "Mellomt:"
	, "Port:"
	, "Stadfesting"
	, "Brukarnamn:"
	, "Passord:"
	, "Oppløys vertsnamn gjennom mellomtenar"
	, "Bruk mellomtenar for klient-til-klient-samband"
	, "Legg til Windows brannmur-unnatak"
	, "Proxy Privacy"
	, "Disable all local DNS lookups"
	, "Disable all features that leak identifying information"
	, "Disable connections unsupported by the proxy"
	, "Global avgrensing av opp-fart"
	, "Maks opp-fart (kB/s): [0: uavgrensa]"
	, "Automatisk"
	, "Veksle opp-fart når det ikkje er nedlastingar (kB/s):"
	, "Global avgrensing av ned-fart"
	, "Maks ned-fart (kB/s): [0: uavgrensa]"
	, "Tal på tilkoplingar"
	, "Globalt maks tal på tilkoplingar"
	, "Maks tal på tilkopla klientar pr. torrent:"
	, "Talet på opplastingsplassar pr. torrent:"
	, "Bruk ekstra opplastingsplassar om opp-fart er < 90%"
	, "Global Rate Limit Options"
	, "Apply rate limit to transport overhead"
	, "Apply rate limit to uTP connections"
	, "Grunnleggjande BitTorren-funksjonar"
	, "Slå på DHT-nettverk"
	, "Spør sporfølgjar om skrape-info"
	, "Slå på DHT for nye torrentar"
	, "Slå på klientutveksling"
	, "Slå på Lokal klientoppdaging"
	, "Avgrens lokal klientbandbreidde"
	, "IP/Vertsnamn rapporterer til sporfølgjar"
	, "Protokollkryptering"
	, "Utgåande:"
	, "Tillat innkomande eldre tilkoplingar"
	, "Enable bandwidth management [uTP]"
	, "Enable UDP tracker support"
	, "Slå på overføringslås"
	, "Låseinnstillingar"
	, "Limit Type:"
	, "Bandwidth Cap:"
	, "Time Period (days):"
	, "Brukshistorikk for vald periode:"
	, "Opplasta:"
	, "Nedlasta:"
	, "Opplasta + nedlasta:"
	, "Tidsperiode:"
	, "Siste %d dagar"
	, "Nullstill historikk"
	, "Køinstillingar"
	, "Høgste tal på aktive torrentar (opp- og nedlasting)"
	, "Høgste tal på aktive nedlastingar:"
	, "Kjeldedel når [standardverdiar]"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Kjeldedelingsoppgåver har høgare prioritet enn nedlastingsoppgåver"
	, "Når µTorrent når kjeldedelingsmålet"
	, "Avgrens opplastingsfart til (kB/s): [0: stopp]"
	, "Slå på planleggjar"
	, "Planleggjarliste"
	, "Innstillingar for planleggjar"
	, "Avgrensa opplastingsfart (kb/s):"
	, "Avgrensa nedlastingsfart (kb/s):"
	, "Slå av DHT ved avslåing"
	, "Slå på Vev-UI"
	, "Stadfesting"
	, "Brukarnamn:"
	, "Passord:"
	, "Slå på gjestekonto med brukarnamn"
	, "Sambandsaktivitet"
	, "Alternativ lytteport (standard er tilkoplingsport):"
	, "Avgrens tilgang til følgjande IP-ar (skil fleire oppføringar med komma):"
	, "Enable µTorrent Remote Access"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "Avanserte innstillingar [ÅTVARING: ikkje modifiser!]"
	, "verdi:"
	, "rett"
	, "gale"
	, "vel"
	, "Sprettoppliste for fart [skil ulike verdiar med komma]"
	, "Overstyr automatisk sprettoppliste for fart"
	, "Last opp fartsliste:"
	, "Last ned fartsliste:"
	, "Varige merkelappar [Skil fleire merkelappar med teiknet | ]"
	, "Søkjemotorar [Format: namn|URL]"
	, "Enkle snøgglager-innstillingar"
	, "Platesnøgglageret vert brukt til å ha ofte brukte data i minnet for å redusere talet på lesingar og skrivingar til harddisken. µTorrent greier vanlegvis snøgglagringa automatisk, men du kan og stille det inn manuelt."
	, "Still inn storleiken på snøgglageret manuelt (MB):"
	, "Mink minnebruken når snøgglageret ikkje er i bruk"
	, "Avanserte snøgglager-innstillingar"
	, "Slå på snøgglagring for plate  skriving"
	, "Skriv ut urørte blokker kvart 2. minutt"
	, "Skriv ut ferdige blokker med ein gong"
	, "Slå på snøgglagring for plate lesing"
	, "Slå av les snøgglagring om opp-fart er låg"
	, "Fjern gamle blokker frå snøgglageret"
	, "Auk automatisk snøgglagerstorleik ved sletting av snøgglager"
	, "Slå av Windows-snøgglagring ved skriving til plate"
	, "Slå av Windows-snøgglagring ved lesing av plate"
	, "Run Program"
	, "Run this program when a torrent finishes:"
	, "Run this program when a torrent changes state:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Torrent-eigenskapar"
	, "Sporfølgjarar (skil rader med ei tom linje)"
	, "Bandbreiddeinnstillngar"
	, "Maks. opplastingsfart (kB/s): [0: standard]"
	, "Maks nedlastingsfart (kB/s): [0: standard]"
	, "Tal på opplastingsplassar: [0: default]"
	, "Kjeldedel når"
	, "Overkøyr standardinnstillingar"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Andre innstillingar"
	, "Første kjeldedeling"
	, "Slå på DHT"
	, "Klientutveksling"
	, "Kjelde"
	, "Kjelde-URL:"
	, "Standard-alias:"
	, "Tinging"
	, "Ikkje last ned alle elementa automatisk"
	, "Automatisk last ned alle element publisert i kjelde"
	, "Bruk smart episodefilter"
	, "Feeds||Favorittar||Historikk||"
	, "Alle kjelder"
	, "Filterinnstillingar"
	, "Namn:"
	, "Filter:"
	, "Ikkje:"
	, "Lagre i:"
	, "Kjelde:"
	, "Kvalitet:"
	, "Episodenummer: [døme: 1x12-14]"
	, "Filter matchar original-namn i staden for dekoda namn"
	, "Ikkje start nedlastingar automatisk"
	, "Smart ep. filter"
	, "Gje høgste prioritet til nedlasting"
	, "Minimum intervall:"
	, "Merkelapp for nye torr.:"
	, "Legg til RSS-kjelde …"
	, "Rediger kjelde …"
	, "Slå av kjelde"
	, "Slå på kjelde"
	, "Oppdater kjelde"
	, "Slett kjelde"
	, "last ned"
	, "Opne URL i nettlesar"
	, "legg til i favorittar"
	, "Legg til"
	, "Slett"
	, "ALLE"
	, "(Alle)"
	, "(matche alltid)||(matche ein gong)||12 timar||1 dag||2 dagar||3 dagar||4 dagar||1 veke||2 veker||3 veker||1 månad||"
	, "Legg til RSS"
	, "Rediger RSS-kjelde"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Slette RSS-nyhendekjelde \"%s\"?"
	, "Fullt namn"
	, "Namn"
	, "Episode"
	, "Format"
	, "Kodek"
	, "Date"
	, "Nyhendekjelde"
	, "URL"
	, "Ip"
	, "Port"
	, "Klient"
	, "Flagg"
	, "%"
	, "Relevans"
	, "Ned-fart"
	, "Opp-fart"
	, "Etterspurnader"
	, "Venta"
	, "Opplasta"
	, "Nedlasta"
	, "Hasherr"
	, "Klient dl."
	, "MaksOpp"
	, "MaksNed"
	, "Sett i kø"
	, "Ikkje aktiv"
	, "Ferdig"
	, "Første del"
	, "Namn"
	, "# Delar"
	, "%"
	, "Prioritet"
	, "Storleik"
	, "hopp over"
	, "låg"
	, "normal"
	, "høg"
	, "Nedlasta:"
	, "Opplasta:"
	, "Kjelder:"
	, "Står att:"
	, "Nedlastingsfart:"
	, "Opplastingsfart:"
	, "Klientar:"
	, "Delingstilhøve:"
	, "Lagre som:"
	, "Hash:"
	, "Generelt"
	, "Overføring"
	, "%d av %d påkopla (%d i sverm)"
	, "D:%s U:%s - %s"
	, "Kopier"
	, "Nullstill"
	, "Uavgrensa"
	, "Oppløys IP-ar"
	, "Get File(s)"
	, "Ikkje last ned"
	, "Høg prioritet"
	, "Låg prioritet"
	, "Normal prioritet"
	, "Kopier magnet-URI"
	, "Slett data"
	, "Slett .torrent"
	, "Slett .torrent + data"
	, "Tving re-sjekk"
	, "Tving start"
	, "Merkelapp"
	, "Pause"
	, "Eigenskapar"
	, "Flytt ned i køen"
	, "Flytt opp i køen"
	, "Fjern"
	, "Fjern og"
	, "Start"
	, "Stopp"
	, "Aktiv"
	, "Alle"
	, "Ferdig"
	, "Lastar ned"
	, "Ikkje aktiv"
	, "Ingen merkelapp"
	, "||Tilgj.||Tilgjengelegheit"
	, "Lagt til den"
	, "Fullført den"
	, "Ferdig"
	, "Nedlasta"
	, "Ned-fart"
	, "ETA"
	, "Merkelapp"
	, "Namn"
	, "#"
	, "Klientar"
	, "Står att"
	, "Kjelder"
	, "Kjeldedelarar/Klientar"
	, "Tilhøve"
	, "Storleik"
	, "Kjelde-URL"
	, "Status"
	, "Opplasta"
	, "Opp-fart"
	, "Vil du fjerne dei %d valde torrentane og tilhøyrande data?"
	, "Vil du fjerne den valde torrenten og tilhøyrande data?"
	, "Vil du fjerne dei %d valde torrentane?"
	, "Vil du fjerne vald torrent?"
	, "Slette RSS-filter \"%s\"?"
	, "Sjekka %:.1d%%"
	, "Lastar ned"
	, "Feil: %s"
	, "Ferdig"
	, "Sett i pause"
	, "Sett i kø"
	, "Kjelde sett i kø"
	, "Kjeldedeler"
	, "Stoppa"
	, "Skriv inn namn på merkelapp"
	, "Skriv inn ny merkelapp for valde torrentar:"
	, "Ny merkelapp …"
	, "Fjern merkelapp"
	, "Generelt||Sporfølgjarar||Klientar||Delar||Filer||Fart||Logg||"
	, "Legg til torrent"
	, "Legg til torrent frå URL"
	, "Pause"
	, "Innstillingar"
	, "Flytt ned i køen"
	, "Flytt opp i køen"
	, "Fjern"
	, "RSS-nedlastar"
	, "Start"
	, "Stopp"
	, "Fil"
	, "Legg til torrent …"
	, "Legg til torrent frå URL …"
	, "Innstillingar"
	, "Innstillingar"
	, "Vis kategoriliste"
	, "Vis detaljert info"
	, "Vis statuslinje"
	, "Vis verktøylinje"
	, "Ikon på faner"
	, "Hjelp"
	, "µTorrent-nettside"
	, "µTorrent-forum"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Alle torrentar i pause"
	, "Fullfør alle torrentar"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avansert"
	, "Bandbreidde"
	, "Samband"
	, "Platesnøgglager"
	, "Mapper"
	, "Generelt"
	, "Planleggjar"
	, "Køinnstillingar"
	, "UI-ekstra"
	, "UI-innstillingar"
	, "BitTorrent"
	, "Vevgrensesnitt"
	, "Ovderføringslås"
	, "Run Program"
	, "Remote"
	, "Vis eigenskapar||Start/Stopp||Opne mappe||Vis nedlastingsbar||"
	, "Slått av||Slått på||Tvinga||"
	, "(ingen)||Socks4||Socks5||HTTPS||HTTP||"
	, "Opplastingar||Nedlastingar||Opplastingar + nedlastingar||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Namn"
	, "Verdi"
	, "mån||tys||ons||tor||fre||lau||sun||"
	, "måndag||tysdag||onsdag||torsdag||fredag||laurdag||sundag||"
	, "Full fart"
	, "Full fart - Brukar normal global bandbreiddeavgrensing"
	, "Avgrensa"
	, "Avgrensa - Brukar planleggjar-spesifisert bandbreiddegrense"
	, "Berre kjeldedeling"
	, "Berre kjeldedeling - Berre opplastdata data (inkl. uferdige)"
	, "Slå av"
	, "Slå av - Stoppar alle torrentar som ikkje er tvungne"
	, "<= %d timar"
	, "(ignorer)"
	, "<= %d minutt"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];

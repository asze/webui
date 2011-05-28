/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Торэнт файлы||*.torrent||Усе файлы (*.*)||*.*||"
	, "OK"
	, "Адмена"
	, "Ужыць"
	, "Так"
	, "Не"
	, "Зачыніць"
	, "Налады"
	, "Мова"
	, "Мова:"
	, "Бяспека"
	, "Аўтаматычная праверка на абнаўленні"
	, "Абнаўляцца да бэта-версій"
	, "Адсылаць ананімную інфармацыю падчас праверкі абнаўленняў"
	, "Падчас запампоўкі"
	, "Дадаваць .!ut да недапампаваных файлаў"
	, "Рэзерваваць месца на дыску для ўсіх файлаў"
	, "Не дазваляць рэжым сну пакуль ёсць актыўныя торэнты"
	, "Налады прагляду"
	, "Пацвярджаць выданенне торэнтаў"
	, "Пацвярджаць выдаленне трэкераў"
	, "Пытаць пацверджанне выхаду"
	, "Іншы колер для фону спіса"
	, "Паказваць хуткасць у загалоўку акна"
	, "Паказваць ліміт хуткасці ў радку стану"
	, "Падчас дадання торэнтаў"
	, "Не пачынаць загрузку аўтаматычна"
	, "Актываваць акно праграмы"
	, "Паказваць акенца з файламі, змешчанымі ў торэнце"
	, "Дзеянні для падвойнай пстрычкі"
	, "Для торэнтаў у раздачы:"
	, "Для торэнтаў у загрузцы:"
	, "Месца для загружаных файлаў"
	, "Змяшчаць загрузкі ў:"
	, "Заўсёды пытаць пры ручным даданні"
	, "Змяшчаць скончаныя загрузкі ў:"
	, "Дадаваць метку торэнта"
	, "Перамяшчаць толькі з тэчкі загрузкі па змаўчанні"
	, "Змяшчэнне .torrents"
	, "Захоўваць .torrents у:"
	, "Перапісваць скончаныя .torrents ў:"
	, "Аўтаматычна загружаць .torrents з:"
	, "Выдаляць загружаныя .torrents"
	, "Праслухоўванне порта"
	, "Порт для ўваходных злучэнняў:"
	, "Адвольны порт"
	, "Мяняць порт пры кожным запуску"
	, "Укл. мапаванне UPnP-портаў"
	, "Укл. мапаванне NAT-PMP-портаў"
	, "Проксі-сервер"
	, "Тып:"
	, "Проксі:"
	, "Порт:"
	, "Апазнанне"
	, "Імя:"
	, "Пароль:"
	, "Адрозніваць імёны хастоў праз проксі"
	, "Вык. проксі-сервер для пірынгавых злучэнняў"
	, "Дадаць выключэнне для брандмаўэра Windows"
	, "Бяспека проксі"
	, "Забараніць лакальны DNS-пошук"
	, "Забараніць функцыі, што дазваляюць апазнаць карыстача"
	, "Забараніць злучэнні, што непадтрымваюцца проксі"
	, "Агульнае абмежаванне раздачы"
	, "Макс. раздача (Кб/с): [0: неабмежавана]"
	, "Аўтаматычна"
	, "Аддача пры адсутнасці загрузак (Кб/с):"
	, "Агульнае абмежаванне загрузкі"
	, "Макс. загрузка (Кб/с): [0: неабмежавана]"
	, "Лік злучэнняў"
	, "Агульны найбольшы лік злучэнняў:"
	, "Максімум піраў на асобны торэнт:"
	, "Колькасць слотаў аддачы на торэнт:"
	, "Дадатковыя слоты аддачы, калі хуткасць аддачы < 90%"
	, "Global Rate Limit Options"
	, "Абмежаваць таксама службовыя дадзеныя"
	, "Абмежаваць таксама злучэнні uTP"
	, "Іншыя налады BitTorrent"
	, "Уключыць сетку DHT"
	, "Запыт статыстыкі з трэкера"
	, "Укл. DHT для новых торэнтаў"
	, "Укл. абмен пірамі"
	, "Укл. распазнанне лакальных піраў"
	, "Ліміт хуткасці лакальных піраў"
	, "Паведаміць трэкеру IP/хост:"
	, "Шыфраванне пратаколу"
	, "Выходныя:"
	, "Дазволіць успадкаваныя злучэнні"
	, "Кіраваць паласой прапускання [uTP]"
	, "Дазволіць падтрымку UDP-трэкераў"
	, "Ліміт перачады"
	, "Абмежаванні"
	, "Тып ліміту:"
	, "Ліміт канала:"
	, "Расклад па днях:"
	, "Гісторыя запаўнення за абраны тэрмін:"
	, "Аддадзена:"
	, "Спампавана:"
	, "Аддадзена + Спаспавана:"
	, "Тэрмін часу:"
	, "Апошнія %d дзён"
	, "Скід гісторыі"
	, "Налады чарговасці"
	, "Найбольшы лік актыўных торэнтаў (аддача ці загрузка):"
	, "Найбольшы лік адначасовых загрузак:"
	, "Раздаваць пакуль [значэнні па змаўчанню]"
	, "Мінімальны рэйтынг (%):"
	, "Мінімальны час сідавання (хв):"
	, "Торэнтам на раздачы даваць большы прыярытэт, чым на загрузцы"
	, "Калі µTorrent дасягае мэты сідавання"
	, "Абмежаваць раздачу да (Кб/с): [0: спыніць]"
	, "Уключыць расклад"
	, "Табліца раскладу"
	, "Налады раскладу"
	, "Абмежаваць раздачу (Кб/с):"
	, "Абмежаваць загрузку (Кб/с):"
	, "Выкл. DHT пры адключэнні"
	, "Уключыць Web-інтэрфейс"
	, "Апазнанне"
	, "Імя:"
	, "Пароль:"
	, "Уключыць гасёвы акаўнт з імем:"
	, "Злучэнне"
	, "Іншы порт праслухоўвання (па змаўчанню - порт злучэння):"
	, "Забараніць доступ з дадзеных IP (пералік праз коскі):"
	, "Дазволіць падалены доступ да µTorrent"
	, "Апазнанне"
	, "Імя карыстача:"
	, "Пароль:"
	, "Прасунутыя налады [УВАГА: не змяняць!]"
	, "Значэнне:"
	, "Так"
	, "Не"
	, "OK"
	, "Спіс хуткасцей [пералік значэнняў праз коску]"
	, "Замяніць аўтаматычны спіс хуткасцей"
	, "Спіс хуткасцей раздачы:"
	, "Спіс хуткасцей загрузкі:"
	, "Сталыя пазнакі [пералік пазнак праз знак | ]"
	, "Пошукавікі [Фармат: імя|URL]"
	, "Асноўныя налады кэша"
	, "Дыскавы кэш служыць для ўтрымання часта карыстанай інфармацыі ў памяці, і змяншае нагрузку на цвёрды дыск. µTorrent звычайна кіруе кэшам аўтаматычна, але можна падладзіць яго праз гэтыя налады."
	, "Прызначыць памер кэша ўручную (Мб):"
	, "Паменьшыць выкарыстанне памяці, калі кэш не патрабуецца"
	, "Іншыя налады кэша"
	, "Дазволіць кэшаванне запісу на дыск"
	, "Сціраць нявыкарыстаныя блокі кожныя 2 хвіліны"
	, "Сціраць скончаныя часткі неадкладна"
	, "Дазволіць кэшаванне чытання з дыска"
	, "Адкл. кэш чытання, калі хуткасць аддачы нізкая"
	, "Выдаляць састарэлыя блокі з кэша"
	, "Аўтаматычна павялічваць памер запоўненага кэша"
	, "Адкл. Windows-кэш для запісу на дыск"
	, "Адкл. Windows-кэш для чытання з дыска"
	, "Запуск праграмы"
	, "Запускаць праграму пасля запампоўкі торэнта:"
	, "Запускаць праграму пры змене стану торэнта:"
	, "Выкарыстоўвайце наступныя каманды:\r\n%F - Назва загружанага файла (для аднафайлавых торэнтаў)\r\n%D - Тэчка з захаванымі файламі\r\n%N - Назва торэнта\r\n%S - Стан торэнта\r\n%L - Пазнака\r\n%T - Трэкер\r\n%M - Паведамленне ў радку стану (як у слупку стану)\r\n%I - 16-ковы інфа-хэш\r\n\r\nСтан - гэта камбінацыя:\r\nзапушчаны 1, праверка = 2, праверка-пасля-запуску = 4,\r\nправерана = 8, абмыла = 16, прыпынена = 32, аўта = 64, загружана = 128"
	, "Уласцівасці торэнта"
	, "Трэкеры (кожны трэкер з новага радка)"
	, "Налады шырыні канала"
	, "Макс. раздача (Кб/с): [0: па змаўчанні]"
	, "Макс. загрузка (Кб/с): [0: па змаўчанні]"
	, "Лік слотаў аддачы: [0: па змаўчанні]"
	, "Раздаваць пакуль"
	, "Замяніць налады па змаўчанні"
	, "Мін. суадносіны (%):"
	, "Мін. час сідавання (хвілін):"
	, "Іншыя налады"
	, "Пачатковая раздача"
	, "Дазволіць DHT"
	, "Абмен пірамі"
	, "Стужка"
	, "URL стужкі:"
	, "Псеўданім:"
	, "Падпіска"
	, "Не загружаць аўтаматычна ўсе запісы"
	, "Аўтаматычна загружаць усе запісы апублікаваныя ў стужцы"
	, "Укл. разумны фільтр эпізодаў"
	, "Стужкі||Абранае||Гісторыя||"
	, "All Feeds"
	, "Налады фільтра"
	, "Назва:"
	, "Фільтр:"
	, "Не:"
	, "Захаваць у:"
	, "Стужка:"
	, "Якасць:"
	, "Эпізод №: [напр. 1x12-14]"
	, "Фільтр па зыходных назвах, а не па дэкадаваных"
	, "Не пачынаць загрузку аўтаматычна"
	, "Разумны фільтр эп."
	, "Даць загрузцы вышэйшы прыярытэт"
	, "Мін. прамежак:"
	, "Пазнака для новых торэнтаў:"
	, "Дадаць RSS-стужку..."
	, "Змяніць стужку..."
	, "Адкл. стужку"
	, "Укл. стужку"
	, "Абнавіць стужку"
	, "Выдаліць стужку"
	, "Загрузка"
	, "Адкрыць URL у аглядальніку"
	, "Дадаць у абранае"
	, "Дадаць"
	, "Выдаліць"
	, "Усе"
	, "(Усе)"
	, "(заўсёды)||(адзін раз)||12 гадзін||1 дзень||2 дні||3 дні||4 дні||1 тыдзень||2 тыдні||3 тыдні||1 месяц||"
	, "Дадаць стужку RSS"
	, "Рэдагаваць стужку RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Сапраўды выдаліць RSS-стужку \"%s\"?"
	, "Поўнае імя"
	, "Імя"
	, "Эпізод"
	, "Фармат"
	, "Кодэк"
	, "Date"
	, "Стужка"
	, "URL крыніцы"
	, "IP"
	, "Порт"
	, "Кліент"
	, "Сцягі"
	, "%"
	, "Цікавасць"
	, "Запампоўка"
	, "Аддача"
	, "Запыты"
	, "Чакае"
	, "Аддадзена"
	, "Запампавана"
	, "Памылка хэша"
	, "Хуткасць"
	, "Макс.аддача"
	, "Макс.прыём"
	, "У чарзе"
	, "Неактыўна"
	, "Гатова"
	, "Першая частка"
	, "Імя"
	, "№ частак"
	, "%"
	, "Прыярытэт"
	, "Памер"
	, "прапусціць"
	, "нізкі"
	, "звычайны"
	, "высокі"
	, "Запампавана:"
	, "Аддадзена:"
	, "Сідаў:"
	, "Засталося:"
	, "Хутк. прыёму:"
	, "Хутк. раздачы:"
	, "Піраў:"
	, "Суадн.:"
	, "Шлях:"
	, "Хэш:"
	, "Агульнае"
	, "Перадача"
	, "%d з %d злучаныя (%d у Swarm)"
	, "D:%s U:%s - %s"
	, "Капіяваць"
	, "Скінуць"
	, "неабмежавана"
	, "IP -> назва хаста"
	, "Get File(s)"
	, "Не запампоўваць"
	, "Высокі прыярытэт"
	, "Нізкі прыярытэт"
	, "Звычайны прыярытэт"
	, "Капіяваць Magnet URI"
	, "Выдаліць дадзеныя"
	, "Сцерці .torrent"
	, "Сцерці .torrent і дадзеныя"
	, "Пераправерыць"
	, "Фарсаваны старт"
	, "Пазнака"
	, "Паўза"
	, "Уласцівасці"
	, "Ссунуць уніз у чарзе"
	, "Ссунуць уверх у чарзе"
	, "Выдаліць"
	, "Выдаліць І"
	, "Старт"
	, "Стоп"
	, "Актыўныя"
	, "Усе"
	, "Гатовыя"
	, "Загружаюцца"
	, "Неактыўныя"
	, "Без пазнакі"
	, "||Даст.||Даступнасць"
	, "Дададзены"
	, "Скончаны"
	, "Гатова"
	, "Запампавана"
	, "Запампоўка"
	, "Час"
	, "Пазнака"
	, "Імя"
	, "#"
	, "Піры"
	, "Засталося"
	, "Сіды"
	, "Сіды/піры"
	, "Суадн."
	, "Памер"
	, "URL крыніцы"
	, "Статут"
	, "Аддадзена"
	, "Раздача"
	, "Вы сапраўды жадаеце выдаліць %d абраных торэнтаў з усімі дадзенымі?"
	, "Вы сапраўды жадаеце выдаліць абраны торэнт з усімі дадзенымі?"
	, "Вы сапраўды жадаеце выдаліць %d абраных торэнтаў?"
	, "Вы сапраўды жадаеце выдаліць абраны торэнт?"
	, "Сапраўды выдаліць RSS-фільтр \"%s\"?"
	, "Праверана %:.1d%%"
	, "Загрузка"
	, "Памылка: %s"
	, "Скончана"
	, "Паўза"
	, "У чарзе"
	, "Сід у чарзе"
	, "Сідаванне"
	, "Спынена"
	, "Увядзіце пазнаку"
	, "Увядзіце новую пазнаку для вылучаных торэнтаў:"
	, "Новая пазнака..."
	, "Выдаліць пазнаку"
	, "Агульнае||Трэкеры||Піры||Часткі||Файлы||Хуткасць||Дзённік||"
	, "Дад. торэнт"
	, "Дад. торэнт з URL"
	, "Паўза"
	, "Налады"
	, "Ссунуць уніз у чарзе"
	, "Ссунуць уверх у чарзе"
	, "Выдаліць"
	, "RSS-загрузнік"
	, "Старт"
	, "Стоп"
	, "Файл"
	, "Адкрыць торэнт..."
	, "Адкрыць торэнт з URL..."
	, "Налады"
	, "Перавагі"
	, "Паказваць спіс катэгорый"
	, "Падрабязная інфармацыя"
	, "Статутны радок"
	, "Панэль прылад"
	, "Значкі на ўкладках"
	, "Даведка"
	, "Старонка µTorrent"
	, "Форумы µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Торэнты"
	, "Паставіць усё на паўзу"
	, "Працягнуць усе запампоўкі"
	, "D: %s%z/с"
	, " L: %z/с"
	, " O: %z/с"
	, " T: %Z"
	, "U: %s%z/с"
	, "б"
	, "Эб"
	, "Гб"
	, "Кб"
	, "Мб"
	, "Пб"
	, "Тб"
	, "Дадаткова"
	, "Хуткасць"
	, "Злучэнне"
	, "Кэшаванне"
	, "Тэчкі"
	, "Разам"
	, "Расклад"
	, "Чарговасць"
	, "Выгляд дадаткова"
	, "Налады выгляду"
	, "BitTorrent"
	, "Вэб-інтэрфейс"
	, "Ліміт перачады"
	, "Запусціць праграму"
	, "Падалены"
	, "Уласцівасці||Старт/Стоп||Адкр. тэчку||Паказаць паласу загрузкі||"
	, "Выкл.||Укл.||Фарсавана||"
	, "(няма)||Socks4||Socks5||HTTPS||HTTP||"
	, "Аддачы||Спампоўкі||Аддачы + спампоўкі||"
	, "Мб||Гб||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Імя"
	, "Значэнне"
	, "Пн||Аў||Ср||Чц||Пт||Сб||Нд||"
	, "Панядзелак||Аўторак||Серада||Чацвер||Пятніца||Субота||Нядзеля||"
	, "На ўсю"
	, "На ўсю - Вык. звычайныя агульныя абмежаванні хуткасці"
	, "Абмежаваны"
	, "Абмежаваны - Вык. абмежаванні хуткасці раскладу"
	, "Толькі раздача"
	, "Толькі раздача - Толькі раздача дадзеных (у тым ліку няскончаныя)"
	, "Выкл."
	, "Выкл. - Спыніць усе торэнты, якія не фарсаваныя"
	, "<= %d г."
	, "(Ігнараваць)"
	, "<= %d хв."
	, "%dдз. %dг."
	, "%dг. %dхв."
	, "%dхв. %dсек."
	, "%dсек."
	, "%dт. %dдз."
	, "%dг. %dт."
];

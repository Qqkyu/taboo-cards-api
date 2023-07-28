import { Card } from "@/types/card.types";

const CARDS = [
  {
    title: {
      en: "Rose",
      pl: "Róża",
    },
    forbiddenWords: {
      en: ["flower", "red", "love", "romantic", "date"],
      pl: ["kwiat", "czerwony", "miłość", "romantyczny", "randka"],
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sand", "ocean", "waves", "sun", "vacation"],
      pl: ["piasek", "ocean", "fale", "słońce", "wakacje"],
    },
    title: {
      en: "Beach",
      pl: "Plaża",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["curator", "display", "artifact", "admission", "history"],
      pl: ["kurator", "wystawa", "artefakt", "wstęp", "historia"],
    },
    title: {
      en: "Museum exhibit",
      pl: "Eksponat muzealny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["helium", "string", "colors", "inflate", "party"],
      pl: ["hel", "sznurek", "kolor", "nadmuchać", "impreza"],
    },
    title: {
      en: "Balloons",
      pl: "Balony",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gambling", "chips", "cards", "slot machines", "roulette"],
      pl: ["hazard", "żetony", "karty", "automat do gry", "ruletka"],
    },
    title: {
      en: "Casino",
      pl: "Kasyno",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blanket", "food", "drinks", "basket", "outdoors"],
      pl: ["koc", "jedzenie", "napoje", "koszyk", "na dworze"],
    },
    title: {
      en: "Picnic",
      pl: "Piknik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["grapes", "wine", "vine", "harvest", "tasting"],
      pl: ["winogrona", "wino", "winorośl", "plony", "degustacja"],
    },
    title: {
      en: "Vineyard",
      pl: "Winnica",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["basket", "sky", "pilot", "wind", "passengers"],
      pl: ["kosz", "niebo", "pilot", "wiatr", "pasażerowie"],
    },
    title: {
      en: "Hot air balloon",
      pl: "Balon na ogrzane powietrze",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["dance", "barre", "teacher", "pointe shoes", "practice"],
      pl: ["taniec", "drążek do ćwiczeń", "nauczyciel", "baletki", "trening"],
    },
    title: {
      en: "Ballet studio",
      pl: "Studio baletowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["classic", "tokens", "consoles", "high score", "fun"],
      pl: ["klasyka", "żetony", "konsola", "rekord", "zabawa"],
    },
    title: {
      en: "Video game arcade",
      pl: "Salon gier arcade",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["campfire", "nature", "activities", "friends", "adventure"],
      pl: ["ognisko", "natura", "zajęcia", "przyjaciele", "przygoda"],
    },
    title: {
      en: "Summer camp",
      pl: "Obóz letni",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["show", "celebration", "boom", "colors", "night sky"],
      pl: ["widowisko", "święto", "huk", "kolory", "nocne niebo"],
    },
    title: {
      en: "Fireworks display",
      pl: "Pokaz fajerwerków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["animals", "forest", "conservation", "habitat", "education"],
      pl: ["zwierzęta", "las", "ochrona", "środowisko", "edukacja"],
    },
    title: {
      en: "Wildlife sanctuary",
      pl: "Rezerwat dzikiej przyrody",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["clay", "wheel", "kiln", "glaze", "sculpting"],
      pl: ["glina", "koło", "piec", "glazura", "rzeźbienie"],
    },
    title: {
      en: "Pottery studio",
      pl: "Pracownia garncarska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["dye", "canvas", "brush", "art", "instruction"],
      pl: ["farba", "płótno", "pędzel", "sztuka", "instrukcje"],
    },
    title: {
      en: "Painting class",
      pl: "Zajęcia malarskie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["slope", "lift", "lodge", "snow", "winter"],
      pl: ["stok", "wyciąg", "chata", "śnieg", "zima"],
    },
    title: {
      en: "Ski resort",
      pl: "Ośrodek narciarski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beer", "alcohol", "food", "taproom", "atmosphere"],
      pl: ["piwo", "alkohol", "jedzenie", "knajpa", "atmosfera"],
    },
    title: {
      en: "Brewery pub",
      pl: "Pub",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["skatepark", "competition", "tricks", "ramps", "rails"],
      pl: ["skatepark", "rywalizacja", "trik", "rampa", "balustrada"],
    },
    title: {
      en: "Skateboarding competition",
      pl: "Zawody w skateboardingu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["slope", "lift", "lodge", "snow", "winter"],
      pl: ["stok", "wyciąg", "chata", "śnieg", "zima"],
    },
    title: {
      en: "Ski vacation",
      pl: "Urlop narciarski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["automotive", "engines", "designs", "models", "manufacturers"],
      pl: ["samochody", "silniki", "projekty", "modele", "producenci"],
    },
    title: {
      en: "Car show",
      pl: "Targ motoryzacyjny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["slides", "pools", "tubes", "sun", "fun"],
      pl: ["zjeżdżalnia", "basen", "rura", "słońce", "zabawa"],
    },
    title: {
      en: "Water park",
      pl: "Aquapark",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sculptures", "auction house", "bidding", "collectors", "paintings"],
      pl: ["rzeźby", "dom aukcyjny", "licytacja", "kolekcjoner", "obrazy"],
    },
    title: {
      en: "Art auction",
      pl: "Aukcja dzieł sztuki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["watching", "animals", "zookeeper", "education", "conservation"],
      pl: ["obserwowanie", "zwierzęta", "opiekun", "edukacja", "ochrona"],
    },
    title: {
      en: "Safari",
      pl: "Safari",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dance", "music", "partner", "steps", "rhythm"],
      pl: ["taniec", "muzyka", "partner", "kroki", "rytm"],
    },
    title: {
      en: "Salsa",
      pl: "Salsa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fish", "frozen", "hole", "bait", "reel"],
      pl: ["ryba", "zamarznięty", "dziura", "przynęta", "kołowrotek"],
    },
    title: {
      en: "Ice fishing",
      pl: "Wędkarstwo podlodowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["paint", "canvas", "brush", "art", "instruction"],
      pl: ["malować", "płótno", "pędzel", "sztuka", "instrukcje"],
    },
    title: {
      en: "Painting party",
      pl: "Impreza malarska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["aquatic", "animals", "exhibits", "zookeeper", "conservation"],
      pl: ["wodny", "zwierzęta", "wystawa", "opiekun", "ochrona"],
    },
    title: {
      en: "Zoo aquarium",
      pl: "Akwarium w zoo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tropical", "plants", "flowers", "nature", "beauty"],
      pl: ["tropikalny", "rośliny", "kwiaty", "natura", "piękno"],
    },
    title: {
      en: "Botanical garden",
      pl: "Ogród botaniczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["driver", "overtaking", "track", "speed", "adrenaline"],
      pl: ["kierowca", "wyprzedzanie", "tor", "prędkość", "adrenalina"],
    },
    title: {
      en: "Go-kart racing",
      pl: "Wyścigi gokartów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["brew", "brewery", "show", "tasting", "entertainment"],
      pl: ["browar", "warzyć", "wydarzenie", "degustacja", "rozrywka"],
    },
    title: {
      en: "Beer festival",
      pl: "Festiwal piwa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["music", "singing", "mic", "audience", "lyrics"],
      pl: ["muzyka", "śpiewanie", "mikrofon", "widownia", "tekst"],
    },
    title: {
      en: "Karaoke night",
      pl: "Wieczór karaoke",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["calm", "silence", "meditation", "nature", "relaxation"],
      pl: ["spokój", "cisza", "medytacja", "natura", "odprężenie"],
    },
    title: {
      en: "Yoga retreat",
      pl: "Rekolekcje jogi",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["crops", "tree", "harvest", "cider", "pick"],
      pl: ["plony", "drzewo", "zbiory", "cydr", "zrywać"],
    },
    title: {
      en: "Apple orchard",
      pl: "Sad jabłoniowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["grapes", "test", "glasses", "vineyard", "sommelier"],
      pl: ["winogrona", "próbować", "kieliszek", "winnica", "znawca"],
    },
    title: {
      en: "Wine tasting",
      pl: "Degustacja wina",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shoot", "training", "bow", "arrows", "target"],
      pl: ["polować", "trening", "łuk", "strzały", "cel"],
    },
    title: {
      en: "Archery range",
      pl: "Strzelnica łucznicza",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["break", "puzzles", "clues", "teamwork", "adventure"],
      pl: ["ucieczka", "zagadka", "wskazówki", "praca zespołowa", "przygoda"],
    },
    title: {
      en: "Escape room",
      pl: "Escape room",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paintings", "sculptures", "artist", "art", "exhibition"],
      pl: ["obrazy", "rzeźby", "artysta", "sztuka", "wystawa"],
    },
    title: {
      en: "Museum gallery",
      pl: "Galeria muzealna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["ocean", "captain", "ports", "buffet", "balcony"],
      pl: ["ocean", "kapitan", "porty", "bufet", "balkon"],
    },
    title: {
      en: "Cruise ship",
      pl: "Statek wycieczkowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["canvas", "brushes", "paint", "easel", "artist"],
      pl: ["płótno", "pędzle", "farba", "sztaluga", "artysta"],
    },
    title: {
      en: "Art studio",
      pl: "Pracownia artystyczna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fish", "coral", "tank", "underwater", "marine life"],
      pl: ["ryba", "koral", "zbiornik", "pod wodą", "flora i fauna morska"],
    },
    title: {
      en: "Aquarium exhibit",
      pl: "Wystawa akwarystyczna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["scoop", "cone", "toppings", "flavors", "dessert"],
      pl: ["gałka", "rożek", "dodatki", "smaki", "deser"],
    },
    title: {
      en: "Ice cream parlor",
      pl: "Lodziarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["field", "goal", "ball", "fans", "team"],
      pl: ["boisko", "bramka", "piłka", "kibice", "drużyna"],
    },
    title: {
      en: "Soccer stadium",
      pl: "Stadion piłkarski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["performers", "ringmaster", "clowns", "animals", "entertainment"],
      pl: ["wykonawcy", "konferansjer", "klaun", "zwierzęta", "rozrywka"],
    },
    title: {
      en: "Circus tent",
      pl: "Namiot cyrkowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["decks", "wheels", "trucks", "grip tape", "bearings"],
      pl: ["decki", "kółka", "trucki", "papier do deskorolki", "łożyska"],
    },
    title: {
      en: "Skateboard shop",
      pl: "Sklep z deskorolkami",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["rides", "attractions", "games", "food", "entertainment"],
      pl: ["przejażdżki", "atrakcje", "gry", "jedzenie", "zabawa"],
    },
    title: {
      en: "Theme park",
      pl: "Park rozrywki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beer", "barrel", "brewing", "hops", "fermentation"],
      pl: ["piwo", "beczka", "warzenie", "chmiel", "fermentacja"],
    },
    title: {
      en: "Brewery",
      pl: "Browar",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["course", "putter", "hole", "ball", "obstacles"],
      pl: ["kurs", "kij", "dołek", "piłka", "przeszkody"],
    },
    title: {
      en: "Miniature golf",
      pl: "Minigolf",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beer", "hops", "tour", "samples", "tasting"],
      pl: ["piwo", "chmiel", "wycieczka", "próbka", "degustacja"],
    },
    title: {
      en: "Brewery tour",
      pl: "Zwiedzanie browaru",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["rollerblades", "ramps", "bowl", "rails", "fun"],
      pl: ["deskorolka", "rampy", "bowl", "balustrada", "zabawa"],
    },
    title: {
      en: "Skateboard park",
      pl: "Skatepark",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["flowers", "art", "lane", "nature", "outdoors"],
      pl: ["kwiaty", "sztuka", "alejka", "natura", "na dworze"],
    },
    title: {
      en: "Sculpture garden",
      pl: "Ogród rzeźb",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["roll", "lane", "pins", "ball", "score"],
      pl: ["toczyć", "tor", "kręgiel", "kula", "wynik"],
    },
    title: {
      en: "Bowling league",
      pl: "Liga kręglarska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["harness", "ropes", "bouldering", "chalk", "scramble"],
      pl: ["uprząż", "lina", "wspinaczka", "skała", "wdrapywać się"],
    },
    title: {
      en: "Climbing gym",
      pl: "Centrum wspinaczkowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["stadium", "players", "ball", "bat", "home plate"],
      pl: ["stadion", "zawodnicy", "piłka", "kij", "baza"],
    },
    title: {
      en: "Baseball game",
      pl: "Mecz baseballa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["convention", "graphic novels", "collectors", "cosplay", "artists"],
      pl: ["konwent", "powieść graficzna", "kolekcjoner", "cosplay", "artyści"],
    },
    title: {
      en: "Comic book convention",
      pl: "Festiwal komiksu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["kort", "racket", "ball", "net", "umpire"],
      pl: ["court", "rakieta", "piłeczka", "siatka", "sędzia"],
    },
    title: {
      en: "Tennis match",
      pl: "Mecz tenisowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["coach", "ride", "romantic", "driver", "scenic"],
      pl: ["karoca", "koń", "romantyczny", "kierowca", "malowniczy"],
    },
    title: {
      en: "Horse carriage ride",
      pl: "Przejażdżka dorożką",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["exhibits", "exhibition", "education", "hands-on", "interactive"],
      pl: ["eksponaty", "wystawa", "edukacja", "praktyczny", "interaktywny"],
    },
    title: {
      en: "Science museum",
      pl: "Muzeum nauki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["rail", "scale", "tracks", "display", "enthusiasts"],
      pl: ["pociąg", "skala", "tory", "pokaz", "entuzjasta"],
    },
    title: {
      en: "Model train exhibit",
      pl: "Wystawa makiet kolejowych",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["leisure", "sport", "trail", "saddle", "reins"],
      pl: ["rekreacja", "sport", "szlak", "siodło", "cugle"],
    },
    title: {
      en: "Horseback riding",
      pl: "Jazda konna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["game", "stands", "field", "players", "referee"],
      pl: ["rozgrywka", "trybuny", "boisko", "zawodnicy", "sędzia"],
    },
    title: {
      en: "Soccer match",
      pl: "Mecz piłki nożnej",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bar", "test", "sample", "flavors", "cocoa"],
      pl: ["tabliczka", "próbować", "kosztować", "smaki", "kakao"],
    },
    title: {
      en: "Chocolate tasting",
      pl: "Degustacja czekolady",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["meeting", "evening", "friends", "competition", "fun"],
      pl: ["spotkanie", "noc", "przyjaciele", "rywalizacja", "zabawa"],
    },
    title: {
      en: "Board game night",
      pl: "Wieczór gier planszowych",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["solo", "comedy", "jokes", "laughter", "audience"],
      pl: ["solo", "komedia", "żart", "śmiech", "widownia"],
    },
    title: {
      en: "Stand-up",
      pl: "Stand-up",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cinema", "blockbuster", "screenings", "directors", "awards"],
      pl: ["kino", "hit", "projekcja", "reżyser", "nagroda"],
    },
    title: {
      en: "Film festival",
      pl: "Festiwal filmowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sky", "flame", "pilot", "altitude", "scenery"],
      pl: ["niebo", "płomień", "pilot", "wysokość", "krajobraz"],
    },
    title: {
      en: "Hot air balloon ride",
      pl: "Lot balonem na ogrzane powietrze",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pedestrian", "walk", "street", "safety", "lines"],
      pl: ["zebra", "chodzić", "ulica", "bezpieczeństwo", "pasy"],
    },
    title: {
      en: "Crosswalk",
      pl: "Przejście dla pieszych",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "spray", "statue", "pool", "decorative"],
      pl: ["woda", "mgiełka", "posąg", "sadzawka", "ozdobny"],
    },
    title: {
      en: "Fountain",
      pl: "Fontanna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["club", "ball", "hole", "green", "tee"],
      pl: ["klub", "piłka", "dołek", "zieleń", "cel"],
    },
    title: {
      en: "Golf course",
      pl: "Pole golfowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["time", "hands", "strap", "battery", "analog"],
      pl: ["czas", "wskazówka", "pasek", "bateria", "analogowy"],
    },
    title: {
      en: "Wristwatch",
      pl: "Zegarek na rękę",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cardboard", "container", "package", "storage", "shipping"],
      pl: ["karton", "kontener", "paczka", "przechowywanie", "transport"],
    },
    title: {
      en: "Box",
      pl: "Pudełko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wrist", "jewelry", "beads", "charm", "metal"],
      pl: ["nadgarstek", "biżuteria", "koralik", "talizman", "metal"],
    },
    title: {
      en: "Bracelet",
      pl: "Bransoletka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bristles", "handle", "sweep", "clean", "dust"],
      pl: ["włosie", "uchwyt", "zamiatać", "sprzątać", "kurz"],
    },
    title: {
      en: "Broom",
      pl: "Miotła",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["soap", "wand", "pop", "water", "iridescent"],
      pl: ["mydło", "różdżka", "szampan", "woda", "mieniący się"],
    },
    title: {
      en: "Bubble",
      pl: "Bąbelek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["flames", "wood", "warmth", "sausage", "sing-along"],
      pl: ["płomienie", "drewno", "ciepło", "kiełbasa", "śpiewanie"],
    },
    title: {
      en: "Campfire",
      pl: "Ognisko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paddle", "water", "boat", "float", "lake"],
      pl: ["wiosło", "woda", "łódka", "unosić się", "rzeka"],
    },
    title: {
      en: "Canoe",
      pl: "kanu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["vehicle", "engine", "tires", "steering wheel", "drive"],
      pl: ["pojazd", "silnik", "opony", "kierownica", "jechać"],
    },
    title: {
      en: "Car",
      pl: "Samochód",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["smoke", "tobacco", "filter", "pack", "lighter"],
      pl: ["palić", "tytoń", "filtr", "paczka", "zapalniczka"],
    },
    title: {
      en: "Cigarette",
      pl: "Papieros",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mammal", "antlers", "hooves", "forest", "hunt"],
      pl: ["ssak", "poroże", "kopyta", "las", "polować"],
    },
    title: {
      en: "Deer",
      pl: "Jeleń",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["words", "definitions", "language", "book", "lookup"],
      pl: ["słowo", "definicja", "język", "książka", "sprawdzenie"],
    },
    title: {
      en: "Dictionary",
      pl: "Słownik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["prehistoric", "bones", "extinct", "museum", "roar"],
      pl: ["prehistoryczny", "kości", "wymarły", "muzeum", "ryczeć"],
    },
    title: {
      en: "Dinosaur",
      pl: "Dinozaur",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["medicine", "physician", "diagnosis", "hospital", "health"],
      pl: ["medycyna", "lekarz", "diagnoza", "szpital", "zdrowie"],
    },
    title: {
      en: "Doctor",
      pl: "Doktor",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gem", "green", "precious", "stone", "jewelry"],
      pl: ["klejnot", "zielony", "cenny", "kamień", "biżuteria"],
    },
    title: {
      en: "Emerald",
      pl: "Szmaragd",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["relatives", "parents", "siblings", "home", "love"],
      pl: ["krewny", "rodzice", "rodzeństwo", "dom", "miłość"],
    },
    title: {
      en: "Family",
      pl: "Rodzina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["agriculture", "crops", "animals", "tractor", "village"],
      pl: ["rolnictwo", "plony", "zwierzęta", "traktor", "wieś"],
    },
    title: {
      en: "Farm",
      pl: "Farma",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["flames", "heat", "smoke", "burn", "camp"],
      pl: ["płomień", "ciepło", "dym", "palić się", "obóz"],
    },
    title: {
      en: "Fire",
      pl: "Ogień",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["country", "symbol", "patriotism", "wave", "pole"],
      pl: ["państwo", "symbol", "patriotyzm", "machać", "kijek"],
    },
    title: {
      en: "Flag",
      pl: "Flaga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["LED", "battery", "beam", "bulb", "dark"],
      pl: ["światło", "bateria", "promień", "żarówka", "ciemny"],
    },
    title: {
      en: "Flashlight",
      pl: "Latarka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["home", "chairs", "tables", "sofa", "design"],
      pl: ["dom", "krzesło", "stół", "sofa", "projekt"],
    },
    title: {
      en: "Furniture",
      pl: "Meble",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ski", "winter", "ride", "snow", "mountain"],
      pl: ["narty", "zima", "jechać", "śnieg", "góry"],
    },
    title: {
      en: "Chairlift",
      pl: "Wyciąg krzesełkowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["candles", "celebration", "dessert", "frosting", "party"],
      pl: ["świeczki", "uroczystość", "deser", "polewa", "przyjęcie"],
    },
    title: {
      en: "Birthday cake",
      pl: "Tort urodzinowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ride", "amusement park", "loops", "drops", "thrill"],
      pl: ["przejażdżka", "wesołe miasteczko", "pętla", "spadek", "dreszcz"],
    },
    title: {
      en: "Rollercoaster",
      pl: "Kolejka górska",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["playground", "chains", "seats", "push", "fun"],
      pl: ["plac zabaw", "łańcuch", "siedzenie", "pchać", "zabawa"],
    },
    title: {
      en: "Swings",
      pl: "Huśtawka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blades", "tower", "rotation", "energy", "Dutch"],
      pl: ["skrzydło", "wieża", "obracanie się", "energia", "Holendrzy"],
    },
    title: {
      en: "Windmill",
      pl: "Wiatrak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["image", "bones", "medical", "radiation", "diagnosis"],
      pl: ["obraz", "kość", "medyczny", "promieniowanie", "diagnoza"],
    },
    title: {
      en: "X-ray",
      pl: "prześwietlenie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["air", "latex", "helium", "inflate", "party"],
      pl: ["powietrze", "lateks", "hel", "nadmuchać", "przyjęcie"],
    },
    title: {
      en: "Balloon",
      pl: "Balon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["strings", "frets", "pick", "bluegrass", "music"],
      pl: ["struny", "próg", "kostka", "bluegrass", "muzyka"],
    },
    title: {
      en: "Banjo",
      pl: "Banjo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["honey", "apiculture", "wax", "colony", "pollinate"],
      pl: ["miód", "pszczoła", "wosk", "grupa", "zapylać"],
    },
    title: {
      en: "Beehive",
      pl: "Ul",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "orange", "crunch", "root", "salad"],
      pl: ["warzywo", "pomarańczowy", "chrupać", "korzeń", "sałatka"],
    },
    title: {
      en: "Carrot",
      pl: "Marchewka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fortress", "medieval", "towers", "moat", "royalty"],
      pl: ["forteca", "średniowieczny", "wieża", "fosa", "królewskość"],
    },
    title: {
      en: "Castle",
      pl: "Zamek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dairy", "cheddar", "Swiss", "brie", "crackers"],
      pl: ["nabiał", "cheddar", "szwajcarski", "brie", "krakers"],
    },
    title: {
      en: "Cheese",
      pl: "Ser",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["urban", "buildings", "skyscrapers", "traffic", "lights"],
      pl: ["zabudowa", "budynek", "wieżowiec", "ruch", "światła"],
    },
    title: {
      en: "City",
      pl: "Miasto",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sky", "white", "fluffy", "rain", "lightning"],
      pl: ["niebo", "biały", "puszysty", "deszcz", "błyskawica"],
    },
    title: {
      en: "Cloud",
      pl: "Chmura",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["money", "currency", "metal", "collectible", "flip"],
      pl: ["pieniądze", "waluta", "metal", "przedmiot kolekcjonerski", "rzucać"],
    },
    title: {
      en: "Coin",
      pl: "Moneta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["direction", "needle", "north", "south", "east"],
      pl: ["kierunek", "igła", "północ", "południe", "wschód"],
    },
    title: {
      en: "Compass",
      pl: "Kompas",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mammal", "moo", "milk", "farm", "pasture"],
      pl: ["ssak", "muczeć", "mleko", "farma", "pastwisko"],
    },
    title: {
      en: "Cow",
      pl: "Krowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["seafood", "crustacean", "claws", "legs", "boil"],
      pl: ["owoce morza", "skorupiak", "szczypce", "noga", "gotować"],
    },
    title: {
      en: "Crab",
      pl: "Krab",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plastic", "bank", "swipe", "purchase", "debt"],
      pl: ["plastik", "bank", "przesunąć", "kupować", "dług"],
    },
    title: {
      en: "Credit card",
      pl: "Karta kredytowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "rhythm", "steps", "ballroom", "club"],
      pl: ["muzyka", "rytm", "kroki", "sala balowa", "klub"],
    },
    title: {
      en: "Dance",
      pl: "Taniec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pet", "bark", "leash", "wag", "loyal"],
      pl: ["zwierzę", "szczekać", "smycz", "merdać", "lojalny"],
    },
    title: {
      en: "Dog",
      pl: "Pies",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mythical", "fire", "scales", "wings", "knight"],
      pl: ["mityczny", "ogień", "łuski", "skrzydła", "rycerz"],
    },
    title: {
      en: "Dragon",
      pl: "Smok",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mail", "letter", "seal", "address", "postage"],
      pl: ["wysyłać", "list", "pieczęć", "adres", "znaczek"],
    },
    title: {
      en: "Envelope",
      pl: "Koperta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["continent", "countries", "culture", "history", "travel"],
      pl: ["kontynent", "kraje", "kultura", "historia", "podróż"],
    },
    title: {
      en: "Europe",
      pl: "Europa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bloom", "petals", "fragrance", "garden", "pollinate"],
      pl: ["kwitnąć", "płatki", "zapach", "ogród", "zapylać"],
    },
    title: {
      en: "Flower",
      pl: "Kwiat",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["universe", "stars", "planets", "astronomy", "telescope"],
      pl: ["wszechświat", "gwiazda", "planeta", "astronomia", "teleskop"],
    },
    title: {
      en: "Galaxy",
      pl: "Galaktyka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wet", "umbrella", "thunder", "puddles", "storm"],
      pl: ["mokro", "parasol", "grzmot", "kałuże", "burza"],
    },
    title: {
      en: "Rain",
      pl: "Deszcz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["punching bag", "coach", "sparring", "jump rope", "fitness"],
      pl: ["worek treningowy", "trener", "sparowanie (się)", "skakanka", "sprawność fizyczna"],
    },
    title: {
      en: "Boxing gym",
      pl: "Sala bokserska",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["stage", "sound", "crowd", "singer", "instruments"],
      pl: ["scena", "dźwięk", "tłum", "piosenkarz", "instrument"],
    },
    title: {
      en: "Music concert",
      pl: "Koncert muzyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ropes", "corner", "referee", "gloves", "fighter"],
      pl: ["liny", "narożnik", "sędzia", "rękawice", "wojownik"],
    },
    title: {
      en: "Boxing ring",
      pl: "Ring bokserski",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sand", "net", "spike", "dig", "serve"],
      pl: ["piasek", "siatka", "zbicie", "kopać", "serwować"],
    },
    title: {
      en: "Beach volleyball",
      pl: "Siatkówka plażowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sermon", "choir", "hymn", "prayer", "worship"],
      pl: ["kazanie", "chór", "pieśń religijna", "modlitwa", "czcić"],
    },
    title: {
      en: "Church service",
      pl: "Nabożeństwo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ghosts", "scare", "horror", "spooky", "Halloween"],
      pl: ["duchy", "straszyć", "przerażenie", "upiorny", "Halloween"],
    },
    title: {
      en: "Haunted house",
      pl: "Nawiedzony dom",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["animals", "cages", "zookeeper", "education", "visitors"],
      pl: ["zwierzęta", "klatki", "opiekun zwierząt", "edukacja", "goście"],
    },
    title: {
      en: "Zoo exhibit",
      pl: "Wystawa w zoo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ropes", "summit", "peak", "equipment", "rocks"],
      pl: ["liny", "szczyt", "wierzchołek", "ekwipunek", "skały"],
    },
    title: {
      en: "Mountain climbing",
      pl: "Alpinizm",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["books", "shelves", "bestseller", "author", "reading"],
      pl: ["książki", "półki", "bestseller", "autor", "czytanie"],
    },
    title: {
      en: "Bookstore",
      pl: "Księgarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "swimmer", "diving board", "lane", "lifeguard"],
      pl: ["woda", "pływak", "trampolina", "tor", "ratownik"],
    },
    title: {
      en: "Swimming pool",
      pl: "Basen",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fireplace", "hot cocoa", "cabin", "winter", "snow"],
      pl: ["kominek", "gorąca czekolada", "chata", "zima", "śnieg"],
    },
    title: {
      en: "Ski lodge",
      pl: "Schronisko narciarskie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["chase", "cyclist", "bike", "speed", "helmet"],
      pl: ["ścigać", "rowerzysta", "rower", "prędkość", "kask"],
    },
    title: {
      en: "Bicycle race",
      pl: "Wyścig kolarski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["doll", "stage", "entertainment", "theater", "kids"],
      pl: ["kukiełki", "scena", "rozrywka", "teatr", "dzieci"],
    },
    title: {
      en: "Puppet show",
      pl: "Przedstawienie lalkowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water polo", "reservoir", "swimming", "diving", "boating"],
      pl: ["piłka wodna", "akwen", "pływanie", "nurkowanie", "wodniactwo"],
    },
    title: {
      en: "Water sports",
      pl: "Sporty wodne",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["experiments", "microscope", "beaker", "hypothesis", "research"],
      pl: ["eksperymenty", "mikroskop", "zlewka", "hipoteza", "badanie"],
    },
    title: {
      en: "Science lab",
      pl: "Pracownia naukowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["plants", "flowers", "leaf", "nature", "beauty"],
      pl: ["rośliny", "kwiaty", "liść", "natura", "piękno"],
    },
    title: {
      en: "Botanical greenhouse",
      pl: "Szklarnia botaniczna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["animal", "owners", "leash", "toys", "play"],
      pl: ["zwierzę", "właściciele", "smycz", "zabawki", "bawić się"],
    },
    title: {
      en: "Dog park",
      pl: "Psi park",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["obstacle", "rider", "jockey", "track", "betting"],
      pl: ["przeszkoda", "jeździec", "dżokej", "tor", "zakłady"],
    },
    title: {
      en: "Horse racing",
      pl: "Wyścigi konne",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dance", "grace", "music", "tutu", "pointe shoes"],
      pl: ["taniec", "gracja", "muzyka", "tutu", "baletki"],
    },
    title: {
      en: "Ballet",
      pl: "Balet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["skates", "wheels", "music", "sport", "fun"],
      pl: ["wrotki", "kółka", "muzyka", "sport", "zabawa"],
    },
    title: {
      en: "Roller skating rink",
      pl: "Tor wrotkarski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["outfit", "accessories", "masks", "Halloween", "dress-up"],
      pl: ["strój", "akcesoria", "maski", "Halloween", "przebieranki"],
    },
    title: {
      en: "Costume shop",
      pl: "Sklep z kostiumami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["court", "ball", "hoop", "fans", "players"],
      pl: ["boisko", "piłka", "obręcz", "kibice", "zawodnicy"],
    },
    title: {
      en: "Basketball arena",
      pl: "Arena do koszykówki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["rose", "arrangements", "bouquets", "vase", "fragrance"],
      pl: ["róża", "kompozycja", "bukiet", "wazon", "zapach"],
    },
    title: {
      en: "Flower shop",
      pl: "Kwiaciarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["grassy", "racket", "ball", "net", "umpire"],
      pl: ["trawiasty", "rakieta", "piłeczka", "siatka", "sędzia"],
    },
    title: {
      en: "Tennis court",
      pl: "Kort tenisowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["instrument", "strings", "amplifier", "pedals", "picks"],
      pl: ["instrument", "struny", "wzmacniacz", "pedał", "kostka"],
    },
    title: {
      en: "Guitar store",
      pl: "Sklep z gitarami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["walking tour", "trail", "woods", "wildlife", "exercise"],
      pl: ["wędrówka", "szlak", "las", "natura", "ruch"],
    },
    title: {
      en: "Nature hike",
      pl: "Wycieczka przyrodnicza",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["paintings", "sculptures", "exhibits", "artists", "curator"],
      pl: ["obrazy", "rzeźby", "eksponaty", "artyści", "kurator"],
    },
    title: {
      en: "Art gallery",
      pl: "Galeria sztuki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lane", "gutter", "pins", "ball", "shoes"],
      pl: ["tor", "rów", "kręgiel", "kula", "buty"],
    },
    title: {
      en: "Bowling alley",
      pl: "Kręgielnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dance", "grace", "music", "tutu", "pointe shoes"],
      pl: ["taniec", "gracja", "muzyka", "tutu", "baletki"],
    },
    title: {
      en: "Ballet performance",
      pl: "Przedstawienie baletowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["entertainment", "music", "performers", "atmosphere", "drinks"],
      pl: ["rozrywka", "muzyka", "wykonawca", "klimat", "napoje"],
    },
    title: {
      en: "Jazz club",
      pl: "Klub jazzowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bubble", "graphic novels", "superheroes", "collect", "merchandise"],
      pl: ["dymek", "powieść graficzna", "superbohaterowie", "kolekcjonować", "towar"],
    },
    title: {
      en: "Comic book store",
      pl: "Sklep z komiksami",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["music", "performer", "stage", "audience", "lights"],
      pl: ["muzyka", "artysta", "scena", "widownia", "światło"],
    },
    title: {
      en: "Concert",
      pl: "Koncert",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sport", "track", "jockey", "betting", "finish line"],
      pl: ["sport", "tor", "dżokej", "zakłady", "meta"],
    },
    title: {
      en: "Horse race",
      pl: "Wyścig konny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["disguise", "party", "theme", "dress up", "fun"],
      pl: ["kostium", "impreza", "motyw", "ubrać się", "zabawa"],
    },
    title: {
      en: "Costume party",
      pl: "Bal przebierańców",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["esport", "computer", "players", "competition", "prize"],
      pl: ["esport", "komputer", "zawodnik", "zawody", "nagroda"],
    },
    title: {
      en: "Video game tournament",
      pl: "Turniej gier wideo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["rhythm", "tournament", "judges", "pair", "routine"],
      pl: ["rytm", "turniej", "sędzia", "para", "układ"],
    },
    title: {
      en: "Dance competition",
      pl: "Zawody taneczne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["wheel", "skatepark", "instructor", "trick", "technique"],
      pl: ["kółko", "skatepark", "instruktor", "trik", "technika"],
    },
    title: {
      en: "Skateboarding lesson",
      pl: "Lekcja jazdy na deskorolce",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["sea", "sand", "sun", "water", "relaxation"],
      pl: ["morze", "piasek", "słońce", "woda", "odpoczynek"],
    },
    title: {
      en: "Beach day",
      pl: "Dzień plażowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["handcraft", "lesson", "clay", "wheel", "art"],
      pl: ["rękodzieło", "zajęcia", "glina", "koło", "sztuka"],
    },
    title: {
      en: "Pottery class",
      pl: "Warsztaty ceramiczne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fun", "arena", "players", "targets", "strategy"],
      pl: ["zabawa", "arena", "zawodnik", "cel", "strategia"],
    },
    title: {
      en: "Laser tag",
      pl: "Laser tag",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["trip", "greenhouse", "plants", "flowers", "nature"],
      pl: ["wycieczka", "szklarnia", "rośliny", "kwiaty", "natura"],
    },
    title: {
      en: "Botanical garden tour",
      pl: "Zwiedzanie ogrodu botanicznego",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tasting", "refreshment", "class", "canvas", "brush"],
      pl: ["degustacja", "przekąska", "zajęcia", "płótno", "pędzel"],
    },
    title: {
      en: "Wine and painting",
      pl: "Malowanie przy winie",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["bun", "patty", "cheese", "seasoning", "fast food"],
      pl: ["bułka", "mięso", "ser", "przyprawa", "fast food"],
    },
    title: {
      en: "Hamburger",
      pl: "Hamburger",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["countries", "continents", "oceans", "geography", "borders"],
      pl: ["państwo", "kontynent", "ocean", "geografia", "granica"],
    },
    title: {
      en: "World map",
      pl: "Mapa świata",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pages", "reading", "literature", "novel", "library"],
      pl: ["strona", "czytanie", "literatura", "powieść", "biblioteka"],
    },
    title: {
      en: "Book",
      pl: "Książka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["glass", "plastic", "drink", "container", "cap"],
      pl: ["szkło", "plastik", "pić", "pojemnik", "zakrętka"],
    },
    title: {
      en: "Bottle",
      pl: "Butelka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["loaf", "wheat", "yeast", "slice", "bakery"],
      pl: ["bochenek", "pszenica", "drożdże", "kromka", "piekarnia"],
    },
    title: {
      en: "Bread",
      pl: "Chleb",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "pollinate", "stripes", "wings", "buzz"],
      pl: ["owad", "zapylać", "paski", "skrzydła", "bzyczeć"],
    },
    title: {
      en: "Bumblebee",
      pl: "Trzmiel",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["dairy", "spread", "cow", "toast", "yellow"],
      pl: ["nabiał", "smarować", "krowa", "tost", "żółty"],
    },
    title: {
      en: "Butter",
      pl: "Masło",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["domestic", "whiskers", "paws", "meow", "purr"],
      pl: ["domowy", "wąsy", "łapa", "miauczenie", "mruczeć"],
    },
    title: {
      en: "Cat",
      pl: "Kot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "white", "florets", "healthy", "recipe"],
      pl: ["warzywo", "biały", "różyczka", "zdrowy", "przepis"],
    },
    title: {
      en: "Cauliflower",
      pl: "Kalafior",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dessert", "sweet", "bake", "chocolate", "dough"],
      pl: ["deser", "słodki", "piec", "czekolada", "ciasto"],
    },
    title: {
      en: "Cookie",
      pl: "Ciasteczko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["color", "wax", "drawing", "paper", "art"],
      pl: ["kolor", "świecowa", "rysunek", "papier", "sztuka"],
    },
    title: {
      en: "Crayon",
      pl: "Kredka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gem", "precious", "carat", "stone", "ring"],
      pl: ["klejnot", "cenny", "karat", "kamień", "pierścionek"],
    },
    title: {
      en: "Diamond",
      pl: "Diament",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["meal", "food", "eat", "restaurant", "plate"],
      pl: ["posiłek", "jedzenie", "jeść", "restauracja", "talerz"],
    },
    title: {
      en: "Dinner",
      pl: "Obiad",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["entrance", "knob", "lock", "hinge", "open"],
      pl: ["wejście", "gałka", "zamek", "zawias", "otwierać"],
    },
    title: {
      en: "Door",
      pl: "Drzwi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["percussion", "rhythm", "beats", "stick", "music"],
      pl: ["perkusja", "rytm", "takt", "pałeczka", "muzyka"],
    },
    title: {
      en: "Drum",
      pl: "Bęben",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "water", "quack", "feathers", "pond"],
      pl: ["ptak", "woda", "kwakać", "pióro", "staw"],
    },
    title: {
      en: "Duck",
      pl: "Kaczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["message", "inbox", "send", "receive", "attachment"],
      pl: ["wiadomość", "skrzynka odbiorcza", "wysyłać", "odbierać", "załącznik"],
    },
    title: {
      en: "Email",
      pl: "Email",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["power", "electricity", "fuel", "source", "renewable"],
      pl: ["prąd", "elektryczność", "paliwo", "źródło", "odnawialny"],
    },
    title: {
      en: "Energy",
      pl: "Energia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mythical", "wings", "magic", "wand", "pixie"],
      pl: ["mityczny", "skrzydło", "magia", "różdżka", "chochlik"],
    },
    title: {
      en: "Fairy",
      pl: "Wróżka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bird", "light", "soft", "write", "pillow"],
      pl: ["ptak", "lekki", "miękki", "pisać", "poduszka"],
    },
    title: {
      en: "Feather",
      pl: "Pióro",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["amusement park", "ride", "circle", "gondola", "height"],
      pl: ["wesołe miasteczko", "przejażdżka", "koło", "gondola", "wysokość"],
    },
    title: {
      en: "Ferris wheel",
      pl: "Diabelski młyn",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["luck", "wealth", "fate", "future", "prediction"],
      pl: ["szczęście", "majątek", "los", "przyszłość", "przepowiednia"],
    },
    title: {
      en: "Fortune",
      pl: "Fortuna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["amphibian", "croak", "leap", "pond", "lily pad"],
      pl: ["płaz", "rechotać", "skakać", "staw", "liść lilii wodnej"],
    },
    title: {
      en: "Frog",
      pl: "Żaba",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["play", "competition", "board", "computer", "score"],
      pl: ["bawić się", "zawody", "planszowa", "komputer", "wynik"],
    },
    title: {
      en: "Game",
      pl: "Gra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shade", "sand", "portable", "colorful", "summer"],
      pl: ["cień", "piasek", "przenośny", "kolorowy", "lato"],
    },
    title: {
      en: "Beach umbrella",
      pl: "Parasol plażowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["track", "speed", "driver", "pit stop", "winner"],
      pl: ["tor", "prędkość", "kierowca", "pit stop", "zwycięzca"],
    },
    title: {
      en: "Car racing",
      pl: "Wyścigi samochodowe",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fish", "sharks", "coral", "underwater", "marine life"],
      pl: ["ryba", "rekin", "koral", "pod wodą", "flora i fauna morska"],
    },
    title: {
      en: "Aquarium tunnel",
      pl: "Tunel akwariowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["barista", "tea", "latte", "espresso", "muffin"],
      pl: ["barista", "herbata", "latte", "espresso", "muffinka"],
    },
    title: {
      en: "Coffee shop",
      pl: "Kawiarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stage", "orchestra", "acoustics", "seats", "music"],
      pl: ["scena", "orkiestra", "akustyka", "siedzenia", "muzyka"],
    },
    title: {
      en: "Concert hall",
      pl: "Hala koncertowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wine", "barrel", "grapes", "tasting", "vineyard"],
      pl: ["wino", "beczka", "winogrono", "degustacja", "winnica"],
    },
    title: {
      en: "Winery",
      pl: "Winiarnia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["flowers", "trees", "trails", "garden", "picnic"],
      pl: ["kwiaty", "drzewa", "ścieżki", "ogród", "piknik"],
    },
    title: {
      en: "Botanical park",
      pl: "Park botaniczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["stage", "actors", "costumes", "script", "audience"],
      pl: ["scena", "aktorzy", "kostiumy", "scenariusz", "widownia"],
    },
    title: {
      en: "Theater play",
      pl: "Sztuka teatralna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["music", "energy", "drinks", "DJ", "party"],
      pl: ["muzyka", "energia", "napoje", "DJ", "impreza"],
    },
    title: {
      en: "Dance club",
      pl: "Klub taneczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sweets", "treats", "chocolate", "lollipop", "sugar"],
      pl: ["cukierek", "przysmaki", "czekolada", "lizak", "cukier"],
    },
    title: {
      en: "Candy store",
      pl: "Sklep ze słodyczami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sport", "skates", "puck", "stick", "goalie"],
      pl: ["sport", "łyżwy", "krążek", "kij", "bramkarz"],
    },
    title: {
      en: "Ice hockey",
      pl: "Hokej na lodzie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sweets", "lollipop", "machines", "sugar", "treats"],
      pl: ["słodycze", "lizak", "maszyny", "cukier", "przysmaki"],
    },
    title: {
      en: "Candy factory",
      pl: "Fabryka cukierków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fish", "tanks", "accessories", "water", "pets"],
      pl: ["ryba", "zbiornik", "akcesoria", "woda", "zwierzęta"],
    },
    title: {
      en: "Aquarium store",
      pl: "Sklep akwarystyczny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["bands", "stages", "fans", "food", "drinks"],
      pl: ["zespoły", "sceny", "fani", "jedzenie", "picie"],
    },
    title: {
      en: "Music festival",
      pl: "Festiwal muzyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wildlife", "trails", "conservation", "birdwatching", "outdoors"],
      pl: ["dzika przyroda", "szlaki", "ochrona", "obserwowanie ptaków", "na dworze"],
    },
    title: {
      en: "Nature reserve",
      pl: "Rezerwat przyrody",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ice", "skates", "puck", "stick", "goalie"],
      pl: ["lód", "łyżwy", "krążek", "kij", "bramkarz"],
    },
    title: {
      en: "Hockey rink",
      pl: "Lodowisko hokejowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["models", "runway", "clothing", "style", "designers"],
      pl: ["model", "wybieg", "odzież", "styl", "projektant"],
    },
    title: {
      en: "Fashion show",
      pl: "Pokaz mody",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["silversmith", "diamonds", "gold", "silver", "precious stones"],
      pl: ["biżuteria", "diament", "złoto", "srebro", "kamienie szlachetne"],
    },
    title: {
      en: "Jewelry store",
      pl: "Jubiler",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["angling", "boat", "tackle", "bait", "reel"],
      pl: ["wędkarstwo", "łódka", "sprzęt", "przynęta", "kołowrotek"],
    },
    title: {
      en: "Fishing trip",
      pl: "Wycieczka na ryby",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sports venue", "players", "ball", "bat", "home plate"],
      pl: ["obiekt sportowy", "zawodnicy", "piłka", "kij", "baza"],
    },
    title: {
      en: "Baseball stadium",
      pl: "Stadion baseballowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["frozen", "cones", "flavors", "toppings", "desserts"],
      pl: ["mrożony", "rożek", "smaki", "polewa", "deser"],
    },
    title: {
      en: "Ice cream shop",
      pl: "Lodziarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["board game", "tournament", "strategy", "players", "competition"],
      pl: ["gra planszowa", "turniej", "strategia", "zawodnicy", "rywalizacja"],
    },
    title: {
      en: "Chess tournament",
      pl: "Turniej szachowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["height", "skis", "snow", "ramp", "adrenaline"],
      pl: ["wysokość", "narty", "śnieg", "pochylnia", "adrenalina"],
    },
    title: {
      en: "Ski jump",
      pl: "Skocznia narciarska",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["picture", "wildlife", "landscapes", "plant", "camera"],
      pl: ["zdjęcie", "natura", "krajobraz", "roślina", "aparat"],
    },
    title: {
      en: "Nature photography",
      pl: "Fotografia przyrodnicza",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["court", "ball", "hoop", "dribble", "slam dunk"],
      pl: ["boisko", "piłka", "obręcz", "kozłować", "wsad"],
    },
    title: {
      en: "Basketball game",
      pl: "Mecz koszykówki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sport", "racket", "ball", "coach", "instruction"],
      pl: ["sport", "rakieta", "piłeczka", "trener", "instrukcja"],
    },
    title: {
      en: "Tennis lesson",
      pl: "Lekcja tenisa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sugar", "sweets", "machines", "cocoa", "treats"],
      pl: ["cukier", "słodycze", "maszyna", "kakao", "smakołyk"],
    },
    title: {
      en: "Chocolate factory",
      pl: "Fabryka czekolady",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["view", "binoculars", "nature", "habitat", "recreational"],
      pl: ["oglądać", "lornetka", "natura", "środowisko", "rekreacyjny"],
    },
    title: {
      en: "Birdwatching",
      pl: "Obserwacja ptaków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["rhythm", "music", "instructor", "steps", "choreography"],
      pl: ["rytm", "muzyka", "instruktor", "kroki", "choreografia"],
    },
    title: {
      en: "Dance class",
      pl: "Lekcja tańca",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["pin", "lane", "teams", "ditch", "scores"],
      pl: ["kręgiel", "tor", "drużyna", "rów", "wynik"],
    },
    title: {
      en: "Bowling tournament",
      pl: "Turniej bowlingowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cuisine", "lesson", "recipe", "ingredients", "chef"],
      pl: ["kulinaria", "zajęcia", "przepis", "składniki", "kucharz"],
    },
    title: {
      en: "Cooking class",
      pl: "Kurs gotowania",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["kayak", "water", "waterfall", "paddle", "adventure"],
      pl: ["kajak", "woda", "wodospad", "wiosło", "przygoda"],
    },
    title: {
      en: "River rafting",
      pl: "Spływ rzeką",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["painting", "history", "exhibits", "collections", "tours"],
      pl: ["obraz", "historia", "eksponaty", "kolekcja", "zwiedzanie"],
    },
    title: {
      en: "Art museum",
      pl: "Muzeum sztuki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["recreation", "fun", "jumps", "flips", "foam"],
      pl: ["rozrywka", "zabawa", "skakać", "salto", "pianka"],
    },
    title: {
      en: "Trampoline park",
      pl: "Park trampolin",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Christmas", "food", "vendors", "music", "crafts"],
      pl: ["Boże Narodzenie", "jedzenie", "sprzedawca", "muzyka", "rzemiosło"],
    },
    title: {
      en: "Street fair",
      pl: "Jarmark uliczny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["camera", "art", "gallery", "artist", "display"],
      pl: ["aparat", "sztuka", "galeria", "artysta", "pokaz"],
    },
    title: {
      en: "Photography exhibit",
      pl: "Wystawa fotograficzna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["walk", "path", "nature", "backpack", "trekking"],
      pl: ["chodzić", "ścieżka", "natura", "plecak", "wyprawa"],
    },
    title: {
      en: "Hiking trail",
      pl: "Szlak turystyczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["hoop", "slam dunk", "teams", "court", "ball"],
      pl: ["obręcz", "wsad", "drużyna", "boisko", "piłka"],
    },
    title: {
      en: "Basketball tournament",
      pl: "Turniej koszykówki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Banksy", "public", "murals", "graffiti", "building"],
      pl: ["Banksy", "publiczny", "mural", "graffiti", "budynek"],
    },
    title: {
      en: "Street art",
      pl: "Sztuka uliczna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["singer", "music", "microphone", "band", "crowd"],
      pl: ["piosenkarz", "muzyka", "mikrofon", "zespół", "tłum"],
    },
    title: {
      en: "Rock concert",
      pl: "Koncert rockowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["referee", "stick", "puck", "skates", "teams"],
      pl: ["sędzia", "kij", "krążek", "łyżwy", "drużyna"],
    },
    title: {
      en: "Ice hockey game",
      pl: "Mecz hokeja na lodzie",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["lock", "open", "latch", "twist", "entrance"],
      pl: ["zamek", "otwierać", "zatrzask", "kręcić", "wejście"],
    },
    title: {
      en: "Door knob",
      pl: "Gałka do drzwi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["kid", "leaf", "ladder", "branches", "fun"],
      pl: ["dziecko", "liść", "drabina", "gałąź", "zabawa"],
    },
    title: {
      en: "Tree house",
      pl: "Domek na drzewie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["warmth", "soft", "comfort", "cover", "snuggle"],
      pl: ["ciepło", "miękki", "komfort", "przykryć", "tulić"],
    },
    title: {
      en: "Blanket",
      pl: "Koc",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["safety", "head", "strap", "protection", "ride"],
      pl: ["bezpieczeństwo", "głowa", "pasek", "ochrona", "jechać"],
    },
    title: {
      en: "Bicycle helmet",
      pl: "Kask rowerowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["campfire", "s'more", "fluffy", "sweet", "sticky"],
      pl: ["ognisko", "s'more", "puszysty", "słodki", "kleiste"],
    },
    title: {
      en: "Marshmallow",
      pl: "Pianka cukrowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["spread", "sandwich", "creamy", "crunchy", "snack"],
      pl: ["smarować", "kanapka", "kremowy", "chrupkie", "przekąska"],
    },
    title: {
      en: "Peanut butter",
      pl: "Masło orzechowe",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["farm", "machine", "plow", "wheels", "agriculture"],
      pl: ["farma", "maszyna", "pług", "koło", "rolnictwo"],
    },
    title: {
      en: "Tractor",
      pl: "Traktor",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["congestion", "cars", "delay", "road", "frustration"],
      pl: ["zator", "samochód", "opóźnienie", "ulica", "frustracja"],
    },
    title: {
      en: "Traffic jam",
      pl: "Korek drogowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["time", "wake up", "snooze", "ringing", "hour"],
      pl: ["czas", "wstawać", "drzemka", "dzwonić", "godzina"],
    },
    title: {
      en: "Alarm clock",
      pl: "Budzik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mammal", "fur", "claws", "forest", "hibernate"],
      pl: ["mammal", "futro", "pazur", "las", "hibernować"],
    },
    title: {
      en: "Bear",
      pl: "Niedźwiedź",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["feathers", "wings", "beak", "chirp", "fly"],
      pl: ["pióro", "skrzydła", "dziób", "ćwierkanie", "latać"],
    },
    title: {
      en: "Bird",
      pl: "Ptak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["party", "cake", "candles", "presents", "age"],
      pl: ["impreza", "ciasto", "świeczki", "prezent", "wiek"],
    },
    title: {
      en: "Birthday",
      pl: "Urodziny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["chalk", "eraser", "classroom", "teacher", "learning"],
      pl: ["kreda", "gąbka", "klasa", "nauczyciel", "uczyć się"],
    },
    title: {
      en: "Blackboard",
      pl: "Tablica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "black", "sweet", "tart", "pie"],
      pl: ["owoce", "czarny", "słodki", "placek", "ciasto"],
    },
    title: {
      en: "Blueberry",
      pl: "Jagody",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "oars", "engine", "sail", "cruise"],
      pl: ["woda", "wiosło", "silnik", "żeglować", "pływać"],
    },
    title: {
      en: "Boat",
      pl: "Łódka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "wings", "metamorphosis", "flutter", "pollinate"],
      pl: ["owad", "skrzydła", "przeobrażenie", "fruwać", "zapylać"],
    },
    title: {
      en: "Butterfly",
      pl: "Motyl",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sweets", "sugar", "flavors", "wrapper", "chocolate"],
      pl: ["słodycze", "cukier", "smak", "papierek", "czekolada"],
    },
    title: {
      en: "Candy",
      pl: "Cukierek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["furniture", "seat", "backrest", "legs", "cushion"],
      pl: ["meble", "siedzenie", "oparcie", "nóżka", "poduszka"],
    },
    title: {
      en: "Chair",
      pl: "Krzesło",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["poultry", "meat", "wings", "eggs", "farm"],
      pl: ["drób", "mięso", "skrzydła", "jajko", "farma"],
    },
    title: {
      en: "Chicken",
      pl: "Kurczak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["candy", "cocoa", "sweet", "bars", "dessert"],
      pl: ["słodycze", "kakao", "cukierek", "tabliczka", "deser"],
    },
    title: {
      en: "Chocolate",
      pl: "Czekolada",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "kernels", "cob", "yellow", "butter"],
      pl: ["warzywo", "ziarno", "kolba", "żółty", "masło"],
    },
    title: {
      en: "Corn",
      pl: "Kukurydza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "oval", "white", "yolk", "shell"],
      pl: ["jedzenie", "owal", "białko", "żółtko", "skorupka"],
    },
    title: {
      en: "Egg",
      pl: "Jajko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["workout", "fitness", "gym", "sweat", "health"],
      pl: ["trening", "sprawność", "siłownia", "pot", "zdrowie"],
    },
    title: {
      en: "Exercise",
      pl: "Ćwiczenie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["production", "assembly line", "machinery", "workers", "industry"],
      pl: ["produkcja", "linia montażowa", "maszyna", "pracownik", "przemysł"],
    },
    title: {
      en: "Factory",
      pl: "Fabryka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["celebration", "music", "food", "culture", "tradition"],
      pl: ["święto", "muzyka", "jedzenie", "kultura", "tradycja"],
    },
    title: {
      en: "Festival",
      pl: "Festiwal",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["apple", "juicy", "sweet", "vitamin", "peel"],
      pl: ["jabłko", "soczysty", "słodki", "witaminy", "obierać"],
    },
    title: {
      en: "Fruit",
      pl: "Owoc",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["metal", "valuable", "jewelry", "treasure", "currency"],
      pl: ["metal", "cenny", "biżuteria", "skarb", "waluta"],
    },
    title: {
      en: "Gold",
      pl: "Złoto",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "vine", "juice", "wine", "cluster"],
      pl: ["owoc", "pnącze", "sok", "wino", "kiść"],
    },
    title: {
      en: "Grape",
      pl: "Winogrono",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sweet", "sticky", "bee", "comb", "tea"],
      pl: ["słodki", "lepki", "pszczoła", "plaster", "herbata"],
    },
    title: {
      en: "Honey",
      pl: "Miód",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["thought", "creativity", "brain", "inspiration", "concept"],
      pl: ["myśl", "kreatywność", "mózg", "inspiracja", "idea"],
    },
    title: {
      en: "Idea",
      pl: "Pomysł",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "cat", "spotted", "jungle", "car"],
      pl: ["zwierzę", "kot", "cętki", "dżungla", "samochód"],
    },
    title: {
      en: "Jaguar",
      pl: "Jaguar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["accessory", "precious", "gemstones", "necklace", "bracelet"],
      pl: ["dodatek", "cenny", "klejnot", "naszyjnik", "bransoletka"],
    },
    title: {
      en: "Jewelry",
      pl: "Biżuteria",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["puzzle", "pieces", "assemble", "game", "image"],
      pl: ["puzzle", "kawałek", "składać", "gra", "obraz"],
    },
    title: {
      en: "Jigsaw",
      pl: "Układanka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lock", "open", "access", "metal", "ring"],
      pl: ["zamek", "otwierać", "wstęp", "metal", "kółko"],
    },
    title: {
      en: "Key",
      pl: "Klucz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["computer", "typing", "cable", "music", "input"],
      pl: ["komputer", "pisanie", "kabel", "muzyka", "wejście"],
    },
    title: {
      en: "Keyboard",
      pl: "Klawiatura",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["princess", "ruler", "crown", "chess", "card"],
      pl: ["księżniczka", "władca", "korona", "szachy", "karta"],
    },
    title: {
      en: "King",
      pl: "Król",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "bird", "New Zealand", "brown", "green"],
      pl: ["owoc", "ptak", "Nowa Zelandia", "brązowy", "zielony"],
    },
    title: {
      en: "Kiwi",
      pl: "Kiwi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["armor", "sword", "chess", "medieval", "horse"],
      pl: ["zbroja", "miecz", "szachy", "średniowieczny", "koń"],
    },
    title: {
      en: "Knight",
      pl: "Rycerz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "swim", "fish", "boat", "shore"],
      pl: ["woda", "pływać", "ryba", "łódka", "brzeg"],
    },
    title: {
      en: "Lake",
      pl: "Rzeka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plant", "green", "autumn", "tree", "photosynthesis"],
      pl: ["roślina", "zielony", "jesień", "drzewo", "fotosynteza"],
    },
    title: {
      en: "Leaf",
      pl: "Liść",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "spots", "cat", "safari", "fast"],
      pl: ["zwierzę", "cętki", "kot", "safari", "szybki"],
    },
    title: {
      en: "Leopard",
      pl: "Lampar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mouth", "kiss", "lipstick", "talk", "teeth"],
      pl: ["twarz", "całować", "szminka", "mówić", "zęby"],
    },
    title: {
      en: "Lips",
      pl: "Usta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["address", "letters", "delivery", "envelope", "slot"],
      pl: ["adres", "list", "przesyłka", "koperta", "otwór"],
    },
    title: {
      en: "Mailbox",
      pl: "Skrzynka pocztowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["puzzle", "tomb", "corn", "escape", "game"],
      pl: ["zagadka", "grobowiec", "kukurydza", "ucieczka", "gra"],
    },
    title: {
      en: "Maze",
      pl: "Labirynt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["health", "drugs", "pills", "prescription", "doctor"],
      pl: ["zdrowie", "narkotyk", "pigułka", "recepta", "doktor"],
    },
    title: {
      en: "Medicine",
      pl: "Lek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["speaker", "amplify", "voice", "cheer", "rally"],
      pl: ["mówca", "wzmocnić", "głos", "wiwat", "zgromadzenie"],
    },
    title: {
      en: "Megaphone",
      pl: "Megafon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["recall", "remember", "forget", "brain", "nostalgia"],
      pl: ["przypominać", "wspominać", "zapominać", "mózg", "nostalgia"],
    },
    title: {
      en: "Memory",
      pl: "Pamięć",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fish", "ocean", "tail", "beauty", "legend"],
      pl: ["ryba", "ocean", "ogon", "piękno", "legenda"],
    },
    title: {
      en: "Mermaid",
      pl: "Syrena",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["space", "rock", "shooting star", "astronomy", "impact"],
      pl: ["kosmos", "głaz", "spadająca gwiazda", "astronomia", "uderzenie"],
    },
    title: {
      en: "Meteor",
      pl: "Meteor",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["reflection", "glass", "vanity", "image", "bathroom"],
      pl: ["odbicie", "szkło", "toaletka", "obraz", "łazienka"],
    },
    title: {
      en: "Mirror",
      pl: "Lustro",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["military", "ships", "sailors", "ocean", "defense"],
      pl: ["wojsko", "statek", "żeglarz", "ocean", "obrona"],
    },
    title: {
      en: "Navy",
      pl: "Marynarka wojenna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["catch", "sports", "fishing", "web", "volleyball"],
      pl: ["łowić", "sport", "wędkarstwo", "internet", "siatkówka"],
    },
    title: {
      en: "Net",
      pl: "Sieć",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["health", "medical", "hospital", "caregiver", "patient"],
      pl: ["zdrowie", "medyczny", "szpital", "opiekun", "pacjent"],
    },
    title: {
      en: "Nurse",
      pl: "Pielęgniarka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "shell", "crunchy", "snack", "almond"],
      pl: ["jedzenie", "skorupka", "chrupiący", "przekąska", "migdał"],
    },
    title: {
      en: "Nut",
      pl: "Orzech",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lubricant", "cooking", "fuel", "crude", "slippery"],
      pl: ["smar", "gotowanie", "paliwo", "ropa naftowa", "śliski"],
    },
    title: {
      en: "Oil",
      pl: "Olej",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "citrus", "color", "juice", "peel"],
      pl: ["owoc", "cytrus", "kolor", "sok", "obierać"],
    },
    title: {
      en: "Orange",
      pl: "Pomarańcza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "nocturnal", "hoot", "feather", "predator"],
      pl: ["ptak", "nocny", "pohukiwanie", "pióro", "drapieżnik"],
    },
    title: {
      en: "Owl",
      pl: "Sowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gas", "breathe", "air", "element", "vital"],
      pl: ["gaz", "oddychać", "powietrze", "pierwiastek", "niezbędny"],
    },
    title: {
      en: "Oxygen",
      pl: "Tlen",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["write", "read", "printer", "letter", "document"],
      pl: ["pisać", "czytać", "drukarka", "list", "dokument"],
    },
    title: {
      en: "Paper",
      pl: "Papier",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Italian", "noodles", "sauce", "dish", "dinner"],
      pl: ["włoski", "kluski", "sos", "danie", "obiad"],
    },
    title: {
      en: "Pasta",
      pl: "Makaron",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["game", "fun", "activity", "children", "toys"],
      pl: ["gra", "radość", "aktywność", "dziecko", "zabawka"],
    },
    title: {
      en: "Play",
      pl: "Bawić się",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "orange", "Halloween", "pie", "carve"],
      pl: ["warzywo", "pomarańczowy", "Halloween", "ciasto", "drążyć"],
    },
    title: {
      en: "Pumpkin",
      pl: "Dynia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "dried", "snack", "wrinkled", "sweet"],
      pl: ["owoc", "suszony", "przekąska", "pomarszczony", "słodki"],
    },
    title: {
      en: "Raisin",
      pl: "Rodzynek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["garden", "leaves", "tool", "yard", "wooden"],
      pl: ["ogród", "liście", "narzędzie", "podwórko", "drewniany"],
    },
    title: {
      en: "Rake",
      pl: "Grabie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cooking", "food", "ingredients", "directions", "dish"],
      pl: ["gotowanie", "jedzenie", "składniki", "wskazówki", "danie"],
    },
    title: {
      en: "Recipe",
      pl: "Przepis",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "vinyl", "album", "CD", "sound"],
      pl: ["muzyka", "winyl", "album", "płyta", "dźwięk"],
    },
    title: {
      en: "Record",
      pl: "Nagrywać",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["measurement", "straight", "tool", "inches", "centimeters"],
      pl: ["pomiar", "prosty", "narzędzie", "cal", "centymetr"],
    },
    title: {
      en: "Ruler",
      pl: "Linijka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fastener", "clothing", "sharp", "pointed", "secure"],
      pl: ["zapięcie", "odzież", "ostry", "szpiczasty", "zabezpieczać"],
    },
    title: {
      en: "Safety pin",
      pl: "agrafka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beach", "desert", "grainy", "tan", "castle"],
      pl: ["plaża", "pustynia", "ziarnisty", "opalenizna", "zamek"],
    },
    title: {
      en: "Sand",
      pl: "Piasek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ocean", "water", "beach", "waves", "sand"],
      pl: ["ocean", "woda", "plaża", "fale", "piasek"],
    },
    title: {
      en: "Sea",
      pl: "Morze",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fish", "aquatic", "ocean", "skamieniały", "swim"],
      pl: ["ryba", "wodny", "ocean", "fossil", "pływać"],
    },
    title: {
      en: "Seahorse",
      pl: "Konik morski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["family", "brother", "sister", "argue", "blood"],
      pl: ["rodzina", "brat", "siostra", "kłócić się", "krew"],
    },
    title: {
      en: "Sibling",
      pl: "Rodzeństwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["universe", "stars", "galaxies", "void", "astronaut"],
      pl: ["wszechświat", "gwiazda", "galaktyka", "próżnia", "astronauta"],
    },
    title: {
      en: "Space",
      pl: "Kosmos",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "web", "tarantula", "arachnophobia", "venomous"],
      pl: ["owad", "sieć", "tarantula", "arachnofobia", "jadowity"],
    },
    title: {
      en: "Spider",
      pl: "Pająk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["silverware", "eat", "scoop", "stir", "soup"],
      pl: ["sztućce", "jeść", "gałka", "mieszać", "zupa"],
    },
    title: {
      en: "Spoon",
      pl: "Łyżka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["season", "flowers", "bloom", "rebirth", "sun"],
      pl: ["pora roku", "kwiaty", "kwitnąć", "odrodzenie", "słońce"],
    },
    title: {
      en: "Spring",
      pl: "Wiosna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["narrative", "tale", "plot", "characters", "book"],
      pl: ["narracja", "historyjka", "fabuła", "postać", "książka"],
    },
    title: {
      en: "Story",
      pl: "Opowieść",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["character", "powers", "costume", "comic", "justice"],
      pl: ["postać", "umiejętność", "kostium", "komiks", "sprawiedliwość"],
    },
    title: {
      en: "Superhero",
      pl: "Superbohater",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["furniture", "chair", "legs", "eat", "work"],
      pl: ["meble", "krzesło", "nóżka", "jeść", "pracować"],
    },
    title: {
      en: "Table",
      pl: "Stół",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "citrus", "orange", "sweet", "peel"],
      pl: ["owoc", "cytrus", "pomarańczowy", "słodki", "obierać"],
    },
    title: {
      en: "Tangerine",
      pl: "Mandarynka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["traveler", "visitor", "vacation", "sightseeing", "camera"],
      pl: ["podróżnik", "gość", "wakacje", "zwiedzanie", "aparat"],
    },
    title: {
      en: "Tourist",
      pl: "Turysta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bike", "wheels", "pedal", "children", "ride"],
      pl: ["rower", "koło", "pedał", "dzieci", "jechać"],
    },
    title: {
      en: "Tricycle",
      pl: "Trójkołowiec",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["music", "brass", "trumpet", "instrument", "band"],
      pl: ["muzyka", "dęty", "trąbka", "instrument", "zespół"],
    },
    title: {
      en: "Trombone",
      pl: "Puzon",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["bird", "Thanksgiving", "poultry", "meat", "animal"],
      pl: ["ptak", "Święto Dziękczynienia", "drób", "mięso", "zwierzę"],
    },
    title: {
      en: "Turkey",
      pl: "Indyk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["keyboard", "old", "machine", "letter", "ink"],
      pl: ["klawiatura", "stary", "urządzenie", "list", "atrament"],
    },
    title: {
      en: "Typewriter",
      pl: "Maszyna do pisania",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["music", "string", "bow", "instrument", "orchestra"],
      pl: ["muzyka", "struna", "smyczek", "instrument", "orkiestra"],
    },
    title: {
      en: "Violin",
      pl: "Skrzypce",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sweet", "batter", "syrup", "cream", "crispy"],
      pl: ["słodki", "ciasto", "syrop", "śmietana", "kruchy"],
    },
    title: {
      en: "Waffle",
      pl: "Gofr",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["money", "cards", "cash", "leather", "pocket"],
      pl: ["pieniądze", "karta", "gotówka", "skóra", "kieszeń"],
    },
    title: {
      en: "Wallet",
      pl: "Portfel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["closet", "clothing", "storage", "hanger", "jacket"],
      pl: ["garderoba", "odzież", "przechowywanie", "wieszak", "kurtka"],
    },
    title: {
      en: "Wardrobe",
      pl: "Szafa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hair", "fake", "costume", "bald", "scalp"],
      pl: ["włosy", "sztuczny", "kostium", "łysy", "skalp"],
    },
    title: {
      en: "Wig",
      pl: "Peruka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["glass", "pane", "view", "frame", "open"],
      pl: ["szkło", "szyba", "widok", "rama", "otwierać"],
    },
    title: {
      en: "Window",
      pl: "Okno",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["technology", "device", "signal", "connection", "network"],
      pl: ["technologia", "urządzenie", "sygnał", "połączenie", "sieć"],
    },
    title: {
      en: "Wireless",
      pl: "Bezprzewodowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["park", "national", "volcano", "geysers", "caldera"],
      pl: ["park", "narodowy", "wulkan", "gejzer", "kaldera"],
    },
    title: {
      en: "Yellowstone",
      pl: "Yellowstone",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["game", "Nintendo", "dinosaur", "green", "egg"],
      pl: ["gra", "Nintendo", "dinozaur", "zielony", "jajko"],
    },
    title: {
      en: "Yoshi",
      pl: "Yoshi",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tree", "nut", "oak", "seed", "squirrel"],
      pl: ["drzewo", "orzech", "dąb", "sadzić", "wiewiórka"],
    },
    title: {
      en: "Acorn",
      pl: "Żołądź",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["performance", "play", "theater", "drama", "stage"],
      pl: ["przedstawienie", "sztuka", "teatr", "dramat", "scena"],
    },
    title: {
      en: "Act",
      pl: "Akt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["habit", "smoke", "craving", "alcohol", "treatment"],
      pl: ["nałóg", "palić", "pragnienie", "alkohol", "leczenie"],
    },
    title: {
      en: "Addiction",
      pl: "Uzależnienie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["navy", "officer", "rank", "fleet", "sea"],
      pl: ["marynarka wojenna", "oficer", "stopień", "flota", "morze"],
    },
    title: {
      en: "Admiral",
      pl: "Admirał",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["time", "day", "dusk", "lunch", "evening"],
      pl: ["czas", "dzień", "zmierzch", "lunch", "wieczór"],
    },
    title: {
      en: "Afternoon",
      pl: "Popołudnie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["old", "antique", "mature", "vintage", "ancient"],
      pl: ["stary", "antyk", "dojrzały", "klasyczny", "dawny"],
    },
    title: {
      en: "Aged",
      pl: "Wiekowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["farming", "cultivation", "crops", "food", "livestock"],
      pl: ["gospodarka", "uprawa", "plony", "jedzenie", "bydło"],
    },
    title: {
      en: "Agriculture",
      pl: "Rolnictwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["warning", "signal", "notification", "alert", "clock"],
      pl: ["ostrzeżenie", "sygnał", "powiadomienie", "alert", "budzik"],
    },
    title: {
      en: "Alarm",
      pl: "Alarm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["drink", "beverage", "intoxication", "beer", "wine"],
      pl: ["pić", "napój", "upojenie", "piwo", "wino"],
    },
    title: {
      en: "Alcohol",
      pl: "Alkohol",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["math", "equation", "variable", "formula", "geometry"],
      pl: ["matematyka", "równanie", "zmienna", "wzór", "geometria"],
    },
    title: {
      en: "Algebra",
      pl: "Algebra",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["continent", "ice", "penguins", "research", "pole"],
      pl: ["kontynent", "lód", "pingwin", "badanie", "biegun"],
    },
    title: {
      en: "Antarctica",
      pl: "Antarktyda",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["animal", "safari", "horns", "fast", "graceful"],
      pl: ["zwierzę", "safari", "rogi", "szybki", "wdzięk"],
    },
    title: {
      en: "Antelope",
      pl: "Antylopa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["stadium", "sports", "entertainment", "concert", "venue"],
      pl: ["stadion", "sport", "rozrywka", "koncert", "miejsce"],
    },
    title: {
      en: "Arena",
      pl: "Arena",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["military", "soldiers", "defense", "force", "battle"],
      pl: ["wojsko", "żołnierz", "obrona", "siła", "bitwa"],
    },
    title: {
      en: "Army",
      pl: "Armia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["creativity", "painting", "sculpture", "expression", "beauty"],
      pl: ["kreatywność", "malarstwo", "rzeźba", "ekspresja", "piękno"],
    },
    title: {
      en: "Art",
      pl: "Sztuka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["recognition", "trophy", "prize", "medal", "ceremony"],
      pl: ["uznanie", "trofeum", "wygrana", "medal", "ceremonia"],
    },
    title: {
      en: "Award",
      pl: "Nagroda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plant", "lawn", "green", "mow", "field"],
      pl: ["roślina", "natura", "zielony", "kosić", "boisko"],
    },
    title: {
      en: "Grass",
      pl: "Trawa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["head", "cap", "peak", "style", "sun"],
      pl: ["głowa", "kapelusz", "daszek", "styl", "słońce"],
    },
    title: {
      en: "Hat",
      pl: "Czapka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["aircraft", "rotor", "blade", "fly", "rescue"],
      pl: ["samolot", "śmigło", "wirnik", "latać", "ratunek"],
    },
    title: {
      en: "Helicopter",
      pl: "Helikopter",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["drink", "fruit", "vitamin", "blend", "squeeze"],
      pl: ["pić", "owoc", "witaminy", "mieszać", "wyciskać"],
    },
    title: {
      en: "Juice",
      pl: "Sok",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["climb", "reach", "height", "rungs", "tool"],
      pl: ["wchodzić", "sięgać", "wysokość", "szczebel", "narzędzie"],
    },
    title: {
      en: "Ladder",
      pl: "Drabina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["meal", "midday", "food", "break", "cafeteria"],
      pl: ["posiłek", "południe", "jedzenie", "przerwa", "stołówka"],
    },
    title: {
      en: "Lunch",
      pl: "Lunch",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["disguise", "costume", "face", "Halloween", "medical"],
      pl: ["przebranie", "kostium", "twarz", "Halloween", "medyczny"],
    },
    title: {
      en: "Mask",
      pl: "Maska",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["audio", "sound", "amplify", "voice", "stage"],
      pl: ["audio", "dźwięk", "wzmocnić", "głos", "scena"],
    },
    title: {
      en: "Microphone",
      pl: "Mikrofon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["space", "night", "sky", "phase", "full"],
      pl: ["kosmos", "noc", "niebo", "faza", "pełnia"],
    },
    title: {
      en: "Moon",
      pl: "Księżyc",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sewing", "thread", "point", "injection", "blood"],
      pl: ["szycie", "nitka", "czubek", "zastrzyk", "krew"],
    },
    title: {
      en: "Needle",
      pl: "Igła",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "eggs", "home", "twig", "feather"],
      pl: ["ptak", "jajko", "dom", "gałązka", "pióro"],
    },
    title: {
      en: "Nest",
      pl: "Gniazdo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paper", "write", "jot", "school", "office"],
      pl: ["papier", "pisać", "notować", "szkoła", "biuro"],
    },
    title: {
      en: "Notebook",
      pl: "Zeszyt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "bulb", "tear", "cry", "soup"],
      pl: ["warzywo", "bulwa", "łza", "płakać", "zupa"],
    },
    title: {
      en: "Onion",
      pl: "Cebula",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["princess", "luxury", "king", "castle", "tower"],
      pl: ["księżniczka", "przepych", "król", "zamek", "wieża"],
    },
    title: {
      en: "Palace",
      pl: "Pałac",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["celebration", "marching", "music", "floats", "spectacle"],
      pl: ["uroczystość", "marsz", "muzyka", "platforma", "widowisko"],
    },
    title: {
      en: "Parade",
      pl: "Parada",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "colorful", "mimic", "talk", "pet"],
      pl: ["ptak", "kolorowy", "naśladować", "mówić", "zwierzę"],
    },
    title: {
      en: "Parrot",
      pl: "Papuga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["write", "draw", "eraser", "graphite", "school"],
      pl: ["pisać", "rysować", "gumka", "grafit", "szkoła"],
    },
    title: {
      en: "Pencil",
      pl: "Ołówek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["communication", "talk", "text", "screen", "mobile"],
      pl: ["komunikacja", "rozmawiać", "tekst", "ekran", "komórka"],
    },
    title: {
      en: "Phone",
      pl: "Telefon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sleep", "comfort", "soft", "cushion", "bed"],
      pl: ["spać", "komfort", "miękki", "poszewka", "łóżko"],
    },
    title: {
      en: "Pillow",
      pl: "Poduszka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["airplane", "fly", "cockpit", "aviation", "uniform"],
      pl: ["samolot", "latać", "kokpit", "silnik", "mundur"],
    },
    title: {
      en: "Pilot",
      pl: "Pilot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["space", "astronomy", "orbit", "Earth", "universe"],
      pl: ["kosmos", "astronomia", "orbita", "Ziemia", "wszechświat"],
    },
    title: {
      en: "Planet",
      pl: "Planeta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["nature", "green", "photosynthesis", "leaves", "soil"],
      pl: ["natura", "zielony", "fotosynteza", "liść", "ziemia"],
    },
    title: {
      en: "Plant",
      pl: "Roślina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "purple", "sweet", "juicy", "pit"],
      pl: ["owoc", "fioletowy", "słodki", "soczysty", "pestka"],
    },
    title: {
      en: "Plum",
      pl: "Śliwka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mail", "travel", "picture", "stamp", "message"],
      pl: ["poczta", "podróżować", "zdjęcie", "znaczek", "wiadomość"],
    },
    title: {
      en: "Postcard",
      pl: "Pocztówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bag", "wallet", "money", "fashion", "strap"],
      pl: ["worek", "portfel", "pieniądze", "moda", "pasek"],
    },
    title: {
      en: "Purse",
      pl: "Torebka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sound", "duck", "animal", "fake", "medicine"],
      pl: ["dźwięk", "kaczka", "zwierzę", "udawać", "głos"],
    },
    title: {
      en: "Quack",
      pl: "Kwakać",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "rodent", "cheese", "tail", "mouse"],
      pl: ["zwierzę", "gryzoń", "ser", "ogon", "mysz"],
    },
    title: {
      en: "Rat",
      pl: "Szczur",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["decoration", "bow", "gift", "fabric", "colorful"],
      pl: ["ozdoba", "kokarda", "prezent", "materiał", "kolorowy"],
    },
    title: {
      en: "Ribbon",
      pl: "Wstążka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["grain", "food", "cooked", "Asian", "steam"],
      pl: ["ziarno", "jedzenie", "gotowany", "azjatycki", "para"],
    },
    title: {
      en: "Rice",
      pl: "Ryż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stone", "music", "geological", "climb", "mineral"],
      pl: ["kamień", "wulkaniczny", "geologiczny", "wspinać się", "minerał"],
    },
    title: {
      en: "Rock",
      pl: "Skała",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["seasoning", "flavor", "sodium", "white", "grinder"],
      pl: ["przyprawa", "smak", "sód", "biały", "młynek"],
    },
    title: {
      en: "Salt",
      pl: "Sól",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["space", "orbit", "communication", "GPS", "signal"],
      pl: ["kosmos", "orbita", "komunikacja", "GPS", "sygnał"],
    },
    title: {
      en: "Satellite",
      pl: "Satelita",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water", "bathroom", "wash", "clean", "steam"],
      pl: ["woda", "łazienka", "myć", "czyścić", "para"],
    },
    title: {
      en: "Shower",
      pl: "Prysznic",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "snow", "slide", "ride", "dog"],
      pl: ["zima", "śnieg", "zjeżdżalnia", "jechać", "pies"],
    },
    title: {
      en: "Sled",
      pl: "Sanki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["facial expression", "happy", "teeth", "joy", "laugh"],
      pl: ["mimika", "szczęśliwy", "zęby", "radość", "zabawa"],
    },
    title: {
      en: "Smile",
      pl: "Uśmiech",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "cold", "flakes", "ice", "freeze"],
      pl: ["zima", "chłodny", "płatki", "lód", "zamarzać"],
    },
    title: {
      en: "Snow",
      pl: "Śnieg",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["furniture", "couch", "living room", "comfortable", "seating"],
      pl: ["meble", "kanapa", "salon", "wygodny", "siedzenie"],
    },
    title: {
      en: "Sofa",
      pl: "Sofa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "broth", "vegetables", "bowl", "spoon"],
      pl: ["jedzenie", "bulion", "warzywo", "miska", "łyżka"],
    },
    title: {
      en: "Soup",
      pl: "Zupa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "heat", "boiling", "fog", "sauna"],
      pl: ["woda", "ciepło", "wrzenie", "mgła", "sauna"],
    },
    title: {
      en: "Steam",
      pl: "Para",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["body part", "digestion", "food", "hunger", "ache"],
      pl: ["część ciała", "trawienie", "jedzenie", "głód", "boleć"],
    },
    title: {
      en: "Stomach",
      pl: "Brzuch",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rock", "mineral", "hard", "sculpture", "beach"],
      pl: ["głaz", "minerał", "twardy", "rzeźba", "plaża"],
    },
    title: {
      en: "Stone",
      pl: "Kamień",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["power", "muscle", "fitness", "energy", "ability"],
      pl: ["moc", "mięśnie", "sprawność fizyczna", "energia", "zręczność"],
    },
    title: {
      en: "Strength",
      pl: "Siła",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plants", "flowers", "soil", "tools", "barbecue"],
      pl: ["roślina", "kwiat", "ziemia", "narzędzia", "grill"],
    },
    title: {
      en: "Garden",
      pl: "Ogród",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["instrument", "strings", "music", "melody", "strum"],
      pl: ["instrument", "struny", "muzyka", "melodia", "brzdąkać"],
    },
    title: {
      en: "Guitar",
      pl: "Gitara",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pet", "rodent", "wheel", "fur", "cage"],
      pl: ["zwierzę", "gryzoń", "koło", "futro", "klatka"],
    },
    title: {
      en: "Hamster",
      pl: "Chomik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["body part", "fingers", "palm", "grip", "touch"],
      pl: ["część ciała", "palce", "dłoń", "uścisk", "dotyk"],
    },
    title: {
      en: "Hand",
      pl: "Ręka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["organ", "love", "emotion", "shape", "beat"],
      pl: ["organ", "miłość", "uczucie", "kształt", "bić"],
    },
    title: {
      en: "Heart",
      pl: "Serce",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["head", "safety", "protection", "sports", "military"],
      pl: ["głowa", "ochrona", "zabezpieczenie", "sport", "wojsko"],
    },
    title: {
      en: "Helmet",
      pl: "Hełm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["frozen", "cold", "cube", "skating", "sculpture"],
      pl: ["mrożony", "zimny", "kostka", "łyżwy", "rzeźba"],
    },
    title: {
      en: "Ice",
      pl: "Lód",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["technology", "connection", "website", "search", "Google Chrome"],
      pl: ["technologia", "połączenie", "strona internetowa", "wyszukiwanie", "Google Chrome"],
    },
    title: {
      en: "Internet",
      pl: "Internet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["aircraft", "airplane", "fast", "fly", "travel"],
      pl: ["statek powietrzny", "samolot", "szybki", "latać", "podróżować"],
    },
    title: {
      en: "Jet",
      pl: "Odrzutowiec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cooking", "food", "cut", "refrigerator", "utensils"],
      pl: ["gotowanie", "jedzenie", "kroić", "lodówka", "sprzęt"],
    },
    title: {
      en: "Kitchen",
      pl: "Kuchnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["computer", "portable", "keyboard", "screen", "battery"],
      pl: ["komputer", "przenośny", "klawiatura", "ekran", "bateria"],
    },
    title: {
      en: "Laptop",
      pl: "Laptop",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "citrus", "sour", "yellow", "juice"],
      pl: ["owoc", "cytrus", "kwaśny", "żółty", "sok"],
    },
    title: {
      en: "Lemon",
      pl: "Cytryna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "America", "wool", "mountain", "pack"],
      pl: ["zwierzę", "Ameryka", "wełna", "góra", "grupa"],
    },
    title: {
      en: "Llama",
      pl: "Lama",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wood", "fire", "cut", "cabin", "tree"],
      pl: ["drewno", "ogień", "ciąć", "chata", "drzewo"],
    },
    title: {
      en: "Log",
      pl: "Kłoda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["travel", "suitcase", "bag", "packing", "airport"],
      pl: ["podróżować", "walizka", "torba", "pakować", "lotnisko"],
    },
    title: {
      en: "Luggage",
      pl: "Bagaż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["job", "forestry", "axe", "trees", "beard"],
      pl: ["praca", "leśnictwo", "siekiera", "drzewo", "broda"],
    },
    title: {
      en: "Lumberjack",
      pl: "Drwal",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "warm-blooded", "fur", "milk", "birth"],
      pl: ["zwierzę", "stałocieplny", "futro", "mleko", "poród"],
    },
    title: {
      en: "Mammal",
      pl: "Ssak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["geography", "navigation", "atlas", "location", "directions"],
      pl: ["geografia", "nawigacja", "atlas", "lokalizacja", "kierunek"],
    },
    title: {
      en: "Map",
      pl: "Mapa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["protein", "beef", "pork", "chicken", "steak"],
      pl: ["białko", "wołowina", "wieprzowina", "kurczak", "stek"],
    },
    title: {
      en: "Meat",
      pl: "Mięso",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["communication", "text", "email", "phone", "letter"],
      pl: ["komunikacja", "tekst", "mail", "telefon", "list"],
    },
    title: {
      en: "Message",
      pl: "Wiadomość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dairy", "cow", "calcium", "white", "drink"],
      pl: ["nabiał", "krowa", "wapń", "biały", "picie"],
    },
    title: {
      en: "Milk",
      pl: "Mleko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "mammal", "chimp", "banana", "jungle"],
      pl: ["zwierzę", "ssak", "szympans", "banan", "dżungla"],
    },
    title: {
      en: "Monkey",
      pl: "Małpa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "computer", "click", "cheese", "small"],
      pl: ["zwierzę", "komputer", "klikać", "ser", "mały"],
    },
    title: {
      en: "Mouse",
      pl: "Mysz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hammer", "finger", "polish", "metal", "clipper"],
      pl: ["dłoń", "palec", "lakier", "nożyczki", "obcinaczka"],
    },
    title: {
      en: "Nail",
      pl: "Paznokieć",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["jewelry", "chain", "pendant", "beads", "accessory"],
      pl: ["biżuteria", "łańcuszek", "wisiorek", "koralik", "dodatek"],
    },
    title: {
      en: "Necklace",
      pl: "Naszyjnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["media", "print", "article", "headline", "journalism"],
      pl: ["media", "drukować", "artykuł", "nagłówek", "dziennikarstwo"],
    },
    title: {
      en: "Newspaper",
      pl: "Gazeta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["warrior", "stealth", "martial arts", "Japan", "sword"],
      pl: ["wojownik", "podstęp", "sztuki walki", "Japonia", "miecz"],
    },
    title: {
      en: "Ninja",
      pl: "Ninja",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["smell", "breathe", "nostril", "scent", "sneeze"],
      pl: ["węch", "oddychać", "nozdrze", "zapach", "kichać"],
    },
    title: {
      en: "Nose",
      pl: "Nos",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["book", "fiction", "story", "character", "author"],
      pl: ["książka", "beletrystyka", "historia", "postać", "autor"],
    },
    title: {
      en: "Novel",
      pl: "Powieść",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothing", "legs", "pockets", "zipper", "belt"],
      pl: ["odzież", "spodnie", "kieszeń", "zamek", "pasek"],
    },
    title: {
      en: "Pants",
      pl: "Spodnie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["skydive", "jump", "safety", "harness", "adrenaline"],
      pl: ["instruktor", "skok", "bezpieczeństwo", "szelki", "adrenalina"],
    },
    title: {
      en: "Parachute",
      pl: "Spadochron",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "green", "sweet", "juicy", "yellow"],
      pl: ["owoc", "zielony", "słodki", "soczysty", "żółty"],
    },
    title: {
      en: "Pear",
      pl: "Gruszka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dish", "food", "eat", "ceramic", "round"],
      pl: ["danie", "jedzenie", "jeść", "ceramika", "okrągły"],
    },
    title: {
      en: "Plate",
      pl: "Talerz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["literature", "verse", "rhyme", "stanza", "poet"],
      pl: ["literatura", "zwrotka", "rym", "strofa", "poeta"],
    },
    title: {
      en: "Poem",
      pl: "Wiersz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["toy", "theater", "strings", "hand", "show"],
      pl: ["zabawka", "teatr", "sznurek", "ręka", "pokaz"],
    },
    title: {
      en: "Puppet",
      pl: "Kukiełka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["game", "challenge", "pieces", "solve", "picture"],
      pl: ["gra", "wyzwanie", "kawałki", "rozwiązywać", "obrazek"],
    },
    title: {
      en: "Puzzle",
      pl: "Puzzle",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "hop", "ears", "pâté", "carrot"],
      pl: ["zwierzę", "skakać", "uszy", "pasztet", "marchewka"],
    },
    title: {
      en: "Rabbit",
      pl: "Królik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "talk", "news", "station", "antenna"],
      pl: ["muzyka", "mówić", "wiadomości", "stacja", "antena"],
    },
    title: {
      en: "Radio",
      pl: "Radio",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["house", "top", "tar paper", "rain", "chimney"],
      pl: ["dom", "góra", "papa", "deszcz", "kominek"],
    },
    title: {
      en: "Roof",
      pl: "Dach",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["weather", "time", "autumn", "spring", "summer"],
      pl: ["pogoda", "czas", "jesień", "wiosna", "lato"],
    },
    title: {
      en: "Season",
      pl: "Pora roku",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tool", "fabric", "thread", "needle", "stitch"],
      pl: ["narzędzie", "materiał", "nić", "igła", "ścieg"],
    },
    title: {
      en: "Sewing machine",
      pl: "Maszyna do szycia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["animal", "wool", "farm", "bleat", "graze"],
      pl: ["zwierzę", "wełna", "farma", "beczeć", "pasać"],
    },
    title: {
      en: "Sheep",
      pl: "Owca",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["boat", "vessel", "sail", "cargo", "captain"],
      pl: ["łódź", "okręt", "płynąć", "ładunek", "kapitan"],
    },
    title: {
      en: "Ship",
      pl: "Statek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["footwear", "walk", "run", "style", "size"],
      pl: ["obuwie", "chodzić", "biec", "styl", "rozmiar"],
    },
    title: {
      en: "Shoes",
      pl: "Buty",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fire", "tobacco", "inhale", "exhale", "chimney"],
      pl: ["ogień", "tytoń", "zaciągać się", "wydychać", "komin"],
    },
    title: {
      en: "Smoke",
      pl: "Dym",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothing", "foot", "pair", "cotton", "warm"],
      pl: ["odzież", "stopa", "para", "bawełna", "ciepły"],
    },
    title: {
      en: "Sock",
      pl: "Skarpeta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "lyrics", "melody", "singer", "chorus"],
      pl: ["muzyka", "tekst", "melodia", "śpiewak", "refren"],
    },
    title: {
      en: "Song",
      pl: "Piosenka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["agent", "007", "covert", "intelligence", "mission"],
      pl: ["agent", "007", "tajny", "wywiad", "misja"],
    },
    title: {
      en: "Spy",
      pl: "Szpieg",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["steps", "climb", "ascend", "descent", "handrail"],
      pl: ["stopień", "wchodzić", "wspinać się", "zejście", "poręcz"],
    },
    title: {
      en: "Stairs",
      pl: "Schody",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hotel", "shine", "light", "constellation", "astronomy"],
      pl: ["hotel", "świecić", "światło", "konstelacja", "astronomia"],
    },
    title: {
      en: "Star",
      pl: "Gwiazda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["branch", "wood", "hit", "poke", "throw"],
      pl: ["gałąź", "drewno", "bić", "trącać", "rzucać"],
    },
    title: {
      en: "Stick",
      pl: "Kij",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["weather", "lightning", "thunder", "rain", "wind"],
      pl: ["pogoda", "błyskawica", "grzmot", "deszcz", "wiatr"],
    },
    title: {
      en: "Storm",
      pl: "Burza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["transportation", "train", "underground", "metro", "city"],
      pl: ["transport", "pociąg", "podziemny", "publiczny", "miasto"],
    },
    title: {
      en: "Subway",
      pl: "Metro",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["device", "iPad", "touch", "apps", "internet"],
      pl: ["urządzenie", "iPad", "dotyk", "aplikacja", "internet"],
    },
    title: {
      en: "Tablet",
      pl: "Tablet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sewing", "needle", "fabric", "string", "clothing"],
      pl: ["szycie", "igła", "materiał", "sznurek", "odzież"],
    },
    title: {
      en: "Thread",
      pl: "Nitka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bread", "breakfast", "cheese", "crunchy", "butter"],
      pl: ["chleb", "śniadanie", "ser", "chrupiący", "masło"],
    },
    title: {
      en: "Toast",
      pl: "Tost",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mouth", "clean", "dentist", "paste", "electric"],
      pl: ["usta", "czyścić", "dentysta", "pasta", "elektryczna"],
    },
    title: {
      en: "Toothbrush",
      pl: "Szczoteczka do zębów",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothing", "casual", "cotton", "short", "sleeve"],
      pl: ["odzież", "nieformalny", "bawełna", "krótki", "rękaw"],
    },
    title: {
      en: "T-Shirt",
      pl: "Koszulka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "slow", "shell", "reptile", "domestic"],
      pl: ["zwierzę", "wolny", "skorupa", "gad", "domowy"],
    },
    title: {
      en: "Turtle",
      pl: "Żółw",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothing", "same", "team", "organization", "dress"],
      pl: ["odzież", "taki sam", "zespół", "organizacja", "strój"],
    },
    title: {
      en: "Uniform",
      pl: "Mundur",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["love", "heart", "card", "candy", "flowers"],
      pl: ["miłość", "serce", "kartka", "cukierek", "kwiaty"],
    },
    title: {
      en: "Valentine",
      pl: "Walentynka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["food", "plant", "nutrition", "healthy", "salad"],
      pl: ["jedzenie", "roślina", "odżywianie", "zdrowy", "sałatka"],
    },
    title: {
      en: "Vegetable",
      pl: "Warzywo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["serve", "restaurant", "food", "order", "tray"],
      pl: ["serwować", "restauracja", "jedzenie", "zamówienie", "taca"],
    },
    title: {
      en: "Waiter",
      pl: "Kelner",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["machine", "laundry", "bathroom", "cycle", "detergent"],
      pl: ["maszyna", "ubrania", "łazienka", "krążyć", "detergent"],
    },
    title: {
      en: "Washer",
      pl: "Pralka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dial", "clock", "wrist", "arm", "time"],
      pl: ["tarcza", "mierzyć", "nadgarstek", "ręka", "czas"],
    },
    title: {
      en: "Watch",
      pl: "Zegarek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ocean", "water", "surf", "sea", "wind"],
      pl: ["ocean", "woda", "surfować", "morze", "wiatr"],
    },
    title: {
      en: "Wave",
      pl: "Fala",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["kitchen", "tool", "mix", "bowl", "batter"],
      pl: ["kuchnia", "narzędzie", "mieszać", "miska", "ciasto"],
    },
    title: {
      en: "Egg whisk",
      pl: "Trzepaczka do jajek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["sound", "blow", "referee", "sport", "football"],
      pl: ["dźwięk", "dmuchać", "sędzia", "sport", "piłka nożna"],
    },
    title: {
      en: "Whistle",
      pl: "Gwizdek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["marker", "erase", "classroom", "presentation", "dry-erase"],
      pl: ["marker", "zmazywać", "klasa", "prezentacja", "pisak"],
    },
    title: {
      en: "Whiteboard",
      pl: "Tablica suchościeralna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["car", "glass", "front", "wipers", "crack"],
      pl: ["samochód", "szkło", "front", "wycieraczki", "pękać"],
    },
    title: {
      en: "Windshield",
      pl: "Szyba przednia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["animal", "creepy", "crawl", "soil", "bait"],
      pl: ["zwierzę", "odrażający", "pełzać", "ziemia", "przynęta"],
    },
    title: {
      en: "Worm",
      pl: "Robak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["time", "calendar", "anniversary", "month", "century"],
      pl: ["czas", "kalendarz", "rocznica", "miesiąc", "wiek"],
    },
    title: {
      en: "Year",
      pl: "Rok",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["toy", "string", "up and down", "trick", "flick"],
      pl: ["zabawka", "sznurek", "w górę i w dół", "trik", "machnąć"],
    },
    title: {
      en: "Yo-yo",
      pl: "Jo-jo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["kid", "age", "inexperienced", "child", "adolescent"],
      pl: ["osoba", "wiek", "niedoświadczony", "dziecko", "dorastający"],
    },
    title: {
      en: "Young",
      pl: "Młody",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["counting", "beads", "ancient", "calculator", "math"],
      pl: ["kalkulować", "koralik", "starodawny", "kalkulator", "matematyka"],
    },
    title: {
      en: "Abacus",
      pl: "Liczydło",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["continent", "culture", "tribe", "desert", "safari"],
      pl: ["kontynent", "kultura", "plemię", "pustynia", "safari"],
    },
    title: {
      en: "African",
      pl: "afrykański",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["representative", "spy", "undercover", "secret", "investigator"],
      pl: ["przedstawiciel", "szpieg", "tajny", "sekretny", "śledczy"],
    },
    title: {
      en: "Agent",
      pl: "Agent",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["state", "north", "cold", "glacier", "wilderness"],
      pl: ["stan", "północ", "zimno", "lodowiec", "pustkowie"],
    },
    title: {
      en: "Alaska",
      pl: "Alaska",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["extraterrestrial", "space", "sci-fi", "creature", "invasion"],
      pl: ["pozaziemski", "kosmos", "fantastyka", "stworzenie", "inwazja"],
    },
    title: {
      en: "Alien",
      pl: "Kosmita",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["emergency", "medical", "siren", "transport", "hospital"],
      pl: ["wypadek", "medyczny", "syrena", "transport", "szpital"],
    },
    title: {
      en: "Ambulance",
      pl: "Ambulans",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["celebration", "date", "milestone", "memory", "marriage"],
      pl: ["święto", "data", "etap", "pamięć", "małżeństwo"],
    },
    title: {
      en: "Anniversary",
      pl: "Rocznica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["old", "vintage", "collectibles", "rare", "value"],
      pl: ["stary", "klasyczny", "kolekcjonerski", "rzadki", "wartość"],
    },
    title: {
      en: "Antiques",
      pl: "Antyki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["home", "living", "rental", "lease", "building"],
      pl: ["dom", "żyć", "opłata", "wynajem", "budynek"],
    },
    title: {
      en: "Apartment",
      pl: "Mieszkanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["desert", "culture", "oil", "camels", "Middle East"],
      pl: ["pustynia", "kultura", "ropa", "wielbłąd", "Blisko Wschód"],
    },
    title: {
      en: "Arabia",
      pl: "Arabia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["structure", "curve", "bridge", "doorway", "monument"],
      pl: ["budowla", "wygięcie", "most", "wejście", "pomnik"],
    },
    title: {
      en: "Arch",
      pl: "Sklepienie łukowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["country", "South America", "tango", "football", "steak"],
      pl: ["państwo", "Ameryka Południowa", "tango", "piłka nożna", "stek"],
    },
    title: {
      en: "Argentina",
      pl: "Argentyna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["continent", "culture", "diversity", "history", "cuisine"],
      pl: ["kontynent", "kultura", "różnorodność", "historia", "kuchnia"],
    },
    title: {
      en: "Asia",
      pl: "Azja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["road", "pavement", "construction", "blacktop", "drive"],
      pl: ["droga", "chodnik", "budowa", "warstwa", "jechać"],
    },
    title: {
      en: "Asphalt",
      pl: "Asfalt",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["science", "space", "stars", "planets", "galaxies"],
      pl: ["nauka", "kosmos", "gwiazda", "planeta", "galaktyka"],
    },
    title: {
      en: "Astronomy",
      pl: "Astronomia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["science", "particle", "nucleus", "energy", "electron"],
      pl: ["nauka", "cząsteczka", "jądro", "energia", "elektron"],
    },
    title: {
      en: "Atom",
      pl: "Atom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["lawyer", "legal", "court", "case", "representation"],
      pl: ["mecenas", "adwokat", "sąd", "rozprawa", "reprezentowanie"],
    },
    title: {
      en: "Attorney",
      pl: "Prawnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["continent", "country", "kangaroo", "Sydney", "Great Barrier Reef"],
      pl: ["kontynent", "kraj", "kangur", "Sydney", "Wielka Rafa Koralowa"],
    },
    title: {
      en: "Australia",
      pl: "Australia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["street", "road", "boulevard", "city", "address"],
      pl: ["jezdnia", "droga", "bulwar", "miasto", "adres"],
    },
    title: {
      en: "Avenue",
      pl: "Aleja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "burrow", "stripes", "wolverine", "mammal"],
      pl: ["zwierzę", "nora", "pasek", "rosomak", "ssak"],
    },
    title: {
      en: "Badger",
      pl: "Borsuk",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fruit", "red", "sweet", "punnet", "plant"],
      pl: ["owoc", "czerwony", "słodki", "kobiałka", "roślina"],
    },
    title: {
      en: "Strawberry",
      pl: "Truskawka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["teacher", "education", "school", "lesson", "test"],
      pl: ["nauczyciel", "edukacja", "szkoła", "lekcja", "test"],
    },
    title: {
      en: "Student",
      pl: "Uczeń",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["season", "hot", "vacation", "beach", "sun"],
      pl: ["pora roku", "gorący", "wakacje", "plaża", "słońce"],
    },
    title: {
      en: "Summer",
      pl: "Lato",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["studio", "ink", "design", "permanent", "needle"],
      pl: ["studio", "dziara", "projekt", "stały", "igła"],
    },
    title: {
      en: "Tattoo",
      pl: "Tatuaż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["device", "call", "communication", "dial", "talk"],
      pl: ["urządzenie", "dzwonić", "komunikacja", "wybierać", "rozmawiać"],
    },
    title: {
      en: "Telephone",
      pl: "Telefon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clock", "duration", "past", "present", "future"],
      pl: ["zegar", "trwania", "przeszłość", "teraźniejszość", "przyszłość"],
    },
    title: {
      en: "Time",
      pl: "Czas",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paper", "disposable", "nose", "wipe", "tears"],
      pl: ["papier", "jednorazowy", "nos", "wycierać", "łza"],
    },
    title: {
      en: "Tissue",
      pl: "Chusteczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "red", "vegetable", "salad", "sauce"],
      pl: ["owoc", "czerwony", "warzywo", "sałatka", "sos"],
    },
    title: {
      en: "Tomato",
      pl: "Pomidor",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fish", "can", "sushi", "mackerel", "ocean"],
      pl: ["ryba", "puszka", "sushi", "makrela", "ocean"],
    },
    title: {
      en: "Tuna",
      pl: "Tuńczyk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["news", "screen", "watch", "show", "program"],
      pl: ["wiadomości", "ekran", "oglądać", "show", "program"],
    },
    title: {
      en: "TV",
      pl: "Telewizor",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cleaner", "suction", "dust", "carpet", "hose"],
      pl: ["sprzątacz", "zasysanie", "kurz", "dywan", "wąż"],
    },
    title: {
      en: "Vacuum",
      pl: "Odkurzacz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["recording", "camera", "movie", "watch", "screen"],
      pl: ["nagranie", "kamera", "film", "oglądać", "ekran"],
    },
    title: {
      en: "Video",
      pl: "Wideo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["history", "raid", "warrior", "ship", "helmet"],
      pl: ["historia", "najeżdżać", "wojownik", "statek", "hełm"],
    },
    title: {
      en: "Viking",
      pl: "Wiking",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["barrier", "structure", "brick", "paint", "poster"],
      pl: ["bariera", "konstrukcja", "cegła", "farba", "plakat"],
    },
    title: {
      en: "Wall",
      pl: "Ściana",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["conflict", "battle", "soldier", "weapons", "history"],
      pl: ["konflikt", "bitwa", "żołnierz", "broń", "historia"],
    },
    title: {
      en: "War",
      pl: "Wojna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["liquid", "drink", "swim", "ocean", "H2O"],
      pl: ["ciecz", "pić", "pływać", "ocean", "H2O"],
    },
    title: {
      en: "Water",
      pl: "Woda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["season", "cold", "snow", "holiday", "freeze"],
      pl: ["pora roku", "chłodny", "śnieg", "ferie", "zamarzać"],
    },
    title: {
      en: "Winter",
      pl: "Zima",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["magic", "broomstick", "hat", "cauldron", "Halloween"],
      pl: ["magia", "miotła", "kapelusz", "kocioł", "Halloween"],
    },
    title: {
      en: "Witch",
      pl: "Czarownica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "tree", "peck", "beak", "feathers"],
      pl: ["ptak", "drzewo", "dziobać", "dziób", "pióro"],
    },
    title: {
      en: "Woodpecker",
      pl: "Dzięcioł",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["planet", "Earth", "globe", "universe", "population"],
      pl: ["planeta", "Ziemia", "glob", "wszechświat", "populacja"],
    },
    title: {
      en: "World",
      pl: "Świat",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fastener", "clothes", "teeth", "slide", "pull"],
      pl: ["zapięcie", "ubrania", "ząbki", "wieża", "fosa"],
    },
    title: {
      en: "Zipper",
      pl: "Zamek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["scientist", "animals", "biology", "study", "research"],
      pl: ["naukowiec", "zwierzęta", "biologia", "uczyć", "badanie"],
    },
    title: {
      en: "Zoologist",
      pl: "Zoolog",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["burning", "fire", "flames", "inferno", "blazing"],
      pl: ["płonący", "ogień", "płomień", "piekło", "piekący"],
    },
    title: {
      en: "Ablaze",
      pl: "Ognisty",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["mature", "teenager", "age", "responsible", "independent"],
      pl: ["dojrzały", "nastolatek", "wiek", "odpowiedzialność", "niezależność"],
    },
    title: {
      en: "Adult",
      pl: "Dorosły",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["exercise", "fitness", "cardio", "dance", "music"],
      pl: ["gimnastyka", "fitness", "kardio", "taniec", "muzyka"],
    },
    title: {
      en: "Aerobics",
      pl: "Aerobik",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["organization", "business", "company", "authority", "government"],
      pl: ["organizacja", "biznes", "firma", "ekspert", "rząd"],
    },
    title: {
      en: "Agency",
      pl: "Agencja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plan", "schedule", "program", "meeting", "task"],
      pl: ["plan", "harmonogram", "program", "spotkanie", "zadanie"],
    },
    title: {
      en: "Agenda",
      pl: "Agenda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["letters", "A to Z", "spelling", "language", "communication"],
      pl: ["litera", "A do Z", "pisownia", "język", "komunikacja"],
    },
    title: {
      en: "Alphabet",
      pl: "Alfabet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ship", "sea", "sailor", "bottom", "secure"],
      pl: ["statek", "morze", "marynarz", "dno", "zabezpieczać"],
    },
    title: {
      en: "Anchor",
      pl: "Kotwica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["creature", "mammal", "domestic", "pet", "zoo"],
      pl: ["stworzenie", "ssak", "domowy", "głaskać", "zoo"],
    },
    title: {
      en: "Animal",
      pl: "Zwierzę",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "colony", "small", "busy", "food"],
      pl: ["owad", "grupa", "mały", "pracowity", "jedzenie"],
    },
    title: {
      en: "Ant",
      pl: "Mrówka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["region", "pole", "polar", "ice", "north"],
      pl: ["region", "biegun", "polarny", "lód", "północ"],
    },
    title: {
      en: "Arctic",
      pl: "Arktyka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["furniture", "comfortable", "relax", "sit", "cushion"],
      pl: ["meble", "wygodny", "odpoczywać", "siadać", "poduszka"],
    },
    title: {
      en: "Armchair",
      pl: "Fotel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["weapon", "point", "direction", "target", "bow"],
      pl: ["broń", "mierzyć", "kierunek", "cel", "łuk"],
    },
    title: {
      en: "Arrow",
      pl: "Strzała",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["meeting", "gathering", "group", "parts", "school"],
      pl: ["spotkanie", "zgromadzenie", "grupa", "rodzic", "szkoła"],
    },
    title: {
      en: "Assembly",
      pl: "Zebranie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["space", "NASA", "exploration", "suit", "rocket"],
      pl: ["kosmos", "NASA", "eksploracja", "kombinezon", "rakieta"],
    },
    title: {
      en: "Astronaut",
      pl: "Astronauta",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sports", "competition", "fitness", "stamina", "game"],
      pl: ["sport", "rywalizacja", "fitness", "wytrzymałość", "mecz"],
    },
    title: {
      en: "Athlete",
      pl: "Atleta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ocean", "water", "sea", "coast", "shipping"],
      pl: ["wielki", "woda", "morze", "wybrzeże", "żegluga"],
    },
    title: {
      en: "Atlantic",
      pl: "Ocean Atlantycki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["book", "map", "globe", "geography", "earth"],
      pl: ["książka", "mapa", "globus", "geografia", "Ziemia"],
    },
    title: {
      en: "Atlas",
      pl: "Atlas",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fruit", "green", "healthy", "toast", "guacamole"],
      pl: ["owoc", "zielony", "zdrowy", "tost", "guacamole"],
    },
    title: {
      en: "Avocado",
      pl: "Awokado",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["material", "clear", "window", "break", "drink"],
      pl: ["tworzywo", "przezroczysty", "okno", "rozbić", "pić"],
    },
    title: {
      en: "Glass",
      pl: "Szkło",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["target", "aim", "achievement", "success", "finish"],
      pl: ["zamierzenie", "dążenie", "osiągnięcie", "sukces", "skończyć"],
    },
    title: {
      en: "Goal",
      pl: "Cel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["time", "sand", "countdown", "measure", "clock"],
      pl: ["czas", "piasek", "odliczanie", "mierzyć", "zegar"],
    },
    title: {
      en: "Hourglass",
      pl: "Klepsydra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["home", "building", "roof", "door", "window"],
      pl: ["rodzina", "budynek", "dach", "drzwi", "okno"],
    },
    title: {
      en: "House",
      pl: "Dom",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["card", "clown", "trickster", "mischief", "Batman"],
      pl: ["karta", "klaun", "oszust", "krzywda", "Batman"],
    },
    title: {
      en: "Joker",
      pl: "Joker",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["leap", "bounce", "hop", "skip", "hurdle"],
      pl: ["poderwać się", "odbić się", "kicać", "podryg", "płotek"],
    },
    title: {
      en: "Jump",
      pl: "Skakać",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "red", "black", "spots", "garden"],
      pl: ["owad", "czerwony", "czarny", "kropka", "ogród"],
    },
    title: {
      en: "Ladybug",
      pl: "Biedronka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["key", "secure", "mechanism", "latch", "combination"],
      pl: ["klucz", "bezpieczny", "mechanizm", "zatrzask", "kombinacja"],
    },
    title: {
      en: "Lock",
      pl: "Zamek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["candy", "sweet", "stick", "heart", "treat"],
      pl: ["cukierek", "słodycze", "patyk", "serce", "smakołyk"],
    },
    title: {
      en: "Lollipop",
      pl: "Lizak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["publication", "articles", "images", "subscription", "cover"],
      pl: ["publikacja", "artykuł", "zdjęcie", "subskrypcja", "okładka"],
    },
    title: {
      en: "Magazine",
      pl: "Magazyn",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["illusion", "trick", "spell", "wand", "Harry Potter"],
      pl: ["iluzja", "sztuczka", "zaklęcie", "różdżka", "Harry Potter"],
    },
    title: {
      en: "Magic",
      pl: "Magia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fridge", "metal", "north", "south", "field"],
      pl: ["lodówka", "metal", "północ", "południe", "pole"],
    },
    title: {
      en: "Magnet",
      pl: "Magnes",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["insect", "bite", "blood", "net", "disease"],
      pl: ["owad", "ukąsić", "krew", "siatka", "choroba"],
    },
    title: {
      en: "Mosquito",
      pl: "Komar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cup", "drink", "handle", "coffee", "tea"],
      pl: ["filiżanka", "picie", "uchwyt", "kawa", "herbata"],
    },
    title: {
      en: "Mug",
      pl: "Kubek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fungus", "edible", "poisonous", "cap", "stem"],
      pl: ["pleśń", "jadalny", "trujący", "kapelusz", "trzon"],
    },
    title: {
      en: "Mushroom",
      pl: "Grzyb",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["work", "desk", "computer", "remote", "job"],
      pl: ["pracować", "biurko", "komputer", "zdalny", "praca"],
    },
    title: {
      en: "Office",
      pl: "Biuro",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "performance", "singing", "stage", "drama"],
      pl: ["muzyka", "przedstawienie", "śpiew", "scena", "dramat"],
    },
    title: {
      en: "Opera",
      pl: "Opera",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "instruments", "conductor", "symphony", "classical"],
      pl: ["muzyka", "instrument", "dyrygent", "symfonia", "klasyczny"],
    },
    title: {
      en: "Orchestra",
      pl: "Orkiestra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["breakfast", "syrup", "butter", "batter", "flat"],
      pl: ["śniadanie", "syrop", "masło", "ciasto", "płaski"],
    },
    title: {
      en: "Pancake",
      pl: "Naleśnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "butter", "allergy", "shell", "snack"],
      pl: ["jedzenie", "masło", "alergia", "skorupka", "przekąska"],
    },
    title: {
      en: "Peanut",
      pl: "Orzech ziemny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["spice", "hot", "seasoning", "vegetable", "grinder"],
      pl: ["doprawić", "ostry", "przyprawa", "warzywo", "młynek"],
    },
    title: {
      en: "Pepper",
      pl: "Pieprz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "cucumber", "sour", "brine", "jar"],
      pl: ["jedzenie", "zalewa", "kwaśny", "solanka", "słoik"],
    },
    title: {
      en: "Pickle",
      pl: "Ogórek kiszony",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["law enforcement", "badge", "uniform", "car", "protect"],
      pl: ["służby porządkowe", "odznaka", "mundur", "samochód", "chronić"],
    },
    title: {
      en: "Police",
      pl: "Policja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "starch", "fry", "boil", "mashed"],
      pl: ["warzywo", "skrobia", "smażyć", "gotować", "tłuc"],
    },
    title: {
      en: "Potato",
      pl: "Ziemniak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "rain", "splash", "wet", "shallow"],
      pl: ["woda", "deszcz", "ochlapać", "mokry", "płytki"],
    },
    title: {
      en: "Puddle",
      pl: "Kałuża",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["king", "monarch", "crown", "throne", "card"],
      pl: ["król", "monarcha", "korona", "tron", "karta"],
    },
    title: {
      en: "Queen",
      pl: "Królowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["jewelry", "finger", "diamond", "engagement", "circle"],
      pl: ["biżuteria", "palec", "diament", "zaręczyny", "koło"],
    },
    title: {
      en: "Ring",
      pl: "Pierścionek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["machine", "automation", "technology", "artificial intelligence", "science"],
      pl: ["maszyna", "automatyzacja", "technologia", "sztuczna inteligencja", "nauka"],
    },
    title: {
      en: "Robot",
      pl: "Robot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["material", "elastic", "erase", "band", "tire"],
      pl: ["tworzywo", "elastyczny", "ścierać", "opaska", "opona"],
    },
    title: {
      en: "Rubber",
      pl: "Guma",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["horse", "riding", "leather", "stirrup", "equestrian"],
      pl: ["koń", "jazda", "skóra", "strzemię", "jeździec"],
    },
    title: {
      en: "Saddle",
      pl: "Siodło",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Christmas", "gift", "beard", "reindeer", "chimney"],
      pl: ["Boże Narodzenie", "prezent", "broda", "renifer", "kominek"],
    },
    title: {
      en: "Santa Claus",
      pl: "Święty Mikołaj",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["buy", "purchase", "store", "mall", "groceries"],
      pl: ["kupować", "nabywać", "sklep", "galeria handlowa", "artykuły spożywcze"],
    },
    title: {
      en: "Shopping",
      pl: "Zakupy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["camping", "fire", "insulation", "zipper", "warm"],
      pl: ["kemping", "ogień", "izolacja", "zamek", "ciepły"],
    },
    title: {
      en: "Sleeping bag",
      pl: "Śpiwór",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["animal", "slow", "shell", "slime", "garden"],
      pl: ["zwierzę", "wolny", "skorupa", "śluz", "ogród"],
    },
    title: {
      en: "Snail",
      pl: "Ślimak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wash", "lather", "bar", "shower", "scent"],
      pl: ["myć", "piana", "kostka", "prysznic", "zapach"],
    },
    title: {
      en: "Soap",
      pl: "Mydło",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["drink", "carbonated", "cola", "pop", "fizz"],
      pl: ["pić", "woda", "cola", "bąbelki", "szampan"],
    },
    title: {
      en: "Soda",
      pl: "Napój gazowany",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "flow", "creek", "river", "nature"],
      pl: ["woda", "przepływać", "potok", "rzeka", "natura"],
    },
    title: {
      en: "Stream",
      pl: "Strumyk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["road", "pavement", "sidewalk", "traffic", "city"],
      pl: ["droga", "chodnik", "bruk", "ruch", "miasto"],
    },
    title: {
      en: "Street",
      pl: "Ulica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gym", "body", "exercise", "heat", "odor"],
      pl: ["siłownia", "ciało", "ćwiczenie", "ciepło", "zapach"],
    },
    title: {
      en: "Sweat",
      pl: "Pot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["military", "gun", "track", "war", "camouflage"],
      pl: ["wojsko", "armata", "gąsienica", "wojna", "kamuflaż"],
    },
    title: {
      en: "Tank",
      pl: "Czołg",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["adhesive", "stick", "insulating", "double-sided", "cassette"],
      pl: ["klej", "lepić", "izolacyjny", "dwustronny", "kaseta"],
    },
    title: {
      en: "Tape",
      pl: "Taśma",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["educator", "school", "instruction", "lesson", "mentor"],
      pl: ["wychowawca", "szkoła", "polecenie", "lekcja", "mentor"],
    },
    title: {
      en: "Teacher",
      pl: "Nauczyciel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["device", "screen", "channel", "watch", "entertainment"],
      pl: ["urządzenie", "ekran", "kanał", "oglądać", "rozrywka"],
    },
    title: {
      en: "Television",
      pl: "Telewizja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sound", "lightning", "storm", "loud", "electricity"],
      pl: ["dźwięk", "błyskawica", "burza", "głośny", "elektryczność"],
    },
    title: {
      en: "Thunder",
      pl: "Grzmot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["admission", "pass", "event", "concert", "movie"],
      pl: ["wstęp", "przechodzić", "wydarzenie", "koncert", "film"],
    },
    title: {
      en: "Ticket",
      pl: "Bilet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["neck", "knot", "formal", "suit", "business"],
      pl: ["szyja", "węzeł", "formalny", "garnitur", "biznes"],
    },
    title: {
      en: "Tie",
      pl: "Krawat",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["football", "score", "American", "game", "team"],
      pl: ["futbol", "wynik", "amerykański", "mecz", "drużyna"],
    },
    title: {
      en: "Touchdown",
      pl: "Przyłożenie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["building", "tall", "structure", "fortress", "castle"],
      pl: ["budynek", "wysoki", "konstrukcja", "forteca", "zamek"],
    },
    title: {
      en: "Tower",
      pl: "Wieża",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["transportation", "locomotive", "tracks", "carriages", "public"],
      pl: ["transport", "lokomotywa", "tory", "wagon", "publiczny"],
    },
    title: {
      en: "Train",
      pl: "Pociąg",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plant", "branches", "leaves", "trunk", "nature"],
      pl: ["roślina", "gałąź", "liść", "pień", "natura"],
    },
    title: {
      en: "Tree",
      pl: "Drzewo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shape", "geometric", "instrument", "music", "three"],
      pl: ["figura", "geometryczna", "instrument", "muzyka", "trzy"],
    },
    title: {
      en: "Triangle",
      pl: "Trójkąt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["travel", "journey", "vacation", "adventure", "destination"],
      pl: ["podróżować", "wędrówka", "wakacje", "przygoda", "cel"],
    },
    title: {
      en: "Trip",
      pl: "Wycieczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["luggage", "storage", "elephant", "car", "tree"],
      pl: ["dachowy", "rower", "walizka", "samochód", "auto"],
    },
    title: {
      en: "Trunk",
      pl: "Bagażnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "brass", "instrument", "sound", "jazz"],
      pl: ["muzyka", "dęty", "instrument", "dźwięk", "jazz"],
    },
    title: {
      en: "Trumpet",
      pl: "Trąbka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["game", "board", "mat", "dots", "colour"],
      pl: ["gra", "planszowa", "mata", "kropka", "kolor"],
    },
    title: {
      en: "Twister",
      pl: "Twister",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["mythical", "horse", "horn", "fairy tale", "magic"],
      pl: ["nieistniejący", "koń", "róg", "bajka", "magia"],
    },
    title: {
      en: "Unicorn",
      pl: "Jednorożec",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Twilight", "undead", "blood", "fangs", "Dracula"],
      pl: ["Zmierzch", "nieumarły", "krew", "kieł", "Drakula"],
    },
    title: {
      en: "Vampire",
      pl: "Wampir",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["vehicle", "transport", "cargo", "passenger", "body"],
      pl: ["pojazd", "transport", "ładunek", "pasażer", "nadwozie"],
    },
    title: {
      en: "Van",
      pl: "Furgonetka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["transportation", "car", "truck", "bus", "motorcycle"],
      pl: ["transport", "samochód", "ciężarówka", "autobus", "motocykl"],
    },
    title: {
      en: "Vehicle",
      pl: "Pojazd",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["planet", "Mercury", "Mars", "Jupiter", "Saturn"],
      pl: ["planeta", "Merkury", "Mars", "Jowisz", "Saturn"],
    },
    title: {
      en: "Venus",
      pl: "Wenus",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["town", "community", "rural", "field", "tractor"],
      pl: ["miasto", "społeczność", "rolniczy", "pole", "traktor"],
    },
    title: {
      en: "Village",
      pl: "Wieś",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sour", "cooking", "liquid", "acid", "dressing"],
      pl: ["kwaśny", "gotowanie", "ciecz", "cierpki", "sos"],
    },
    title: {
      en: "Vinegar",
      pl: "Ocet",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["disease", "infection", "computer", "program", "attack"],
      pl: ["choroba", "infekcja", "komputer", "program", "atak"],
    },
    title: {
      en: "Virus",
      pl: "Wirus",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fruit", "green", "juicy", "seed", "summer"],
      pl: ["owoc", "zielony", "soczysty", "pestka", "lato"],
    },
    title: {
      en: "Watermelon",
      pl: "Arbuz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["candle", "ear", "hair", "museum", "sculpture"],
      pl: ["świeczka", "ucho", "włosy", "muzeum", "figura"],
    },
    title: {
      en: "Wax",
      pl: "Wosk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["marriage", "ceremony", "bride", "groom", "rings"],
      pl: ["małżeństwo", "uroczystość", "panna młoda", "pan młody", "obrączka"],
    },
    title: {
      en: "Wedding",
      pl: "Ślub",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mammal", "ocean", "big", "swim", "blubber"],
      pl: ["ssak", "ocean", "duży", "pływać", "tłuszcz"],
    },
    title: {
      en: "Whale",
      pl: "Wieloryb",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["mobility", "disability", "seat", "push", "injured"],
      pl: ["mobilność", "niepełnosprawność", "siedzenie", "pchać", "ranny"],
    },
    title: {
      en: "Wheelchair",
      pl: "Wózek inwalidzki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["female", "gender", "girl", "lady", "man"],
      pl: ["żeński", "płeć", "dziewczyna", "pani", "mężczyzna"],
    },
    title: {
      en: "Woman",
      pl: "Kobieta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["job", "employment", "career", "task", "labor"],
      pl: ["miejsce", "zatrudnienie", "kariera", "zadanie", "robota"],
    },
    title: {
      en: "Work",
      pl: "Pracować",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["video", "social media", "platform", "watch", "upload"],
      pl: ["filmik", "media społecznościowe", "platforma", "oglądać", "wrzucać"],
    },
    title: {
      en: "YouTube",
      pl: "YouTube",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Buddhism", "philosophy", "peace", "meditation", "harmony"],
      pl: ["Buddyzm", "filozofia", "spokój", "medytacja", "harmonia"],
    },
    title: {
      en: "Zen",
      pl: "Zen",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["number", "none", "nothing", "digit", "null"],
      pl: ["liczba", "ani jeden", "nic", "cyfra", "null"],
    },
    title: {
      en: "Zero",
      pl: "Zero",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["performer", "circus", "balance", "trick", "aerial"],
      pl: ["artysta", "cyrk", "balans", "sztuczka", "powietrzny"],
    },
    title: {
      en: "Acrobat",
      pl: "Akrobata",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sticky", "glue", "tape", "bond", "attach"],
      pl: ["lepki", "klej", "taśma", "spoiwo", "przymocowywać"],
    },
    title: {
      en: "Adhesive",
      pl: "Przyczepny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["love", "fondness", "emotion", "care", "sentiment"],
      pl: ["miłość", "sentyment", "emocje", "troska", "uczucie"],
    },
    title: {
      en: "Affection",
      pl: "Sympatia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["religion", "ceremony", "worship", "sacrifice", "church"],
      pl: ["religia", "ceremonia", "ubóstwiać", "ofiara", "kościół"],
    },
    title: {
      en: "Altar",
      pl: "Ołtarz",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["country", "USA", "democracy", "freedom", "flag"],
      pl: ["państwo", "USA", "demokracja", "wolność", "flaga"],
    },
    title: {
      en: "America",
      pl: "Ameryka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["heaven", "divine", "hell", "wings", "halo"],
      pl: ["niebo", "boski", "piekło", "skrzydła", "aureola"],
    },
    title: {
      en: "Angel",
      pl: "Anioł",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["designer", "buildings", "construction", "blueprint", "engineer"],
      pl: ["projektant", "budynek", "konstrukcja", "plan", "inżynier"],
    },
    title: {
      en: "Architect",
      pl: "Architekt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["protection", "knight", "metal", "defense", "sword"],
      pl: ["ochrona", "rycerz", "metal", "obrona", "miecz"],
    },
    title: {
      en: "Armor",
      pl: "Zbroja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["painter", "musician", "creative", "performer", "talent"],
      pl: ["malarz", "muzyk", "kreatywny", "wykonawca", "talent"],
    },
    title: {
      en: "Artist",
      pl: "Artysta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["infant", "newborn", "child", "stroller", "diaper"],
      pl: ["noworodek", "narodzony", "dziecko", "wózek", "pieluszka"],
    },
    title: {
      en: "Baby",
      pl: "Niemowlę",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["food", "meat", "breakfast", "crispy", "strips"],
      pl: ["jedzenie", "mięso", "śniadanie", "chrupiący", "paski"],
    },
    title: {
      en: "Bacon",
      pl: "Bekon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Barcelona", "Spain", "Antoni Gaudi", "unfinished", "modernist"],
      pl: ["Barcelona", "Hiszpania", "Antoni Gaudi", "niedokończony", "modernistyczny"],
    },
    title: {
      en: "Sagrada Familia",
      pl: "Sagrada Familia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Jordan", "city", "rock", "treasury", "Indiana Jones"],
      pl: ["Jordania", "miasto", "skała", "skarbiec", "Indiana Jones"],
    },
    title: {
      en: "Petra",
      pl: "Petra",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Vatican City", "Rome", "church", "dome", "Michelangelo"],
      pl: ["Watykan", "Rzym", "kościół", "kopuła", "Michał Anioł"],
    },
    title: {
      en: "St. Peter's Basilica",
      pl: "Bazylika św. Piotra",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Germany", "Berlin", "landmark", "history", "unification"],
      pl: ["Niemcy", "Berlin", "zabytek", "historia", "zjednoczenie"],
    },
    title: {
      en: "Brandenburg Gate",
      pl: "Brama Brandenburska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["planets", "Milky Way", "space", "universe", "astronomy"],
      pl: ["planeta", "Droga Mleczna", "kosmos", "wszechświat", "astronomia"],
    },
    title: {
      en: "Solar System",
      pl: "Układ Słoneczny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tennis", "grass", "London", "court", "Grand Slam"],
      pl: ["tenis", "trawa", "Londyn", "kort", "Wielki Szlem"],
    },
    title: {
      en: "Wimbledon",
      pl: "Wimbledon",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Colorado", "USA", "range", "hiking", "skiing"],
      pl: ["Kolorado", "USA", "łańcuch", "wędrówka", "narciarstwo"],
    },
    title: {
      en: "Rocky Mountains",
      pl: "Góry Skaliste",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["martial arts", "actor", "Jeet Kune Do", "Hong Kong", "Enter the Dragon"],
      pl: ["sztuki walki", "aktor", "Jeet Kune Do", "Hong Kong", "Wejście Smoka"],
    },
    title: {
      en: "Bruce Lee",
      pl: "Bruce Lee",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["castle", "theme park", "Mickey Mouse", "Neuschwanstein", "Walt Disney"],
      pl: ["zamek", "park rozrywki", "Myszka Miki", "Neuschwanstein", "Walt Disney"],
    },
    title: {
      en: "Disneyland",
      pl: "Disneyland",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["NASA", "universe", "images", "orbit", "astronomy"],
      pl: ["NASA", "wszechświat", "obraz", "orbita", "astronomia"],
    },
    title: {
      en: "Hubble Space Telescope",
      pl: "Kosmiczny Teleskop Hubble’a",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Germany", "cold war", "communism", "east", "west"],
      pl: ["Niemcy", "zimna wojna", "komunizm", "wschód", "zachód"],
    },
    title: {
      en: "Berlin Wall",
      pl: "Mur Berliński",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Windows", "Bill Gates", "Office", "Word", "Xbox"],
      pl: ["Windows", "Bill Gates", "Office", "Word", "Xbox"],
    },
    title: {
      en: "Microsoft",
      pl: "Microsoft",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["social media", "Mark Zuckerberg", "Messenger", "Instagram", "privacy"],
      pl: ["media społecznościowe", "Mark Zuckerberg", "Messenger", "Instagram", "prywatność"],
    },
    title: {
      en: "Facebook",
      pl: "Facebook",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Breaking Bad", "watch", "House of Cards", "Stranger Things", "website"],
      pl: ["Breaking Bad", "oglądać", "House of Cards", "Stranger Things", "strona internetowa"],
    },
    title: {
      en: "Netflix",
      pl: "Netflix",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ride", "Eats", "app", "driver", "taxi"],
      pl: ["jechać", "Eats", "aplikacja", "kierowca", "taksówka"],
    },
    title: {
      en: "Uber",
      pl: "Uber",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bird", "Elon Musk", "hashtags", "social", "verified"],
      pl: ["ptak", "Elon Musk", "hashtag", "społeczny", "zweryfikowany"],
    },
    title: {
      en: "Twitter",
      pl: "Twitter",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Mickey Mouse", "Marvel", "theme park", "animation", "Pixar"],
      pl: ["Myszka Miki", "Marvel", "park rozrywki", "animacja", "Pixar"],
    },
    title: {
      en: "Disney",
      pl: "Disney",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["snacks", "beverages", "Frito-Lay", "cola", "Gatorade"],
      pl: ["przekąska", "napój", "Frito-Lay", "cola", "Gatorade"],
    },
    title: {
      en: "PepsiCo",
      pl: "PepsiCo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["car", "auto", "Mustang", "USA", "Henry"],
      pl: ["samochód", "auto", "Mustang", "USA", "Henry"],
    },
    title: {
      en: "Ford",
      pl: "Ford",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["computers", "hardware", "laser", "printer", "ink"],
      pl: ["komputer", "sprzęt", "laser", "drukarka", "tusz"],
    },
    title: {
      en: "HP",
      pl: "HP",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fashion", "luxury", "Italy", "House", "handbags"],
      pl: ["moda", "luksus", "Włochy", "Dom", "torebka"],
    },
    title: {
      en: "Gucci",
      pl: "Gucci",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cloud", "computing", "USA", "company", "AppExchange"],
      pl: ["chmura", "przetwarzanie", "USA", "firma", "AppExchange"],
    },
    title: {
      en: "Salesforce",
      pl: "Salesforce",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["space", "Jedi", "Darth Vader", "Skywalker", "lightsabers"],
      pl: ["kosmos", "Jedi", "Darth Vader", "Skywalker", "miecz świetlny"],
    },
    title: {
      en: "Star Wars",
      pl: "Gwiezdne wojny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dinosaurs", "Steven Spielberg", "Isla Nublar", "T-Rex", "adventure"],
      pl: ["dinozaur", "Steven Spielberg", "Isla Nublar", "T-Rex", "przygodowy"],
    },
    title: {
      en: "Jurassic Park",
      pl: "Park Jurajski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["prison", "Stephen King", "Morgan Freeman", "movie", "hope"],
      pl: ["więzienie", "Stephen King", "Morgan Freeman", "film", "nadzieja"],
    },
    title: {
      en: "The Shawshank Redemption",
      pl: "Skazani na Shawshank",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Eleven", "Demogorgon", "Netflix", "series", "Dungeons & Dragons"],
      pl: ["Jedenastka", "Demogorgon", "Netflix", "serial", "Dungeons & Dragons"],
    },
    title: {
      en: "Stranger Things",
      pl: "Stranger Things",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "Titanic", "The Wolf of Wall Street", "Inception", "award"],
      pl: ["aktor", "Titanic", "Wilk z Wall Street", "Incepcja", "nagroda"],
    },
    title: {
      en: "Leonardo DiCaprio",
      pl: "Leonardo DiCaprio",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Hello", "Someone Like You", "music", "Grammy"],
      pl: ["piosenkarka", "Hello", "Someone Like You", "muzyka", "Grammy"],
    },
    title: {
      en: "Adele",
      pl: "Adele",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actress", "The Hunger Games", "movie", "USA", "Oscar"],
      pl: ["aktortka", "Igrzyska śmierci", "film", "USA", "Oscar"],
    },
    title: {
      en: "Jennifer Lawrence",
      pl: "Jennifer Lawrence",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Wizards of Waverly Place", "Alex Russo", "pop", "music"],
      pl: ["piosenkarka", "Czarodzieje z Waverly Place", "Alex Russo", "pop", "muzyka"],
    },
    title: {
      en: "Selena Gomez",
      pl: "Selena Gomez",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["running", "jumping", "throwing", "track", "field"],
      pl: ["bieg", "skok", "rzut", "tor", "boisko"],
    },
    title: {
      en: "Athletics",
      pl: "Lekkoatletyka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["belt", "kick", "punch", "Korea", "sparring"],
      pl: ["pas", "kopać", "uderzać", "Korea", "boksowanie"],
    },
    title: {
      en: "Taekwondo",
      pl: "Taekwondo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["squat", "bench press", "deadlift", "sport", "record"],
      pl: ["przysiad", "wyciskanie", "martwy ciąg", "sport", "rekord"],
    },
    title: {
      en: "Powerlifting",
      pl: "Trójbój siłowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["swim", "bike", "run", "sport", "ironman"],
      pl: ["pływanie", "kolarstwo", "bieganie", "sport", "ironman"],
    },
    title: {
      en: "Triathlon",
      pl: "Triathlon",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["obstacle", "horse", "riding", "car", "motorbike"],
      pl: ["przeszkoda", "koń", "jazda", "samochód", "motocykl"],
    },
    title: {
      en: "Gymkhana",
      pl: "Gymkhana",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["basketball", "Chicago Bulls", "six", "GOAT", "Air"],
      pl: ["koszykówka", "Chicago Bulls", "sześć", "najlepszy", "Air"],
    },
    title: {
      en: "Michael Jordan",
      pl: "Michael Jordan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["basketball", "LA Lakers", "NBA", "Mamba", "crash"],
      pl: ["koszykówka", "LA Lakers", "NBA", "Mamba", "wypadek"],
    },
    title: {
      en: "Kobe Bryant",
      pl: "Kobe Bryant",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["soccer", "Argentina", "Barcelona", "Ballon d'Or", "Cristiano Ronaldo"],
      pl: ["piłka nożna", "Argentyna", "Barcelona", "Złota Piłka", "Cristiano Ronaldo"],
    },
    title: {
      en: "Lionel Messi",
      pl: "Lionel Messi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["basketball", "Lakers", "HIV", "NBA", "business"],
      pl: ["koszykówka", "Lakers", "HIV", "NBA", "biznes"],
    },
    title: {
      en: "Magic Johnson",
      pl: "Magic Johnson",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tennis", "US Open", "LGBT", "Grand Slam", "USA"],
      pl: ["tenis", "US Open", "LGBT", "Wielki Szlem", "USA"],
    },
    title: {
      en: "Billie Jean King",
      pl: "Billie Jean King",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["horror", "zombies", "Japan", "game", "Raccoon"],
      pl: ["horror", "zombie", "Japonia", "gra", "Raccoon"],
    },
    title: {
      en: "Resident Evil",
      pl: "Resident Evil",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["shoot", "game", "Xbox", "Cortana", "Bungie"],
      pl: ["strzelać", "gra", "Xbox", "Cortana", "Bungie"],
    },
    title: {
      en: "Halo",
      pl: "Halo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["game", "Japan", "Konami", "PlayStation", "Solid Snake"],
      pl: ["gra", "Japonia", "Konami", "PlayStation", "Solid Snake"],
    },
    title: {
      en: "Metal Gear Solid",
      pl: "Metal Gear Solid",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["game", "EA", "Commander Shepard", "shoot", "Normandy"],
      pl: ["gra", "EA", "Komandor Shepard", "strzelać", "Normandia"],
    },
    title: {
      en: "Mass Effect",
      pl: "Mass Effect",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["difficult", "game", "RPG", "Japan", "FromSoftware"],
      pl: ["trudny", "gra", "RPG", "Japonia", "FromSoftware"],
    },
    title: {
      en: "Dark Souls",
      pl: "Dark Souls",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Moscow", "Russia", "fortified", "complex", "government"],
      pl: ["Moskwa", "Rosja", "ufortyfikowany", "kompleks", "rząd"],
    },
    title: {
      en: "Kremlin",
      pl: "Kreml",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Japan", "volcano", "Tokyo", "hiking", "shinto"],
      pl: ["Japonia", "wulkan", "Tokio", "wędrówka", "sintoizm"],
    },
    title: {
      en: "Mount Fuji",
      pl: "Fudżi",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Wyoming", "Montana", "geysers", "volcano", "Old Faithful"],
      pl: ["Wyoming", "Montana", "gejzer", "wulkan", "Old Faithful"],
    },
    title: {
      en: "Yellowstone National Park",
      pl: "Park Narodowy Yellowstone",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Zambia", "Zimbabwe", "UNESCO", "Zambezi", "bridge"],
      pl: ["Zambia", "Zimbabwe", "UNESCO", "Zambezi", "most"],
    },
    title: {
      en: "Victoria Falls",
      pl: "Wodospady Wiktorii",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Spain", "Granada", "palace", "Moorish", "UNESCO"],
      pl: ["Hiszpania", "Grenada", "pałac", "mauretański", "UNESCO"],
    },
    title: {
      en: "Alhambra",
      pl: "Alhambra",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Turkey", "Istanbul", "mosque", "Byzantine", "dome"],
      pl: ["Turcja", "Stambuł", "meczet", "bizantyński", "kopuła"],
    },
    title: {
      en: "Hagia Sophia",
      pl: "Hagia Sophia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["England", "prison", "Crown Jewels", "beefeaters", "ravens"],
      pl: ["Anglia", "więzienie", "klejnoty koronne", "strażnik", "kruk"],
    },
    title: {
      en: "Tower of London",
      pl: "Tower of London",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Thailand", "Bangkok", "complex", "Wat Phra Kaew", "gold"],
      pl: ["Tajlandia", "Bangkok", "kompleks", "Wat Phra Kaew", "złoto"],
    },
    title: {
      en: "The Grand Palace",
      pl: "Wielki Pałac Królewski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["jungle", "ape", "Jane", "island", "Africa"],
      pl: ["dżungla", "małpa", "Jane", "wyspa", "Afryka"],
    },
    title: {
      en: "Tarzan",
      pl: "Tarzan",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beer", "Munich", "Germany", "festival", "Bavaria"],
      pl: ["piwo", "Monachium", "Niemcy", "festiwal", "Bawaria"],
    },
    title: {
      en: "Oktoberfest",
      pl: "Oktoberfest",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["painter", "postimpressionism", "Sunflowers", "The Starry Night", "ear"],
      pl: ["malarz", "postimpresjonizm", "Słoneczniki", "Gwiaździsta noc", "ucho"],
    },
    title: {
      en: "Vincent van Gogh",
      pl: "Vincent van Gogh",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Arizona", "national park", "Colorado", "river", "tourists"],
      pl: ["Arizona", "Park Narodowy", "Kolorado", "rzeka", "turysta"],
    },
    title: {
      en: "Grand Canyon",
      pl: "Wielki Kanion",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["iPhone", "MacBook", "Steve Jobs", "technology", "innovation"],
      pl: ["iPhone", "MacBook", "Steve Jobs", "technologia", "innowacja"],
    },
    title: {
      en: "Apple",
      pl: "Apple",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["search", "Alphabet", "Larry Page", "Sergey Brin", "Maps"],
      pl: ["wyszukiwanie", "Alphabet", "Larry Page", "Sergey Brin", "Mapy"],
    },
    title: {
      en: "Google",
      pl: "Google",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["soda", "drink", "Pepsi", "zero", "red"],
      pl: ["gazowany", "napój", "Pepsi", "zero", "czerwony"],
    },
    title: {
      en: "Coca-Cola",
      pl: "Coca-Cola",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fast food", "chips", "Big Mac", "Ronald", "drive-thru"],
      pl: ["fast food", "frytki", "Big Mac", "Ronald", "drive-thru"],
    },
    title: {
      en: "McDonald's",
      pl: "McDonald’s",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["software", "Photoshop", "PDF", "IT", "Acrobat"],
      pl: ["oprogramowanie", "Photoshop", "PDF", "informatyka", "Acrobat"],
    },
    title: {
      en: "Adobe",
      pl: "Adobe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["appliances", "Thomas Edison", "light bulb", "conglomerate", "turbine"],
      pl: ["urządzenie", "Thomas Edison", "żarówka", "konglomerat", "turbina"],
    },
    title: {
      en: "General Electric",
      pl: "General Electric",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Jack", "Rose", "Leonardo DiCaprio", "Kate Winslet", "iceberg"],
      pl: ["Jack", "Rose", "Leonardo DiCaprio", "Kate Winslet", "góra lodowa"],
    },
    title: {
      en: "Titanic",
      pl: "Titanic",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["British", "Queen Elizabeth", "Buckingham", "monarchy", "Netflix"],
      pl: ["brytyjski", "Królowa Elżbieta", "Buckingham", "monarchia", "Netflix"],
    },
    title: {
      en: "The Crown",
      pl: "The Crown",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["politics", "Kevin Spacey", "Netflix", "Washington", "Underwood"],
      pl: ["polityka", "Kevin Spacey", "Netflix", "Waszyngton", "Underwood"],
    },
    title: {
      en: "House of Cards",
      pl: "House of Cards",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "1989", "Shake It Off", "Red", "Grammy"],
      pl: ["piosenkarka", "1989", "Shake It Off", "Red", "Grammy"],
    },
    title: {
      en: "Taylor Swift",
      pl: "Taylor Swift",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Umbrella", "music", "Work", "Anti"],
      pl: ["piosenkarka", "Umbrella", "muzyka", "Work", "Anti"],
    },
    title: {
      en: "Rihanna",
      pl: "Rihanna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "Thor", "The Avengers", "movie", "Australia"],
      pl: ["aktor", "Thor", "Avengers", "film", "Australia"],
    },
    title: {
      en: "Chris Hemsworth",
      pl: "Chris Hemsworth",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["actor", "Iron Man", "Sherlock Holmes", "Chaplin", "Marvel"],
      pl: ["aktor", "Iron Man", "Sherlock Holmes", "Chaplin", "Marvel"],
    },
    title: {
      en: "Robert Downey Jr.",
      pl: "Robert Downey Jr.",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "Twilight", "Harry Potter", "Batman", "movie"],
      pl: ["aktor", "Zmierzch", "Harry Potter", "Batman", "film"],
    },
    title: {
      en: "Robert Pattinson",
      pl: "Robert Pattinson",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "Wolverine", "Australia", "movie", "Oscar"],
      pl: ["aktor", "Wolverine", "Australia", "film", "Oscar"],
    },
    title: {
      en: "Hugh Jackman",
      pl: "Hugh Jackman",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "I Will Always Love You", "cocaine", "Grammy", "drugs"],
      pl: ["piosenkarka", "I Will Always Love You", "kokaina", "Grammy", "narkotyki"],
    },
    title: {
      en: "Whitney Houston",
      pl: "Whitney Houston",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["foil", "epee", "sabre", "mask", "touch"],
      pl: ["floret", "szpada", "szabla", "maska", "dotykać"],
    },
    title: {
      en: "Fencing",
      pl: "Szermierka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["touchdown", "quarterback", "helmet", "tackle", "field goal"],
      pl: ["przyłożenie", "rozgrywający", "hełm", "blokować", "strzał na bramkę"],
    },
    title: {
      en: "American football",
      pl: "Futbol amerykański",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sled", "ice", "track", "pilot", "brakeman"],
      pl: ["sanki", "lód", "tor", "pilot", "hamulcowy"],
    },
    title: {
      en: "Bobsleigh",
      pl: "Bobslej",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["horse", "jump", "dressage", "sport", "fence"],
      pl: ["koń", "skok", "ujeżdżenie", "sport", "przeszkoda"],
    },
    title: {
      en: "Equestrian",
      pl: "Jeździec",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["golf", "Masters", "cup", "green", "scandal"],
      pl: ["golf", "Masters", "dołek", "zielony", "skandal"],
    },
    title: {
      en: "Tiger Woods",
      pl: "Tiger Woods",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tennis", "Swiss", "Grand Slam", "Wimbledon", "court"],
      pl: ["tenis", "Szwajcar", "Wielki Szlem", "Wimbledon", "kort"],
    },
    title: {
      en: "Roger Federer",
      pl: "Roger Federer",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["football", "New England Patriots", "quarterback", "Super Bowl", "NFL"],
      pl: ["futbol", "New England Patriots", "rozgrywający", "Super Bowl", "NFL"],
    },
    title: {
      en: "Tom Brady",
      pl: "Tom Brady",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["football", "Green Bay Packers", "Super Bowl", "NFL", "USA"],
      pl: ["futbol", "Green Bay Packers", "Super Bowl", "NFL", "USA"],
    },
    title: {
      en: "Brett Favre",
      pl: "Brett Favre",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["cycling", "Tour de France", "cancer", "doping", "disgrace"],
      pl: ["kolarstwo", "Tour de France", "rak", "doping", "hańba"],
    },
    title: {
      en: "Lance Armstrong",
      pl: "Lance Armstrong",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Pikachu", "Ash", "Pokeball", "evolution", "GO"],
      pl: ["Pikachu", "Ash", "Pokeball", "ewolucja", "GO"],
    },
    title: {
      en: "Pokemon",
      pl: "Pokemon",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["RPG", "Chocobo", "game", "Japan", "crystals"],
      pl: ["RPG", "Chocobo", "game", "Japonia", "kryształ"],
    },
    title: {
      en: "Final Fantasy",
      pl: "Final Fantasy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fall", "blocks", "high score", "game", "Russia"],
      pl: ["spadać", "klocek", "rekord", "gra", "Rosja"],
    },
    title: {
      en: "Tetris",
      pl: "Tetris",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["game", "book", "Ubisoft", "templar", "Desmond"],
      pl: ["gra", "książka", "Ubisoft", "templariusz", "Desmond"],
    },
    title: {
      en: "Assassin's Creed",
      pl: "Assassin's Creed",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["post-apocalyptic", "game", "nuclear", "destruction", "Interplay"],
      pl: ["postapokaliptyczny", "gra", "nuklearny", "zagłada", "Interplay"],
    },
    title: {
      en: "Fallout",
      pl: "Fallout",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["life", "simulation", "game", "human", "EA"],
      pl: ["życie", "symulacja", "gra", "człowiek", "EA"],
    },
    title: {
      en: "The Sims",
      pl: "The Sims",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shoot", "Blizzard", "game", "esports", "Mercy"],
      pl: ["strzelać", "Blizzard", "gra", "esport", "Łaska"],
    },
    title: {
      en: "Overwatch",
      pl: "Overwatch",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["shoot", "Bungie", "game", "action", "MMO"],
      pl: ["strzelać", "Bungie", "gra", "akcja", "MMO"],
    },
    title: {
      en: "Destiny",
      pl: "Destiny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["plumber", "Italy", "Luigi", "jumping", "Bowser"],
      pl: ["hydraulik", "Włochy", "Luigi", "skakać", "Bowser"],
    },
    title: {
      en: "Mario",
      pl: "Mario",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["speed", "Sega", "ring", "power-up", "fast"],
      pl: ["prędkość", "Sega", "pierścień", "power-up", "szybki"],
    },
    title: {
      en: "Sonic",
      pl: "Sonic",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["shoot", "New York", "Mona Sax", "Remedy Entertainment", "game"],
      pl: ["strzelać", "Nowy Jork", "Mona Sax", "Remedy Entertainment", "gra"],
    },
    title: {
      en: "Max Payne",
      pl: "Max Payne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["GTA", "San Andreas", "V", "Michael", "Franklin"],
      pl: ["GTA", "San Andreas", "V", "Michael", "Franklin"],
    },
    title: {
      en: "Trevor Philips",
      pl: "Trevor Philips",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["wizard", "Hogwarts", "scar", "wand", "Hermione"],
      pl: ["czarodziej", "Hogwart", "blizna", "różdżka", "Hermiona"],
    },
    title: {
      en: "Harry Potter",
      pl: "Harry Potter",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["boxing", "Philadelphia", "Adrian", "movie", "Stallone"],
      pl: ["boks", "Filadelfia", "Adrian", "film", "Stallone"],
    },
    title: {
      en: "Rocky Balboa",
      pl: "Rocky Balboa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pirate", "Caribbean", "Johnny Depp", "Black Pearl", "rum"],
      pl: ["pirat", "Karaiby", "Johnny Depp", "Czarna Perła", "rum"],
    },
    title: {
      en: "Jack Sparrow",
      pl: "Jack Sparrow",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["The Hunger Games", "district", "arch", "Jennifer Lawrence", "character"],
      pl: ["Igrzyska śmierci", "dystrykt", "łuk", "Jennifer Lawrence", "postać"],
    },
    title: {
      en: "Katniss Everdeen",
      pl: "Katniss Everdeen",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Game of Thrones", "George R. R. Martin", "Winterfell", "bastard", "character"],
      pl: ["Gra o tron", "George R. R. Martin", "Winterfell", "bękart", "postać"],
    },
    title: {
      en: "Jon Snow",
      pl: "Jon Snow",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Gordon Freeman", "Valve", "game", "shoot", "Combine"],
      pl: ["Gordon Freeman", "Valve", "gra", "strzelać", "Combine"],
    },
    title: {
      en: "Half-Life",
      pl: "Half-Life",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Wild West", "action", "adventure", "game", "cowboys"],
      pl: ["Dziki Zachód", "akcja", "adventure", "gra", "kowboj"],
    },
    title: {
      en: "Red Dead Redemption",
      pl: "Red Dead Redemption",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fight", "game", "action", "adventure", "Fatality"],
      pl: ["bić", "gra", "akcja", "przygoda", "Fatality"],
    },
    title: {
      en: "Mortal Kombat",
      pl: "Mortal Kombat",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Geralt", "Yennefer", "Wild Hunt", "CD Project Red", "Sapkowski"],
      pl: ["Geralt", "Yennefer", "Dziki Gon", "CD Projekt Red", "Sapkowski"],
    },
    title: {
      en: "The Witcher",
      pl: "Wiedźmin",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["BioWare", "game", "Thedas", "Morrigan", "comic"],
      pl: ["BioWare", "gra", "Thedas", "Morrigan", "komiks"],
    },
    title: {
      en: "Dragon Age",
      pl: "Dragon Age",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Tomb Raider", "character", "pistol", "Angelina Jolie", "exploration"],
      pl: ["Tomb Raider", "postać", "pistolet", "Angelina Jolie", "eksploracja"],
    },
    title: {
      en: "Lara Croft",
      pl: "Lara Croft",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pellets", "ghosts", "maze", "game", "arcade"],
      pl: ["kulka", "duch", "labirynt", "gra", "automat"],
    },
    title: {
      en: "Pac-Man",
      pl: "Pac-Man",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["superhero", "Marvel", "Avengers", "comic", "Tony Stark"],
      pl: ["superbohater", "Marvel", "Avengers", "komiks", "Tony Stark"],
    },
    title: {
      en: "Iron Man",
      pl: "Iron Man",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cannibal", "psychiatrist", "Anthony Hopkins", "character", "serial killer"],
      pl: ["kanibał", "psychiatra", "Anthony Hopkins", "postać", "seryjny zabójca"],
    },
    title: {
      en: "Hannibal Lecter",
      pl: "Hannibal Lecter",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["China", "Ming", "fortification", "UNESCO", "tourist"],
      pl: ["Chiny", "Ming", "umocnienie", "UNESCO", "turysta"],
    },
    title: {
      en: "Great Wall",
      pl: "Wielki Mur",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Paris", "France", "Louis XIV", "Hall of Mirrors", "gardens"],
      pl: ["Paryż", "Francja", "Ludwik XIV", "Sala Lustrzana", "ogród"],
    },
    title: {
      en: "Palace of Versailles",
      pl: "Pałac wersalski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Cambodia", "Khmer", "temple", "Hindu", "UNESCO"],
      pl: ["Kambodża", "Khmer", "świątynia", "hinduski", "UNESCO"],
    },
    title: {
      en: "Angkor Wat",
      pl: "Angkor Wat",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["New York", "United States", "skyscraper", "Art Deco", "observatory"],
      pl: ["Nowy Jork", "Stany Zjednoczone", "wieżowiec", "art deco", "obserwatorium"],
    },
    title: {
      en: "Empire State Building",
      pl: "Empire State Building",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Rio de Janeiro", "Brazil", "Art Deco", "statue", "Corcovado"],
      pl: ["Rio de Janeiro", "Brazylia", "art deco", "statua", "Corcovado"],
    },
    title: {
      en: "Christ the Redeemer",
      pl: "Chrystus Odkupiciel",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Paris", "France", "cathedral", "Gothic", "fire"],
      pl: ["Paryż", "Francja", "kościół", "gotyk", "pożar"],
    },
    title: {
      en: "Notre-Dame",
      pl: "Notre-Dame",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Rome", "Italy", "small", "St. Peter's Basilica", "Pope"],
      pl: ["Rzym", "Włochy", "mały", "Bazylika św. Piotra", "papież"],
    },
    title: {
      en: "Vatican City",
      pl: "Watykan",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Peru", "Inca", "ruins", "Andes", "citadel"],
      pl: ["Peru", "Inkowie", "ruiny", "Andy", "cytadela"],
    },
    title: {
      en: "Machu Picchu",
      pl: "Machu Picchu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Normandy", "France", "island", "abbey", "tides"],
      pl: ["Normandia", "Francja", "wyspa", "opactwo", "pływ"],
    },
    title: {
      en: "Mont Saint-Michel",
      pl: "Mont Saint-Michel",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["New York", "United States", "gift", "island", "torch"],
      pl: ["Nowy Jork", "Stany Zjednoczone", "prezent", "wyspa", "pochodnia"],
    },
    title: {
      en: "Statue of Liberty",
      pl: "Statua Wolności",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Java", "Indonesia", "Buddhism", "temple", "stupas"],
      pl: ["Jawa", "Indonezja", "buddyzm", "świątynia", "stupa"],
    },
    title: {
      en: "Borobudur",
      pl: "Borobudur",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Dubai", "United Arab Emirates", "skyscraper", "tallest", "observation"],
      pl: ["Dubaj", "Zjednoczone Emiraty Arabskie", "wieżowiec", "najwyższy", "obserwacja"],
    },
    title: {
      en: "Burj Khalifa",
      pl: "Burj Khalifa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Agra", "India", "Mughal", "marble", "mausoleum"],
      pl: ["Agra", "Indie", "mogolski", "marmur", "mauzoleum"],
    },
    title: {
      en: "Taj Mahal",
      pl: "Tadż Mahal",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Greece", "Athens", "temple", "Parthenon", "Athena"],
      pl: ["Grecja", "Ateny", "świątynia", "Partenon", "Atena"],
    },
    title: {
      en: "Acropolis",
      pl: "Akropol",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Australia", "coral", "sea", "diversity", "tourism"],
      pl: ["Australia", "wybrzeże", "morze", "różnorodność", "turystyka"],
    },
    title: {
      en: "Great Barrier Reef",
      pl: "Wielka Rafa Koralowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Amritsar", "India", "Sikh", "gurdwara", "caste"],
      pl: ["Amritsar", "Indie", "sikh", "Gurudwara", "kasta"],
    },
    title: {
      en: "Golden Temple",
      pl: "Złota Świątynia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Scotland", "fortress", "military", "ghosts", "medieval"],
      pl: ["Szkocja", "forteca", "wojsko", "duch", "średniowieczny"],
    },
    title: {
      en: "Edinburgh castle",
      pl: "Zamek w Edynburgu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Egypt", "pharaohs", "ancient", "triangle", "Sphinx"],
      pl: ["Egipt", "faraon", "starożytny", "trójkąt", "Sfinks"],
    },
    title: {
      en: "Pyramids of Giza",
      pl: "Piramidy w Gizie",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Bavaria", "Germany", "fairy tale", "Ludwig II", "Romanesque"],
      pl: ["Bawaria", "Niemcy", "bajka", "Ludwik II", "romański"],
    },
    title: {
      en: "Neuschwanstein Castle",
      pl: "Zamek Neuschwanstein",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["China", "Beijing", "palace", "emperor", "Tiananmen"],
      pl: ["Chiny", "Pekin", "pałac", "cesarz", "Tiananmen"],
    },
    title: {
      en: "Forbidden City",
      pl: "Zakazane Miasto",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Iceland", "geothermal", "hot springs", "spa", "Reykjavik"],
      pl: ["Islandia", "geotermalny", "gorące źródło", "spa", "Reykjavik"],
    },
    title: {
      en: "Blue Lagoon",
      pl: "Błękitna Laguna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["physicist", "disability", "black hole", "Cambridge", "ALS"],
      pl: ["fizyk", "niepełnosprawność", "czarna dziura", "Cambridge", "ALS"],
    },
    title: {
      en: "Stephen Hawking",
      pl: "Stephen Hawking",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["painter", "Mexico", "self-portraits", "Diego Rivera", "unibrow"],
      pl: ["malarka", "Meksyk", "autoportret", "Diego Rivera", "monobrew"],
    },
    title: {
      en: "Frida Kahlo",
      pl: "Frida Kahlo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["singer", "country", "Nashville", "Jolene", "9 to 5"],
      pl: ["piosenkarka", "country", "Nashville", "Jolene", "9 to 5"],
    },
    title: {
      en: "Dolly Parton",
      pl: "Dolly Parton",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["J.R.R. Tolkien", "Middle-earth", "Bilbo Baggins", "Smaug", "adventure"],
      pl: ["J.R.R. Tolkien", "Śródziemie", "Bilbo Baggins", "Smaug", "przygoda"],
    },
    title: {
      en: "The Hobbit",
      pl: "Hobbit",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["South Africa", "apartheid", "prison", "Nobel Peace Prize", "freedom"],
      pl: ["RPA", "apartheid", "więzienie", "Pokojowa Nagroda Nobla", "wolność"],
    },
    title: {
      en: "Nelson Mandela",
      pl: "Nelson Mandela",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Australia", "rock", "Aboriginal", "Ayers", "desert"],
      pl: ["Australia", "skała", "Aborygeni", "Ayers Rock", "pustynia"],
    },
    title: {
      en: "Uluru",
      pl: "Uluru",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["science fiction", "USS Enterprise", "captain", "Spock", "Gene Roddenberry"],
      pl: ["fantastyka", "U.S.S. Enterprise", "kapitan", "Spock", "Gene Roddenberry"],
    },
    title: {
      en: "Star Trek",
      pl: "Star Trek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Mary Shelley", "gothic", "Victor", "monster", "science"],
      pl: ["Mary Shelley", "gotycki", "Victor", "potwór", "nauka"],
    },
    title: {
      en: "Frankenstein",
      pl: "Frankenstein",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["painting", "Edvard Munch", "expressionism", "Norway", "anxiety"],
      pl: ["obraz", "Edvard Munch", "ekspresjonizm", "Norwegia", "lęk"],
    },
    title: {
      en: "The Scream",
      pl: "Krzyk",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Greece", "Athens", "temple", "Acropolis", "columns"],
      pl: ["Grecja", "Ateny", "świątynia", "Akropol", "kolumna"],
    },
    title: {
      en: "Parthenon",
      pl: "Partenon",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Vatican City", "Rome", "Michelangelo", "ceiling", "paintings"],
      pl: ["Watykan", "Rzym", "Michał Anioł", "sufit", "obraz"],
    },
    title: {
      en: "Sistine Chapel",
      pl: "Kaplica Sykstyńska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["computer", "IT", "mainframe", "Watson", "cloud"],
      pl: ["komputer", "informatyka", "mainframe", "Watson", "chmura"],
    },
    title: {
      en: "IBM",
      pl: "IBM",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["car", "Japan", "manufacturer", "Yaris", "Lexus"],
      pl: ["samochód", "Japonia", "producent", "Yaris", "Lexus"],
    },
    title: {
      en: "Toyota",
      pl: "Toyota",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Canada", "Toronto", "television", "observation", "walk"],
      pl: ["Kanada", "Toronto", "telewizja", "obserwacja", "spacer"],
    },
    title: {
      en: "The CN Tower",
      pl: "Wieża CN",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["painting", "art", "Louvre", "Leonardo da Vinci", "smile"],
      pl: ["obraz", "sztuka", "Luwr", "Leonardo da Vinci", "uśmiech"],
    },
    title: {
      en: "Mona Lisa",
      pl: "Mona Lisa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["electronics", "PlayStation", "Japan", "Walkman", "Tokyo"],
      pl: ["elektronika", "PlayStation", "Japonia", "Walkman", "Tokio"],
    },
    title: {
      en: "Sony",
      pl: "Sony",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["car", "Germany", "manufacturer", "series", "i"],
      pl: ["samochód", "Niemcy", "producent", "seria", "i"],
    },
    title: {
      en: "BMW",
      pl: "BMW",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["band", "music", "John Lennon", "Paul McCartney", "Yellow Submarine"],
      pl: ["zespół", "muzyka", "John Lennon", "Paul McCartney", "Yellow Submarine"],
    },
    title: {
      en: "The Beatles",
      pl: "The Beatles",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["smartphones", "South Korea", "electronics", "Galaxy", "TV"],
      pl: ["smartfon", "Korea Południowa", "elektronika", "Galaxy", "telewizor"],
    },
    title: {
      en: "Samsung",
      pl: "Samsung",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fashion", "France", "Coco", "Paris", "No. 5"],
      pl: ["moda", "Francja", "Coco", "Paryż", "No. 5"],
    },
    title: {
      en: "Chanel",
      pl: "Chanel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["aircraft", "USA", "military", "747", "dreamliner"],
      pl: ["samolot", "USA", "wojskowy", "747", "dreamliner"],
    },
    title: {
      en: "Boeing",
      pl: "Boeing",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mafia", "Brando", "Coppola", "Corleone", "Vito"],
      pl: ["mafia", "Brando", "Coppola", "Corleone", "Vito"],
    },
    title: {
      en: "The Godfather",
      pl: "Ojciec chrzestny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Middle-earth", "J.R.R. Tolkien", "hobbits", "Frodo", "Gollum"],
      pl: ["Śródziemie", "J.R.R. Tolkien", "hobbit", "Frodo", "Gollum"],
    },
    title: {
      en: "The Lord of the Rings",
      pl: "Władca Pierścieni",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Ziggy Stardust", "Space Oddity", "Berlin Trilogy", "Starman"],
      pl: ["piosenkarz", "Ziggy Stardust", "Space Oddity", "Trylogia berlińska", "Starman"],
    },
    title: {
      en: "David Bowie",
      pl: "David Bowie",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Dorothy", "Kansas", "Toto", "fantasy", "USA"],
      pl: ["Dorotka", "Kansas", "Toto", "fantastyka", "USA"],
    },
    title: {
      en: "The Wizard of Oz",
      pl: "Czarnoksiężnik z Oz",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Fitzgerald", "Jazz Age", "Roaring Twenties", "Long Island", "Daisy"],
      pl: ["Fitzgerald", "epoka jazzu", "Szalone lata dwudzieste", "Long Island", "Daisy"],
    },
    title: {
      en: "The Great Gatsby",
      pl: "Wielki Gatsby",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["zombies", "post-apocalyptic", "Rick", "horror", "Atlanta"],
      pl: ["zombie", "postapokaliptyczny", "Rick", "horror", "Atlanta"],
    },
    title: {
      en: "The Walking Dead",
      pl: "The Walking Dead",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "USA", "Queen", "Jay-Z", "Grammy"],
      pl: ["piosenkarka", "USA", "królowa", "Jay-Z", "Grammy"],
    },
    title: {
      en: "Beyoncé",
      pl: "Beyoncé",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["commerce", "Jeff Bezos", "Prime", "Alexa", "delivery"],
      pl: ["handel", "Jeff Bezos", "Prime", "Alexa", "Allegro"],
    },
    title: {
      en: "Amazon",
      pl: "Amazon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["singer", "Shape of You", "red", "British", "pop"],
      pl: ["piosenkarka", "Shape of You", "rudy", "brytyjski", "pop"],
    },
    title: {
      en: "Ed Sheeran",
      pl: "Ed Sheeran",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["electric", "Elon Musk", "car", "rocket", "Cybertruck"],
      pl: ["elektryczny", "Elon Musk", "samochód", "rakieta", "Cybertruck"],
    },
    title: {
      en: "Tesla",
      pl: "Tesla",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["actor", "Pirates of the Caribbean", "Amber Heard", "court", "Jack Sparrow"],
      pl: ["aktor", "Piraci z Karaibów", "Amber Heard", "sąd", "Jack Sparrow"],
    },
    title: {
      en: "Johnny Depp",
      pl: "Johnny Depp",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sneakers", "Jordan", "Just Do It", "USA", "athletic"],
      pl: ["obuwie", "Jordan", "Just Do It", "USA", "sportowy"],
    },
    title: {
      en: "Nike",
      pl: "Nike",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["actor", "Forrest Gump", "Oscar", "USA", "movie"],
      pl: ["aktor", "Forrest Gump", "Oscar", "USA", "film"],
    },
    title: {
      en: "Tom Hanks",
      pl: "Tom Hanks",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["card", "payment", "credit", "debit", "Mastercard"],
      pl: ["karta", "płatność", "kredytowa", "debetowa", "Mastercard"],
    },
    title: {
      en: "Visa",
      pl: "Visa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["singer", "pop", "Poker Face", "music", "Grammy"],
      pl: ["piosenkarka", "pop", "Poker Face", "muzyka", "Grammy"],
    },
    title: {
      en: "Lady Gaga",
      pl: "Lady Gaga",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["processor", "AMD", "Core", "Pentium", "computer"],
      pl: ["procesor", "AMD", "Core", "Pentium", "komputer"],
    },
    title: {
      en: "Intel",
      pl: "Intel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["singer", "music", "Just The Way You Are", "pop", "Grammy"],
      pl: ["piosenkarz", "muzyka", "Just The Way You Are", "pop", "Grammy"],
    },
    title: {
      en: "Bruno Mars",
      pl: "Bruno Mars",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["software", "database", "USA", "Java", "MySQL"],
      pl: ["oprogramowanie", "baza danych", "USA", "Java", "MySQL"],
    },
    title: {
      en: "Oracle",
      pl: "Oracle",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actress", "La La Land", "USA", "movie", "Oscar"],
      pl: ["aktorka", "La La Land", "USA", "film", "Oscar"],
    },
    title: {
      en: "Emma Stone",
      pl: "Emma Stone",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Baby", "Sorry", "music", "Grammy"],
      pl: ["piosenkarz", "Baby", "Sorry", "muzyka", "Grammy"],
    },
    title: {
      en: "Justin Bieber",
      pl: "Justin Bieber",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fashion", "luxury", "United Kingdom", "trench coat", "pattern"],
      pl: ["moda", "luksus", "Wielka Brytania", "trencz", "wzór"],
    },
    title: {
      en: "Burberry",
      pl: "Burberry",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "pop", "Billie Jean", "king", "music"],
      pl: ["piosenkarz", "pop", "Billie Jean", "król", "muzyka"],
    },
    title: {
      en: "Michael Jackson",
      pl: "Michael Jackson",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Walter White", "methamphetamine", "Albuquerque", "drugs", "Jesse Pinkman"],
      pl: ["Walter White", "metamfetamina", "Albuquerque", "narkotyki", "Jesse Pinkman"],
    },
    title: {
      en: "Breaking Bad",
      pl: "Breaking Bad",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "music", "pop", "color", "Grammy"],
      pl: ["piosenkarka", "music", "pop", "kolor", "Grammy"],
    },
    title: {
      en: "Pink",
      pl: "Pink",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actress", "Oscar", "Tomb Raider", "Brad Pitt", "Lara Croft"],
      pl: ["aktorka", "Oscar", "Tomb Raider", "Brad Pitt", "Lara Croft"],
    },
    title: {
      en: "Angelina Jolie",
      pl: "Angelina Jolie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "queen", "music", "USA", "pop"],
      pl: ["piosenkarka", "królowa", "muzyka", "USA", "pop"],
    },
    title: {
      en: "Madonna",
      pl: "Madonna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "Fight Club", "movie", "Angelina Jolie", "Oscar"],
      pl: ["aktor", "Fight Club", "film", "Angelina Jolie", "Oscar"],
    },
    title: {
      en: "Brad Pitt",
      pl: "Brad Pitt",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "pop", "music", "USA", "Grammy"],
      pl: ["piosenkarka", "pop", "muzyka", "USA", "Grammy"],
    },
    title: {
      en: "Katy Perry",
      pl: "Katy Perry",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Bad Guy", "music", "pop", "Grammy"],
      pl: ["piosenkarka", "Bad Guy", "music", "pop", "Grammy"],
    },
    title: {
      en: "Billie Eilish",
      pl: "Billie Eilish",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "The Fresh Prince of Bel-Air", "Men in Black", "Oscar", "slap"],
      pl: ["aktor", "Bajer z Bel-Air", "Faceci w czerni", "Oscar", "spoliczkować"],
    },
    title: {
      en: "Will Smith",
      pl: "Will Smith",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "Hurt", "Walk the Line", "music", "country"],
      pl: ["piosenkarz", "Hurt", "Spacer po linie", "muzyka", "country"],
    },
    title: {
      en: "Johnny Cash",
      pl: "Johnny Cash",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "USA", "ER", "Nespresso", "Oscar"],
      pl: ["aktor", "USA", "Ostry dyżur", "Nespresso", "Oscar"],
    },
    title: {
      en: "George Clooney",
      pl: "George Clooney",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "The Matrix", "John Wick", "Cyberpunk", "Canada"],
      pl: ["aktor", "Matrix", "John Wick", "Cyberpunk", "Kanada"],
    },
    title: {
      en: "Keanu Reeves",
      pl: "Keanu Reeves",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ice", "sport", "spin", "jump", "Russia"],
      pl: ["lód", "sport", "obrót", "skok", "Rosja"],
    },
    title: {
      en: "Figure skating",
      pl: "Łyżwiarstwo figurowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actor", "wrestling", "Fast and Furious", "WWE", "movie"],
      pl: ["aktor", "wrestling", "Szybcy i wściekli", "WWE", "film"],
    },
    title: {
      en: 'Dwayne "The Rock" Johnson',
      pl: 'Dwayne "The Rock" Johnson',
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ball", "scrum", "try", "tackle", "lineout"],
      pl: ["piłka", "młyn", "przyłożenie", "blokujący", "wybicie"],
    },
    title: {
      en: "Rugby",
      pl: "Rugby",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["actress", "Harry Potter", "Beauty and the Beast", "Hermione Granger", "feminism"],
      pl: ["aktorka", "Harry Potter", "Piękna i Bestia", "Hermiona Granger", "feminizm"],
    },
    title: {
      en: "Emma Watson",
      pl: "Emma Watson",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["singer", "actor", "rock and roll", "king", "USA"],
      pl: ["piosenkarz", "aktor", "rock and roll", "król", "USA"],
    },
    title: {
      en: "Elvis Presley",
      pl: "Elvis Presley",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["soccer", "Portugal", "Real Madrid", "Juventus", "Ballon d'Or"],
      pl: ["piłka nożna", "Portugalia", "Real Madryt", "Juventus", "Złota piłka"],
    },
    title: {
      en: "Cristiano Ronaldo",
      pl: "Cristiano Ronaldo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tennis", "Grand Slam", "Wimbledon", "US Open", "sister"],
      pl: ["tenis", "Wielki Szlem", "Wimbledon", "US Open", "siostry"],
    },
    title: {
      en: "Serena Williams",
      pl: "Serena Williams",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["hockey", "Canada", "NHL", "ice", "records"],
      pl: ["hokej", "Kanada", "NHL", "lód", "rekord"],
    },
    title: {
      en: "Wayne Gretzky",
      pl: "Wayne Gretzky",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["basketball", "Duke", "Coach K", "USA", "NCAA"],
      pl: ["koszykówka", "Duke", "Coach K", "USA", "NCAA"],
    },
    title: {
      en: "Mike Krzyzewski",
      pl: "Mike Krzyzewski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["theatre", "mat", "mock", "ring", "John Cena"],
      pl: ["spektakl", "mata", "sztuczny", "ring", "John Cena"],
    },
    title: {
      en: "Wrestling",
      pl: "Wrestling",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tennis", "swiss", "Grand Slam", "court", "sport"],
      pl: ["tenis", "Szwajcarka", "Wielki Szlem", "kort", "sport"],
    },
    title: {
      en: "Martina Hingis",
      pl: "Martina Hingis",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["blocks", "Steve", "crafting", "creeper", "pickaxe"],
      pl: ["blok", "Steve", "rzemiosło", "creeper", "kilof"],
    },
    title: {
      en: "Minecraft",
      pl: "Minecraft",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["battle royale", "building", "skins", "Epic Games", "guns"],
      pl: ["battle royale", "budynek", "skin", "Epic Games", "broń"],
    },
    title: {
      en: "Fortnite",
      pl: "Fortnite",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["boat", "oar", "coxswain", "regatta", "crew"],
      pl: ["łódka", "wiosło", "sternik", "regaty", "załoga"],
    },
    title: {
      en: "Rowing",
      pl: "Wioślarstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["throw", "mat", "Japan", "belt", "sport"],
      pl: ["rzucać", "mata", "Japonia", "pas", "sport"],
    },
    title: {
      en: "Judo",
      pl: "Judo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ring", "sport", "Japan", "circle", "salt"],
      pl: ["ring", "sport", "Japonia", "koło", "sól"],
    },
    title: {
      en: "Sumo",
      pl: "Sumo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["MMO", "game", "horde", "Blizzard", "Azeroth"],
      pl: ["MMO", "gra", "horda", "Blizzard", "Azeroth"],
    },
    title: {
      en: "World of Warcraft",
      pl: "World of Warcraft",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["game", "Hadouken", "Chun-Li", "Japan", "combat"],
      pl: ["gra", "Hadouken", "Chun-Li", "Japonia", "walka"],
    },
    title: {
      en: "Street Fighter",
      pl: "Street Fighter",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Skyrim", "game", "Bethesda", "RPG", "Todd Howard"],
      pl: ["Skyrim", "gra", "Bethesda", "RPG", "Todd Howard"],
    },
    title: {
      en: "The Elder Scrolls",
      pl: "The Elder Scrolls",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["The Witcher", "monster", "sword", "character", "hunter"],
      pl: ["Wiedźmin", "potwór", "miecz", "postać", "łowca"],
    },
    title: {
      en: "Geralt of Rivia",
      pl: "Geralt z Rivii",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["detective", "Watson", "character", "British", "fictional"],
      pl: ["detektyw", "Watson", "postać", "Brytyjczyk", "fikcyjny"],
    },
    title: {
      en: "Sherlock Holmes",
      pl: "Sherlock Holmes",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shrimp", "comedy drama", "Tom Hanks", "Bubba", "run"],
      pl: ["krewetka", "komediodramat", "Tom Hanks", "Bubba", "biegać"],
    },
    title: {
      en: "Forrest Gump",
      pl: "Forrest Gump",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bat", "ball", "wicket", "runs", "bowler"],
      pl: ["kij", "piłka", "bramka", "bieg", "rzucający"],
    },
    title: {
      en: "Cricket",
      pl: "Krykiet",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sled", "ice", "track", "helmet", "speed"],
      pl: ["sanki", "lód", "tor", "hełm", "prędkość"],
    },
    title: {
      en: "Skeleton",
      pl: "Skeleton",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["stone", "ice", "broom", "sport", "precision"],
      pl: ["kamień", "lód", "szczotka", "sport", "precyzja"],
    },
    title: {
      en: "Curling",
      pl: "Curling",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["basketball", "NBA", "Miami Heat", "championship", "MVP"],
      pl: ["koszykówka", "NBA", "Miami Heat", "mistrzostwo", "MVP"],
    },
    title: {
      en: "Lebron James",
      pl: "Lebron James",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["run", "Jamaica", "100m", "fast", "record"],
      pl: ["bieg", "Jamajka", "100m", "szybki", "rekord"],
    },
    title: {
      en: "Usain Bolt",
      pl: "Usain Bolt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["swimming", "Olympics", "medal", "record", "addiction"],
      pl: ["pływanie", "Olimpiada", "medal", "rekord", "uzależnienie"],
    },
    title: {
      en: "Michael Phelps",
      pl: "Michael Phelps",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["basketball", "Philadelphia Warriors", "100", "NBA", "records"],
      pl: ["koszykówka", "Philadelphia Warriors", "100", "NBA", "rekord"],
    },
    title: {
      en: "Wilt Chamberlain",
      pl: "Wilt Chamberlain",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tennis", "Czech", "citizenship", "Grand Slam", "LGBT"],
      pl: ["tenis", "Czechy", "obywatelstwo", "Wielki Szlem", "LGBT"],
    },
    title: {
      en: "Martina Navratilova",
      pl: "Martina Navratilova",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Italian", "princess", "plumber", "mushroom", "pipe"],
      pl: ["Włoch", "księżniczka", "hydraulik", "grzyb", "rura"],
    },
    title: {
      en: "Super Mario Bros",
      pl: "Super Mario Bros",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Summoner's Rift", "champions", "Riot", "minions", "turrets"],
      pl: ["Summoner's Rift", "bohater", "Riot", "stwór", "wieża"],
    },
    title: {
      en: "League of Legends",
      pl: "League of Legends",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Link", "game", "Nintendo", "Hyrule", "dungeons"],
      pl: ["Link", "gra", "Nintendo", "Hyrule", "lochy"],
    },
    title: {
      en: "The legend of Zelda",
      pl: "The legend of Zelda",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["San Andreas", "crime", "Rockstar", "police", "car"],
      pl: ["San Andreas", "przestępczość", "Rockstar", "policja", "samochód"],
    },
    title: {
      en: "Grand Theft Auto",
      pl: "Grand Theft Auto",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shoot", "multiplayer", "game", "guns", "kill"],
      pl: ["strzelać", "wieloosobowa", "gra", "broń", "zabić"],
    },
    title: {
      en: "Call of Duty",
      pl: "Call of Duty",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["GLaDOS", "game", "Valve", "puzzle", "teleport"],
      pl: ["GLaDOS", "gra", "Valve", "logiczna", "teleport"],
    },
    title: {
      en: "Portal",
      pl: "Portal",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Star Wars", "force", "Jedi", "Skywalker", "lightsaber"],
      pl: ["Gwiezdne Wojny", "moc", "Jedi", "Skywalker", "miecz świetlny"],
    },
    title: {
      en: "Darth Vader",
      pl: "Darth Vader",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shield", "superhero", "Avengers", "character", "Marvel"],
      pl: ["tarcza", "superbohater", "Avengers", "postać", "Marvel"],
    },
    title: {
      en: "Captain America",
      pl: "Kapitan Ameryka",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["meth", "Heisenberg", "Breaking Bad", "cancer", "Jesse Pinkman"],
      pl: ["metamfetamina", "Heisenberg", "Breaking Bad", "rak", "Jesse Pinkman"],
    },
    title: {
      en: "Walter White",
      pl: "Walter White",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["spy", "intelligence", "secret", "007", "agent"],
      pl: ["szpieg", "wywiad", "tajny", "007", "agent"],
    },
    title: {
      en: "James Bond",
      pl: "James Bond",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["archaeologist", "whip", "hat", "Harrison Ford", "character"],
      pl: ["archeolog", "bicz", "kapelusz", "Harrison Ford", "postać"],
    },
    title: {
      en: "Indiana Jones",
      pl: "Indiana Jones",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["vampire", "Transylvania", "character", "blood", "novel"],
      pl: ["wampir", "Transylwania", "postać", "krew", "powieść"],
    },
    title: {
      en: "Dracula",
      pl: "Drakula",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Paris", "iron", "France", "landmark", "height"],
      pl: ["Paryż", "stal", "Francja", "obiekt", "wysokość"],
    },
    title: {
      en: "Eiffel Tower",
      pl: "Wieża Eiffla",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Rome", "gladiators", "arena", "amphitheatre", "Italy"],
      pl: ["Rzym", "gladiator ", "arena", "amfiteatr", "Włochy"],
    },
    title: {
      en: "Colosseum",
      pl: "Koloseum",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Australia", "sails", "harbor", "music", "architecture"],
      pl: ["Australia", "żagiel", "port", "muzyka", "architektura"],
    },
    title: {
      en: "Sydney Opera House",
      pl: "Opera w Sydney",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["San Francisco", "strait", "bridge", "red", "USA"],
      pl: ["San Francisco", "cieśnina", "most", "czerwony", "Stany Zjednoczone"],
    },
    title: {
      en: "Golden Gate",
      pl: "Golden Gate",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["cool", "air", "warm", "hot", "temperature"],
      pl: ["chłodzić", "powietrze", "ciepły", "gorący", "temperatura"],
    },
    title: {
      en: "Air conditioner",
      pl: "Klimatyzator",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cook", "timer", "lid", "slow cooker", "recipes"],
      pl: ["gotować", "minutnik", "pokrywka", "slow cooker", "przepis"],
    },
    title: {
      en: "Crockpot",
      pl: "Wolnowar",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["butter", "bag", "pop", "salt", "snack"],
      pl: ["masło", "torba", "strzelać", "sól", "przekąska"],
    },
    title: {
      en: "Microwave popcorn",
      pl: "Popcorn z mikrofalówki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["clothes", "heat", "steam", "board", "cord"],
      pl: ["ubrania", "ciepło", "para", "deska", "przewód"],
    },
    title: {
      en: "Iron",
      pl: "Prasować",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["steam", "lid", "cook", "pot", "handle"],
      pl: ["para", "pokrywka", "gotować", "garnek", "rączka"],
    },
    title: {
      en: "Pressure cooker",
      pl: "Szybkowar",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["frosting", "sprinkles", "cake", "sweet", "baking"],
      pl: ["polewa", "posypka", "ciasto", "słodki", "pieczenie"],
    },
    title: {
      en: "Cupcake",
      pl: "Babeczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "sea", "launch", "speed", "beach"],
      pl: ["woda", "morze", "motorówka", "szybkość", "plaża"],
    },
    title: {
      en: "Jet ski",
      pl: "Skuter wodny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ornaments", "lights", "decoration", "holidays", "ball"],
      pl: ["ozdoba", "światełka", "dekoracja", "święta", "bombka"],
    },
    title: {
      en: "Christmas tree",
      pl: "Choinka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rain", "protection", "sun", "handle", "collapsible"],
      pl: ["deszcz", "ochrona", "słońce", "trzymać", "składany"],
    },
    title: {
      en: "Umbrella",
      pl: "Parasolka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paper", "sticky", "reminder", "pad", "adhesive"],
      pl: ["papier", "klejący", "przypomnienie", "notatnik", "lepki"],
    },
    title: {
      en: "Post-it note",
      pl: "Karteczka samoprzylepna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beach", "tower", "sea", "bucket", "shovel"],
      pl: ["plaża", "wieża", "morze", "wiaderko", "łopatka"],
    },
    title: {
      en: "Sandcastle",
      pl: "Zamek z piasku",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cutting", "paper", "sharp", "blades", "handle"],
      pl: ["ciąć", "papier", "ostry", "ostrze", "uchwyt"],
    },
    title: {
      en: "Scissors",
      pl: "Nożyczki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["time", "chain", "antique", "hour", "minute"],
      pl: ["czas", "łańcuch", "antyk", "godzina", "minuta"],
    },
    title: {
      en: "Pocket watch",
      pl: "Zegarek kieszonkowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["playground", "rope", "seat", "motion", "child"],
      pl: ["plac zabaw", "lina", "siedzenie", "ruch", "dziecko"],
    },
    title: {
      en: "Swing",
      pl: "Huśtawka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["camping", "shelter", "waterproof", "poles", "pegs"],
      pl: ["kemping", "schronienie", "nieprzemakalny", "słup", "śledź"],
    },
    title: {
      en: "Tent",
      pl: "Namiot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["eye", "protection", "shade", "frames", "lenses"],
      pl: ["oko", "ochrona", "cień", "oprawka", "soczewka"],
    },
    title: {
      en: "Sunglasses",
      pl: "Okulary przeciwsłoneczne",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["game", "black", "white", "pieces", "strategy"],
      pl: ["gra", "czarny", "biały", "figura", "strategia"],
    },
    title: {
      en: "Chessboard",
      pl: "Szachownica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["inflatable", "volleyball", "summer", "beach", "round"],
      pl: ["nadmuchiwany", "siatkówka", "lato", "plaża", "okrągły"],
    },
    title: {
      en: "Beach ball",
      pl: "Piłka plażowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["travel", "luggage", "handle", "zipper", "wheels"],
      pl: ["podróżować", "bagaż", "uchwyt", "zamek", "kółko"],
    },
    title: {
      en: "Suitcase",
      pl: "Walizka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wrapping", "ribbon", "present", "surprise", "occasion"],
      pl: ["opakowanie", "wstążka", "podarunek", "niespodzianka", "okazja"],
    },
    title: {
      en: "Gift",
      pl: "Prezent",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["toilet", "WC", "shower", "bathtub", "mirror"],
      pl: ["toaleta", "WC", "prysznic", "wanna", "lustro"],
    },
    title: {
      en: "Bathroom",
      pl: "Łazienka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["run", "exercise", "sweat", "tracksuit", "shoes"],
      pl: ["biec", "ćwiczenie", "pot", "dres", "buty"],
    },
    title: {
      en: "Jogging",
      pl: "Jogging",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["noodles", "broth", "Japan", "egg", "soup"],
      pl: ["makaron", "bulion", "Japonia", "jajko", "zupa"],
    },
    title: {
      en: "Ramen",
      pl: "Ramen",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["eggs", "cheese", "vegetables", "fry", "pan"],
      pl: ["jajko", "ser", "warzywo", "smażyć", "patelnia"],
    },
    title: {
      en: "Omelet",
      pl: "Omlet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fries", "cheese", "gravy", "food", "Canada"],
      pl: ["frytki", "ser", "sos pieczeniowy", "jedzenie", "Kanada"],
    },
    title: {
      en: "Poutine",
      pl: "Poutine",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["dumplings", "Asia", "vegetables", "China", "Japan"],
      pl: ["pierożki", "Azja", "warzywa", "Chiny", "Japonia"],
    },
    title: {
      en: "Gyoza",
      pl: "Gyoza",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["canned", "mayonnaise", "celery", "onion", "sandwich"],
      pl: ["puszkowany", "majonez", "seler", "cebula", "kanapka"],
    },
    title: {
      en: "Tuna salad",
      pl: "Sałatka z tuńczykiem",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["stuffing", "filling", "fry", "food", "fat"],
      pl: ["farsz", "nadzienie", "smażyć", "jedzenie", "tłuszcz"],
    },
    title: {
      en: "Croquette",
      pl: "Krokiet",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water", "Canada", "USA", "attraction", "tourist"],
      pl: ["woda", "Kanada", "Stany Zjednoczone", "atrakcja", "turysta"],
    },
    title: {
      en: "Niagara Falls",
      pl: "Wodospad Niagara",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Egypt", "tomb", "pharaohs", "triangle", "Giza"],
      pl: ["Egipt", "grobowiec", "faraon", "trójkąt", "Giza"],
    },
    title: {
      en: "Pyramid",
      pl: "Pyramida",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Nepal", "summit", "altitude", "climbing", "Himalayas"],
      pl: ["Nepal", "szczyt", "wysokość", "wspinaczka", "Himalaje"],
    },
    title: {
      en: "Mount Everest",
      pl: "Mount Everest",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["blades", "air", "breeze", "hot", "cold"],
      pl: ["skrzydło", "powietrze", "wiatr", "gorąco", "zimno"],
    },
    title: {
      en: "Fan",
      pl: "Wentylator",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["England", "UNESCO", "stones", "monument", "mystery"],
      pl: ["Anglia", "UNESCO", "kamień", "zabytek", "tajemnica"],
    },
    title: {
      en: "Stonehenge",
      pl: "Stonehenge",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["China", "long", "fortification", "history", "UNESCO"],
      pl: ["Chiny", "długi", "fortyfikacje", "historia", "UNESCO"],
    },
    title: {
      en: "The Great Wall",
      pl: "Wielki Mur",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["suction", "pipe", "dust", "bag", "cord"],
      pl: ["ssanie", "rura", "kurz", "worek", "kabel"],
    },
    title: {
      en: "Vacuum cleaner",
      pl: "Odkurzacz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Italy", "pizza", "bell", "leaning", "architecture"],
      pl: ["Włochy", "pizza", "dzwon", "przechylenie", "architektura"],
    },
    title: {
      en: "Leaning Tower of Pisa",
      pl: "Krzywa Wieża w Pizie",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["kitchen", "pancake", "batter", "heat", "flip"],
      pl: ["kuchnia", "naleśnik", "ciasto", "ciepło", "przewracać"],
    },
    title: {
      en: "Waffle iron",
      pl: "Gofrownica",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["vinyl", "turntable", "needle", "spin", "music"],
      pl: ["winyl", "talerz", "igła", "obracać", "muzyka"],
    },
    title: {
      en: "Record player",
      pl: "Gramofon",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["The Hangover", "gambling", "entertainment", "lights", "casinos"],
      pl: ["Kac Vegas", "hazard", "rozrywka", "światła", "kasyno"],
    },
    title: {
      en: "Las Vegas",
      pl: "Las Vegas",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Washington D.C.", "president", "residence", "oval office", "USA"],
      pl: ["Waszyngton", "prezydent", "rezydencja", "Gabinet Owalny", "Stany Zjednoczone"],
    },
    title: {
      en: "White House",
      pl: "Biały Dom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["pour", "coffee", "handle", "spout", "lid"],
      pl: ["nalewać", "kawa", "uchwyt", "dziobek", "pokrywka"],
    },
    title: {
      en: "Teapot",
      pl: "Dzbanek do herbaty",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["boil", "water", "heat", "handle", "100"],
      pl: ["gotować", "woda", "gorąco", "uchwyt", "100"],
    },
    title: {
      en: "Electric kettle",
      pl: "Czajnik elektryczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cut", "gasoline", "wood", "blade", "noise"],
      pl: ["ciąć", "benzyna", "drewno", "ostrze", "hałas"],
    },
    title: {
      en: "Chainsaw",
      pl: "Piła łańcuchowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["keys", "music", "instrument", "notes", "grand"],
      pl: ["klawisz", "muzyka", "instrument", "nuty", "fortepian"],
    },
    title: {
      en: "Piano",
      pl: "Pianino",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["kick", "goal", "sport", "round", "field"],
      pl: ["kopać", "gol", "sport", "okrągły", "boisko"],
    },
    title: {
      en: "Soccer ball",
      pl: "Piłka do piłki nożnej",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["heat", "cook", "timer", "kitchen", "appliance"],
      pl: ["podgrzewać", "gotować", "minutnik", "kuchnia", "urządzenie"],
    },
    title: {
      en: "Microwave",
      pl: "Mikrofalówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["zoom", "view", "distance", "birds", "focus"],
      pl: ["przybliżać", "widok", "dystans", "ptak", "skupienie"],
    },
    title: {
      en: "Binoculars",
      pl: "Lornetka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["drink", "hydrate", "plastic", "refill", "portable"],
      pl: ["pić", "nawadniać", "plastik", "dolewać", "przenośny"],
    },
    title: {
      en: "Water bottle",
      pl: "Bidon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fly", "pilot", "wings", "sky", "travel"],
      pl: ["lecieć", "pilot", "skrzydło", "niebo", "podróżować"],
    },
    title: {
      en: "Airplane",
      pl: "Samolot",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ring", "visit", "press", "button", "sound"],
      pl: ["dźwięczeć", "odwiedzać", "naciskać", "przycisk", "dźwięk"],
    },
    title: {
      en: "Doorbell",
      pl: "Dzwonek do drzwi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["seasoning", "sushi", "Asia", "salty", "fermented"],
      pl: ["przyprawa", "sushi", "Azja", "słony", "fermentowany"],
    },
    title: {
      en: "Soy sauce",
      pl: "Sos sojowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["appliance", "mix", "puree", "kitchen", "blades"],
      pl: ["urządzenie", "mieszać", "puree", "kuchnia", "ostrze"],
    },
    title: {
      en: "Blender",
      pl: "Blender",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["temperature", "sick", "fever", "mercury", "measure"],
      pl: ["temperatura", "chory", "gorączka", "rtęć", "mierzyć"],
    },
    title: {
      en: "Thermometer",
      pl: "Termometr",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["world", "map", "Earth", "rotating", "sphere"],
      pl: ["świat", "mapa", "Ziemia", "obracający się", "kula"],
    },
    title: {
      en: "Globe",
      pl: "Globus",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "old", "rewind", "player", "analog"],
      pl: ["muzyka", "stary", "przewijać", "odtwarzacz", "analogowy"],
    },
    title: {
      en: "Cassette tape",
      pl: "Kaseta magnetofonowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cold", "food", "appliance", "storage", "ice"],
      pl: ["zimno", "jedzenie", "urządzenie", "przechowywanie", "lód"],
    },
    title: {
      en: "Refrigerator",
      pl: "Lodówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wind", "water", "vessel", "sails", "mast"],
      pl: ["wiatr", "woda", "statek", "żagle", "maszt"],
    },
    title: {
      en: "Sailboat",
      pl: "Żaglówka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beacon", "tower", "navigation", "sea", "light"],
      pl: ["świecić", "wieża", "nawigacja", "morze", "naprowadzać"],
    },
    title: {
      en: "Lighthouse",
      pl: "Latarnia morska",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["watering", "flexible", "rubber", "grass", "sprinkler"],
      pl: ["podlewać", "giętki", "guma", "trawa", "zraszacz"],
    },
    title: {
      en: "Garden hose",
      pl: "Wąż ogrodowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["music", "portable", "speaker", "cassette", "radio"],
      pl: ["muzyka", "przenośny", "głośnik", "kaseta", "radio"],
    },
    title: {
      en: "Boombox",
      pl: "Boombox",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wax", "flame", "light", "scent", "fire"],
      pl: ["wosk", "płomień", "światło", "zapach", "ogień"],
    },
    title: {
      en: "Candle",
      pl: "Świeczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["puck", "goal", "stick", "ice", "skates"],
      pl: ["krążek", "bramka", "kij", "lód", "łyżwy"],
    },
    title: {
      en: "Hockey",
      pl: "Hokej",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["washer", "dryer", "liquid", "clothes", "fold"],
      pl: ["pralka", "suszarka", "płyn", "ubrania", "składać"],
    },
    title: {
      en: "Laundry",
      pl: "Pranie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sofa", "cushion", "comfort", "seating", "television"],
      pl: ["sofa", "poduszka", "komfort", "siedzenie", "telewizor"],
    },
    title: {
      en: "Couch",
      pl: "Kanapa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pedal", "chain", "wheel", "frame", "handlebars"],
      pl: ["pedał", "łańcuch", "koło", "rama", "kierownica"],
    },
    title: {
      en: "Bicycle",
      pl: "Rower",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["driver", "car", "fare", "uber", "cab"],
      pl: ["kierowca", "samochód", "opłata", "uber", "jechać"],
    },
    title: {
      en: "Taxi",
      pl: "Taksówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["floor", "rug", "covering", "soft", "vacuum"],
      pl: ["podłoga", "ziemia", "wykładzina", "miękki", "odkurzać"],
    },
    title: {
      en: "Carpet",
      pl: "Dywan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cone", "scoop", "vanilla", "chocolate", "sprinkles"],
      pl: ["rożek", "gałka", "wanilia", "czekolada", "posypka"],
    },
    title: {
      en: "Ice cream",
      pl: "Lody",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["noodles", "beef", "broth", "Vietnam", "soup"],
      pl: ["makaron", "wołowina", "bulion", "Wietnam", "zupa"],
    },
    title: {
      en: "Phở",
      pl: "Phở",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pastry", "spinach", "feta", "butter", "Greece"],
      pl: ["ciasto", "szpinak", "feta", "masło", "Grecja"],
    },
    title: {
      en: "Phyllo",
      pl: "Filo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["eggplant", "tomato", "béchamel", "Greece", "casserole"],
      pl: ["bakłażan", "pomidor", "beszamel", "Grecja", "zapiekanka"],
    },
    title: {
      en: "Moussaka",
      pl: "Musaka",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["greens", "dressing", "healthy", "lettuce", "vegetable"],
      pl: ["zielenina", "sos", "zdrowy", "sałata", "warzywo"],
    },
    title: {
      en: "Salad",
      pl: "Sałatka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["grill", "juicy", "meat", "ribeye", "fry"],
      pl: ["grill", "soczysty", "mięso", "antrykot", "smażyć"],
    },
    title: {
      en: "Steak",
      pl: "Stek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cocoa", "marshmallow", "mug", "hot", "sweet"],
      pl: ["kakao", "pianki", "kubek", "gorący", "słodki"],
    },
    title: {
      en: "Hot chocolate",
      pl: "Gorąca czekolada",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["frosting", "glaze", "pastry", "sweet", "warm"],
      pl: ["lukier", "polewa", "ciasto", "słodki", "ciepły"],
    },
    title: {
      en: "Cinnamon roll",
      pl: "Bułeczka cynamonowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Mexico", "meat", "lettuce", "cheese", "vegetable"],
      pl: ["Meksyk", "mięso", "sałata", "ser", "warzywo"],
    },
    title: {
      en: "Taco",
      pl: "Taco",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shellfish", "seafood", "butter", "lemon", "claws"],
      pl: ["skorupiak", "owoce morza", "masło", "cytryna", "szczypce"],
    },
    title: {
      en: "Lobster",
      pl: "Homar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["butter", "cream", "chives", "sour", "toppings"],
      pl: ["masło", "śmietana", "szczypiorek", "kwaśny", "dodatek"],
    },
    title: {
      en: "Baked potato",
      pl: "Ziemniak w mundurku",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["raw", "seafood", "lime", "cilantro", "onions"],
      pl: ["surowy", "owoce morza", "limonka", "kolendra", "cebula"],
    },
    title: {
      en: "Ceviche",
      pl: "Ceviche",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["vegetable", "tomato", "garlic", "rat", "movie"],
      pl: ["warzywo", "pomidor", "czosnek", "szczur", "film"],
    },
    title: {
      en: "Ratatouille",
      pl: "Ratatouille",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["garlic", "tomato", "bread", "basil", "Italy"],
      pl: ["czosnek", "pomidor", "chleb", "bazylia", "Włochy"],
    },
    title: {
      en: "Bruschetta",
      pl: "Bruschetta",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["soup", "beets", "red", "white", "dill"],
      pl: ["zupa", "burak", "czerwony", "biały", "koperek"],
    },
    title: {
      en: "Borscht",
      pl: "Barszcz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["espresso", "mascarpone", "ladyfingers", "cocoa", "Italian"],
      pl: ["espresso", "mascarpone", "biszkopt", "kakao", "włoski"],
    },
    title: {
      en: "Tiramisu",
      pl: "Tiramisu",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["potatoes", "beef", "vegetables", "English", "puree"],
      pl: ["ziemniaki", "wołowina", "warzywo", "angielski", "puree"],
    },
    title: {
      en: "Shepherd's pie",
      pl: "Zapiekanka wiejska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["dumplings", "potato", "fried", "Polish", "boiled"],
      pl: ["kluski", "ziemniaki", "smażony", "polski", "gotowany"],
    },
    title: {
      en: "Pierogi",
      pl: "Pierogi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["entertainment", "humor", "laughter", "enjoyment", "fun"],
      pl: ["rozrywka", "humor", "śmiech", "przyjemność", "zabawa"],
    },
    title: {
      en: "Amusement",
      pl: "Wesołość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["happiness", "delight", "pleasure", "glee", "elation"],
      pl: ["szczęście", "zachwyt", "przyjemność", "wesołość", "euforia"],
    },
    title: {
      en: "Joy",
      pl: "Radość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["envy", "covetousness", "resentment", "bitterness", "spite"],
      pl: ["zawiść", "chciwość", "niechęć", "gorycz", "uraza"],
    },
    title: {
      en: "Jealousy",
      pl: "Zazdrość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shock", "astonishment", "amazement", "bewilderment", "startle"],
      pl: ["szok", "zdziwienie", "zaskoczenie", "osłupienie", "przestraszyć"],
    },
    title: {
      en: "Surprise",
      pl: "Niespodzianka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["revulsion", "repulsion", "abhorrence", "loathing", "spider"],
      pl: ["niesmak", "odraza", "niechęć", "obrzydzenie", "pająk"],
    },
    title: {
      en: "Disgust",
      pl: "Wstręt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shame", "awkwardness", "humiliation", "mortify", "chagrin"],
      pl: ["wstyd", "niezręczność", "poniżenie", "upokarzać", "rozczarować"],
    },
    title: {
      en: "Embarrassment",
      pl: "Zażenowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["compassion", "empathy", "understanding", "pity", "commiseration"],
      pl: ["litość", "empatia", "zrozumienie", "szkoda", "wyrazy"],
    },
    title: {
      en: "Sympathy",
      pl: "Współczucie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bravery", "fearlessness", "valor", "audacity", "boldness"],
      pl: ["dzielność", "nieustraszoność", "bohaterstwo", "śmiałość", "zuchwałość"],
    },
    title: {
      en: "Courage",
      pl: "Odwaga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["inquisitiveness", "exploration", "investigation", "interest", "eagerness"],
      pl: ["dociekliwość", "poszukiwanie", "dochodzenie", "zainteresowanie", "zapał"],
    },
    title: {
      en: "Curiosity",
      pl: "Ciekawość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trail", "helmet", "downhill", "dirt", "bicycle"],
      pl: ["szlak", "kask", "zjazd", "ziemia", "rower"],
    },
    title: {
      en: "Mountain biking",
      pl: "Kolarstwo górskie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["paddle", "ball", "table", "bat", "score"],
      pl: ["rakietka", "piłka", "stół", "paletka", "wynik"],
    },
    title: {
      en: "Ping pong",
      pl: "Ping pong",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rocks", "river", "depth", "sun", "trail"],
      pl: ["skała", "rzeka", "głębokość", "słońce", "szlak"],
    },
    title: {
      en: "Canyon",
      pl: "Kanion",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["snow", "ice", "arctic", "cold", "polar"],
      pl: ["śnieg", "lód", "arktyczny", "zimny", "polarny"],
    },
    title: {
      en: "Tundra",
      pl: "Tundra",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["water", "trees", "sand", "sun", "desert"],
      pl: ["woda", "drzewo", "piasek", "słońce", "pustynia"],
    },
    title: {
      en: "Oasis",
      pl: "Oaza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trees", "animals", "humidity", "jungle", "heat"],
      pl: ["drzewo", "zwierzęta", "wilgotność", "dżungla", "ciepło"],
    },
    title: {
      en: "Rainforest",
      pl: "Las deszczowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["grass", "flat", "animals", "wind", "sun"],
      pl: ["trawa", "płaski", "zwierzęta", "wiatr", "słońce"],
    },
    title: {
      en: "Steppe",
      pl: "Step",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["river", "water", "sand", "alpha", "beta"],
      pl: ["rzeka", "woda", "piasek", "alfa", "beta"],
    },
    title: {
      en: "Delta",
      pl: "Delta",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["volcano", "hole", "lava", "rocks", "meteorite"],
      pl: ["wulkan", "otwór", "lawa", "skała", "meteoryt"],
    },
    title: {
      en: "Crater",
      pl: "Krater",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["darkness", "stalactite", "stalagmite", "bat", "echo"],
      pl: ["ciemność", "stalaktyt", "stalagmit", "nietoperz", "echo"],
    },
    title: {
      en: "Cavern",
      pl: "Jaskinia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["palm trees", "beach", "ocean", "paradise", "coconut"],
      pl: ["palma", "plaża", "ocean", "raj", "kokos"],
    },
    title: {
      en: "Island",
      pl: "Wyspa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["colors", "LGBT", "rain", "arc", "sky"],
      pl: ["kolor", "LGBT", "deszcz", "łuk", "niebo"],
    },
    title: {
      en: "Rainbow",
      pl: "Tęcza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wave", "ocean", "destruction", "water", "disaster"],
      pl: ["fala", "ocean", "zniszczenie", "woda", "katastrofa"],
    },
    title: {
      en: "Tsunami",
      pl: "Tsunami",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["snow", "ice", "mountain", "fall", "danger"],
      pl: ["śnieg", "lód", "góra", "spadać", "niebezpieczeństwo"],
    },
    title: {
      en: "Avalanche",
      pl: "Lawina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "flow", "movement", "temperature", "salinity"],
      pl: ["woda", "przepływ", "ruch", "temperatura", "zasolenie"],
    },
    title: {
      en: "Ocean current",
      pl: "Prąd morski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["trees", "wetland", "saltwater", "roots", "ecosystem"],
      pl: ["drzewo", "podmokły", "słonowodny", "korzenie", "ekosystem"],
    },
    title: {
      en: "Mangrove forest",
      pl: "Las namorzynowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["range", "snow", "elevation", "scenic", "hiking"],
      pl: ["łańcuch", "śnieg", "wysokość", "malowniczy", "wędrówka"],
    },
    title: {
      en: "Rocky Mountains",
      pl: "Góry Skaliste",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["planet", "blue", "gas", "god", "Poseidon"],
      pl: ["planeta", "niebieski", "gaz", "bóg", "Posejdon"],
    },
    title: {
      en: "Neptune",
      pl: "Neptun",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bread", "crusty", "France", "sandwich", "butter"],
      pl: ["chleb", "chrupiący", "Francja", "kanapka", "masło"],
    },
    title: {
      en: "Baguette",
      pl: "Bagietka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["spaghetti", "bacon", "parmesan", "cheese", "bolognese"],
      pl: ["spaghetti", "bekon", "parmezan", "ser", "bolognese"],
    },
    title: {
      en: "Carbonara",
      pl: "Carbonara",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["caffeine", "espresso", "latte", "machine", "brew"],
      pl: ["kofeina", "espresso", "latte", "ekspres", "parzyć"],
    },
    title: {
      en: "Coffee",
      pl: "Kawa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["butter", "microwave", "movie", "salt", "snack"],
      pl: ["masło", "mikrofalówka", "film", "sól", "przekąska"],
    },
    title: {
      en: "Popcorn",
      pl: "Popcorn",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["carrot", "egg", "onion", "soy sauce", "wok"],
      pl: ["marchewka", "jajko", "cebula", "sos sojowy", "wok"],
    },
    title: {
      en: "Fried rice",
      pl: "Smażony ryż",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["chicken", "India", "rice", "spicy", "vegetables"],
      pl: ["kurczak", "Indie", "ryż", "ostry", "warzywo"],
    },
    title: {
      en: "Curry",
      pl: "Curry",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bag", "brew", "herbal", "Lipton", "cup"],
      pl: ["torebka", "parzyć", "ziołowa", "Lipton", "filiżanka"],
    },
    title: {
      en: "Tea",
      pl: "Herbata",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cheese", "meat", "Garfield", "sauce", "layer"],
      pl: ["ser", "mięso", "Garfield", "sos", "warstwa"],
    },
    title: {
      en: "Lasagna",
      pl: "Lasagne",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["banana", "blend", "fruit", "healthy", "yogurt"],
      pl: ["banan", "miksować", "owoc", "zdrowy", "jogurt"],
    },
    title: {
      en: "Smoothie",
      pl: "Smoothie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bread", "mayonnaise", "salad", "can", "fish"],
      pl: ["chleb", "majonez", "sałata", "puszka", "ryba"],
    },
    title: {
      en: "Tuna sandwich",
      pl: "Kanapka z tuńczykiem",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["salt", "ketchup", "potatoes", "fast food", "crispy"],
      pl: ["sól", "keczup", "ziemniak", "fast food", "chrupiący"],
    },
    title: {
      en: "French fries",
      pl: "Frytki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["roll", "salmon", "onion", "bread", "breakfast"],
      pl: ["bułka", "łosoś", "cebula", "pieczywo", "śniadanie"],
    },
    title: {
      en: "Bagel",
      pl: "Bajgiel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["eggs", "cheese", "vegetables", "breakfast", "fluffy"],
      pl: ["jajko", "ser", "warzywa", "śniadanie", "puszysty"],
    },
    title: {
      en: "Omelette",
      pl: "Omlet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rage", "fury", "annoyance", "temper", "seething"],
      pl: ["wściekłość", "furia", "irytacja", "temperament", "kipieć"],
    },
    title: {
      en: "Anger",
      pl: "Złość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["grief", "sorrow", "melancholy", "despair", "mourning"],
      pl: ["żal", "nieszczęście", "melancholia", "rozpacz", "żałoba"],
    },
    title: {
      en: "Sadness",
      pl: "Smutek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["affection", "adoration", "devotion", "infatuation", "passion"],
      pl: ["uczucie", "adoracja", "poświęcenie", "zauroczenie", "namiętność"],
    },
    title: {
      en: "Love",
      pl: "Miłość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["thrill", "anticipation", "enthusiasm", "eagerness", "fervor"],
      pl: ["dreszcz", "oczekiwanie", "entuzjazm", "zapał", "gorliwość"],
    },
    title: {
      en: "Excitement",
      pl: "Podekscytowanie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shame", "remorse", "regret", "contrition", "penitence"],
      pl: ["wstyd", "wyrzuty sumienia", "smutek", "skrucha", "żal"],
    },
    title: {
      en: "Guilt",
      pl: "Poczucie winy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["letdown", "discouragement", "frustration", "defeat", "lose"],
      pl: ["zawód", "zniechęcenie", "frustracja", "porażka", "przegrać"],
    },
    title: {
      en: "Disappointment",
      pl: "Rozczarowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["worry", "unease", "apprehension", "nervousness", "tension"],
      pl: ["martwić się", "skrępowanie", "obawa", "nerwowość", "napięcie"],
    },
    title: {
      en: "Anxiety",
      pl: "Niepokój",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["passion", "zeal", "excitement", "ardor", "eagerness"],
      pl: ["pasja", "zapał", "ekscytacja", "zaangażowanie", "gorliwość"],
    },
    title: {
      en: "Enthusiasm",
      pl: "Entuzjazm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["annoyance", "dissatisfaction", "exasperation", "irritation", "impatience"],
      pl: ["irytacja", "niezadowolenie", "rozczarowanie", "podrażnienie", "niecierpliwość"],
    },
    title: {
      en: "Frustration",
      pl: "Frustracja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["appreciation", "thank", "recognition", "help", "support"],
      pl: ["docenienie", "dziękować", "uznanie", "pomoc", "wsparcie"],
    },
    title: {
      en: "Gratitude",
      pl: "Wdzięczność",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hopefulness", "confidence", "positivity", "idealism", "buoyancy"],
      pl: ["nadzieja", "zaufanie", "pozytywność", "idealizm", "pogoda ducha"],
    },
    title: {
      en: "Optimism",
      pl: "Optymizm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["negativity", "cynicism", "doubt", "skepticism", "defeatism"],
      pl: ["negatywność", "cynizm", "wątpliwość", "sceptycyzm", "defetyzm"],
    },
    title: {
      en: "Pessimism",
      pl: "Pesymizm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ease", "comfort", "reassurance", "satisfaction", "contentment"],
      pl: ["luz", "komfort", "uspokojenie", "satysfakcja", "zadowolenie"],
    },
    title: {
      en: "Relief",
      pl: "Ulga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["elation", "ecstasy", "happy", "high", "bliss"],
      pl: ["uniesienie", "ekstaza", "szczęśliwy", "naćpany", "błogość"],
    },
    title: {
      en: "Euphoria",
      pl: "Euforia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fatigue", "weariness", "depletion", "burnout", "enervation"],
      pl: ["zmęczenie", "znużenie", "zmniejszenie", "wypalenie", "osłabienie"],
    },
    title: {
      en: "Exhaustion",
      pl: "Wyczerpanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["self-doubt", "uncertainty", "vulnerability", "anxiety", "apprehension"],
      pl: ["zwątpienie", "niepewność", "podatność", "niepokój", "lęk"],
    },
    title: {
      en: "Insecurity",
      pl: "Brak pewności siebie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["music", "rhythm", "ballroom", "partner", "competition"],
      pl: ["muzyka", "rytm", "sala balowa", "partner", "konkurs"],
    },
    title: {
      en: "Dancing",
      pl: "Taniec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["strings", "chords", "melody", "acoustic", "electric"],
      pl: ["struny", "akordy", "melodia", "akustyczny", "elektryczna"],
    },
    title: {
      en: "Playing guitar",
      pl: "Gra na gitarze",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["soap", "shampoo", "song", "bathroom", "off-key"],
      pl: ["mydło", "szampon", "piosenka", "łazienka", "fałszować"],
    },
    title: {
      en: "Singing in the shower",
      pl: "Śpiewanie pod prysznicem",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["grass", "trees", "sun", "animals", "safari"],
      pl: ["trawa", "drzewa", "słońce", "zwierzęta", "safari"],
    },
    title: {
      en: "Savannah",
      pl: "Sawanna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["rocks", "river", "narrow", "depth", "trail"],
      pl: ["skały", "rzeka", "wąski", "głębokość", "szlak"],
    },
    title: {
      en: "Gorge",
      pl: "Wąwóz",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["animals", "drink", "thirsty", "oasis", "safari"],
      pl: ["zwierzęta", "pić", "spragniony", "oaza", "safari"],
    },
    title: {
      en: "Waterhole",
      pl: "Wodopój",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["water", "beach", "ocean", "sand", "island"],
      pl: ["woda", "plaża", "ocean", "piasek", "wyspa"],
    },
    title: {
      en: "Lagoon",
      pl: "Laguna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["exploration", "mission", "surface", "curiosity", "planet"],
      pl: ["eksploracja", "misja", "powierzchnia", "ciekawość", "planeta"],
    },
    title: {
      en: "Mars rover",
      pl: "Łazik marsjański",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pins", "ball", "strike", "knock over", "lane"],
      pl: ["sport", "kula", "strike", "strącać", "tor"],
    },
    title: {
      en: "Bowling",
      pl: "Kręgle",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shuttlecock", "racket", "serve", "net", "birdie"],
      pl: ["lotka", "rakieta", "serwować", "siatka", "sport"],
    },
    title: {
      en: "Badminton",
      pl: "Badminton",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bow", "arrow", "target", "aim", "bullseye"],
      pl: ["łuk", "strzała", "tarcza", "cel", "środek"],
    },
    title: {
      en: "Archery",
      pl: "Łucznictwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["board", "wave", "wind", "beach", "ride"],
      pl: ["deska", "fala", "wiatr", "plaża", "płynąć"],
    },
    title: {
      en: "Surfing",
      pl: "Surfing",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mat", "pose", "breath", "stretch", "meditation"],
      pl: ["mata", "pozycja", "oddech", "rozciągać się", "medytacja"],
    },
    title: {
      en: "Yoga",
      pl: "Joga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["harness", "rope", "mountain", "crag", "summit"],
      pl: ["uprząż", "lina", "góra", "klif", "szczyt"],
    },
    title: {
      en: "Rock climbing",
      pl: "Wspinaczka skałkowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["stakes", "shoes", "toss", "ring", "game"],
      pl: ["kołek", "buty", "miotać", "obręcz", "gra"],
    },
    title: {
      en: "Horseshoes",
      pl: "Rzut podkową",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["mallet", "ball", "wicket", "course", "hit"],
      pl: ["pobijak", "kula", "bramka", "danie", "uderzyć"],
    },
    title: {
      en: "Croquet",
      pl: "Krokiet",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["racket", "serve", "net", "ball", "court"],
      pl: ["rakieta", "serwować", "siatka", "piłeczka", "kort"],
    },
    title: {
      en: "Tennis",
      pl: "Tenis",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["table", "ball", "rod", "spin", "goal"],
      pl: ["stół", "piłka", "drążek", "obrócić", "bramka"],
    },
    title: {
      en: "Foosball",
      pl: "Piłkarzyki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["machine", "grounds", "pot", "mug", "creamer"],
      pl: ["ekspres", "ziarna", "dzbanek", "kubek", "śmietanka"],
    },
    title: {
      en: "Making coffee",
      pl: "Parzenie kawy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["dish", "liquid", "sink", "dishwasher", "silverware"],
      pl: ["talerz", "płyn", "zlew", "zmywarka", "sztućce"],
    },
    title: {
      en: "Doing the dishes",
      pl: "Mycie naczyń",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["garden", "mower", "grass", "trim", "yard"],
      pl: ["ogródek", "kosiarka", "trawa", "przycinać", "podwórko"],
    },
    title: {
      en: "Mowing the lawn",
      pl: "Koszenie trawnika",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sleep", "sheet", "pillow", "quilt", "blanket"],
      pl: ["spać", "prześcieradło", "poduszka", "kołdra", "koc"],
    },
    title: {
      en: "Making the bed",
      pl: "Ścielenie łóżka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sweet", "dough", "oven", "baking sheet", "timer"],
      pl: ["słodki", "ciasto", "piekarnik", "blacha", "minutnik"],
    },
    title: {
      en: "Baking cookies",
      pl: "Pieczenie ciasteczek",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["party", "entertainment", "player", "dice", "strategy"],
      pl: ["towarzyska", "rozrywka", "gracz", "kostka", "strategia"],
    },
    title: {
      en: "Playing board games",
      pl: "Granie w gry planszowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["haircut", "salon", "scissors", "style", "barber"],
      pl: ["fryzura", "salon", "nożyczki", "styl", "fryzjer"],
    },
    title: {
      en: "Getting a haircut",
      pl: "Strzyżenie włosów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["leash", "park", "poop", "fetch", "bark"],
      pl: ["smycz", "park", "kupa", "aport", "szczekać"],
    },
    title: {
      en: "Walking the dog",
      pl: "Wyprowadzanie psa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["toothpaste", "mouthwash", "floss", "cavity", "dentist"],
      pl: ["pasta", "płyn do płukania", "nić", "jama", "dentysta"],
    },
    title: {
      en: "Brushing teeth",
      pl: "Mycie zębów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sleep", "bed", "pillow", "snore", "dream"],
      pl: ["spać", "łóżko", "poduszka", "chrapać", "śnić"],
    },
    title: {
      en: "Taking a nap",
      pl: "Zdrzemnąć się",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["post", "paper", "envelope", "stamp", "address"],
      pl: ["poczta", "papier", "koperta", "znaczek", "adres"],
    },
    title: {
      en: "Writing a letter",
      pl: "Pisanie listu",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["outdoors", "trail", "fresh air", "exercise", "scenery"],
      pl: ["na zewnątrz", "ścieżka", "świeże powietrze", "ćwiczenie", "krajobraz"],
    },
    title: {
      en: "Taking a walk",
      pl: "Pójście na spacer",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["dice", "pieces", "strategy", "win", "lose"],
      pl: ["kostka", "figury", "strategia", "wygrać", "przegrać"],
    },
    title: {
      en: "Playing a board game",
      pl: "Granie w grę planszową",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["restaurant", "movie", "flowers", "kiss", "love"],
      pl: ["restauracja", "film", "kwiaty", "pocałunek", "miłość"],
    },
    title: {
      en: "Going on a date",
      pl: "Iść na randkę",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tree", "Santa Claus", "presents", "carols", "Rudolph"],
      pl: ["choinka", "Święty Mikołaj", "prezenty", "kolędy", "Rudolf"],
    },
    title: {
      en: "Christmas",
      pl: "Boże Narodzenie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fireworks", "countdown", "champagne", "party", "confetti"],
      pl: ["fajerwerki", "odliczanie", "szampan", "impreza", "konfetti"],
    },
    title: {
      en: "New Year's Eve",
      pl: "Sylwester",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Christianity", "Gaspar", "Melchior", "Balthasar", "Jesus"],
      pl: ["Chrześcijaństwo", "Kacper", "Melchior", "Baltazar", "Jezus"],
    },
    title: {
      en: "Epiphany",
      pl: "święto Trzech Króli",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["sand", "desert", "wind", "sun", "camel"],
      pl: ["piasek", "pustynia", "wiatr", "słońce", "wielbłąd"],
    },
    title: {
      en: "Dune",
      pl: "Wydma",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["river", "ocean", "water", "tide", "bird"],
      pl: ["morze", "ocean", "woda", "fala", "ptak"],
    },
    title: {
      en: "Estuary",
      pl: "Ujście rzeki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["water", "steam", "heat", "eruption", "Iceland"],
      pl: ["woda", "para", "ciepło", "erupcja", "Islandia"],
    },
    title: {
      en: "Geyser",
      pl: "Gejzer",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water", "stream", "current", "fish", "rapids"],
      pl: ["woda", "strumień", "prąd", "ryba", "progi"],
    },
    title: {
      en: "River",
      pl: "Rzeka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["peak", "summit", "snow", "hiking", "trail"],
      pl: ["szczyt", "wierzchołek", "śnieg", "wędrówka", "szlak"],
    },
    title: {
      en: "Mountain",
      pl: "Góra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sand", "sun", "heat", "camel", "dunes"],
      pl: ["piasek", "słońce", "ciepło", "wielbłąd", "wydmy"],
    },
    title: {
      en: "Desert",
      pl: "Pustynia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cascade", "flow", "rocks", "mist", "spray"],
      pl: ["potok", "strumień", "kamienie", "mgła", "rozprysk"],
    },
    title: {
      en: "Waterfall",
      pl: "Wodospad",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["storm", "wind", "flood", "destruction", "tornado"],
      pl: ["burza", "wiatr", "powódź", "zniszczenie", "tornado"],
    },
    title: {
      en: "Hurricane",
      pl: "Huragan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["snow", "storm", "cold", "whiteout", "ice"],
      pl: ["śnieg", "burza", "zimno", "śnieżyca", "lód"],
    },
    title: {
      en: "Blizzard",
      pl: "Zamieć",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["dust", "grain", "wind", "desert", "visibility"],
      pl: ["pył", "ziarno", "wiatr", "pustynia", "widoczność"],
    },
    title: {
      en: "Sandstorm",
      pl: "Burza piaskowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["flower", "pond", "frog", "white", "floating"],
      pl: ["kwiat", "staw", "żaba", "biały", "unoszący się"],
    },
    title: {
      en: "Water lily",
      pl: "Lilia wodna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["trees", "green", "leaves", "Asia", "pandas"],
      pl: ["drzewa", "zielony", "liście", "Azja", "pandy"],
    },
    title: {
      en: "Bamboo forest",
      pl: "Las bambusowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["explosion", "star", "brightness", "light", "energy"],
      pl: ["wybuch", "gwiazda", "jasność", "światło", "energia"],
    },
    title: {
      en: "Supernova",
      pl: "Supernowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["galaxy", "stars", "Solar System", "Sun", "black hole"],
      pl: ["galaktyka", "gwiazdy", "Układ Słoneczny", "Słońce", "czarna dziura"],
    },
    title: {
      en: "Milky Way",
      pl: "Droga Mleczna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["planet", "blue", "life", "atmosphere", "moon"],
      pl: ["planeta", "niebieski", "życie", "atmosfera", "księżyc"],
    },
    title: {
      en: "Earth",
      pl: "Ziemia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["star", "meteor", "asteroid", "space", "tail"],
      pl: ["gwiazda", "meteor", "asteroida", "kosmos", "ogon"],
    },
    title: {
      en: "Comet",
      pl: "Kometa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["king", "queen", "bishop", "knight", "castle"],
      pl: ["król", "królowa", "goniec", "skoczek", "roszada"],
    },
    title: {
      en: "Chess",
      pl: "Szachy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["chips", "cards", "bet", "dealer", "bluff"],
      pl: ["żetony", "karty", "zakład", "rozdający", "blef"],
    },
    title: {
      en: "Poker",
      pl: "Poker",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["club", "hole", "green", "ball", "course"],
      pl: ["klub", "dołek", "zielony", "piłka", "kurs"],
    },
    title: {
      en: "Golf",
      pl: "Golf",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pool", "freestyle", "breaststroke", "backstroke", "dive"],
      pl: ["basen", "dowolny", "klasyczny", "grzbietowy", "nurkować"],
    },
    title: {
      en: "Swimming",
      pl: "Pływanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hoop", "ball", "dribble", "shoot", "team"],
      pl: ["obręcz", "piłka", "kozłować", "rzucać", "zespół"],
    },
    title: {
      en: "Basketball",
      pl: "Koszykówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bike", "helmet", "pedal", "chain", "race"],
      pl: ["rower", "kask", "pedał", "łańcuch", "wyścig"],
    },
    title: {
      en: "Cycling",
      pl: "Kolarstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bat", "ball", "pitcher", "field", "umpire"],
      pl: ["kij", "piłka", "miotacz", "boisko", "sędzia"],
    },
    title: {
      en: "Baseball",
      pl: "Baseball",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["balls", "toss", "catch", "jester", "skill"],
      pl: ["piłeczki", "podrzucać", "łapać", "błazen", "umiejętność"],
    },
    title: {
      en: "Juggling",
      pl: "Żonglowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rod", "reel", "bait", "line", "catch"],
      pl: ["wędka", "kołowrotek", "przynęta", "żyłka", "połów"],
    },
    title: {
      en: "Fishing",
      pl: "Wędkarstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["belt", "punch", "kick", "block", "ring"],
      pl: ["pas", "cios", "kopnięcie", "blok", "ring"],
    },
    title: {
      en: "Martial arts",
      pl: "Sztuki walki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["high", "wind", "string", "beach", "soar"],
      pl: ["wysoko", "wiatr", "sznurek", "plaża", "wznosić się"],
    },
    title: {
      en: "Kite flying",
      pl: "Puszczanie latawców",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["deck", "wheels", "trick", "grind", "ramp"],
      pl: ["blat", "kółka", "sztuczka", "szlifować", "rampa"],
    },
    title: {
      en: "Skateboarding",
      pl: "Jazda na deskorolce",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["paddle", "boat", "lake", "river", "current"],
      pl: ["wiosło", "łódka", "jezioro", "rzeka", "prąd"],
    },
    title: {
      en: "Canoeing",
      pl: "Kajakarstwo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["meditate", "mat", "pose", "stretch", "class"],
      pl: ["medytować", "mata", "pozycja", "rozciągać się", "zajęcia"],
    },
    title: {
      en: "Doing yoga",
      pl: "Uprawiać jogę",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["screen", "remote", "show", "episode", "channel"],
      pl: ["ekran", "pilot", "program", "odcinek", "kanał"],
    },
    title: {
      en: "Watching TV",
      pl: "Oglądanie telewizji",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["newspaper", "words", "pen", "clue", "answer"],
      pl: ["gazeta", "słowa", "długopis", "wskazówka", "odpowiedź"],
    },
    title: {
      en: "Doing a crossword puzzle",
      pl: "Rozwiązywanie krzyżówki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["wear", "board", "wrinkles", "steam", "laundry"],
      pl: ["nosić", "deska", "zagniecenie", "para", "pranie"],
    },
    title: {
      en: "Ironing clothes",
      pl: "Prasowanie ubrań",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sponge", "soap", "dishwasher", "plates", "silverware"],
      pl: ["gąbka", "płyn", "zmywarka", "talerze", "sztućce"],
    },
    title: {
      en: "Washing dishes",
      pl: "Mycie naczyń",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["voice mail", "dial tone", "speakerphone", "ring", "hold"],
      pl: ["poczta głosowa", "sygnał wybierania", "zestaw głośnomówiący", "dzwonić", "trzymać"],
    },
    title: {
      en: "Make a phone call",
      pl: "Telefonować",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["toilet", "sink", "shower", "tub", "mold"],
      pl: ["toaleta", "umywalka", "prysznic", "wanna", "pleśń"],
    },
    title: {
      en: "Cleaning the bathroom",
      pl: "Sprzątanie łazienki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["steering wheel", "gas", "brakes", "seat belt", "turn signal"],
      pl: ["kierownica", "gaz", "hamulce", "pasy", "kierunkowskaz"],
    },
    title: {
      en: "Driving a car",
      pl: "Prowadzenie samochodu",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["weights", "treadmill", "workout", "sweat", "bag"],
      pl: ["ciężary", "bieżnia", "trening", "pot", "torba"],
    },
    title: {
      en: "Going to the gym",
      pl: "Chodzenie na siłownię",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["calm", "focus", "breathe", "yoga", "relaxation"],
      pl: ["spokój", "skupienie", "oddech", "joga", "relaks"],
    },
    title: {
      en: "Meditating",
      pl: "Medytacja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pedals", "handlebars", "helmet", "gears", "wheel"],
      pl: ["pedały", "kierownica", "kask", "przerzutki", "koło"],
    },
    title: {
      en: "Riding a bike",
      pl: "Jazda na rowerze",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["pumpkin", "costume", "trick or treat", "candy", "ghost"],
      pl: ["dynia", "kostium", "cukierek albo psikus", "słodycze", "duch"],
    },
    title: {
      en: "Halloween",
      pl: "Halloween",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bunny", "egg", "chocolate", "resurrection", "basket"],
      pl: ["zajączek", "jajko", "czekolada", "zmartwychwstanie", "koszyczek"],
    },
    title: {
      en: "Easter",
      pl: "Wielkanoc",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dragon", "animals", "lantern", "festival", "zodiac"],
      pl: ["smok", "zwierzęta", "latarnia", "święto", "zodiak"],
    },
    title: {
      en: "Chinese New Year",
      pl: "Chiński Nowy Rok",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["New York", "torch", "crown", "sculpture", "island"],
      pl: ["Nowy Jork", "pochodnia", "korona", "posąg", "wyspa"],
    },
    title: {
      en: "Statue of Liberty",
      pl: "Statua Wolności",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bake", "heat", "cook", "temperature", "door"],
      pl: ["piec", "ciepło", "gotować", "temperatura", "drzwiczki"],
    },
    title: {
      en: "Oven",
      pl: "Piekarnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["light", "bulb", "shade", "switch", "desk"],
      pl: ["światło", "żarówka", "cień", "przełącznik", "biurko"],
    },
    title: {
      en: "Lamp",
      pl: "Lampa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothes", "fabric", "shirt", "legs", "washing"],
      pl: ["żelazko", "materiał", "koszula", "nóżka", "pranie"],
    },
    title: {
      en: "Ironing board",
      pl: "Deska do prasowania",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Paris", "museum", "art", "Mona Lisa", "pyramid"],
      pl: ["Paryż", "muzeum", "sztuka", "Mona Lisa", "piramida"],
    },
    title: {
      en: "The Louvre",
      pl: "Luwr",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["movies", "stars", "sign", "California", "walk of fame"],
      pl: ["filmy", "gwiazdy", "znak", "Kalifornia", "aleja gwiazd"],
    },
    title: {
      en: "Hollywood",
      pl: "Hollywood",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blades", "motor", "airflow", "blow", "cool"],
      pl: ["skrzydło", "silnik", "strumień powietrza", "podmuch", "chłód"],
    },
    title: {
      en: "Ceiling fan",
      pl: "Wiatrak sufitowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["chocolate", "sugar", "baking", "dough", "snack"],
      pl: ["czekolada", "cukier", "pieczenie", "ciasto", "przekąska"],
    },
    title: {
      en: "Cookies",
      pl: "Ciasteczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wheels", "handlebars", "ride", "motorcycle", "kids"],
      pl: ["koła", "kierownica", "jeździć", "motocykl", "dzieci"],
    },
    title: {
      en: "Scooter",
      pl: "Skuter",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["orange", "roadwork", "safety", "light", "traffic"],
      pl: ["pomarańczowy", "roboty drogowe", "bezpieczeństwo", "światełko", "ruch"],
    },
    title: {
      en: "Traffic cone",
      pl: "Pachołek drogowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["catch", "throw", "mitt", "leather", "field"],
      pl: ["łapać", "rzucać", "dłoń", "skóra", "boisko"],
    },
    title: {
      en: "Baseball glove",
      pl: "Rękawica baseballowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["blades", "rink", "skating", "ice", "slippery"],
      pl: ["ostrza", "lodowisko", "jazda", "lód", "ślisko"],
    },
    title: {
      en: "Ice skates",
      pl: "Łyżwy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tall", "building", "city", "windows", "elevator"],
      pl: ["wysoki", "budynek", "miasto", "okna", "winda"],
    },
    title: {
      en: "Skyscraper",
      pl: "Wieżowiec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bike", "engine", "helmet", "leather", "car"],
      pl: ["motor", "silnik", "kask", "skóra", "samochód"],
    },
    title: {
      en: "Motorcycle",
      pl: "Motocykl",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bread", "breakfast", "heat", "pop-up", "slot"],
      pl: ["chleb", "śniadanie", "ciepło", "wyskakiwać", "opiekacz"],
    },
    title: {
      en: "Toaster",
      pl: "Toster",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "snow", "hat", "carrot", "scarf"],
      pl: ["zima", "śnieg", "kapelusz", "marchew", "szalik"],
    },
    title: {
      en: "Snowman",
      pl: "Bałwan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["toy", "wind", "rotation", "colorful", "paper"],
      pl: ["zabawka", "wiatr", "obrót", "kolorowy", "papier"],
    },
    title: {
      en: "Pinwheel",
      pl: "Wiatraczek",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["grass", "cutting", "machine", "blade", "handle"],
      pl: ["trawa", "przycinanie", "maszyna", "ostrze", "uchwyt"],
    },
    title: {
      en: "Lawn mower",
      pl: "Kosiarka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["playground", "slide", "chains", "seat", "children"],
      pl: ["plac zabaw", "zjeżdżalnia", "łańcuchy", "siedzenie", "dzieci"],
    },
    title: {
      en: "Swing set",
      pl: "Huśtawka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["math", "numbers", "screen", "buttons", "count"],
      pl: ["matematyka", "liczby", "ekran", "przyciski", "liczyć"],
    },
    title: {
      en: "Calculator",
      pl: "Kalkulator",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["wheels", "deck", "tricks", "sport", "ramp"],
      pl: ["kółka", "blat", "sztuczki", "sport", "rampa"],
    },
    title: {
      en: "Skateboard",
      pl: "Deskorolka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paper", "ink", "toner", "cartridge", "document"],
      pl: ["papier", "tusz", "toner", "wkład", "dokument"],
    },
    title: {
      en: "Printer",
      pl: "Drukarka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["scissors", "salon", "style", "trim", "barber"],
      pl: ["nożyczki", "salon", "styl", "przycinanie", "fryzjer"],
    },
    title: {
      en: "Haircut",
      pl: "Strzyżenie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bulb", "smell", "flavor", "cooking", "spice"],
      pl: ["główka", "zapach", "smak", "gotowanie", "przyprawa"],
    },
    title: {
      en: "Garlic",
      pl: "Czosnek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["river", "road", "water", "arch", "suspension"],
      pl: ["rzeka", "droga", "woda", "łuk", "zawieszenie"],
    },
    title: {
      en: "Bridge",
      pl: "Most",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beef", "cheese", "ketchup", "fries", "bun"],
      pl: ["wołowina", "ser", "ketchup", "frytki", "bułka"],
    },
    title: {
      en: "Burger",
      pl: "Burger",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["alcohol", "barley", "bitter", "hops", "drink"],
      pl: ["alkohol", "jęczmień", "gorycz", "chmiel", "pić"],
    },
    title: {
      en: "Beer",
      pl: "Piwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cheese", "dough", "pepperoni", "sauce", "slice"],
      pl: ["ser", "ciasto", "pepperoni", "sos", "kawałek"],
    },
    title: {
      en: "Pizza",
      pl: "Pizza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bottle", "cork", "grapes", "red", "white"],
      pl: ["butelka", "korek", "winogrona", "czerwone", "białe"],
    },
    title: {
      en: "Wine",
      pl: "Wino",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lime", "salt", "tequila", "drink", "cocktail"],
      pl: ["limonka", "sól", "tequila", "drink", "koktajl"],
    },
    title: {
      en: "Margarita",
      pl: "Margarita",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cheese", "dough", "filling", "pasta", "sauce"],
      pl: ["ser", "ciasto", "farsz", "makaron", "sos"],
    },
    title: {
      en: "Ravioli",
      pl: "Ravioli",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Greek", "lamb", "pita", "sauce", "tzatziki"],
      pl: ["Grecki", "jagnięcina", "pita", "sos", "tzatziki"],
    },
    title: {
      en: "Gyro",
      pl: "Gyros",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["avocado", "dip", "chips", "lime", "cilantro"],
      pl: ["awokado", "sos", "chipsy", "limonka", "kolendra"],
    },
    title: {
      en: "Guacamole",
      pl: "Guacamole",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["syrup", "butter", "pan", "breakfast", "stack"],
      pl: ["syrop", "masło", "patelnia", "śniadanie", "stos"],
    },
    title: {
      en: "Pancakes",
      pl: "Naleśniki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bun", "ketchup", "mustard", "sausage", "petrol station"],
      pl: ["bułka", "ketchup", "musztarda", "parówka", "stacja benzynowa"],
    },
    title: {
      en: "Hot dog",
      pl: "Hot dog",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["butter", "gravy", "creamy", "side dish", "food"],
      pl: ["masło", "sos", "kremowy", "dodatek", "jedzenie"],
    },
    title: {
      en: "Mashed potatoes",
      pl: "Tłuczone ziemniaki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["buttery", "crescent", "French", "pastry", "breakfast"],
      pl: ["maślany", "półksiężyc", "Francuski", "wypiek", "śniadanie"],
    },
    title: {
      en: "Croissant",
      pl: "Croissant",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["creamy", "soup", "seafood", "USA", "crackers"],
      pl: ["kremowy", "zupa", "owoce morza", "USA", "krakersy"],
    },
    title: {
      en: "Clam chowder",
      pl: "Zupa z małży",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["hummus", "pita", "lettuce", "tomato", "tahini"],
      pl: ["hummus", "pita", "sałata", "pomidor", "wrap"],
    },
    title: {
      en: "Falafel wrap",
      pl: "Tortilla z falafelem",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["curry", "dish", "tomato", "Indian", "rice"],
      pl: ["curry", "danie", "pomidor", "indyjski", "ryż"],
    },
    title: {
      en: "Chicken tikka masala",
      pl: "Kurczak tikka masala",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["jealousy", "covetousness", "resentment", "discontent", "bitterness"],
      pl: ["zawiść", "chciwość", "uraza", "niezadowolenie", "rozgoryczenie"],
    },
    title: {
      en: "Envy",
      pl: "Zazdrość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["anxiety", "terror", "phobia", "dread", "panic"],
      pl: ["niepokój", "przerażenie", "fobia", "groza", "panika"],
    },
    title: {
      en: "Fear",
      pl: "Strach",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["optimism", "expectation", "aspiration", "faith", "confidence"],
      pl: ["optymizm", "oczekiwanie", "aspiracja", "wiara", "pewność"],
    },
    title: {
      en: "Hope",
      pl: "Nadzieja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["self-esteem", "arrogance", "vanity", "haughtiness", "conceit"],
      pl: ["samoocena", "arogancja", "próżność", "pycha", "zarozumiałość"],
    },
    title: {
      en: "Pride",
      pl: "Duma",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["monotony", "tedium", "ennui", "weariness", "dullness"],
      pl: ["monotonia", "znużenie", "marazm", "zmęczenie", "otępienie"],
    },
    title: {
      en: "Boredom",
      pl: "Nuda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bitterness", "indignation", "animosity", "acrimony", "rancor"],
      pl: ["rozgoryczenie", "oburzenie", "wrogość", "zgryźliwość", "żal"],
    },
    title: {
      en: "Resentment",
      pl: "Uraza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bewilderment", "perplexity", "disorientation", "muddle", "befuddlement"],
      pl: ["zdziwienie", "zakłopotanie", "dezorientacja", "bałagan", "konsternacja"],
    },
    title: {
      en: "Confusion",
      pl: "Zamieszanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["incredulity", "skepticism", "doubt", "suspicion", "mistrust"],
      pl: ["niewiarygodne", "sceptycyzm", "wątpliwość", "podejrzenie", "nieufność"],
    },
    title: {
      en: "Disbelief",
      pl: "Niedowierzanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["intrigue", "awe", "enchantment", "allure", "wonder"],
      pl: ["intrygować", "podziw", "zauroczenie", "urok", "cudowny"],
    },
    title: {
      en: "Fascination",
      pl: "Fascynacja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lyrics", "choir", "karaoke", "voice", "stage"],
      pl: ["tekst", "chór", "karaoke", "głos", "scena"],
    },
    title: {
      en: "Singing",
      pl: "Śpiew",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["touchdown", "sport", "quarterback", "helmet", "tackle"],
      pl: ["przyłożenie", "sport", "rozgrywający", "kask", "atak"],
    },
    title: {
      en: "American football",
      pl: "Futbol amerykański",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["blades", "ice rink", "twirl", "figure skating", "dance"],
      pl: ["ostrza", "lodowisko", "obrót", "łyżwiarstwo figurowe", "taniec"],
    },
    title: {
      en: "Ice skating",
      pl: "Jazda na łyżwach",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["barbell", "dumbbell", "bench press", "reps", "muscles"],
      pl: ["sztanga", "hantel", "wyciskanie", "powtórzenia", "mięśnie"],
    },
    title: {
      en: "Weightlifting",
      pl: "Podnoszenie ciężarów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["controller", "screen", "console", "avatar", "joystick"],
      pl: ["pad", "ekran", "konsola", "awatar", "joystick"],
    },
    title: {
      en: "Playing video games",
      pl: "Granie w gry wideo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["clouds", "blue", "sun", "stars", "moon"],
      pl: ["chmury", "niebieski", "słońce", "gwiazdy", "piekło"],
    },
    title: {
      en: "Sky",
      pl: "Niebo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trees", "animals", "vines", "humidity", "heat"],
      pl: ["drzewa", "zwierzęta", "pnącza", "wilgotność", "ciepło"],
    },
    title: {
      en: "Jungle",
      pl: "Dżungla",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mountains", "trees", "river", "grass", "meadow"],
      pl: ["góry", "drzewa", "rzeka", "trawa", "łąka"],
    },
    title: {
      en: "Valley",
      pl: "Dolina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["grass", "land", "animals", "sun", "wind"],
      pl: ["trawa", "pole", "zwierzęta", "słońce", "wiatr"],
    },
    title: {
      en: "Grassland",
      pl: "Łąka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rocks", "height", "view", "ocean", "trail"],
      pl: ["skały", "wysokość", "widok", "ocean", "szlak"],
    },
    title: {
      en: "Cliff",
      pl: "Klif",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["island", "ocean", "beach", "tropics", "sun"],
      pl: ["wyspa", "ocean", "plaża", "tropiki", "słońce"],
    },
    title: {
      en: "Archipelago",
      pl: "Archipelag",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["flat", "elevation", "mountains", "trees", "view"],
      pl: ["płaski", "wysokość", "góry", "drzewa", "widok"],
    },
    title: {
      en: "Plateau",
      pl: "Płaskowyż",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["trees", "green", "leaves", "wildlife", "timber"],
      pl: ["drzewa", "zielony", "liście", "przyroda", "drewno"],
    },
    title: {
      en: "Forest",
      pl: "Las",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dark", "stalactites", "stalagmites", "echoes", "bat"],
      pl: ["ciemny", "stalaktyty", "stalagmity", "echo", "nietoperz"],
    },
    title: {
      en: "Cave",
      pl: "Jaskinia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blaze", "smoke", "tree", "heat", "ashes"],
      pl: ["płomień", "dym", "drzewo", "żar", "popiół"],
    },
    title: {
      en: "Forest fire",
      pl: "Pożar lasu",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["borealis", "lights", "sky", "colors", "glowing"],
      pl: ["polarna", "światła", "niebo", "kolory", "blask"],
    },
    title: {
      en: "Aurora",
      pl: "Zorza",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["mouth", "estuary", "silt", "wetlands", "sediment"],
      pl: ["ujście", "estuarium", "muł", "mokradła", "osad"],
    },
    title: {
      en: "River delta",
      pl: "Delta rzeki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["grassland", "wildlife", "Africa", "lion", "dry"],
      pl: ["łąka", "przyroda", "Afryka", "lew", "suchy"],
    },
    title: {
      en: "Savanna",
      pl: "Sawanna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["seaweed", "ocean", "diving", "algae", "underwater"],
      pl: ["glony", "ocean", "nurkowanie", "algi", "podwodny"],
    },
    title: {
      en: "Kelp forest",
      pl: "Las wodorostów",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["New York", "Broadway", "billboards", "lights", "crowds"],
      pl: ["Nowy Jork", "Broadway", "bilbordy", "światła", "tłum"],
    },
    title: {
      en: "Times Square",
      pl: "Times Square",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["London", "England", "Thames", "iconic", "river"],
      pl: ["Londyn", "Anglia", "Tamiza", "ikoniczny", "rzeka"],
    },
    title: {
      en: "Tower Bridge",
      pl: "Tower Bridge",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["lens", "shutter", "flash", "memory card", "zoom"],
      pl: ["obiektyw", "migawka", "flesz", "karta pamięci", "zoom"],
    },
    title: {
      en: "Camera",
      pl: "Aparat",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["boil", "tea", "water", "handle", "spout"],
      pl: ["gotować", "herbata", "woda", "uchwyt", "dziobek"],
    },
    title: {
      en: "Kettle",
      pl: "Czajnik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blower", "heat", "cord", "head", "temperature"],
      pl: ["dmuchawa", "ciepło", "przewód", "głowa", "temperatura"],
    },
    title: {
      en: "Hair dryer",
      pl: "Suszarka do włosów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["energy", "blade", "windmill", "tower", "generator"],
      pl: ["energia", "łopatka", "wiatrak", "wieża", "generator"],
    },
    title: {
      en: "Wind turbine",
      pl: "Turbina wiatrowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["clasp", "bend", "metal", "hold", "page"],
      pl: ["zapięcie", "zgięcie", "metal", "trzymać", "strona"],
    },
    title: {
      en: "Paperclip",
      pl: "Spinacz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hair", "heat", "clamp", "curl", "barrel"],
      pl: ["włosy", "ciepło", "zaciskać", "kręcić", "beczka"],
    },
    title: {
      en: "Curling iron",
      pl: "Lokówka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bristles", "handle", "comb", "tangle", "style"],
      pl: ["włosie", "rączka", "grzebień", "kołtun", "styl"],
    },
    title: {
      en: "Hairbrush",
      pl: "Szczotka do włosów",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shoes", "women", "platform", "heel", "fashion"],
      pl: ["buty", "kobieta", "platforma", "obcas", "moda"],
    },
    title: {
      en: "High heels",
      pl: "Szpilki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["handle", "drink", "ceramic", "hot", "steam"],
      pl: ["uchwyt", "pić", "ceramiczny", "gorący", "para"],
    },
    title: {
      en: "Coffee mug",
      pl: "Kubek do kawy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["keyboard", "mouse", "screen", "internet", "technology"],
      pl: ["klawiatura", "mysz", "ekran", "internet", "technologia"],
    },
    title: {
      en: "Computer",
      pl: "Komputer",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fire", "wood", "heat", "mantel", "chimney"],
      pl: ["ogień", "drewno", "ciepło", "obudowa", "palenisko"],
    },
    title: {
      en: "Fireplace",
      pl: "Kominek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["citrus", "drink", "sweet", "refreshing", "summer"],
      pl: ["cytryna", "napój", "słodki", "odświeżający", "lato"],
    },
    title: {
      en: "Lemonade",
      pl: "Lemoniada",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stop", "go", "red", "green", "intersection"],
      pl: ["stop", "jechać", "czerwony", "zielony", "skrzyżowanie"],
    },
    title: {
      en: "Traffic light",
      pl: "Sygnalizacja świetlna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bread", "meat", "cheese", "lettuce", "lunch"],
      pl: ["chleb", "mięso", "ser", "sałata", "lunch"],
    },
    title: {
      en: "Sandwich",
      pl: "Kanapka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["laundry", "spin", "dirty", "clothes", "appliance"],
      pl: ["pranie", "wirowanie", "brudny", "ubrania", "urządzenie"],
    },
    title: {
      en: "Washing machine",
      pl: "Pralka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["amplifier", "music", "strings", "sound", "rock"],
      pl: ["wzmacniacz", "muzyka", "struny", "dźwięk", "rock"],
    },
    title: {
      en: "Electric guitar",
      pl: "Gitara elektryczna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["shoes", "sports", "lace", "comfortable", "athletic"],
      pl: ["buty", "sport", "sznurówka", "wygodny", "atletyczny"],
    },
    title: {
      en: "Sneakers",
      pl: "Trampki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["medical", "instrument", "heartbeat", "doctor", "diagnosis"],
      pl: ["medyczny", "przyrząd", "bicie serca", "lekarz", "diagnoza"],
    },
    title: {
      en: "Stethoscope",
      pl: "Stetoskop",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["explosion", "celebration", "loud", "fuse", "fireworks"],
      pl: ["eksplozja", "świętowanie", "głośny", "lont", "fajerwerki"],
    },
    title: {
      en: "Firecracker",
      pl: "Petarda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["timer", "time", "precision", "seconds", "minutes"],
      pl: ["zegar", "czas", "precyzja", "sekundy", "minuty"],
    },
    title: {
      en: "Stopwatch",
      pl: "Stoper",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["frozen", "sweet", "stick", "summer", "dessert"],
      pl: ["mrożony", "słodki", "zamarznięty", "lato", "deser"],
    },
    title: {
      en: "Popsicle",
      pl: "Lód na patyku",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bath", "toy", "yellow", "squeak", "bird"],
      pl: ["kąpiel", "zabawka", "żółty", "piszczeć", "ptak"],
    },
    title: {
      en: "Rubber duck",
      pl: "Gumowa kaczuszka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["communication", "dial", "call", "cord", "vintage"],
      pl: ["komunikacja", "tarcza", "połączenie", "przewód", "zabytkowy"],
    },
    title: {
      en: "Rotary phone",
      pl: "Telefon obrotowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["music", "disc", "grooves", "album", "player"],
      pl: ["muzyka", "tarcza", "wyżłobienia", "album", "odtwarzacz"],
    },
    title: {
      en: "Vinyl record",
      pl: "Płyta winylowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["underwater", "military", "torpedo", "sonar", "periscope"],
      pl: ["woda", "wojsko", "torpeda", "sonar", "peryskop"],
    },
    title: {
      en: "Submarine",
      pl: "Okręt podwodny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["buttons", "lift", "up", "down", "shaft"],
      pl: ["przyciski", "podnosić", "góra", "dół", "szyb"],
    },
    title: {
      en: "Elevator",
      pl: "Winda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["scales", "water", "gills", "fins", "aquarium"],
      pl: ["łuski", "woda", "skrzela", "płetwy", "akwarium"],
    },
    title: {
      en: "Fish",
      pl: "Ryba",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hair", "wash", "lather", "rinse", "bottle"],
      pl: ["włosy", "myć", "piana", "spłukać", "butelka"],
    },
    title: {
      en: "Shampoo",
      pl: "Szampon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "swim", "diving", "float", "shallow"],
      pl: ["woda", "pływać", "nurkowanie", "unosić się", "płytki"],
    },
    title: {
      en: "Pool",
      pl: "Basen",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["time", "hour", "minute", "hand", "digital"],
      pl: ["czas", "godzina", "minuta", "ręka", "cyfrowy"],
    },
    title: {
      en: "Clock",
      pl: "Zegar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lettuce", "croutons", "parmesan", "dressing", "cheese"],
      pl: ["sałata", "grzanki", "parmezan", "sos", "ser"],
    },
    title: {
      en: "Caesar salad",
      pl: "Sałatka Caesar",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["noodles", "shrimp", "tofu", "peanuts", "spicy"],
      pl: ["makaron", "krewetki", "tofu", "orzeszki", "ostry"],
    },
    title: {
      en: "Pad thai",
      pl: "Pad thai",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["breaded", "crispy", "seafood", "sauce", "tempura"],
      pl: ["panierowany", "chrupiący", "owoce morza", "sos", "tempura"],
    },
    title: {
      en: "Fried shrimp",
      pl: "Smażone krewetki",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["planet", "Solar System", "Mars", "Venus", "Saturn"],
      pl: ["planeta", "Układ Słoneczny", "Mars", "Wenus", "Saturn"],
    },
    title: {
      en: "Jupiter",
      pl: "Jowisz",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["planet", "rings", "Jupiter", "Uranus", "Neptune"],
      pl: ["planeta", "pierścienie", "Jowisz", "Uran", "Neptun"],
    },
    title: {
      en: "Saturn",
      pl: "Saturn",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["moon", "sun", "bright", "shine", "shadow"],
      pl: ["księżyc", "światło", "jasny", "świecić", "cień"],
    },
    title: {
      en: "Solar eclipse",
      pl: "Zaćmienie słońca",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tortilla", "Mexican", "burrito", "salsa", "guacamole"],
      pl: ["tortilla", "meksykański", "burrito", "salsa", "guacamole"],
    },
    title: {
      en: "Taco",
      pl: "Taco",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["citrus", "pulp", "sweet", "tart", "vitamin C"],
      pl: ["cytrusy", "miąższ", "słodki", "kwaśny", "witamina C"],
    },
    title: {
      en: "Orange juice",
      pl: "Sok pomarańczowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["soccer", "goal", "team", "field", "kick"],
      pl: ["futbol", "bramka", "zespół", "boisko", "kopać"],
    },
    title: {
      en: "Football",
      pl: "Piłka nożna",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["frosting", "glazed", "hole", "sprinkles", "sweet"],
      pl: ["lukier", "polewa", "dziura", "posypka", "pączek"],
    },
    title: {
      en: "Donut",
      pl: "Donut",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beans", "cheese", "rice", "salsa", "tortilla"],
      pl: ["fasola", "ser", "ryż", "salsa", "tortilla"],
    },
    title: {
      en: "Burrito",
      pl: "Burrito",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trail", "boots", "backpack", "nature", "summit"],
      pl: ["szlak", "buty", "plecak", "natura", "szczyt"],
    },
    title: {
      en: "Hiking",
      pl: "Piesza wycieczka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ice cream", "straw", "sweet", "thick", "vanilla"],
      pl: ["lody", "słomka", "słodki", "gęsty", "wanilia"],
    },
    title: {
      en: "Milkshake",
      pl: "Koktajl mleczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["board", "boots", "slope", "trick", "snow"],
      pl: ["deska", "buty", "stok", "sztuczka", "śnieg"],
    },
    title: {
      en: "Snowboarding",
      pl: "Snowboarding",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["disc", "toss", "catch", "game", "flying"],
      pl: ["dysk", "rzut", "łapać", "gra", "latanie"],
    },
    title: {
      en: "Frisbee",
      pl: "Frisbee",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["net", "ball", "serve", "spike", "beach"],
      pl: ["siatka", "piłka", "serwować", "atak", "plaża"],
    },
    title: {
      en: "Volleyball",
      pl: "Siatkówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["breading", "crispy", "drumstick", "spicy", "wings"],
      pl: ["panierka", "chrupiący", "nóżka", "pikantny", "skrzydełka"],
    },
    title: {
      en: "Fried chicken",
      pl: "Smażony kurczak",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["blueberry", "breakfast", "crumbly", "sweet", "warm"],
      pl: ["jagoda", "śniadanie", "kruchy", "słodki", "ciepły"],
    },
    title: {
      en: "Muffin",
      pl: "Muffinka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bounce", "jump", "flip", "bouncy", "springs"],
      pl: ["odbić się", "skakać", "salto", "elastyczny", "sprężyna"],
    },
    title: {
      en: "Trampoline",
      pl: "Trampolina",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paddle", "boat", "river", "rapids", "spray"],
      pl: ["wiosło", "łódka", "rzeka", "progi rzeczne", "strumień"],
    },
    title: {
      en: "Kayaking",
      pl: "Pływać kajakiem",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["jump", "vault", "wall", "run", "obstacle"],
      pl: ["skok", "przeskoczyć", "ściana", "biegać", "przeszkoda"],
    },
    title: {
      en: "Parkour",
      pl: "Parkour",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["chicken", "ribs", "sauce", "smoke", "steak"],
      pl: ["kurczak", "żeberka", "sos", "dym", "stek"],
    },
    title: {
      en: "Barbecue",
      pl: "Grill",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["basil", "cheese", "dough", "mozzarella", "tomato"],
      pl: ["bazylia", "ser", "ciasto", "mozzarella", "pomidor"],
    },
    title: {
      en: "Margherita pizza",
      pl: "Pizza Margherita",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["boat", "sail", "wind", "regatta", "yacht"],
      pl: ["łódka", "żagiel", "wiatr", "regaty", "jacht"],
    },
    title: {
      en: "Sailing",
      pl: "Żeglarstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ski", "glide", "mountains", "snow", "trail"],
      pl: ["narty", "ślizgać", "góry", "śnieg", "trasa"],
    },
    title: {
      en: "Cross-country skiing",
      pl: "Biegi narciarskie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["raw", "Japanese", "chopsticks", "soy sauce", "wasabi"],
      pl: ["surowy", "Japoński", "pałeczki", "sos sojowy", "wasabi"],
    },
    title: {
      en: "Sushi",
      pl: "Sushi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lettuce", "croutons", "dressing", "parmesan", "Italy"],
      pl: ["sałata", "grzanki", "sos", "parmezan", "Włochy"],
    },
    title: {
      en: "Caesar salad",
      pl: "Sałatka Cezar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cheese", "chips", "salsa", "tortilla", "guacamole"],
      pl: ["ser", "chipsy", "salsa", "tortilla", "guacamole"],
    },
    title: {
      en: "Nachos",
      pl: "Nachos",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clothes", "closet", "outfit", "hanger", "shoes"],
      pl: ["ubrania", "szafa", "ubiór", "wieszak", "buty"],
    },
    title: {
      en: "Getting dressed",
      pl: "Ubierać się",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sauce", "starter", "lemon", "horseradish", "crackers"],
      pl: ["sos", "przystawka", "cytryna", "chrzan", "krakersy"],
    },
    title: {
      en: "Shrimp cocktail",
      pl: "Koktajl z krewetek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["junk", "bag", "can", "dumpster", "garbage"],
      pl: ["złom", "worek", "pojemnik", "kontener", "odpady"],
    },
    title: {
      en: "Taking the trash out",
      pl: "Wynosić śmieci",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["car", "drive", "commute", "traffic", "road"],
      pl: ["samochód", "prowadzić", "dojeżdżać", "ruch", "droga"],
    },
    title: {
      en: "Driving to work",
      pl: "Jazda do pracy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["paint", "brush", "roller", "drop cloth", "ladder"],
      pl: ["farba", "pędzel", "wałek", "płachta", "drabina"],
    },
    title: {
      en: "Painting a room",
      pl: "Malować pokój",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["chickpeas", "pita", "tahini", "herbs", "vegetarian"],
      pl: ["ciecierzyca", "pita", "pasta", "zioła", "wegetariański"],
    },
    title: {
      en: "Falafel",
      pl: "Falafel",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beans", "beef", "spicy", "tomato", "chili"],
      pl: ["fasola", "wołowina", "pikantny", "pomidor", "chili"],
    },
    title: {
      en: "Chili con carne",
      pl: "Chili con carne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["jog", "sport", "track", "fitness", "exercise"],
      pl: ["jogging", "sport", "ścieżka", "fitness", "trening"],
    },
    title: {
      en: "Going for a run",
      pl: "Iść pobiegać",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["room", "clutter", "clean", "dust", "sweep"],
      pl: ["pokój", "bałagan", "czysty", "kurz", "zamiatać"],
    },
    title: {
      en: "Tidying up the house",
      pl: "Sprzątać dom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["yard", "hose", "soil", "plants", "fertilizer"],
      pl: ["podwórko", "wąż", "ziemia", "rośliny", "nawóz"],
    },
    title: {
      en: "Watering the garden",
      pl: "Podlewać ogród",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sewing", "yarn", "needles", "pattern", "wool"],
      pl: ["szycie", "włóczka", "igły", "wzór", "wełna"],
    },
    title: {
      en: "Knitting a scarf",
      pl: "Robić szalik na drutach",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fermented", "cabbage", "spicy", "Korean", "side dish"],
      pl: ["sfermentowany", "kapusta", "ostry", "Koreański", "dodatek"],
    },
    title: {
      en: "Kimchi",
      pl: "Kimchi",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["dust", "filter", "attachment", "carpet", "noise"],
      pl: ["kurz", "filtr", "końcówka", "dywan", "hałas"],
    },
    title: {
      en: "Vacuuming",
      pl: "Odkurzanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gym", "weights", "treadmill", "sweat", "fitness"],
      pl: ["siłownia", "ciężary", "bieżnia", "pot", "fitness"],
    },
    title: {
      en: "Exercising",
      pl: "Ćwiczenia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["chapter", "characters", "plot", "author", "pages"],
      pl: ["rozdział", "postacie", "fabuła", "autor", "strony"],
    },
    title: {
      en: "Reading a book",
      pl: "Czytać książkę",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["guitar", "piano", "drums", "notes", "melody"],
      pl: ["gitara", "pianino", "perkusja", "nuty", "melodia"],
    },
    title: {
      en: "Playing a musical instrument",
      pl: "Grać na instrumencie muzycznym",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["flour", "sugar", "eggs", "oven", "frosting"],
      pl: ["mąka", "cukier", "jajka", "piekarnik", "polewa"],
    },
    title: {
      en: "Baking a cake",
      pl: "Piec ciasto",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["self-assurance", "assertiveness", "poise", "boldness", "audacity"],
      pl: ["siebie", "asertywność", "opanowanie", "odwaga", "śmiałość"],
    },
    title: {
      en: "Confidence",
      pl: "Pewność",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bread", "cheese", "lettuce", "ham", "butter"],
      pl: ["chleb", "ser", "sałata", "szynka", "masło"],
    },
    title: {
      en: "Making a sandwich",
      pl: "Przygotowywać kanapkę",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["reliance", "confidence", "faith", "belief", "reliance"],
      pl: ["poleganie", "pewność", "ufność", "przekonanie", "oparcie"],
    },
    title: {
      en: "Trust",
      pl: "Zaufanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["isolation", "solitude", "abandonment", "estrangement", "seclusion"],
      pl: ["izolacja", "osamotnienie", "porzucenie", "obcość", "odosobnienie"],
    },
    title: {
      en: "Loneliness",
      pl: "Samotność",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["love", "flowers", "heart", "chocolate", "date"],
      pl: ["miłość", "kwiaty", "serce", "czekolada", "randka"],
    },
    title: {
      en: "Valentine's Day",
      pl: "Walentynki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["reminiscence", "yearning", "wistfulness", "longing", "sentimentality"],
      pl: ["wspomnienie", "tęsknota", "żal", "pragnienie", "sentymentalność"],
    },
    title: {
      en: "Nostalgia",
      pl: "Nostalgia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["affection", "care", "warmth", "fondness", "gentleness"],
      pl: ["uczucie", "troska", "ciepło", "sympatia", "delikatność"],
    },
    title: {
      en: "Tenderness",
      pl: "Czułość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["green", "shamrock", "leprechaun", "beer", "Ireland"],
      pl: ["zielony", "koniczyna", "skrzat", "piwo", "Irlandia"],
    },
    title: {
      en: "St. Patrick's Day",
      pl: "Dzień Świętego Patryka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["caroling", "nativity", "Midnight Mass", "presents", "Santa Claus"],
      pl: ["kolędowanie", "szopka", "Pasterka", "prezenty", "Święty Mikołaj"],
    },
    title: {
      en: "Christmas Eve",
      pl: "Wigilia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sorrow", "remorse", "repentance", "contrition", "self-reproach"],
      pl: ["smutek", "skrucha", "nawrócenie", "kajanie", "wyrzuty sumienia"],
    },
    title: {
      en: "Regret",
      pl: "Żal",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["reluctance", "indecision", "uncertainty", "vacillation", "doubt"],
      pl: ["opór", "niezdecydowanie", "wątpliwość", "wahanie", "niejasność"],
    },
    title: {
      en: "Hesitation",
      pl: "Niepewność",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["restlessness", "eagerness", "irritation", "intolerance", "annoyance"],
      pl: ["niepokój", "zapał", "irytacja", "nietolerancja", "rozdrażnienie"],
    },
    title: {
      en: "Impatience",
      pl: "Niecierpliwość",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pedal", "helmet", "road", "trail", "speed"],
      pl: ["pedał", "kask", "droga", "ścieżka", "prędkość"],
    },
    title: {
      en: "Biking",
      pl: "Jazda na rowerze",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["canvas", "brush", "colors", "art", "gallery"],
      pl: ["płótno", "pędzel", "kolory", "sztuka", "galeria"],
    },
    title: {
      en: "Painting",
      pl: "Obraz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tent", "campfire", "forest", "nature", "sleeping bag"],
      pl: ["namiot", "ognisko", "las", "natura", "śpiwór"],
    },
    title: {
      en: "Camping",
      pl: "Biwak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["yarn", "needles", "pattern", "wool", "stitch"],
      pl: ["włóczka", "igły", "wzór", "wełna", "szew"],
    },
    title: {
      en: "Knitting",
      pl: "Robić na drutach",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["king", "queen", "pawn", "check", "mate"],
      pl: ["król", "królowa", "pionek", "szach", "mat"],
    },
    title: {
      en: "Playing chess",
      pl: "Grać w szachy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Japan", "belt", "martial arts", "punch", "kick"],
      pl: ["Japonia", "pas", "sztuki walki", "uderzyć", "kopnąć"],
    },
    title: {
      en: "Karate",
      pl: "Karate",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mud", "mosquitoes", "alligators", "water", "trees"],
      pl: ["błoto", "komary", "aligator", "woda", "drzewa"],
    },
    title: {
      en: "Swamp",
      pl: "Bagno",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sea", "boats", "beach", "sand", "seagulls"],
      pl: ["morze", "łódki", "plaża", "piasek", "mewy"],
    },
    title: {
      en: "Bay",
      pl: "Zatoka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "mountains", "rocks", "depth", "view"],
      pl: ["woda", "góry", "skały", "głębokość", "widok"],
    },
    title: {
      en: "Fjord",
      pl: "Fiord",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fish", "coral", "underwater", "ocean", "diving"],
      pl: ["ryba", "koral", "podwodny", "ocean", "nurkowanie"],
    },
    title: {
      en: "Reef",
      pl: "Rafa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["swamp", "mud", "peat", "plants", "insects"],
      pl: ["bagno", "błoto", "torf", "rośliny", "owady"],
    },
    title: {
      en: "Bog",
      pl: "Moczary",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water", "ocean", "bay", "beach", "rocks"],
      pl: ["woda", "ocean", "zatoka", "plaża", "skały"],
    },
    title: {
      en: "Inlet",
      pl: "Zatoczka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["lightning", "thunder", "rain", "clouds", "sky"],
      pl: ["błyskawica", "piorun", "deszcz", "chmury", "niebo"],
    },
    title: {
      en: "Thunderstorm",
      pl: "Burza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "Canada", "New York", "river", "Horseshoe"],
      pl: ["woda", "Kanada", "Nowy Jork", "rzeka", "Horseshoe"],
    },
    title: {
      en: "Niagara Falls",
      pl: "Wodospad Niagara",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["gravity", "light", "space", "time", "radiation"],
      pl: ["grawitacja", "światło", "kosmos", "czasoprzestrzeń", "promieniowanie"],
    },
    title: {
      en: "Black hole",
      pl: "Czarna dziura",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["energy", "radiation", "particle", "invisible", "gravity"],
      pl: ["energia", "promieniowanie", "cząsteczka", "niewidzialny", "grawitacja"],
    },
    title: {
      en: "Dark matter",
      pl: "Ciemna materia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Solar System", "orbit", "habitable", "detection", "telescope"],
      pl: ["Układ Słoneczny", "orbita", "mieszkalny", "wykrywanie", "teleskop"],
    },
    title: {
      en: "Exoplanet",
      pl: "Egzoplaneta",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["space", "travel", "movie", "dust", "voyager"],
      pl: ["kosmos", "podróż", "film", "pył", "odkrywca"],
    },
    title: {
      en: "Interstellar",
      pl: "Interstellar",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["expansion", "acceleration", "unknown", "gravity", "universe"],
      pl: ["ekspansja", "przyspieszenie", "nieznany", "grawitacja", "wszechświat"],
    },
    title: {
      en: "Dark energy",
      pl: "Ciemna energia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["space", "collision", "planet", "comet", "rock"],
      pl: ["kosmos", "kolizja", "planeta", "kometa", "skała"],
    },
    title: {
      en: "Asteroid",
      pl: "Asteroida",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["planet", "red", "rover", "water", "curiosity"],
      pl: ["planeta", "czerwony", "łazik", "woda", "ciekawość"],
    },
    title: {
      en: "Mars",
      pl: "Mars",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["particles", "energy", "ionizing", "atmosphere", "detection"],
      pl: ["cząsteczki", "energia", "jonizujący", "atmosfera", "detekcja"],
    },
    title: {
      en: "Cosmic rays",
      pl: "Promieniowanie kosmiczne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["planet", "Solar System", "giant", "rings", "space"],
      pl: ["planeta", "Układ Słoneczny", "olbrzym", "pierścienie", "kosmos"],
    },
    title: {
      en: "Uranus",
      pl: "Uran",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beginning", "universe", "expansion", "galaxy", "theory"],
      pl: ["początek", "wszechświat", "rozszerzenie", "galaktyka", "teoria"],
    },
    title: {
      en: "Big Bang",
      pl: "Wielki Wybuch",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cue", "balls", "rack", "pocket", "chalk"],
      pl: ["kij", "kule", "trójkąt", "łuza", "kreda"],
    },
    title: {
      en: "Billiards",
      pl: "Bilard",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paddle", "ball", "net", "serve", "ping-pong"],
      pl: ["rakietka", "piłeczka", "siatka", "serwować", "ping-pong"],
    },
    title: {
      en: "Table tennis",
      pl: "Tenis stołowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mat", "bars", "beam", "vault", "flip"],
      pl: ["mata", "drążek", "równoważnia", "skok", "salto"],
    },
    title: {
      en: "Gymnastics",
      pl: "Gimnastyka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["suck", "carpet", "dirt", "dust", "clean"],
      pl: ["ssanie", "dywan", "brud", "kurz", "czysty"],
    },
    title: {
      en: "Vacuuming the house",
      pl: "Odkurzać dom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["healthy", "mat", "workout", "gym", "weight"],
      pl: ["zdrowy", "mata", "trening", "siłownia", "ciężar"],
    },
    title: {
      en: "Exercising at home",
      pl: "Ćwiczenia w domu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["solve", "pieces", "box", "picture", "game"],
      pl: ["rozwiązywać", "element", "pudełko", "obraz", "gra"],
    },
    title: {
      en: "Building a puzzle",
      pl: "Układanie puzzli",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["letter", "phone", "communication", "emoji", "chat"],
      pl: ["SMS", "telefon", "komunikacja", "emotikon", "czat"],
    },
    title: {
      en: "Sending a text message",
      pl: "Wysyłać wiadomość tekstową",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["eggs", "bacon", "toast", "butter", "coffee"],
      pl: ["jajka", "bekon", "tost", "masło", "kawa"],
    },
    title: {
      en: "Making breakfast",
      pl: "Przygotowywać śniadanie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["clothes", "washing machine", "dryer", "liquid", "bleach"],
      pl: ["ubrania", "pralka", "suszarka", "płyn", "wybielacz"],
    },
    title: {
      en: "Doing laundry",
      pl: "Robić pranie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sponge", "hose", "wax", "bucket", "car wash"],
      pl: ["gąbka", "wąż", "wosk", "wiadro", "myjnia samochodowa"],
    },
    title: {
      en: "Washing the car",
      pl: "Myć samochód",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["soap", "shampoo", "towel", "water", "steam"],
      pl: ["mydło", "szampon", "ręcznik", "woda", "para"],
    },
    title: {
      en: "Taking a shower",
      pl: "Wziąć prysznic",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["oven", "recipe", "spices", "vegetables", "meat"],
      pl: ["piekarnik", "przepis", "przyprawy", "warzywa", "mięso"],
    },
    title: {
      en: "Cooking dinner",
      pl: "Gotować obiad",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cart", "aisle", "list", "cashier", "sale"],
      pl: ["koszyk", "alejka", "lista", "kasjer", "sprzedaż"],
    },
    title: {
      en: "Shopping for groceries",
      pl: "Robić zakupy spożywcze",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["money", "bank", "credit card", "due date", "balance"],
      pl: ["pieniądze", "bank", "karta kredytowa", "termin płatności", "saldo"],
    },
    title: {
      en: "Paying bills",
      pl: "Płacić rachunki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["soil", "pot", "fertilizer", "leaves", "garden"],
      pl: ["ziemia", "doniczka", "nawóz", "liście", "ogród"],
    },
    title: {
      en: "Watering plants",
      pl: "Podlewać rośliny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["inbox", "spam", "compose", "send", "attachment"],
      pl: ["skrzynka odbiorcza", "spam", "tworzyć", "wysyłać", "załącznik"],
    },
    title: {
      en: "Checking email",
      pl: "Sprawdzać maila",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["textbook", "notes", "school", "exam", "grade"],
      pl: ["podręcznik", "notatki", "szkoła", "egzamin", "ocena"],
    },
    title: {
      en: "Studying for a test",
      pl: "Uczyć się do testu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["turkey", "family", "feast", "dinner", "gratitude"],
      pl: ["indyk", "rodzina", "uroczystość", "obiad", "wdzięczność"],
    },
    title: {
      en: "Thanksgiving",
      pl: "Święto Dziękczynienia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Jewish", "holiday", "Hebrew", "Jerusalem", "candle"],
      pl: ["żydowski", "święto", "hebrajski", "Jerozolima", "świeca"],
    },
    title: {
      en: "Hanukkah",
      pl: "Chanuka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fasting", "prayer", "iftar", "mosque", "community"],
      pl: ["post", "modlitwa", "iftar", "meczet", "społeczność"],
    },
    title: {
      en: "Ramadan",
      pl: "Ramadan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beer", "pretzel", "Germany", "hops", "sausage"],
      pl: ["piwo", "precel", "Niemcy", "chmiel", "kiełbasa"],
    },
    title: {
      en: "Oktoberfest",
      pl: "Oktoberfest",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["samba", "mask", "parade", "party", "dance"],
      pl: ["samba", "maska", "parada", "impreza", "taniec"],
    },
    title: {
      en: "Carnival",
      pl: "Karnawał",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["patriotic", "history", "September", "holiday", "celebration"],
      pl: ["patriotyzm", "historia", "maj", "święto", "uroczystość"],
    },
    title: {
      en: "Constitution Day",
      pl: "Święto Konstytucji",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["neck", "tall", "spots", "African", "herbivore"],
      pl: ["szyja", "wysoki", "kropka", "Afrykański", "roślinożerca"],
    },
    title: {
      en: "Giraffe",
      pl: "Żyrafa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["black", "bamboo", "China", "white", "endangered"],
      pl: ["czarny", "bambus", "Chiny", "biały", "zagrożony"],
    },
    title: {
      en: "Panda",
      pl: "Panda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["monkey", "intelligent", "primate", "jungle", "banana"],
      pl: ["małpa", "inteligentny", "ssak naczelny", "dżungla", "banan"],
    },
    title: {
      en: "Chimpanzee",
      pl: "Szympans",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["teeth", "ocean", "predator", "fins", "jaws"],
      pl: ["zęby", "ocean", "drapieżnik", "płetwy", "szczęki"],
    },
    title: {
      en: "Shark",
      pl: "Rekin",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tentacles", "squid", "suction cups", "intelligent", "ocean"],
      pl: ["macki", "kałamarnica", "przyssawki", "inteligentny", "ocean"],
    },
    title: {
      en: "Octopus",
      pl: "Ośmiornica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trunk", "tusks", "Africa", "herbivore", "gray"],
      pl: ["trąba", "kły", "Afryka", "roślinożerca", "szary"],
    },
    title: {
      en: "Elephant",
      pl: "Słoń",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["masked", "nocturnal", "North America", "dumpster", "possum"],
      pl: ["zamaskowany", "nocny", "Ameryka Północna", "śmietnik", "opos"],
    },
    title: {
      en: "Raccoon",
      pl: "Szop",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["slow", "tree", "America", "lazy", "claws"],
      pl: ["wolny", "drzewo", "Ameryka", "niechlujny", "pazury"],
    },
    title: {
      en: "Sloth",
      pl: "Leniwiec",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["hump", "desert", "ride", "nomadic", "spit"],
      pl: ["garb", "pustynia", "przejażdżka", "koczowniczy", "pluć"],
    },
    title: {
      en: "Camel",
      pl: "Wielbłąd",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pink", "long", "Caribbean", "feathers", "flock"],
      pl: ["różowy", "długi", "Karaiby", "pióra", "stado"],
    },
    title: {
      en: "Flamingo",
      pl: "Flaming",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stripes", "Africa", "black", "white", "wild"],
      pl: ["paski", "Afryka", "czarny", "biały", "dziki"],
    },
    title: {
      en: "Zebra",
      pl: "Zebra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["talons", "predator", "wings", "nest", "symbol"],
      pl: ["szpony", "drapieżnik", "skrzydła", "gniazdo", "symbol"],
    },
    title: {
      en: "Eagle",
      pl: "Orzeł",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["antlers", "deer", "herbivore", "forest", "bull"],
      pl: ["poroże", "jeleń", "roślinożerca", "las", "byk"],
    },
    title: {
      en: "Moose",
      pl: "Łoś",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["desert", "hopping", "nocturnal", "mouse", "tail"],
      pl: ["pustynia", "skok", "nocny", "mysz", "ogon"],
    },
    title: {
      en: "Kangaroo rat",
      pl: "Szczuroskoczek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["desert", "prickly", "water", "spines", "succulent"],
      pl: ["pustynia", "kłujący", "woda", "kolce", "sukulent"],
    },
    title: {
      en: "Cactus",
      pl: "Kaktus",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["weed", "yellow", "puffball", "wishes", "lawn"],
      pl: ["chwast", "żółty", "purchawka", "życzenia", "trawnik"],
    },
    title: {
      en: "Dandelion",
      pl: "Mniszek lekarski",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["green", "fronds", "spores", "shade", "tropical"],
      pl: ["zielony", "liście", "zarodniki", "cień", "tropikalny"],
    },
    title: {
      en: "Fern",
      pl: "Paproć",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["leaves", "syrup", "red", "fall", "Canada"],
      pl: ["liście", "syrop", "czerwony", "jesień", "Kanada"],
    },
    title: {
      en: "Maple",
      pl: "Klon",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["leaves", "oil", "koala", "tree", "Australia"],
      pl: ["liście", "olejek", "koala", "drzewo", "Australia"],
    },
    title: {
      en: "Eucalyptus",
      pl: "Eukaliptus",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["yellow", "spring", "bulb", "trumpet", "flower"],
      pl: ["żółty", "wiosna", "cebulka", "trąbka", "kwiat"],
    },
    title: {
      en: "Daffodil",
      pl: "Żonkil",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tree", "needles", "cones", "wood", "scent"],
      pl: ["drzewo", "igły", "szyszki", "drewno", "zapach"],
    },
    title: {
      en: "Pine",
      pl: "Sosna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["yellow", "flowers", "petals", "fall", "mum"],
      pl: ["żółty", "kwiaty", "płatki", "jesień", "mama"],
    },
    title: {
      en: "Chrysanthemum",
      pl: "Chryzantema",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["doctor", "patient", "emergency", "ambulance", "surgery"],
      pl: ["lekarz", "pacjent", "wypadek", "karetka", "operacja"],
    },
    title: {
      en: "Hospital",
      pl: "Szpital",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stage", "actor", "audience", "play", "intermission"],
      pl: ["scena", "aktor", "publiczność", "sztuka", "przerwa"],
    },
    title: {
      en: "Theater",
      pl: "Teatr",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mayor", "council", "meeting", "government", "vote"],
      pl: ["burmistrz", "samorząd", "spotkanie", "rząd", "głosować"],
    },
    title: {
      en: "City hall",
      pl: "Ratusz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["picnic", "playground", "trail", "nature", "recreation"],
      pl: ["piknik", "plac zabaw", "ścieżka", "natura", "rekreacja"],
    },
    title: {
      en: "Park",
      pl: "Park",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "exhibit", "keeper", "cage", "safari"],
      pl: ["zwierzę", "wystawa", "opiekun", "klatka", "safari"],
    },
    title: {
      en: "Zoo",
      pl: "Zoo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["worship", "priest", "choir", "sermon", "religion"],
      pl: ["czcić", "ksiądz", "chór", "kazanie", "religia"],
    },
    title: {
      en: "Church",
      pl: "Kościół",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["patient", "visitor", "receptionist", "magazine", "appointment"],
      pl: ["pacjent", "odwiedzający", "recepcjonista", "magazyn", "wizyta"],
    },
    title: {
      en: "Hospital waiting room",
      pl: "Szpitalna poczekalnia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["judge", "jury", "lawyer", "evidence", "verdict"],
      pl: ["sędzia", "ława przysięgłych", "adwokat", "dowód", "wyrok"],
    },
    title: {
      en: "Courtroom",
      pl: "Sala rozpraw",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["grave", "tombstone", "burial", "light", "flower"],
      pl: ["grób", "nagrobek", "pogrzeb", "znicz", "kwiat"],
    },
    title: {
      en: "Cemetery",
      pl: "Cmentarz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["haircut", "color", "appointment", "manicure", "pedicure"],
      pl: ["strzyżenie", "kolor", "wizyta", "manicure", "pedicure"],
    },
    title: {
      en: "Beauty salon",
      pl: "Salon piękności",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["game", "doll", "play", "car", "board game"],
      pl: ["gra", "lalka", "bawić się", "samochodzik", "gra planszowa"],
    },
    title: {
      en: "Toy store",
      pl: "Sklep z zabawkami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fish", "exhibit", "tank", "water", "zoo"],
      pl: ["ryba", "wystawa", "zbiornik", "woda", "zoo"],
    },
    title: {
      en: "Aquarium",
      pl: "Akwarium",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["neck", "warmth", "winter", "accessory", "pattern"],
      pl: ["szyja", "ciepło", "zima", "dodatek", "wzór"],
    },
    title: {
      en: "Scarf",
      pl: "Szalik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["women", "formal", "occasion", "skirt", "fabric"],
      pl: ["kobieta", "oficjalny", "okazja", "spódnica", "tkanina"],
    },
    title: {
      en: "Dress",
      pl: "Sukienka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sleeveless", "casual", "fabric", "summer", "athletic"],
      pl: ["bez rękawów", "codzienny", "materiał", "lato", "sportowy"],
    },
    title: {
      en: "Tank top",
      pl: "Podkoszulek",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stretchy", "fabric", "tight", "women", "comfortable"],
      pl: ["elastyczny", "materiał", "ciasny", "kobieta", "wygodny"],
    },
    title: {
      en: "Leggings",
      pl: "Legginsy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["waterproof", "hood", "outerwear", "fabric", "umbrella"],
      pl: ["wodoodporny", "kaptur", "wierzchnia", "materiał", "parasol"],
    },
    title: {
      en: "Raincoat",
      pl: "Płaszcz przeciwdeszczowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fabric", "one-piece", "comfortable", "casual", "sleeves"],
      pl: ["materiał", "jednoczęściowy", "wygodny", "codzienny", "rękawy"],
    },
    title: {
      en: "Onesie",
      pl: "Body",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beach", "men", "fabric", "drawstring", "pockets"],
      pl: ["plaża", "mężczyzna", "materiał", "ściągacz", "kieszenie"],
    },
    title: {
      en: "Swim trunks",
      pl: "Kąpielówki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["formal", "women", "occasion", "fabric", "length"],
      pl: ["formalny", "kobieta", "okazja", "materiał", "długość"],
    },
    title: {
      en: "Gown",
      pl: "Suknia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["collar", "fabric", "winter", "men", "comfortable"],
      pl: ["kołnierz", "materiał", "zima", "mężczyzna", "wygodny"],
    },
    title: {
      en: "Turtleneck",
      pl: "Golf",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["positive", "hopeful", "confident", "enthusiastic", "upbeat"],
      pl: ["pozytywny", "nadzieja", "pewny", "entuzjastyczny", "wesoły"],
    },
    title: {
      en: "Optimistic",
      pl: "Optymistyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["truthful", "sincere", "straightforward", "frank", "candid"],
      pl: ["prawdomówny", "szczery", "bezpośredni", "serdeczny", "niepozorowany"],
    },
    title: {
      en: "Honest",
      pl: "Uczciwy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["creative", "inventive", "innovative", "fanciful", "visionary"],
      pl: ["kreatywny", "innowacyjny", "nowatorski", "wymyślny", "wizjoner"],
    },
    title: {
      en: "Imaginative",
      pl: "Pomysłowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tenacious", "dogged", "determined", "unwavering", "steadfast"],
      pl: ["nieustępliwość", "uparty", "zdeterminowany", "nieugięty", "niezłomny"],
    },
    title: {
      en: "Persistent",
      pl: "Wytrwały",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["empathetic", "emotional", "perceptive", "understanding", "compassionate"],
      pl: ["empatyczny", "emocjonalny", "spostrzegawczy", "zrozumienie", "współczucie"],
    },
    title: {
      en: "Sensitive",
      pl: "Wrażliwy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["clever", "humorous", "quick-witted", "amusing", "funny"],
      pl: ["bystry", "dowcipny", "rozgarnięty", "zabawny", "śmieszny"],
    },
    title: {
      en: "Witty",
      pl: "Błyskotliwy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["logical", "level-headed", "reasonable", "sensible", "practical"],
      pl: ["logiczny", "zrównoważony", "rozsądny", "sensowny", "praktyczny"],
    },
    title: {
      en: "Rational",
      pl: "Racjonalny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["light", "color", "dye", "roots", "brunette"],
      pl: ["jasny", "kolor", "farba", "odrosty", "brunetka"],
    },
    title: {
      en: "Blonde hair",
      pl: "Włosy blond",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["thick", "eyes", "wax", "tweezers", "shape"],
      pl: ["gęste", "oczy", "wosk", "pęseta", "kształt"],
    },
    title: {
      en: "Bushy eyebrows",
      pl: "Krzaczaste brwi",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["face", "cheeks", "smile", "genetics", "cute"],
      pl: ["twarz", "policzki", "uśmiech", "genetyka", "ładny"],
    },
    title: {
      en: "Dimples",
      pl: "Dołeczki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["spots", "skin", "sun", "genetics", "cute"],
      pl: ["kropka", "skóra", "słońce", "genetyka", "ładny"],
    },
    title: {
      en: "Freckles",
      pl: "Piegi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["silver", "color", "dye", "aging", "roots"],
      pl: ["srebrny", "kolor", "farba", "starzenie się", "odrosty"],
    },
    title: {
      en: "Gray hair",
      pl: "Siwe włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["model", "structure", "face", "beauty", "contour"],
      pl: ["model", "struktura", "twarz", "piękno", "kontur"],
    },
    title: {
      en: "High cheekbones",
      pl: "Wystające kości policzkowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fake", "mascara", "curler", "eyes", "flutter"],
      pl: ["sztuczny", "maskara", "zalotka", "oczy", "trzepotać"],
    },
    title: {
      en: "Long eyelashes",
      pl: "Długie rzęsy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beauty mark", "spot", "skin", "cancer", "birthmark"],
      pl: ["plama", "kropka", "skóra", "rak", "znamię"],
    },
    title: {
      en: "Mole",
      pl: "Pieprzyk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pouch", "hopping", "marsupial", "Australia", "boxing"],
      pl: ["pokrowiec", "skok", "torbacz", "Australia", "boks"],
    },
    title: {
      en: "Kangaroo",
      pl: "Kangur",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["hibernation", "claws", "fur", "brown", "big"],
      pl: ["hibernacja", "pazury", "futro", "brązowy", "duży"],
    },
    title: {
      en: "Grizzly bear",
      pl: "Niedźwiedź grizzly",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["eucalyptus", "Australia", "marsupial", "cute", "tree"],
      pl: ["eukaliptus", "Australia", "torbacz", "słodki", "drzewo"],
    },
    title: {
      en: "Koala",
      pl: "Koala",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["black", "white", "Antarctica", "flightless", "fish"],
      pl: ["czarny", "biały", "Antarktyda", "nielot", "ryba"],
    },
    title: {
      en: "Penguin",
      pl: "Pingwin",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["intelligent", "ocean", "mammal", "squeak", "flipper"],
      pl: ["inteligentny", "ocean", "ssak", "pisk", "płetwa"],
    },
    title: {
      en: "Dolphin",
      pl: "Delfin",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ape", "intelligent", "banana", "jungle", "strong"],
      pl: ["małpa", "inteligentny", "banan", "dżungla", "silny"],
    },
    title: {
      en: "Gorilla",
      pl: "Goryl",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["nectar", "small", "wings", "colorful", "bird"],
      pl: ["nektar", "mały", "skrzydła", "kolorowy", "ptak"],
    },
    title: {
      en: "Hummingbird",
      pl: "Koliber",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["armored", "insect", "claws", "sloth", "nocturnal"],
      pl: ["opancerzony", "owad", "pazury", "leniwiec", "nocny"],
    },
    title: {
      en: "Armadillo",
      pl: "Pancernik",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Arctic", "white", "brown", "fur", "grizzly"],
      pl: ["Arktyka", "biały", "brązowy", "futro", "grizzly"],
    },
    title: {
      en: "Polar bear",
      pl: "Niedźwiedź polarny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["nocturnal", "wings", "dangle", "cave", "vampire"],
      pl: ["nocny", "skrzydła", "zwisać", "jaskinia", "wampir"],
    },
    title: {
      en: "Bat",
      pl: "Nietoperz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Australia", "Phineas and Ferb", "Agent P", "venomous", "egg"],
      pl: ["Australia", "Fineasz i Ferb", "Agent P", "jadowity", "jajo"],
    },
    title: {
      en: "Platypus",
      pl: "Dziobak",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["feathers", "display", "India", "elegant", "tail"],
      pl: ["pióra", "popis", "Indie", "elegancki", "ogon"],
    },
    title: {
      en: "Peacock",
      pl: "Paw",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Australia", "carnivorous", "nocturnal", "black", "aggressive"],
      pl: ["Australia", "mięsożerny", "nocny", "czarny", "agresywny"],
    },
    title: {
      en: "Tasmanian devil",
      pl: "Diabeł tasmański",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["yellow", "seeds", "oil", "flower", "garden"],
      pl: ["żółty", "nasiona", "olej", "kwiat", "ogród"],
    },
    title: {
      en: "Sunflower",
      pl: "Słonecznik",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["climbing", "leaves", "green", "vine", "poison"],
      pl: ["wspinać się", "liście", "zielony", "winorośl", "trucizna"],
    },
    title: {
      en: "Ivy",
      pl: "Bluszcz",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["white", "fragrant", "kwiaty", "jasmine", "petal"],
      pl: ["biały", "pachnący", "kwiaty", "jaśmin", "płatek"],
    },
    title: {
      en: "Magnolia",
      pl: "Magnolia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["white", "yellow", "petals", "flower", "lawn"],
      pl: ["biały", "żółty", "płatki", "kwiat", "trawnik"],
    },
    title: {
      en: "Daisies",
      pl: "Stokrotki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tropical", "leaves", "sea", "beach", "tree"],
      pl: ["tropikalny", "liście", "morze", "plaża", "drzewo"],
    },
    title: {
      en: "Palm",
      pl: "Palma",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["exhibit", "artifact", "art", "curator", "history"],
      pl: ["wystawa", "artefakt", "sztuka", "kurator", "historia"],
    },
    title: {
      en: "Museum",
      pl: "Muzeum",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pilot", "passenger", "luggage", "terminal", "plane"],
      pl: ["pilot", "pasażer", "bagaż", "terminal", "samolot"],
    },
    title: {
      en: "Airport",
      pl: "Lotnisko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["officer", "criminal", "jail", "headquarters", "interrogation"],
      pl: ["funkcjonariusz", "przestępca", "więzienie", "komenda", "przesłuchanie"],
    },
    title: {
      en: "Police station",
      pl: "Posterunek policji",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["film", "screen", "popcorn", "ticket", "blockbuster"],
      pl: ["film", "ekran", "popcorn", "bilet", "hit"],
    },
    title: {
      en: "Movie theater",
      pl: "Kino",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["train", "platform", "ticket", "underground", "commute"],
      pl: ["pociąg", "peron", "bilet", "podziemny", "dojazd"],
    },
    title: {
      en: "Subway station",
      pl: "Stacja metra",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fuel", "pump", "oil", "car", "tank"],
      pl: ["paliwo", "pompa", "ropa", "samochód", "bak"],
    },
    title: {
      en: "Gas station",
      pl: "Stacja benzynowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ride", "roller coaster", "admission", "fun", "entertainment"],
      pl: ["przejażdżka", "kolejka górska", "wstęp", "zabawa", "rozrywka"],
    },
    title: {
      en: "Amusement park",
      pl: "Wesołe miasteczko",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["conductor", "platform", "ticket", "railroad", "commute"],
      pl: ["konduktor", "peron", "bilet", "pociąg", "dojeżdżać"],
    },
    title: {
      en: "Train station",
      pl: "Stacja kolejowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bread", "pastry", "cake", "oven", "frosting"],
      pl: ["chleb", "wypiek", "ciasto", "piec", "lukier"],
    },
    title: {
      en: "Bakery",
      pl: "Piekarnia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["professor", "student", "lecture", "degree", "research"],
      pl: ["profesor", "student", "wykład", "dyplom", "badania"],
    },
    title: {
      en: "University",
      pl: "Uniwersytet",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["jacket", "pants", "tie", "formal", "business"],
      pl: ["marynarka", "spodnie", "krawat", "oficjalny", "biznes"],
    },
    title: {
      en: "Suit",
      pl: "Garnitur",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["denim", "casual", "pants", "pockets", "blue"],
      pl: ["rurki", "codzienny", "spodnie", "kieszenie", "niebieski"],
    },
    title: {
      en: "Jeans",
      pl: "Jeansy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cotton", "casual", "sleeves", "graphic", "comfortable"],
      pl: ["bawełna", "codzienny", "rękawy", "grafika", "wygodny"],
    },
    title: {
      en: "T-shirt",
      pl: "Koszulka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["leather", "winter", "long", "wool", "warmth"],
      pl: ["skóra", "zima", "długi", "wełna", "ciepło"],
    },
    title: {
      en: "Coat",
      pl: "Płaszcz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fabric", "sleeves", "waterproof", "women", "warm"],
      pl: ["materiał", "rękawy", "przeciwdeszczowy", "kobieta", "ciepły"],
    },
    title: {
      en: "Poncho",
      pl: "Ponczo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["silk", "traditional", "Japan", "garment ", "cloth"],
      pl: ["jedwab", "tradycyjny", "Japonia", "ubiór", "tkanina"],
    },
    title: {
      en: "Kimono",
      pl: "Kimono",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sweatpants", "trousers", "casual", "comfortable", "athletic"],
      pl: ["dresy", "spodnie", "swobodny", "wygodny", "sportowy"],
    },
    title: {
      en: "Joggers",
      pl: "Joggery",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bandit", "head", "pattern", "accessory", "tie"],
      pl: ["bandyta", "głowa", "wzór", "dodatek", "wiązać"],
    },
    title: {
      en: "Bandana",
      pl: "Bandana",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["women", "girdle", "lace", "waist", "boning"],
      pl: ["kobieta", "wyszczuplający", "koronka", "talia", "usztywnianie"],
    },
    title: {
      en: "Corset",
      pl: "Gorset",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["women", "short", "casual", "summer", "belly"],
      pl: ["kobieta", "krótki", "nieformalny", "lato", "brzuch"],
    },
    title: {
      en: "Crop top",
      pl: "Crop top",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["loose", "long", "puffed", "clothes", "baggy"],
      pl: ["szerokie", "długie", "bufiaste", "odzież", "luźny"],
    },
    title: {
      en: "Harem pants",
      pl: "Szarawary",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["self-sufficient", "self-reliant", "autonomous", "free-spirited", "individualistic"],
      pl: ["samowystarczalny", "samodzielny", "autonomiczny", "swobodny", "indywidualizm"],
    },
    title: {
      en: "Independent",
      pl: "Niezależny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["imaginative", "innovative", "artistic", "original", "inventive"],
      pl: ["pomysłowy", "innowacyjny", "artystyczny", "oryginalny", "wynalazczy"],
    },
    title: {
      en: "Creative",
      pl: "Kreatywny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["empathetic", "kind-hearted", "caring", "considerate", "sympathetic"],
      pl: ["empatyczny", "życzliwy", "opiekuńczy", "troskliwy", "przychylny"],
    },
    title: {
      en: "Compassionate",
      pl: "Współczujący",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tolerant", "understanding", "enduring", "forbearing", "persevering"],
      pl: ["tolerancyjny", "zrozumienie", "wytrzymały", "wyrozumiały", "wytrwały"],
    },
    title: {
      en: "Patient",
      pl: "Cierpliwy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["self-assured", "arrogant", "assertive", "poised", "self-reliant"],
      pl: ["spokojny", "arogancki", "asertywny", "opanowanie", "samodzielny"],
    },
    title: {
      en: "Confident",
      pl: "Pewny siebie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["calm", "laid-back", "easy-going", "mellow", "casual"],
      pl: ["spokojny", "wyluzowany", "niefrasobliwy", "łagodny", "swobodny"],
    },
    title: {
      en: "Relaxed",
      pl: "Zrelaksowany",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dependable", "accountable", "reliable", "trustworthy", "mature"],
      pl: ["niezawodny", "solidny", "rzetelny", "wiarygodny", "dojrzały"],
    },
    title: {
      en: "Responsible",
      pl: "Odpowiedzialny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["considerate", "attentive", "caring", "mindful", "empathetic"],
      pl: ["taktowny", "uprzejmy", "opiekuńczy", "pamiętający", "empatyczny"],
    },
    title: {
      en: "Thoughtful",
      pl: "Troskliwy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["affectionate", "friendly", "cold", "welcoming", "cozy"],
      pl: ["czuły", "przyjazny", "zimny", "gościnny", "przytulny"],
    },
    title: {
      en: "Warm",
      pl: "Ciepły",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["camera", "smile", "straightforward", "genuine", "sincere"],
      pl: ["aparat", "uśmiech", "prosty", "autentyczny", "szczery"],
    },
    title: {
      en: "Candid",
      pl: "Niepozorowany",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["articulate", "expressive", "fluent", "well-spoken", "persuasive"],
      pl: ["wypowiadać", "wyrazisty", "biegły", "wygadany", "przekonujący"],
    },
    title: {
      en: "Eloquent",
      pl: "Elokwentny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["facial hair", "razor", "chin", "mustache", "trim"],
      pl: ["zarost", "brzytwa", "podbródek", "wąsy", "przycięcie"],
    },
    title: {
      en: "Beard",
      pl: "Broda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["iris", "color", "pupils", "contacts", "vision"],
      pl: ["tęczówka", "kolor", "źrenica", "soczewki", "wzrok"],
    },
    title: {
      en: "Blue eyes",
      pl: "Niebieskie oczy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["misshapen", "septum", "broken", "bump", "surgery"],
      pl: ["zniekształcony", "przegroda", "złamany", "uderzenie", "operacja"],
    },
    title: {
      en: "Crooked nose",
      pl: "Krzywy nos",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ringlets", "coils", "waves", "texture", "brush"],
      pl: ["kółka", "lok", "fale", "tekstura", "szczotka"],
    },
    title: {
      en: "Curly hair",
      pl: "Kręcone włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["beard", "mustache", "razor", "shave", "jaw"],
      pl: ["broda", "wąsy", "brzytwa", "golić się", "twarz"],
    },
    title: {
      en: "Facial hair",
      pl: "Zarost",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["short", "head", "locks", "appearance", "cut"],
      pl: ["krótkie", "głowa", "pukle", "wygląd", "cięcie"],
    },
    title: {
      en: "Long hair",
      pl: "Długie włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["thin", "shape", "contour", "nostrils", "bridge"],
      pl: ["szczupły", "kształt", "kontur", "nozdrza", "grzbiet"],
    },
    title: {
      en: "Narrow nose",
      pl: "Wąski nos",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["sharp", "shape", "apperance", "nostrils", "bridge"],
      pl: ["ostry", "kształt", "wygląd", "nozdrza", "grzbiet"],
    },
    title: {
      en: "Pointy nose",
      pl: "Spiczasty nos",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["apperance", "size", "vision", "pupils", "contacts"],
      pl: ["wygląd", "rozmiar", "wzrok", "źrenica", "soczewki"],
    },
    title: {
      en: "Small eyes",
      pl: "Małe oczy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["capital", "sushi", "Asia", "Shibuya", "Japan"],
      pl: ["stolica", "sushi", "Azja", "Shibuya", "Japonia"],
    },
    title: {
      en: "Tokyo",
      pl: "Tokio",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["island", "Southeast Asia", "beach", "tourism", "Indonesia"],
      pl: ["wyspa", "Azja Południowo-Wschodnia", "plaża", "turystyka", "Indonezja"],
    },
    title: {
      en: "Bali",
      pl: "Bali",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Colosseum", "Vatican City", "capital", "Catholic", "Italy"],
      pl: ["Koloseum", "Watykan", "stolica", "Katolicki", "Włochy"],
    },
    title: {
      en: "Rome",
      pl: "Rzym",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["opera", "Oceania", "kangaroo", "koalas", "Australia"],
      pl: ["opera", "Oceania", "kangur", "koala", "Australia"],
    },
    title: {
      en: "Sydney",
      pl: "Sydney",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["US", "Hollywood", "city", "Beverly Hills", "California"],
      pl: ["USA", "Hollywood", "miasto", "Beverly Hills", "Kalifornia"],
    },
    title: {
      en: "Los Angeles",
      pl: "Los Angeles",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gondolas", "city", "canal", "island", "Italy"],
      pl: ["gondola", "miasto", "kanał", "wyspa", "Włochy"],
    },
    title: {
      en: "Venice",
      pl: "Wenecja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["state", "Honolulu", "volcanoes", "pineapple", "USA"],
      pl: ["stan", "Honolulu", "wulkan", "ananas", "USA"],
    },
    title: {
      en: "Hawaii",
      pl: "Hawaje",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["beach", "relaxation", "travel", "sun", "adventure"],
      pl: ["plaża", "relaks", "podróż", "słońce", "przygoda"],
    },
    title: {
      en: "Summer vacation",
      pl: "Wakacje letnie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["astronaut", "gravity", "launch", "rocket", "research"],
      pl: ["astronauta", "grawitacja", "wystrzelenie", "rakieta", "badania"],
    },
    title: {
      en: "Space station",
      pl: "Stacja kosmiczna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["archaeology", "temple", "relic", "history", "excavation"],
      pl: ["archeologia", "świątynia", "zabytek", "historia", "wykopaliska"],
    },
    title: {
      en: "Ancient ruins",
      pl: "Starożytne ruiny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["abandoned", "deserted", "mining", "empty", "eerie"],
      pl: ["opuszczony", "bezludny", "górnictwo", "pusty", "upiorny"],
    },
    title: {
      en: "Ghost town",
      pl: "Miasto widmo",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["mummy", "pharaoh", "hieroglyphics", "sphinx", "tomb"],
      pl: ["mumia", "faraon", "hieroglify", "sfinks", "grobowiec"],
    },
    title: {
      en: "Egyptian pyramid",
      pl: "Egipska piramida",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["gadgets", "surveillance", "espionage", "infiltrate", "secret"],
      pl: ["gadżety", "obserwacja", "inwigilacja", "infiltrować", "sekret"],
    },
    title: {
      en: "Spy mission",
      pl: "Misja szpiegowska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["market", "blacksmith", "inn", "castle", "church"],
      pl: ["rynek", "kowal", "karczma", "zamek", "kościół"],
    },
    title: {
      en: "Medieval village",
      pl: "Średniowieczna wioska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["mindfulness", "relaxation", "breathing", "focus", "peace"],
      pl: ["uważność", "relaks", "oddech", "koncentracja", "spokój"],
    },
    title: {
      en: "Meditation",
      pl: "Medytacja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["travel", "exploration", "adventure", "roaming", "journey"],
      pl: ["podróż", "eksploracja", "przygoda", "włóczęga", "wyprawa"],
    },
    title: {
      en: "Wandering",
      pl: "Wędrówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["motivate", "encourage", "influence", "stimulate", "ignite"],
      pl: ["motywować", "zachęcać", "wpływać", "pobudzać", "wzbudzać"],
    },
    title: {
      en: "Inspire",
      pl: "Inspirować",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gamble", "chance", "hazard", "danger", "uncertainty"],
      pl: ["hazard", "szansa", "zagrożenie", "niebezpieczeństwo", "niepewność"],
    },
    title: {
      en: "Risk",
      pl: "Ryzyko",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["film", "cinema", "picture", "actor", "director"],
      pl: ["serial", "kino", "obraz", "aktor", "reżyser"],
    },
    title: {
      en: "Movie",
      pl: "Film",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["evening", "darkness", "stars", "moon", "day"],
      pl: ["wieczór", "ciemność", "gwiazdy", "księżyc", "dzień"],
    },
    title: {
      en: "Night",
      pl: "Noc",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["original", "novel", "groundbreaking", "inventive", "revolutionary"],
      pl: ["oryginalny", "nowatorski", "przełomowy", "pomysłowy", "rewolucyjny"],
    },
    title: {
      en: "Innovative",
      pl: "Innowacyjny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["daring", "brave", "courageous", "confident", "audacious"],
      pl: ["śmiały", "dzielny", "brawurowy", "pewny", "zuchwały"],
    },
    title: {
      en: "Bold",
      pl: "Odważny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["rest", "calmness", "peace", "leisure", "tranquility"],
      pl: ["odpoczynek", "spokój", "wypoczynek", "rekreacja", "wyciszenie"],
    },
    title: {
      en: "Relaxation",
      pl: "Relaks",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sleepwear", "nightgown", "night", "slippers", "bed"],
      pl: ["bielizna", "koszula", "noc", "kapcie", "łóżko"],
    },
    title: {
      en: "Pajamas",
      pl: "Piżama",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["spice", "sweet", "fragrant", "aroma", "flavor"],
      pl: ["przyprawa", "słodki", "pachnący", "aromat", "smak"],
    },
    title: {
      en: "Cinnamon",
      pl: "Cynamon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["maze", "puzzle", "Minotaur", "Greek", "mythology"],
      pl: ["gąszcz", "układanka", "Minotaur", "Grecki", "mitologia"],
    },
    title: {
      en: "Labyrinth",
      pl: "Labyrint",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tremor", "fault", "Richter scale", "aftershock", "seismic"],
      pl: ["wstrząs", "uskok", "skala Richtera", "wstrząs wtórny", "sejsmiczny"],
    },
    title: {
      en: "Earthquake",
      pl: "Trzęsienie ziemi",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fall", "harness", "adrenaline", "rope", "elastic"],
      pl: ["spadać", "uprząż", "adrenalina", "lina", "elastyczny"],
    },
    title: {
      en: "Bungee jumping",
      pl: "Skok na bungee",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["liquid", "colorful", "retro", "light bulb", "wax"],
      pl: ["płyn", "kolorowy", "retro", "żarówka", "wosk"],
    },
    title: {
      en: "Lava lamp",
      pl: "Lampa lawowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["cash", "weapon", "steal", "bank", "crime"],
      pl: ["pieniądze", "broń", "kraść", "bank", "przestępstwo"],
    },
    title: {
      en: "Robbery",
      pl: "Napad",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["computer", "network", "cyber", "illegal", "data"],
      pl: ["komputer", "sieć", "cyber", "nielegalny", "dane"],
    },
    title: {
      en: "Hacking",
      pl: "Hakowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["personal", "information", "steal", "fraud", "crime"],
      pl: ["osobisty", "informacja", "zbrodnia", "oszustwo", "przestępstwo"],
    },
    title: {
      en: "Identity theft",
      pl: "Kradzież tożsamości",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["blackmail", "threat", "coercion", "crime", "illegal"],
      pl: ["szantaż", "groźba", "przymus", "przestępstwo", "nielegalny"],
    },
    title: {
      en: "Extortion",
      pl: "Wymuszenie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["assault", "robbery", "steal", "attack", "crime"],
      pl: ["napaść", "napad", "kradzież", "atak", "przestępstwo"],
    },
    title: {
      en: "Mugging",
      pl: "Rozbój",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fake", "money", "illegal", "crime", "copy"],
      pl: ["fałszywy", "gotówka", "nielegalny", "przestępstwo", "kopia"],
    },
    title: {
      en: "Money counterfeiting",
      pl: "Podrabianie pieniędzy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["trespassing", "property", "theft", "crime", "home"],
      pl: ["wtargnięcie", "własność", "kradzież", "przestępstwo", "dom"],
    },
    title: {
      en: "Breaking and entering",
      pl: "Włamanie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["illegal", "income", "evade", "fraud", "pay"],
      pl: ["nielegalny", "dochód", "unikać", "nadużycie", "płacić"],
    },
    title: {
      en: "Tax fraud",
      pl: "Oszustwo podatkowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["weapon", "steal", "bank", "crime", "gun"],
      pl: ["włamanie", "kradzież", "bank", "przestępstwo", "pistolet"],
    },
    title: {
      en: "Armed robbery",
      pl: "Napad z bronią w ręku",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["illegal", "transfer", "conceal", "funds", "crime"],
      pl: ["nielegalny", "przelew", "ukrywać", "środki", "przestępstwo"],
    },
    title: {
      en: "Money laundering",
      pl: "Pranie pieniędzy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["illegal", "substance", "addict", "crime", "narcotic"],
      pl: ["nielegalny", "substancja", "uzależniony", "przestępstwo", "odurzający"],
    },
    title: {
      en: "Drug possession",
      pl: "Posiadanie narkotyków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["landmarks", "guidebook", "attractions", "monuments", "views"],
      pl: ["zabytki", "przewodnik", "atrakcje", "pomniki", "widoki"],
    },
    title: {
      en: "Sightseeing tour",
      pl: "Wycieczka krajoznawcza",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["thrill", "outdoors", "adrenaline", "wildlife", "risk"],
      pl: ["dreszcz", "na zewnątrz", "adrenalina", "przyroda", "ryzyko"],
    },
    title: {
      en: "Adventure tourism",
      pl: "Turystyka przygodowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["romantic", "love", "couple", "vacation", "wedding"],
      pl: ["romantyczny", "miłość", "małżeństwo", "wakacje", "ślub"],
    },
    title: {
      en: "Honeymoon",
      pl: "Miesiąc miodowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["railway", "station", "carriage", "conductor", "tracks"],
      pl: ["kolej", "stacja", "wagon", "konduktor", "tory"],
    },
    title: {
      en: "Train journey",
      pl: "Podróż pociągiem",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["RV", "camper", "campsite", "mobile home", "road trip"],
      pl: ["turystyczny", "samochód", "kemping", "przyczepa", "wycieczka"],
    },
    title: {
      en: "Motorhome trip",
      pl: "Podróż kamperem",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["cycling", "trail", "helmet", "tour guide", "pump"],
      pl: ["kolarstwo", "ścieżka", "kask", "przewodnik", "pompka"],
    },
    title: {
      en: "Bicycle tour",
      pl: "Wycieczka rowerowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["goggles", "immersion", "gaming", "simulation", "image"],
      pl: ["gogle", "pogrążenie się", "gra", "symulacja", "obraz"],
    },
    title: {
      en: "VR headset",
      pl: "Okulary VR",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["acne", "skin", "blemish", "zit", "spot"],
      pl: ["trądzik", "skóra", "krosta", "wyprysk", "kropka"],
    },
    title: {
      en: "Pimples",
      pl: "Pryszcze",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ginger", "color", "dye", "roots", "freckles"],
      pl: ["imbirowy", "kolor", "farba", "odrosty", "piegi"],
    },
    title: {
      en: "Red hair",
      pl: "Rude włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["cheeks", "plump", "fat", "shape", "contour"],
      pl: ["policzki", "pulchny", "gruby", "kształt", "zarys"],
    },
    title: {
      en: "Round face",
      pl: "Okrągła twarz",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["facial hair", "beard", "razor", "shave", "hair"],
      pl: ["zarost", "broda", "maszynka", "golić się", "włosy"],
    },
    title: {
      en: "Sideburns",
      pl: "Baczki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Charles Bridge", "castle", "city", "capital", "Czech Republic"],
      pl: ["Most Karola", "zamek", "miasto", "stolica", "Czechy"],
    },
    title: {
      en: "Prague",
      pl: "Praga",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Europe", "German", "city", "capital", "Austria"],
      pl: ["Europa", "niemiecki", "miasto", "stolica", "Austria"],
    },
    title: {
      en: "Vienna",
      pl: "Wiedeń",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Acropolis", "Parthenon", "capital", "city", "Greece"],
      pl: ["Akropol", "Partenon", "stolica", "miasto", "Grecja"],
    },
    title: {
      en: "Athens",
      pl: "Ateny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["past", "future", "paradox", "machine", "history"],
      pl: ["przeszłość", "przyszłość", "paradoks", "maszyna", "historia"],
    },
    title: {
      en: "Time travel",
      pl: "Podróż w czasie",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["treasure", "sea", "parrot", "captain", "plank"],
      pl: ["skarb", "morze", "papuga", "kapitan", "deska"],
    },
    title: {
      en: "Pirate ship",
      pl: "Statek piracki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["map", "clues", "adventure", "chest", "dig"],
      pl: ["mapa", "wskazówki", "przygoda", "skrzynia", "kopać"],
    },
    title: {
      en: "Treasure hunt",
      pl: "Poszukiwanie skarbów",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fairy", "unicorn", "magic", "myth", "legend"],
      pl: ["wróżka", "jednorożec", "magia", "mit", "legenda"],
    },
    title: {
      en: "Enchanted forest",
      pl: "Zaczarowany las",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["discovery", "rover", "planet", "astronaut", "research"],
      pl: ["odkrycie", "łazik", "planeta", "astronauta", "badania"],
    },
    title: {
      en: "Space exploration",
      pl: "Eksploracja kosmosu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tombstone", "ghost", "zombie", "spooky", "creepy"],
      pl: ["nagrobek", "duch", "zombie", "upiorny", "straszny"],
    },
    title: {
      en: "Haunted cemetery",
      pl: "Nawiedzony cmentarz",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["elephant", "lion", "tiger", "performance", "ring"],
      pl: ["słoń", "lew", "tygrys", "występ", "obręcz"],
    },
    title: {
      en: "Circus animals",
      pl: "Zwierzęta cyrkowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["jungle", "wildlife", "river", "America", "conservation"],
      pl: ["dżungla", "przyroda", "rzeka", "Ameryka", "ochrona"],
    },
    title: {
      en: "Amazon rainforest",
      pl: "Amazonia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["innovation", "devices", "electronics", "internet", "software"],
      pl: ["innowacja", "urządzenia", "elektronika", "internet", "oprogramowanie"],
    },
    title: {
      en: "Technology",
      pl: "Technologia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["brilliant", "radiant", "glowing", "shiny", "luminous"],
      pl: ["jaskrawy", "promienny", "świecący", "błyszczący", "świetlisty"],
    },
    title: {
      en: "Bright",
      pl: "Jasny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sea", "water", "waves", "beach", "marine"],
      pl: ["morze", "woda", "fale", "plaża", "morski"],
    },
    title: {
      en: "Ocean",
      pl: "Ocean",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["health", "exercise", "workout", "wellness", "gym"],
      pl: ["zdrowie", "ćwiczenie", "trening", "kondycja", "siłownia"],
    },
    title: {
      en: "Fitness",
      pl: "Fitness",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["creative", "imaginative", "expressive", "original", "inventive"],
      pl: ["kreatywny", "pomysłowy", "wyrazisty", "oryginalny", "twórczy"],
    },
    title: {
      en: "Artistic",
      pl: "Artystyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["charming", "captivating", "alluring", "appealing", "pretty"],
      pl: ["uroczy", "urzekający", "pociągający", "kuszący", "ładny"],
    },
    title: {
      en: "Attractive",
      pl: "Atrakcyjny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["style", "clothing", "trend", "designer", "outfit"],
      pl: ["styl", "odzież", "trend", "projektant", "ubiór"],
    },
    title: {
      en: "Fashion",
      pl: "Moda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dialogue", "interaction", "exchange", "conversation", "connection"],
      pl: ["dialog", "interakcja", "wymiana", "rozmowa", "połączenie"],
    },
    title: {
      en: "Communication",
      pl: "Komunikacja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["revitalizing", "invigorating", "rejuvenating", "renewing", "energizing"],
      pl: ["ożywiający", "orzeźwiający", "odmładzający", "odnowa", "energetyzujący"],
    },
    title: {
      en: "Refreshing",
      pl: "Odświeżający",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["joy", "pleasure", "contentment", "bliss", "satisfaction"],
      pl: ["radość", "przyjemność", "zadowolenie", "błogość", "satysfakcja"],
    },
    title: {
      en: "Happiness",
      pl: "Szczęście",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tasty", "flavorful", "delectable", "savory", "mouthwatering"],
      pl: ["smaczny", "aromatyczny", "wyśmienity", "dobry", "apetyczny"],
    },
    title: {
      en: "Delicious",
      pl: "Pyszny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["environment", "wilderness", "tree", "biology", "landscape"],
      pl: ["środowisko", "dzicz", "drzewo", "biologia", "krajobraz"],
    },
    title: {
      en: "Nature",
      pl: "Natura",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["picture", "image", "camera", "lens", "art"],
      pl: ["zdjęcie", "obraz", "aparat", "obiektyw", "sztuka"],
    },
    title: {
      en: "Photography",
      pl: "Fotografia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["orchestra", "conductor", "notes", "melody", "rhythm"],
      pl: ["orkiestra", "dyrygent", "nuty", "melodia", "rytm"],
    },
    title: {
      en: "Symphony",
      pl: "Symfonia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["soap", "water", "washcloth", "auto", "cleaning"],
      pl: ["mydło", "woda", "ścierka", "auto", "czyszczenie"],
    },
    title: {
      en: "Car wash",
      pl: "Myjnia samochodowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ice", "snow", "mountain", "warming", "melt"],
      pl: ["lód", "śnieg", "góra", "ocieplenie", "topnieć"],
    },
    title: {
      en: "Glacier",
      pl: "Lodowiec",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tropical", "fruit", "sweet", "tangy", "spiky"],
      pl: ["tropikalny", "owoc", "słodki", "orzeźwiający", "kolczasty"],
    },
    title: {
      en: "Pineapple",
      pl: "Ananas",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["astronomy", "lens", "stars", "sky", "space"],
      pl: ["astronomia", "obiektyw", "gwiazdy", "niebo", "kosmos"],
    },
    title: {
      en: "Telescope",
      pl: "Teleskop",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["coffee", "milk", "foam", "latte", "Italia"],
      pl: ["kawa", "mleko", "piana", "latte", "Włochy"],
    },
    title: {
      en: "Cappuccino",
      pl: "Cappuccino",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tattoo", "dye", "eyebrow", "temporary", "skin"],
      pl: ["tatuaż", "barwnik", "brew", "tymczasowy", "skóra"],
    },
    title: {
      en: "Henna",
      pl: "Henna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["water", "gear", "mask", "tank", "bubbles"],
      pl: ["woda", "sprzęt", "maska", "zbiornik", "bąbelki"],
    },
    title: {
      en: "Scuba diving",
      pl: "Nurkowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["break-in", "theft", "property", "stolen", "home"],
      pl: ["wtargnięcie", "kradzież", "własność", "zrabowany", "dom"],
    },
    title: {
      en: "Burglary",
      pl: "Włamanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["deception", "scam", "cheat", "con", "trickery"],
      pl: ["podstęp", "przekręt", "ściągać", "kant", "sztuczka"],
    },
    title: {
      en: "Fraud",
      pl: "Oszustwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fake", "copy", "money", "illegal", "crime"],
      pl: ["podróbka", "kopia", "pieniądze", "nielegalny", "przestępstwo"],
    },
    title: {
      en: "Counterfeiting",
      pl: "Fałszerstwo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["illegal", "transport", "narcotics", "contraband", "crime"],
      pl: ["nielegalny", "przewóz", "odurzający", "kontrabanda", "przestępstwo"],
    },
    title: {
      en: "Drug trafficking",
      pl: "Przemyt narkotyków",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["personal", "information", "steal", "illegal", "crime"],
      pl: ["osobisty", "informacja", "zbrodnia", "nielegalny", "przestępstwo"],
    },
    title: {
      en: "Identity fraud",
      pl: "Kradzież tożsamości",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tent", "campfire", "hiking", "forest", "backpack"],
      pl: ["namiot", "ognisko", "wędrówka", "las", "plecak"],
    },
    title: {
      en: "Camping trip",
      pl: "Biwak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["volleyball", "soccer", "surfing", "sun", "ball"],
      pl: ["siatkówka", "piłka nożna", "surfowanie", "słońce", "piłka"],
    },
    title: {
      en: "Beach sports",
      pl: "Sporty plażowe",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["device", "call", "telephone", "apps", "mobile"],
      pl: ["urządzenie", "dzwonić", "telefon", "aplikacje", "komórka"],
    },
    title: {
      en: "Smartphone",
      pl: "Smartfon",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blockchain", "digital", "Bitcoin", "Ethereum", "wallet"],
      pl: ["blockchain", "cyfrowy", "Bitcoin", "Ethereum", "portfel"],
    },
    title: {
      en: "Cryptocurrency",
      pl: "Kryptowaluta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["PlayStation", "Xbox", "Nintendo", "controller", "computer"],
      pl: ["PlayStation", "Xbox", "Nintendo", "pad", "komputer"],
    },
    title: {
      en: "Gaming console",
      pl: "Konsola do gier",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wallet", "transaction", "cash", "Google Pay", "Apple Pay"],
      pl: ["portfel", "transakcja", "gotówka", "Google Pay", "Apple Pay"],
    },
    title: {
      en: "Mobile payment",
      pl: "Płatności mobilne",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["hybrid", "Tesla", "vehicle", "battery", "charger"],
      pl: ["hybryda", "Tesla", "pojazd", "bateria", "ładowarka"],
    },
    title: {
      en: "Electric car",
      pl: "Samochód elektryczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["fly", "aerial", "camera", "remote", "pilot"],
      pl: ["latać", "antena", "aparat", "zdalny", "pilot"],
    },
    title: {
      en: "Drone",
      pl: "Dron",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["construction", "manufacturing", "object", "printer", "prototype"],
      pl: ["konstrukcja", "wytwarzanie", "przedmiot", "drukarka", "prototyp"],
    },
    title: {
      en: "3D printing",
      pl: "Druk 3D",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["earbuds", "over-ear", "music", "wireless", "audio"],
      pl: ["douszne", "nauszne", "muzyka", "bezprzewodowy", "dźwięk"],
    },
    title: {
      en: "Headphones",
      pl: "Słuchawki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["touchpad", "click", "scroll", "cursor", "device"],
      pl: ["touchpad", "klikać", "przewijać", "kursor", "urządzenie"],
    },
    title: {
      en: "Computer mouse",
      pl: "Myszka komputerowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["film", "mirrorless", "photography", "image", "sensor"],
      pl: ["klisza", "bezlusterkowy", "fotografia", "zdjęcie", "czujnik"],
    },
    title: {
      en: "Digital camera",
      pl: "Aparat cyfrowy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Facebook", "Twitter", "Instagram", "platform", "sharing"],
      pl: ["Facebook", "Twitter", "Instagram", "platforma", "udostępnianie"],
    },
    title: {
      en: "Social media",
      pl: "Media społecznościowe",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["bike", "transportation", "battery", "Lime", "drive"],
      pl: ["rower", "transport", "bateria", "Lime", "jechać"],
    },
    title: {
      en: "Electric scooter",
      pl: "Hulajnoga elektryczna",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tentacles", "stinging", "transparent", "ocean", "poisonous"],
      pl: ["macki", "pieczenie", "przezroczysty", "ocean", "trujący"],
    },
    title: {
      en: "Jellyfish",
      pl: "Meduza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mane", "gallop", "hoof", "farm", "saddle"],
      pl: ["grzywa", "galop", "kopyto", "gospodarstwo", "siodło"],
    },
    title: {
      en: "Horse",
      pl: "Koń",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["crocodile", "predator", "reptile", "jaws", "teeth"],
      pl: ["krokodyl", "drapieżnik", "gad", "szczęka", "zęby"],
    },
    title: {
      en: "Alligator",
      pl: "Aligator",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pack", "howl", "predator", "fur", "gray"],
      pl: ["wataha", "wyć", "drapieżnik", "futro", "szary"],
    },
    title: {
      en: "Wolf",
      pl: "Wilk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["badger", "river", "fur", "mammal", "animal"],
      pl: ["borsuk", "rzeka", "futro", "ssak", "zwierzę"],
    },
    title: {
      en: "Otter",
      pl: "Wydra",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["monkey", "jungle", "intelligent", "chimpanzee", "animal"],
      pl: ["małpa", "dżungla", "inteligentny", "szympans", "zwierzę"],
    },
    title: {
      en: "Orangutan",
      pl: "Orangutan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cute", "breed", "herding", "dog", "animal"],
      pl: ["słodki", "rasa", "pasterstwo", "pies", "zwierzę"],
    },
    title: {
      en: "Corgi",
      pl: "Corgi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["snake", "constrictor", "Amazon", "green", "big"],
      pl: ["wąż", "dusiciel", "Amazonka", "zielony", "duży"],
    },
    title: {
      en: "Anaconda",
      pl: "Anakonda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ostrich", "flightless", "Australia", "feathers", "fast"],
      pl: ["struś", "nielot", "Australia", "pióra", "szybki"],
    },
    title: {
      en: "Emu",
      pl: "Emu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Himalayas", "endangered", "fur", "camouflage", "predator"],
      pl: ["Himalaje", "zagrożony", "futro", "kamuflaż", "drapieżnik"],
    },
    title: {
      en: "Snow leopard",
      pl: "Pantera śnieżna",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["green", "stalks", "shoot", "tall", "Asia"],
      pl: ["zielony", "łodyga", "pęd", "wysoki", "Azja"],
    },
    title: {
      en: "Bamboo",
      pl: "Bambus",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["purple", "fragrance", "oil", "flowers", "herb"],
      pl: ["fioletowy", "zapach", "olejek", "kwiaty", "zioło"],
    },
    title: {
      en: "Lavender",
      pl: "Lawenda",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tropical", "delicate", "petals", "exotic", "plant"],
      pl: ["tropikalny", "delikatny", "płatki", "egzotyczny", "roślina"],
    },
    title: {
      en: "Orchid",
      pl: "Orchidea",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["bulb", "petals", "red", "spring", "Netherlands"],
      pl: ["cebulka", "płatki", "czerwony", "wiosna", "Holandia"],
    },
    title: {
      en: "Tulip",
      pl: "Tulipan",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["vineyard", "fruit", "leaves", "wine", "trellis"],
      pl: ["winnica", "owoc", "liście", "wino", "treliaż"],
    },
    title: {
      en: "Grapevine",
      pl: "Winorośl",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["purple", "petals", "plant", "bulb", "flower"],
      pl: ["fioletowy", "płatki", "roślina", "cebulka", "kwiat"],
    },
    title: {
      en: "Iris",
      pl: "Irys",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["money", "account", "vault", "deposit", "withdrawal"],
      pl: ["pieniądze", "konto", "skarbiec", "wpłata", "wypłata"],
    },
    title: {
      en: "Bank",
      pl: "Bank",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["chef", "menu", "reservation", "cuisine", "server"],
      pl: ["szef", "menu", "rezerwacja", "kuchnia", "kelner"],
    },
    title: {
      en: "Restaurant",
      pl: "Restauracja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["workout", "weights", "fitness", "trainer", "exercise"],
      pl: ["trening", "ciężary", "fitness", "trener", "ćwiczenie"],
    },
    title: {
      en: "Gym",
      pl: "Siłownia",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mail", "stamp", "envelope", "package", "delivery"],
      pl: ["wysyłać", "znaczek", "koperta", "paczka", "dostawa"],
    },
    title: {
      en: "Post office",
      pl: "Poczta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["teacher", "student", "classroom", "homework", "exam"],
      pl: ["nauczyciel", "uczeń", "klasa", "praca domowa", "egzamin"],
    },
    title: {
      en: "School",
      pl: "Szkoła",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["store", "sale", "escalator", "food", "buy"],
      pl: ["sklep", "sprzedaż", "schody ruchome", "jedzenie", "kupować"],
    },
    title: {
      en: "Shopping mall",
      pl: "Centrum handlowe",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["monument", "gathering", "market", "statue", "event"],
      pl: ["zabytek", "zgromadzenie", "rynek", "pomnik", "wydarzenie"],
    },
    title: {
      en: "City square",
      pl: "Plac miejski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["aisle", "cashier", "grocery", "shopping cart", "checkout"],
      pl: ["alejka", "kasjer", "spożywczy", "koszyk", "kasa"],
    },
    title: {
      en: "Supermarket",
      pl: "Supermarket",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["employee", "cubicle", "meeting", "business", "work"],
      pl: ["pracownik", "boks", "spotkanie", "biznes", "praca"],
    },
    title: {
      en: "Office building",
      pl: "Biurowiec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["tooth", "cavity", "chair", "dental", "appointment"],
      pl: ["ząb", "ubytek", "fotel", "stomatologia", "wizyta"],
    },
    title: {
      en: "Dentist's office",
      pl: "Gabinet dentystyczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["haircut", "shave", "chair", "razor", "appointment"],
      pl: ["strzyżenie", "golenie", "fotel", "maszynka", "wizyta"],
    },
    title: {
      en: "Barber shop",
      pl: "Fryzjer męski",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["animal", "dog", "food", "toy", "cat"],
      pl: ["zwierzę", "pies", "jedzenie", "zabawka", "kot"],
    },
    title: {
      en: "Pet store",
      pl: "Sklep zoologiczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["produce", "vendor", "fresh", "organic", "market"],
      pl: ["produkować", "sprzedawca", "świeży", "organiczny", "rynek"],
    },
    title: {
      en: "Farmers market",
      pl: "Targ rolny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["tools", "hammer", "screwdriver", "nails", "saw"],
      pl: ["narzędzia", "młotek", "śrubokręt", "gwoździe", "piła"],
    },
    title: {
      en: "Hardware store",
      pl: "Sklep budowlany",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["massage", "relaxation", "sauna", "appointment", "wellness"],
      pl: ["masaż", "relaks", "sauna", "wizyta", "zdrowie"],
    },
    title: {
      en: "Spa",
      pl: "Spa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["women", "waist", "length", "dress", "short"],
      pl: ["kobieta", "pas", "długość", "sukienka", "krótki"],
    },
    title: {
      en: "Skirt",
      pl: "Spódniczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["shirt", "collar", "button", "top", "skirt"],
      pl: ["koszulka", "kołnierz", "guzik", "góra", "spódnica"],
    },
    title: {
      en: "Blouse",
      pl: "Bluzka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sweatshirt", "hood", "casual", "fleece", "comfortable"],
      pl: ["dres", "kaptur", "swobodny", "polar", "wygodny"],
    },
    title: {
      en: "Hoodie",
      pl: "Bluza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["sleeveless", "formal", "pockets", "fabric", "warmth"],
      pl: ["bezrękawnik", "formalny", "kieszenie", "materiał", "ciepło"],
    },
    title: {
      en: "Vest",
      pl: "Kamizelka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["knit", "buttons", "wool", "sweater", "pullover"],
      pl: ["dzianina", "guziki", "wełna", "sweter", "pulower"],
    },
    title: {
      en: "Cardigan",
      pl: "Kardigan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["jacket", "outerwear", "lightweight", "hood", "zipper"],
      pl: ["kurtka", "wierzchnia", "lekki", "kaptur", "zamek"],
    },
    title: {
      en: "Windbreaker",
      pl: "Wiatrówka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "outerwear", "warmth", "feathers", "coat"],
      pl: ["zima", "wierzchnia", "ciepło", "pióra", "płaszcz"],
    },
    title: {
      en: "Down jacket",
      pl: "Kurtka puchowa",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["collar", "elegant", "cotton", "men", "sleeve"],
      pl: ["kołnierz", "elegancki", "bawełna", "mężczyzna", "rękaw"],
    },
    title: {
      en: "Polo shirt",
      pl: "Koszulka polo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fabric", "beach", "tie", "women", "pattern"],
      pl: ["materiał", "plaża", "wiązanie", "kobieta", "wzór"],
    },
    title: {
      en: "Sarong",
      pl: "Sarong",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["jacket", "hood", "winter", "warmth", "pockets"],
      pl: ["kurtka", "kaptur", "zima", "ciepło", "kieszenie"],
    },
    title: {
      en: "Anorak",
      pl: "Anorak",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["talkative", "outgoing", "friendly", "sociable", "gregarious"],
      pl: ["rozmowny", "otwarty", "przyjazny", "towarzyski", "gadatliwy"],
    },
    title: {
      en: "Extroverted",
      pl: "Ekstrawertyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["driven", "goal", "determined", "motivated", "successful"],
      pl: ["zdeterminowany", "cel", "zdecydowany", "zmotywowany", "sukces"],
    },
    title: {
      en: "Ambitious",
      pl: "Ambitny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["charming", "captivating", "magnetic", "engaging", "alluring"],
      pl: ["czarujący", "urzekający", "magnetyczny", "angażujący", "kuszący"],
    },
    title: {
      en: "Charismatic",
      pl: "Charyzmatyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["spontaneous", "impetuous", "rash", "reckless", "hasty"],
      pl: ["spontaniczny", "porywczy", "nieprzemyślany", "lekkomyślny", "pośpieszny"],
    },
    title: {
      en: "Impulsive",
      pl: "Impulsywny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["meticulous", "details", "precise", "exacting", "demanding"],
      pl: ["skrupulatny", "szczegóły", "precyzyjny", "dokładny", "wymagający"],
    },
    title: {
      en: "Perfectionist",
      pl: "Perfekcjonista",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["dependable", "trust", "responsible", "faithful", "loyal"],
      pl: ["wiarygodny", "zaufanie", "odpowiedzialny", "wierny", "lojalny"],
    },
    title: {
      en: "Reliable",
      pl: "Niezawodny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["resolute", "unwavering", "firm", "committed", "steadfast"],
      pl: ["zdecydowany", "nieugięty", "stanowczy", "zaangażowany", "niezłomny"],
    },
    title: {
      en: "Determined",
      pl: "Zdeterminowany",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["instinctive", "perceptive", "rational", "feeling", "predict"],
      pl: ["instynktowny", "spostrzegawczy", "racjonalny", "przeczucie", "przewidywać"],
    },
    title: {
      en: "Intuitive",
      pl: "Intuicyjny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["modest", "unassuming", "meek", "unpretentious", "self-effacing"],
      pl: ["pokorny", "bezpretensjonalny", "cichy", "łagodny", "rozgłos"],
    },
    title: {
      en: "Humble",
      pl: "Skromny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["torn", "undecided", "ambivalent", "uncertain", "hesitant"],
      pl: ["wątpliwy", "niezdecydowany", "ambiwalentny", "niepewny", "wahający się"],
    },
    title: {
      en: "Conflicted",
      pl: "Rozdarty",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["lively", "vigorous", "dynamic", "lazy", "active"],
      pl: ["żwawy", "wigor", "żywiołowy", "leniwy", "aktywny"],
    },
    title: {
      en: "Energetic",
      pl: "Energiczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["compassionate", "understanding", "sensitive", "sympathetic", "caring"],
      pl: ["współczucie", "wyrozumiałość", "czuły", "życzliwy", "troskliwy"],
    },
    title: {
      en: "Empathetic",
      pl: "Empatyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["impulsive", "impetuous", "erratic", "carefree", "unpredictable"],
      pl: ["impulsywny", "porywczy", "nieobliczalny", "beztroski", "nieprzewidywalny"],
    },
    title: {
      en: "Spontaneous",
      pl: "Spontaniczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["forward-thinking", "imaginative", "innovative", "creative", "futuristic"],
      pl: ["przyszłościowy", "pomysłowy", "innowacyjny", "kreatywny", "futurystyczny"],
    },
    title: {
      en: "Visionary",
      pl: "Wizjonerski",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["funny", "amusing", "entertaining", "comical", "witty"],
      pl: ["zabawny", "śmieszny", "rozrywka", "komiczny", "dowcipny"],
    },
    title: {
      en: "Humorous",
      pl: "Humorystyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["iris", "color", "pupils", "contacts", "vision"],
      pl: ["tęczówka", "kolor", "źrenica", "soczewki", "wzrok"],
    },
    title: {
      en: "Green eyes",
      pl: "Zielone oczy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["balding", "loss", "aging", "genetics", "hat"],
      pl: ["łysienie", "wypadanie", "starzenie", "genetyka", "włosy"],
    },
    title: {
      en: "Receding hairline",
      pl: "Zakola",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Burj Khalifa", "Arab", "desert", "oil", "United Arab Emirates"],
      pl: ["Burj Khalifa", "arabski", "pustynia", "ropa", "Zjednoczone Emiraty Arabskie"],
    },
    title: {
      en: "Dubai",
      pl: "Dubaj",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["island", "caldera", "volcano", "sea", "Greece"],
      pl: ["wyspa", "kaldera", "wulkan", "morze", "Grecja"],
    },
    title: {
      en: "Santorini",
      pl: "Santoryn",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["reptile", "scales", "jaws", "predator", "alligator"],
      pl: ["gad", "łuski", "szczęka", "drapieżnik", "aligator"],
    },
    title: {
      en: "Crocodile",
      pl: "Krokodyl",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["colorful", "beak", "tropical", "fruit", "bird"],
      pl: ["kolorowy", "dziób", "tropikalny", "owoc", "ptak"],
    },
    title: {
      en: "Toucan",
      pl: "Tukan",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["spots", "fast", "Africa", "predator", "leopard"],
      pl: ["kropka", "szybki", "Afryka", "drapieżnik", "lampart"],
    },
    title: {
      en: "Cheetah",
      pl: "Gepard",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["horn", "Africa", "elephant", "gray", "hippopotamus"],
      pl: ["róg", "Afryka", "słoń", "szary", "hipopotam"],
    },
    title: {
      en: "Rhinoceros",
      pl: "Nosorożec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["venom", "viper", "snake", "predator", "hiss"],
      pl: ["jad", "żmija", "wąż", "drapieżnik", "syczeć"],
    },
    title: {
      en: "Cobra",
      pl: "Kobra",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mane", "Africa", "roar", "predator", "king"],
      pl: ["grzywa", "Afryka", "ryczeć", "drapieżnik", "król"],
    },
    title: {
      en: "Lion",
      pl: "Lew",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["stripes", "predator", "cat", "lion", "leopard"],
      pl: ["paski", "drapieżnik", "kot", "lew", "lampart"],
    },
    title: {
      en: "Tiger",
      pl: "Tygrys",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["river", "Africa", "animal", "elephant", "rhinoceros"],
      pl: ["rzeka", "Afryka", "zwierzę", "słoń", "nosorożec"],
    },
    title: {
      en: "Hippopotamus",
      pl: "Hipopotam",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fast", "feathers", "bird", "sand", "egg"],
      pl: ["szybki", "pióra", "ptak", "piasek", "jajko"],
    },
    title: {
      en: "Ostrich",
      pl: "Struś",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["spines", "nocturnal", "Sonic", "cute", "ball"],
      pl: ["kolce", "nocny", "Sonic", "słodki", "kulka"],
    },
    title: {
      en: "Hedgehog",
      pl: "Jeż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["venom", "predator", "scales", "hiss", "reptile"],
      pl: ["jad", "drapieżnik", "łuski", "syczeć", "gad"],
    },
    title: {
      en: "Snake",
      pl: "Wąż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["burrows", "animal", "cute", "family", "sentinel"],
      pl: ["nora", "zwierzę", "słodki", "rodzina", "strażnik"],
    },
    title: {
      en: "Meerkat",
      pl: "Surykatka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["America", "wings", "patriotic", "beak", "nest"],
      pl: ["USA", "skrzydła", "patriotyzm", "dziób", "gniazdo"],
    },
    title: {
      en: "Bald eagle",
      pl: "Bielik amerykański",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tusk", "cold", "blubber", "water", "mustache"],
      pl: ["kły", "zimno", "tłuszcz", "woda", "wąsy"],
    },
    title: {
      en: "Walrus",
      pl: "Mors",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["ocean", "shark", "mammal", "fish", "dolphin"],
      pl: ["ocean", "wieloryb", "ssak", "ryba", "delfin"],
    },
    title: {
      en: "Blue whale",
      pl: "Płetwal błękitny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pink", "fragrant", "flower", "petals", "pansy"],
      pl: ["różowy", "pachnący", "kwiat", "płatki", "bratek"],
    },
    title: {
      en: "Peony",
      pl: "Piwonia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tree", "small", "trimmed", "art", "Japan"],
      pl: ["drzewo", "mały", "przycięty", "sztuka", "Japonia"],
    },
    title: {
      en: "Bonsai",
      pl: "Bonsai",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["tree", "acorns", "leaves", "large", "wood"],
      pl: ["drzewo", "żołędzie", "liście", "duży", "drewno"],
    },
    title: {
      en: "Oak",
      pl: "Dąb",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["burn", "healing", "gel", "leaves", "spiky"],
      pl: ["oparzenie", "leczenie", "żel", "liście", "kolczasty"],
    },
    title: {
      en: "Aloe vera",
      pl: "Aloes",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["red", "Christmas", "leaves", "flowers", "plant"],
      pl: ["czerwony", "Boże Narodzenie", "liście", "kwiat", "roślina"],
    },
    title: {
      en: "Poinsettia",
      pl: "Gwiazda betlejemska",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["herb", "leaves", "tea", "candy", "gum"],
      pl: ["zioło", "liście", "herbata", "cukierek", "guma"],
    },
    title: {
      en: "Peppermint",
      pl: "Mięta",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["blue", "pink", "flowers", "shrub", "bloom"],
      pl: ["niebieski", "różowy", "kwiat", "krzew", "kwitnąć"],
    },
    title: {
      en: "Hydrangea",
      pl: "Hortensja",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["plant", "berries", "blue", "shrub", "tree"],
      pl: ["roślina", "jagody", "niebieski", "krzew", "drzewko"],
    },
    title: {
      en: "Juniper",
      pl: "Jałowiec",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["pink", "Japan", "petals", "spring", "tree"],
      pl: ["różowy", "Japonia", "płatki", "wiosna", "drzewo"],
    },
    title: {
      en: "Cherry blossom",
      pl: "Kwiat wiśni",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["plant", "pink", "spring", "flowers", "leaves"],
      pl: ["roślina", "różowy", "wiosna", "kwiaty", "liście"],
    },
    title: {
      en: "Redbud",
      pl: "Judaszowiec",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["herb", "leaves", "seasoning", "fragrance", "cooking"],
      pl: ["zioło", "liście", "przyprawa", "zapach", "gotowanie"],
    },
    title: {
      en: "Sage",
      pl: "Szałwia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["book", "silence", "quiet", "shelf", "study"],
      pl: ["książka", "cisza", "spokój", "regał", "uczyć się"],
    },
    title: {
      en: "Library",
      pl: "Biblioteka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["athlete", "fan", "referee", "score", "cheer"],
      pl: ["sportowiec", "fan", "sędzia", "wynik", "kibicować"],
    },
    title: {
      en: "Stadium",
      pl: "Stadion",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["water", "hose", "truck", "rescue", "alarm"],
      pl: ["woda", "wąż", "samochód", "ratunek", "alarm"],
    },
    title: {
      en: "Fire station",
      pl: "Remiza strażacka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["guest", "reception", "room", "reservation", "check-in"],
      pl: ["gość", "recepcja", "pokój", "rezerwacja", "zameldowanie"],
    },
    title: {
      en: "Hotel",
      pl: "Hotel",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["salesperson", "auto", "drive", "test", "trade-in"],
      pl: ["sprzedawca", "auto", "jechać", "próbna", "wymiana"],
    },
    title: {
      en: "Car dealership",
      pl: "Salon samochodowy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["music", "dance", "DJ", "drinks", "party"],
      pl: ["muzyka", "taniec", "DJ", "drinki", "impreza"],
    },
    title: {
      en: "Nightclub",
      pl: "Klub nocny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["drink", "beer", "pub", "alcohol", "happy hour"],
      pl: ["pić", "piwo", "pub", "alkohol", "happy hour"],
    },
    title: {
      en: "Bar",
      pl: "Bar",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["driver", "passenger", "stop", "fare", "schedule"],
      pl: ["kierowca", "pasażer", "przystanek", "opłata", "rozkład"],
    },
    title: {
      en: "City bus",
      pl: "Autobus miejski",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["washer", "dryer", "clothes", "laundry", "coins"],
      pl: ["pralka", "suszarka", "ubrania", "pranie", "monety"],
    },
    title: {
      en: "Laundromat",
      pl: "Pralnia samoobsługowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["stretch", "pose", "instructor", "mat", "class"],
      pl: ["rozciąganie", "pozycja", "instruktor", "mata", "zajęcia"],
    },
    title: {
      en: "Yoga studio",
      pl: "Studio jogi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["feet", "shoes", "pair", "stink", "ankle"],
      pl: ["stopy", "buty", "para", "smród", "kostka"],
    },
    title: {
      en: "Socks",
      pl: "Skarpety",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["summer", "pants", "legs", "length", "athletic"],
      pl: ["lato", "spodnie", "nogi", "długość", "sportowy"],
    },
    title: {
      en: "Shorts",
      pl: "Spodenki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["knit", "warm", "winter", "sleeves", "pullover"],
      pl: ["dzianina", "ciepły", "zima", "rękawy", "pulower"],
    },
    title: {
      en: "Sweater",
      pl: "Sweter",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["coat", "zipper", "pockets", "hood", "warmth"],
      pl: ["płaszcz", "zamek", "kieszenie", "kaptur", "ciepło"],
    },
    title: {
      en: "Jacket",
      pl: "Kurtka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["comfortable", "shower", "bath", "slippers", "sleeves"],
      pl: ["wygodny", "prysznic", "kąpiel", "kapcie", "rękawy"],
    },
    title: {
      en: "Bathrobe",
      pl: "Szlafrok",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["formal", "coat", "jacket", "collar", "sleeves"],
      pl: ["formalny", "płaszcz", "kurtka", "kołnierzyk", "rękawy"],
    },
    title: {
      en: "Blazer",
      pl: "Marynarka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["trousers", "straps", "pockets", "casual", "suspenders"],
      pl: ["spodnie", "paski", "kieszenie", "swobodny", "szelki"],
    },
    title: {
      en: "Overalls",
      pl: "Ogrodniczki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["jacket", "winter", "hood", "coat", "warmth"],
      pl: ["kurtka", "zima", "kaptur", "płaszcz", "ciepło"],
    },
    title: {
      en: "Parka",
      pl: "Parka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["logical", "methodical", "systematic", "thorough", "rational"],
      pl: ["logiczny", "metodyczny", "systematyczny", "dokładny", "racjonalny"],
    },
    title: {
      en: "Analytical",
      pl: "Analityczny",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["excited", "eager", "passionate", "fervent", "zealous"],
      pl: ["podekscytowany", "przejęty", "pasjonat", "gorliwy", "żarliwy"],
    },
    title: {
      en: "Enthusiastic",
      pl: "Entuzjastyczny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["receptive", "judge", "accepting", "reject", "tolerant"],
      pl: ["krytykować", "oceniać", "akceptacja", "odrzucić", "tolerancyjny"],
    },
    title: {
      en: "Open-minded",
      pl: "Otwarty umysł",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["brave", "bold", "daring", "fear", "valiant"],
      pl: ["dzielny", "śmiały", "zuchwały", "strach", "mężny"],
    },
    title: {
      en: "Courageous",
      pl: "Odważny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["altruistic", "unselfish", "generous", "compassionate", "kind-hearted"],
      pl: ["altruistyczny", "egoizm", "hojny", "współczucie", "życzliwy"],
    },
    title: {
      en: "Selfless",
      pl: "Bezinteresowny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["outgoing", "friendly", "gregarious", "convivial", "hospitable"],
      pl: ["otwarty", "przyjazny", "gadatliwy", "wesoły", "gościnny"],
    },
    title: {
      en: "Sociable",
      pl: "Towarzyski",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["resilient", "strong-willed", "determined", "tenacious", "unyielding"],
      pl: ["odporny", "silna wola", "zdeterminowany", "wytrwały", "nieugięty"],
    },
    title: {
      en: "Tough",
      pl: "Wytrzymały",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["knowledge", "experience", "insight", "sagacious", "intelligent"],
      pl: ["wiedza", "doświadczenie", "wnikliwość", "bystry", "inteligentny"],
    },
    title: {
      en: "Wise",
      pl: "Mądry",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["protruding", "orthodontics", "braces", "bite", "smile"],
      pl: ["sterczący", "ortodoncja", "aparat", "zgryz", "uśmiech"],
    },
    title: {
      en: "Buck teeth",
      pl: "Wystające zęby",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["face", "plump", "fat", "round", "dimples"],
      pl: ["twarz", "puszysty", "gruby", "okrągły", "dołeczki"],
    },
    title: {
      en: "Chubby cheeks",
      pl: "Pulchne policzki",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["obese", "fat", "weight", "neck", "exercise"],
      pl: ["otyły", "gruby", "waga", "szyja", "ćwiczenia"],
    },
    title: {
      en: "Double chin",
      pl: "Podwójny podbródek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["canals", "capital", "city", "bikes", "Netherlands"],
      pl: ["kanały", "stolica", "miasto", "rowery", "Holandia"],
    },
    title: {
      en: "Amsterdam",
      pl: "Amsterdam",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["city", "Afric", "market", "souk", "Morocco"],
      pl: ["miasto", "Afryka", "targ", "suk", "Maroko"],
    },
    title: {
      en: "Marrakech",
      pl: "Marrakesz",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["trumpet", "saxophone", "music", "genre", "blues"],
      pl: ["trąbka", "saksofon", "muzyka", "gatunek", "blues"],
    },
    title: {
      en: "Jazz",
      pl: "Jazz",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ghost", "spooky", "eerie", "house", "theme park"],
      pl: ["duch", "straszny", "upiorny", "rezydencja", "park rozrywki"],
    },
    title: {
      en: "Haunted mansion",
      pl: "Nawiedzony dom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["espionage", "James Bond", "mission", "007", "intelligence"],
      pl: ["szpiegostwo", "James Bond", "misja", "007", "wywiad"],
    },
    title: {
      en: "Secret agent",
      pl: "Tajny agent",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["diving", "exploration", "water", "cavern", "darkness"],
      pl: ["nurkowanie", "eksploracja", "woda", "grota", "ciemność"],
    },
    title: {
      en: "Underwater cave",
      pl: "Podwodna jaskinia",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["knight", "siege", "fortress", "dungeon", "moat"],
      pl: ["rycerz", "oblężenie", "twierdza", "loch", "fosa"],
    },
    title: {
      en: "Medieval castle",
      pl: "Średniowieczny zamek",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["technology", "skyscraper", "car", "robot", "neon"],
      pl: ["technologia", "wieżowiec", "samochód", "robot", "neon"],
    },
    title: {
      en: "Futuristic city",
      pl: "Futurystyczne miasto",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["clown", "acrobat", "tightrope", "tent", "audience"],
      pl: ["klaun", "akrobata", "lina", "namiot", "widownia"],
    },
    title: {
      en: "Circus performance",
      pl: "Przedstawienie cyrkowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["rust", "machinery", "conveyor", "rubble", "decay"],
      pl: ["rdza", "maszyny", "taśmociąg", "gruz", "rozpad"],
    },
    title: {
      en: "Abandoned factory",
      pl: "Opuszczona fabryka",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["exercise", "jogging", "fitness", "race", "shoes"],
      pl: ["ćwiczenie", "jogging", "fitness", "wyścig", "buty"],
    },
    title: {
      en: "Running",
      pl: "Bieganie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["mountain", "adventure", "gear", "rope", "summit"],
      pl: ["góra", "przygoda", "sprzęt", "lina", "szczyt"],
    },
    title: {
      en: "Climbing",
      pl: "Wspinaczka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["enigma", "puzzle", "intrigue", "secret", "suspense"],
      pl: ["zagadka", "łamigłówka", "intryga", "sekret", "napięcie"],
    },
    title: {
      en: "Mystery",
      pl: "Tajemnica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["brave", "bold", "adventurous", "courageous", "fear"],
      pl: ["odważny", "śmiały", "ryzykowny", "dzielny", "strach"],
    },
    title: {
      en: "Daring",
      pl: "Brawurowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cuisine", "recipe", "chef", "ingredients", "flavor"],
      pl: ["kuchnia", "przepis", "szef", "składniki", "smak"],
    },
    title: {
      en: "Cooking",
      pl: "Gotowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["uplifting", "motivating", "encouraging", "invigorating", "stimulating"],
      pl: ["pocieszający", "motywujący", "zachęcający", "ożywczy", "stymulujący"],
    },
    title: {
      en: "Inspiring",
      pl: "Inspirujący",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["liberty", "independence", "autonomy", "escape", "emancipation"],
      pl: ["swoboda", "niepodległość", "niezależność", "ucieczka", "emancypacja"],
    },
    title: {
      en: "Freedom",
      pl: "Wolność",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["balance", "concord", "unity", "agreement", "accord"],
      pl: ["równowaga", "balans", "jedność", "porozumienie", "zgoda"],
    },
    title: {
      en: "Harmony",
      pl: "Harmonia",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["reading", "words", "text", "pen", "paper"],
      pl: ["czytanie", "słowa", "tekst", "długopis", "papier"],
    },
    title: {
      en: "Writing",
      pl: "Pisanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["happy", "cheerful", "elated", "glad", "jolly"],
      pl: ["szczęśliwy", "wesoły", "uradowany", "zadowolony", "zabawny"],
    },
    title: {
      en: "Joyful",
      pl: "Radosny",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["snow", "mountain", "winter", "slopes", "alps"],
      pl: ["śnieg", "góra", "zima", "stok", "alpy"],
    },
    title: {
      en: "Skiing",
      pl: "Narciarstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["journey", "trip", "expedition", "car", "adventure"],
      pl: ["wyjazd", "wycieczka", "wyprawa", "samochód", "przygoda"],
    },
    title: {
      en: "Travel",
      pl: "Podróż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["plants", "soil", "flowers", "garden", "tools"],
      pl: ["rośliny", "ziemia", "kwiaty", "ogród", "narzędzia"],
    },
    title: {
      en: "Gardening",
      pl: "Ogrodnictwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["melody", "song", "sound", "singer", "instrument"],
      pl: ["melodia", "piosenka", "dźwięk", "śpiewak", "instrument"],
    },
    title: {
      en: "Music",
      pl: "Muzyka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["divine", "religious", "sacred", "mystical", "god"],
      pl: ["boski", "religijny", "święty", "mistyczny", "bóg"],
    },
    title: {
      en: "Spiritual",
      pl: "Duchowy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["race", "endurance", "runner", "sprint", "distance"],
      pl: ["wyścig", "wytrzymałość", "biegacz", "sprint", "dystans"],
    },
    title: {
      en: "Marathon",
      pl: "Maraton",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["relaxation", "sleep", "nap", "swinging", "beach"],
      pl: ["relaks", "spać", "drzemka", "kołysanie", "plaża"],
    },
    title: {
      en: "Hammock",
      pl: "Hamak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["twister", "wind", "funnel", "storm", "disaster"],
      pl: ["trąba", "wiatr", "lej", "burza", "katastrofa"],
    },
    title: {
      en: "Tornado",
      pl: "Tornado",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ice", "snow", "cold", "shelter", "Inuit"],
      pl: ["lód", "śnieg", "zimno", "schronienie", "Inuici"],
    },
    title: {
      en: "Igloo",
      pl: "Igloo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["paper", "folding", "art", "Japan", "crane"],
      pl: ["papier", "składanie", "sztuka", "Japonia", "żuraw"],
    },
    title: {
      en: "Origami",
      pl: "Origami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["coffee", "caffeine", "latte", "cappuccino", "machine"],
      pl: ["kawa", "kofeina", "latte", "cappuccino", "ekspres"],
    },
    title: {
      en: "Espresso",
      pl: "Espresso",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["harness", "adrenaline", "cable", "glide", "height"],
      pl: ["uprząż", "adrenalina", "lina", "zjazd", "wysokość"],
    },
    title: {
      en: "Zipline",
      pl: "Tyrolka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["dance", "Spanish", "guitar", "sing", "rhythm"],
      pl: ["taniec", "hiszpański", "gitara", "śpiewać", "rytm"],
    },
    title: {
      en: "Flamenco",
      pl: "Flamenco",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["explosion", "celebration", "bang", "sky", "colorful"],
      pl: ["wybuch", "świętowanie", "huk", "niebo", "kolorowy"],
    },
    title: {
      en: "Fireworks",
      pl: "Fajerwerki",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["thrill", "amusement park", "ride", "loop", "speed"],
      pl: ["dreszcz", "wesołe miasteczko", "przejażdżka", "pętla", "prędkość"],
    },
    title: {
      en: "Roller coaster",
      pl: "Kolejka górska",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["art", "spray", "mural", "vandalism", "paint"],
      pl: ["sztuka", "spray", "mural", "wandalizm", "farba"],
    },
    title: {
      en: "Graffiti",
      pl: "Graffiti",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "white", "unique", "ice", "cold"],
      pl: ["zima", "biały", "unikalny", "lód", "zimno"],
    },
    title: {
      en: "Snowflake",
      pl: "Płatek śniegu",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["acrobat", "clown", "tent", "show", "animals"],
      pl: ["akrobata", "klaun", "namiot", "pokaz", "zwierzęta"],
    },
    title: {
      en: "Circus",
      pl: "Cyrk",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["pasta", "sauce", "Italy", "Bolognese", "carbonara"],
      pl: ["makaron", "sos", "Włochy", "bolognese", "carbonara"],
    },
    title: {
      en: "Spaghetti",
      pl: "Spaghetti",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["singing", "microphone", "stage", "lyrics", "music"],
      pl: ["śpiew", "mikrofon", "scena", "tekst", "muzyka"],
    },
    title: {
      en: "Karaoke",
      pl: "Karaoke",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["theft", "merchandise", "kleptomaniac", "criminal", "steal"],
      pl: ["złodziej", "towar", "kleptoman", "przestępca", "kryminalista"],
    },
    title: {
      en: "Shoplifting",
      pl: "Kradzież sklepowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["theft", "auto", "vehicle", "criminal", "force"],
      pl: ["złodziej", "auto", "pojazd", "przestępca", "siła"],
    },
    title: {
      en: "Carjacking",
      pl: "Kradzież samochodu",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["signature", "document", "illegal", "fake", "crime"],
      pl: ["podpis", "dokument", "nielegalny", "fałszywy", "przestępstwo"],
    },
    title: {
      en: "Forgery",
      pl: "Fałszerstwo",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["illegal", "transport", "narcotics", "contraband", "crime"],
      pl: ["nielegalny", "przewóz", "odurzający", "kontrabanda", "przestępstwo"],
    },
    title: {
      en: "Smuggling drugs",
      pl: "Przemyt narkotyków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["misappropriation", "funds", "theft", "misuse", "crime"],
      pl: ["przywłaszczenie", "środki", "kradzież", "nadużycie", "przestępstwo"],
    },
    title: {
      en: "Embezzlement",
      pl: "Defraudacja",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["fire", "damage", "burn", "criminal", "illegal"],
      pl: ["ogień", "uszkodzenie", "palić się", "przestępca", "nielegalny"],
    },
    title: {
      en: "Arson",
      pl: "Podpalenie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["car", "maps", "journey", "stop", "radio"],
      pl: ["samochód", "mapa", "wyprawa", "postój", "radio"],
    },
    title: {
      en: "Road trip",
      pl: "Podróż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["spa", "vacation", "pool", "beach", "ski"],
      pl: ["spa", "wakacje", "basen", "plaża", "narty"],
    },
    title: {
      en: "Luxury resort",
      pl: "Luksusowy kurort",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["autonomous", "vehicle", "transportation", "auto", "Tesla"],
      pl: ["bezzałogowy", "pojazd", "transport", "auto", "Tesla"],
    },
    title: {
      en: "Self-driving car",
      pl: "Samochód autonomiczny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["machine learning", "automation", "robot", "neural network", "algorithm"],
      pl: ["uczenie maszynowe", "automatyzacja", "robot", "sieć neuronowa", "algorytm"],
    },
    title: {
      en: "Artificial intelligence",
      pl: "Sztuczna inteligencja",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["automation", "Alexa", "Google Home", "connected", "Internet of Things"],
      pl: ["automatyzacja", "Alexa", "Google Home", "połączony", "Internet rzeczy"],
    },
    title: {
      en: "Smart home",
      pl: "Inteligentny dom",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["connected", "automation", "smart", "devices", "home"],
      pl: ["połączony", "automatyzacja", "inteligentny", "urządzenia", "dom"],
    },
    title: {
      en: "Internet of things",
      pl: "Internet rzeczy",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["encryption", "protection", "hacker", "system", "antivirus"],
      pl: ["szyfrowanie", "ochrona", "haker", "system", "antywirus"],
    },
    title: {
      en: "Cybersecurity",
      pl: "Cyberbezpieczeństwo",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wireless", "network", "speed", "technology", "internet"],
      pl: ["bezprzewodowy", "sieć", "prędkość", "technologia", "internet"],
    },
    title: {
      en: "5G",
      pl: "5G",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["fingerprint", "face", "authentication", "security", "unlock"],
      pl: ["odcisk palca", "twarz", "uwierzytelnianie", "bezpieczeństwo", "odblokować"],
    },
    title: {
      en: "Biometrics",
      pl: "Biometria",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["defect", "frames", "lenses", "vision", "eyesight"],
      pl: ["wada", "oprawki", "soczewki", "wzrok", "widzenie"],
    },
    title: {
      en: "Glasses",
      pl: "Okulary",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["facial hair", "razor", "shave", "beard", "man"],
      pl: ["zarost", "maszynka", "golić", "broda", "mężczyzna"],
    },
    title: {
      en: "Mustache",
      pl: "Wąsy",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["length", "long", "man", "style", "cut"],
      pl: ["długość", "długie", "mężczyzna", "fryzura", "strzyżenie"],
    },
    title: {
      en: "Short hair",
      pl: "Krótkie włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["type", "smooth", "sleek", "style", "curly"],
      pl: ["rodzaj", "gładki", "przylizany", "fryzura", "kręcone"],
    },
    title: {
      en: "Straight hair",
      pl: "Proste włosy",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Eiffel Tower", "capital", "Louvre", "city", "France"],
      pl: ["Wieża Eiffla", "stolica", "Luwr", "miasto", "Francja"],
    },
    title: {
      en: "Paris",
      pl: "Paryż",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Statue of Liberty", "Broadway", "Times Square", "city", "Manhattan"],
      pl: ["Statua Wolności", "Broadway", "Times Square", "miasto", "Manhattan"],
    },
    title: {
      en: "New York City",
      pl: "Nowy Jork",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Big Ben", "capital", "city", "England", "United Kingdom"],
      pl: ["Big Ben", "stolica", "miasto", "Anglia", "Wielka Brytania"],
    },
    title: {
      en: "London",
      pl: "Londyn",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["capital", "city", "Asia", "tourism", "Thailand"],
      pl: ["stolica", "miasto", "Azja", "turystyka", "Tajlandia"],
    },
    title: {
      en: "Bangkok",
      pl: "Bangkok",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["city", "Europe", "Mediterranean", "Catalonia", "Spain"],
      pl: ["miasto", "Europa", "Śródziemne", "Katalonia", "Hiszpania"],
    },
    title: {
      en: "Barcelona",
      pl: "Barcelona",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["Christ", "statue", "city", "carnival", "Brazil"],
      pl: ["Chrystus", "statua", "miasto", "karnawał", "Brazylia"],
    },
    title: {
      en: "Rio de Janeiro",
      pl: "Rio de Janeiro",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["planet", "sun", "space", "astronomy", "orbit"],
      pl: ["planeta", "słońce", "kosmos", "astronomia", "orbita"],
    },
    title: {
      en: "Solar System",
      pl: "Układ Słoneczny",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["cowboy", "gun", "saloon", "frontier", "revolver"],
      pl: ["kowboj", "pistolet", "bar", "obszar", "rewolwer"],
    },
    title: {
      en: "Wild West",
      pl: "Dziki Zachód",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["spaceship", "extraterrestrial", "creature", "abduct", "defense"],
      pl: ["statek kosmiczny", "pozaziemski", "istota", "porwanie", "obrona"],
    },
    title: {
      en: "Alien invasion",
      pl: "Inwazja kosmitów",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["lava", "ash", "smoke", "mountain", "destruction"],
      pl: ["lawa", "popiół", "dym", "góra", "zniszczenie"],
    },
    title: {
      en: "Volcano eruption",
      pl: "Erupcja wulkanu",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["ghost", "creepy", "spooky", "horror", "supernatural"],
      pl: ["duch", "straszny", "upiorny", "horror", "nadprzyrodzony"],
    },
    title: {
      en: "Haunted forest",
      pl: "Nawiedzony las",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["celebration", "music", "dancing", "guests", "drinks"],
      pl: ["uroczystość", "muzyka", "taniec", "goście", "napoje"],
    },
    title: {
      en: "Party",
      pl: "Impreza",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["respect", "appreciate", "esteem", "value", "praise"],
      pl: ["szacunek", "doceniać", "poważanie", "wartość", "pochwała"],
    },
    title: {
      en: "Admire",
      pl: "Podziwiać",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["literature", "book", "story", "words", "pages"],
      pl: ["literatura", "książka", "opowieść", "słowa", "strony"],
    },
    title: {
      en: "Reading",
      pl: "Czytanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["cycle", "pedal", "ride", "wheel", "gear"],
      pl: ["jechać", "pedał", "jeździć", "koło", "przerzutka"],
    },
    title: {
      en: "Bike",
      pl: "Rower",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["quest", "discovery", "risk", "journey", "expedition"],
      pl: ["zadanie", "odkrycie", "ryzyko", "podróż", "wyprawa"],
    },
    title: {
      en: "Adventure",
      pl: "Przygoda",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["star", "light", "heat", "day", "sunrise"],
      pl: ["gwiazda", "światło", "ciepło", "dzień", "wschód"],
    },
    title: {
      en: "Sun",
      pl: "Słońce",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["captivating", "fascinating", "enchanting", "entrancing", "spellbinding"],
      pl: ["urzekający", "fascynujący", "czarujący", "porywający", "zniewalający"],
    },
    title: {
      en: "Mesmerizing",
      pl: "Niesamowity",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["collaboration", "cooperation", "unity", "synergy", "partnership"],
      pl: ["współpraca", "współdziałanie", "jedność", "synergia", "partnerstwo"],
    },
    title: {
      en: "Teamwork",
      pl: "Praca zespołowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["magma", "eruption", "lava", "ash", "fire"],
      pl: ["magma", "erupcja", "lawa", "popiół", "ogień"],
    },
    title: {
      en: "Volcano",
      pl: "Wulkan",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["thunder", "storm", "strike", "flash", "bolt"],
      pl: ["grzmot", "burza", "uderzenie", "błysk", "piorun"],
    },
    title: {
      en: "Lightning",
      pl: "Błyskawica",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["detective", "Sherlock Holmes", "small", "big", "zoom"],
      pl: ["detektyw", "Sherlock Holmes", "mały", "duży", "przybliżać"],
    },
    title: {
      en: "Magnifying glass",
      pl: "Szkło powiększające",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["hiking", "camping", "gear", "straps", "school"],
      pl: ["wędrówka", "kemping", "sprzęt", "paski", "szkoła"],
    },
    title: {
      en: "Backpack",
      pl: "Plecak",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["ocean", "fish", "snorkeling", "beach", "ecosystem"],
      pl: ["ocean", "ryby", "nurkowanie", "plaża", "ekosystem"],
    },
    title: {
      en: "Coral reef",
      pl: "Rafa koralowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["wind", "string", "fly", "high", "beach"],
      pl: ["wiatr", "linka", "latać", "wysoko", "plaża"],
    },
    title: {
      en: "Kite",
      pl: "Latawiec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["gloves", "punching bag", "ring", "jab", "fight"],
      pl: ["rękawice", "worek", "ring", "cios", "walka"],
    },
    title: {
      en: "Boxing",
      pl: "Boks",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["winter", "cold", "throw", "pack", "snowman"],
      pl: ["zima", "chłodny", "rzucać", "ubijać", "bałwan"],
    },
    title: {
      en: "Snowball",
      pl: "Śnieżka",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["attack", "violence", "injury", "harm", "criminal"],
      pl: ["atak", "przemoc", "uraz", "szkoda", "przestępca"],
    },
    title: {
      en: "Assault",
      pl: "Napaść",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["illegal", "transport", "drugs", "border", "crime"],
      pl: ["nielegalny", "przewóz", "narkotyki", "granica", "przestępstwo"],
    },
    title: {
      en: "Smuggling",
      pl: "Przemyt",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["abduction", "hostage", "ransom", "victim", "criminal"],
      pl: ["uprowadzenie", "zakładnik", "okup", "ofiara", "przestępca"],
    },
    title: {
      en: "Kidnapping",
      pl: "Porwanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["damage", "destruction", "property", "crime", "graffiti"],
      pl: ["uszkodzenie", "zniszczenie", "własność", "przestępstwo", "graffiti"],
    },
    title: {
      en: "Vandalism",
      pl: "Wandalizm",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["harassment", "follow", "victim", "crime", "illegal"],
      pl: ["nękanie", "śledzić", "ofiara", "przestępstwo", "nielegalny"],
    },
    title: {
      en: "Stalking",
      pl: "Prześladowanie",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["theft", "wallet", "steal", "criminal", "victim"],
      pl: ["kradzież", "portfel", "zakradać", "przestępca", "ofiara"],
    },
    title: {
      en: "Pickpocket",
      pl: "Kieszonkowiec",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["illegal", "transport", "people", "victim", "crime"],
      pl: ["nielegalny", "transport", "osoby", "ofiara", "przestępstwo"],
    },
    title: {
      en: "Human trafficking",
      pl: "Handel ludźmi",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["scam", "illegal", "fraud", "con", "deception"],
      pl: ["oszustwo", "nielegalny", "nadużycie", "przekręt", "podstęp"],
    },
    title: {
      en: "Pyramid schemes",
      pl: "Piramida finansowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["snow", "mountains", "lift", "slope", "gear"],
      pl: ["śnieg", "mountains", "wyciąg", "stok", "sprzęt"],
    },
    title: {
      en: "Skiing holiday",
      pl: "Wyjazd na narty",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["server", "storage", "network", "Google", "Amazon"],
      pl: ["serwer", "przechowywanie", "sieć", "Google", "Amazon"],
    },
    title: {
      en: "Cloud computing",
      pl: "Chmura obliczeniowa",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["Netflix", "HBO", "Amazon Prime", "movie", "subscription"],
      pl: ["Netflix", "HBO", "Amazon Prime", "film", "subskrypcja"],
    },
    title: {
      en: "Streaming service",
      pl: "Platforma streamingowa",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["navigation", "location", "maps", "way", "directions"],
      pl: ["nawigacja", "lokalizacja", "mapy", "trasa", "kierunek"],
    },
    title: {
      en: "GPS",
      pl: "GPS",
    },
    difficulty: "easy",
  },
  {
    forbiddenWords: {
      en: ["automation", "machine", "manufacturing", "assembly", "artificial intelligence"],
      pl: ["automatyzacja", "maszyna", "produkcja", "montaż", "sztuczna inteligencja"],
    },
    title: {
      en: "Robotics",
      pl: "Robotyka",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Kindle", "book", "tablet", "digital", "library"],
      pl: ["Kindle", "książka", "tablet", "cyfrowy", "biblioteka"],
    },
    title: {
      en: "E-reader",
      pl: "Czytnik e-booków",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["Apple", "Google Play", "software", "download", "Android"],
      pl: ["Apple", "Google Play", "oprogramowanie", "pobieranie", "Android"],
    },
    title: {
      en: "App store",
      pl: "Sklep z aplikacjami",
    },
    difficulty: "medium",
  },
  {
    forbiddenWords: {
      en: ["mobile", "pad", "battery", "device", "cable"],
      pl: ["komórka", "podstawka", "bateria", "urządzenie", "kabel"],
    },
    title: {
      en: "Wireless charging",
      pl: "Ładowanie bezprzewodowe",
    },
    difficulty: "hard",
  },
  {
    forbiddenWords: {
      en: ["photo", "extendable", "arm", "tripod", "camera"],
      pl: ["zdjęcie", "rozsuwany", "rozkładać", "statyw", "aparat"],
    },
    title: {
      en: "Selfie stick",
      pl: "Selfie stick",
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Catalogue",
      pl: "Katalog",
    },
    forbiddenWords: {
      en: ["inventory", "list", "record", "index", "register"],
      pl: ["ekwipunek", "lista", "spis", "indeks", "rejestr"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Frighten",
      pl: "Przestraszyć",
    },
    forbiddenWords: {
      en: ["scare", "terrify", "alarm", "startle", "spook"],
      pl: ["przerażenie", "groza", "alarm", "zaskoczyć", "duch"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Unlikely",
      pl: "Wątpliwy",
    },
    forbiddenWords: {
      en: ["improbable", "doubtful", "unexpected", "impossible", "remote"],
      pl: ["nieprawdopodobny", "niepewny", "nieoczekiwany", "niemożliwy", "daleki"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Association",
      pl: "Stowarzyszenie",
    },
    forbiddenWords: {
      en: ["connection", "relationship", "organization", "group", "union"],
      pl: ["związek", "relacja", "organizacja", "grupa", "zjednoczenie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Damage",
      pl: "Uszkodzenie",
    },
    forbiddenWords: {
      en: ["harm", "destruction", "injury", "impairment", "ruin"],
      pl: ["krzywda", "zniszczenie", "uraz", "upośledzenie", "ruina"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Improvement",
      pl: "Poprawa",
    },
    forbiddenWords: {
      en: ["enhancement", "progress", "betterment", "upgrade", "development"],
      pl: ["ulepszenie", "postęp", "udoskonalenie", "usprawniać", "rozwój"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Pasture",
      pl: "Pastwisko",
    },
    forbiddenWords: {
      en: ["field", "grazing", "meadow", "grass", "cow"],
      pl: ["pole", "wypasanie", "łąka", "trawa", "krowa"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Trade",
      pl: "Handel",
    },
    forbiddenWords: {
      en: ["commerce", "exchange", "business", "transaction", "commodity"],
      pl: ["sprzedaż", "wymiana", "biznes", "transakcja", "towar"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Manner",
      pl: "Maniera",
    },
    forbiddenWords: {
      en: ["behavior", "etiquette", "conduct", "style", "approach"],
      pl: ["zachowanie", "etykieta", "metoda", "styl", "podejście"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Bill",
      pl: "Rachunek",
    },
    forbiddenWords: {
      en: ["invoice", "payment", "receipt", "banknote", "money"],
      pl: ["faktura", "płatność", "paragon", "banknot", "pieniądze"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Voice",
      pl: "Głos",
    },
    forbiddenWords: {
      en: ["tone", "sound", "speak", "communicate", "sing"],
      pl: ["ton", "dźwięk", "mówić", "komunikować", "śpiewać"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Threaten",
      pl: "Grozić",
    },
    forbiddenWords: {
      en: ["intimidate", "endanger", "menace", "frighten", "warn"],
      pl: ["zastraszać", "zagrażać", "niebezpieczeństwo", "straszyć", "ostrzeżenie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Apparatus",
      pl: "Aparatura",
    },
    forbiddenWords: {
      en: ["equipment", "device", "machinery", "instrument", "laboratory"],
      pl: ["wyposażenie", "urządzenie", "maszyna", "narzędzie", "laboratorium"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Practice",
      pl: "Praktyka",
    },
    forbiddenWords: {
      en: ["routine", "habit", "general", "exercise", "rehearsal"],
      pl: ["rutyna", "nawyk", "lekarska", "ćwiczenie", "próba"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Say",
      pl: "Powiedzieć",
    },
    forbiddenWords: {
      en: ["speak", "utter", "talk", "communicate", "voice"],
      pl: ["mówić", "wyrażać", "rozmawiać", "komunikować", "głos"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Lock",
      pl: "Zapięcie",
    },
    forbiddenWords: {
      en: ["secure", "key", "mechanism", "door", "safeguard"],
      pl: ["bezpieczny", "klucz", "mechanizm", "zamek", "ochrona"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Physical",
      pl: "Fizyczny",
    },
    forbiddenWords: {
      en: ["bodily", "mental", "education", "chemical", "tangible"],
      pl: ["cielesny", "psychiczny", "wychowanie", "chemiczny", "namacalny"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Fossil",
      pl: "Skamieniałość",
    },
    forbiddenWords: {
      en: ["remains", "bone", "dinosaur", "prehistoric", "excavation"],
      pl: ["szczątki", "kość", "dinozaur", "prehistoria", "wykopalisko"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Infinite",
      pl: "Nieskończony",
    },
    forbiddenWords: {
      en: ["limitless", "endless", "forever", "everlasting", "eternal"],
      pl: ["bezgraniczny", "wieczny", "zawsze", "nieustanny", "niekończący"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Survival",
      pl: "Przetrwanie",
    },
    forbiddenWords: {
      en: ["endurance", "resilience", "perseverance", "life", "instinct"],
      pl: ["wytrzymałość", "odporność", "wytrwałość", "życie", "instynkt"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Economics",
      pl: "Ekonomia",
    },
    forbiddenWords: {
      en: ["money", "finance", "market", "trade", "business"],
      pl: ["pieniądze", "finanse", "rynek", "handel", "biznes"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Pass",
      pl: "Wejściówka",
    },
    forbiddenWords: {
      en: ["ticket", "permit", "access", "entrance", "clearance"],
      pl: ["bilet", "pozwolenie", "dostęp", "wstęp", "zezwolenie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Negotiation",
      pl: "Negocjacje",
    },
    forbiddenWords: {
      en: ["bargaining", "compromise", "discussion", "agreement", "contract"],
      pl: ["targowanie", "kompromis", "dyskusja", "porozumienie", "kontrakt"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Wait",
      pl: "Czekać",
    },
    forbiddenWords: {
      en: ["delay", "pause", "patience", "long", "postpone"],
      pl: ["opóźnienie", "pauza", "cierpliwość", "długo", "przełożyć"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Variable",
      pl: "Zmienna",
    },
    forbiddenWords: {
      en: ["algebra", "constant", "mathematics", "uncertain", "random"],
      pl: ["algebra", "stała", "matematyka", "niepewny", "losowy"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Carry",
      pl: "Nosić",
    },
    forbiddenWords: {
      en: ["transport", "convey", "bring", "hold", "bag"],
      pl: ["transport", "przekazywać", "przynieść", "trzymać", "torba"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Response",
      pl: "Odpowiedź",
    },
    forbiddenWords: {
      en: ["answer", "reply", "reaction", "feedback", "question"],
      pl: ["informacja", "wiadomość", "reakcja", "zwrotna", "pytanie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Crime",
      pl: "Przestępczość",
    },
    forbiddenWords: {
      en: ["offense", "punishment", "illegal", "violence", "criminal"],
      pl: ["wykroczenie", "kara", "nielegalny", "przemoc", "kryminalista"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Ordinary",
      pl: "Zwyczajny",
    },
    forbiddenWords: {
      en: ["normal", "typical", "regular", "common", "average"],
      pl: ["normalny", "typowy", "zwykły", "powszechny", "przeciętny"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Problem",
      pl: "Problem",
    },
    forbiddenWords: {
      en: ["issue", "challenge", "math", "obstacle", "solve"],
      pl: ["zadanie", "wyzwanie", "matematyka", "przeszkoda", "rozwiązywać"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Vote",
      pl: "Głosować",
    },
    forbiddenWords: {
      en: ["ballot", "election", "decision", "choose", "poll"],
      pl: ["karta", "wybory", "decyzja", "wybór", "ankieta"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Cheque",
      pl: "Czek",
    },
    forbiddenWords: {
      en: ["check", "payment", "bank", "money", "transaction"],
      pl: ["gotówka", "płatność", "bank", "pieniądze", "transakcja"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Offspring",
      pl: "Potomstwo",
    },
    forbiddenWords: {
      en: ["children", "progeny", "descendants", "kids", "family"],
      pl: ["dzieci", "sukcesor", "zstępny", "dzieci", "rodzina"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Electron",
      pl: "Elektron",
    },
    forbiddenWords: {
      en: ["particle", "atom", "charge", "neutron", "proton"],
      pl: ["cząsteczka", "atom", "ładunek", "neutron", "proton"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Pen",
      pl: "Długopis",
    },
    forbiddenWords: {
      en: ["write", "ink", "paper", "quill", "pencil"],
      pl: ["pisać", "atrament", "papier", "pióro", "ołówek"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Property",
      pl: "Nieruchomość",
    },
    forbiddenWords: {
      en: ["asset", "belongings", "owner", "house", "land"],
      pl: ["własność", "mienie", "właściciel", "dom", "ziemia"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Cake",
      pl: "Ciasto",
    },
    forbiddenWords: {
      en: ["bake", "sweet", "birthday", "icing", "chocolate"],
      pl: ["piec", "słodki", "urodziny", "polewa", "czekolada"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Concern",
      pl: "Obawa",
    },
    forbiddenWords: {
      en: ["worry", "anxiety", "care", "issue", "problem"],
      pl: ["zmartwienie", "niepokój", "troska", "sprawa", "problem"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Reptile",
      pl: "Gad",
    },
    forbiddenWords: {
      en: ["snake", "scale", "lizard", "amphibian", "mammal"],
      pl: ["wąż", "łuska", "jaszczurka", "płaz", "ssak"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Comprehensive",
      pl: "Wszechstronny",
    },
    forbiddenWords: {
      en: ["complete", "full", "total", "thorough", "exhaustive"],
      pl: ["kompletny", "pełny", "całkowity", "gruntowny", "wyczerpujący"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Path",
      pl: "Ścieżka",
    },
    forbiddenWords: {
      en: ["way", "route", "road", "walk", "trail"],
      pl: ["droga", "szlak", "trasa", "chodzić", "rowerowa"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Comedy",
      pl: "Komedia",
    },
    forbiddenWords: {
      en: ["humor", "funny", "laugh", "giggle", "drama"],
      pl: ["humor", "zabawny", "śmiech", "chichot", "serial"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Deposit",
      pl: "Depozyt",
    },
    forbiddenWords: {
      en: ["withdraw", "safe", "bank", "money", "account"],
      pl: ["wypłacać", "bezpieczny", "bank", "pieniądze", "konto"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Pair",
      pl: "Para",
    },
    forbiddenWords: {
      en: ["two", "couple", "double", "twin", "single"],
      pl: ["dwa", "woda", "podwójny", "bliźniak", "jeden"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Electronics",
      pl: "Elektronika",
    },
    forbiddenWords: {
      en: ["device", "technology", "computer", "gadget", "wire"],
      pl: ["urządzenie", "technologia", "komputer", "gadżet", "przewód"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Notice",
      pl: "Zauważyć",
    },
    forbiddenWords: {
      en: ["observe", "perceive", "realize", "recognize", "see"],
      pl: ["obserwować", "dostrzegać", "uświadamiać sobie", "rozpoznawać", "zobaczyć"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Pudding",
      pl: "Budyń",
    },
    forbiddenWords: {
      en: ["dessert", "sweet", "custard", "rice", "chocolate"],
      pl: ["deser", "słodki", "krem", "ryżowy", "czekolada"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Adoption",
      pl: "Adopcja",
    },
    forbiddenWords: {
      en: ["foster", "care", "family", "parent", "legal"],
      pl: ["zastępcza", "opieka", "rodzina", "rodzic", "prawny"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Greeting",
      pl: "Powitanie",
    },
    forbiddenWords: {
      en: ["welcome", "salutation", "hello", "hi", "meet"],
      pl: ["witamy", "pozdrowienie", "cześć", "hej", "spotykać"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Convulsion",
      pl: "Drgawki",
    },
    forbiddenWords: {
      en: ["spasm", "seizure", "tremor", "fit", "contraction"],
      pl: ["spazm", "drgawki", "drżenie", "napad", "skurcz"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Able",
      pl: "Zdolny",
    },
    forbiddenWords: {
      en: ["capable", "competent", "skilled", "talented", "can"],
      pl: ["sprawny", "kompetentny", "umiejętny", "utalentowany", "umieć"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Manage",
      pl: "Zarządzać",
    },
    forbiddenWords: {
      en: ["executive", "control", "supervise", "direct", "boss"],
      pl: ["menadżer", "kontrolować", "nadzorować", "kierować", "szef"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Reader",
      pl: "Czytelnik",
    },
    forbiddenWords: {
      en: ["book", "literary", "writer", "worm", "novel"],
      pl: ["książka", "literacki", "pisarz", "mol", "powieść"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Fail",
      pl: "Niepowodzenie",
    },
    forbiddenWords: {
      en: ["triumph", "unsuccessful", "flunk", "pass", "disappoint"],
      pl: ["sukces", "nieudany", "oblać", "zdawać", "rozczarować"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Housewife",
      pl: "Gospodyni domowa",
    },
    forbiddenWords: {
      en: ["mother", "husband", "domestic", "caretaker", "apron"],
      pl: ["matka", "mąż", "domowy", "opiekun", "fartuch"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Invention",
      pl: "Wynalazek",
    },
    forbiddenWords: {
      en: ["create", "innovate", "patent", "engineer", "idea"],
      pl: ["tworzyć", "innowacja", "patent", "inżynier", "pomysł"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Challenge",
      pl: "Wyzwanie",
    },
    forbiddenWords: {
      en: ["test", "difficulty", "dare", "struggle", "conquer"],
      pl: ["test", "trudność", "prowokacja", "walka", "pokonać"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Discovery",
      pl: "Odkrycie",
    },
    forbiddenWords: {
      en: ["Columbus", "reveal", "find", "explore", "new"],
      pl: ["Kolumb", "ujawnić", "znaleźć", "badać", "nowy"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Laughter",
      pl: "Śmiech",
    },
    forbiddenWords: {
      en: ["joy", "giggle", "hilarious", "smile", "joke"],
      pl: ["radość", "chichotać", "zabawny", "żart", "dowcip"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Inspiration",
      pl: "Inspiracja",
    },
    forbiddenWords: {
      en: ["motivate", "creativity", "spark", "idea", "muse"],
      pl: ["motywować", "kreatywność", "iskra", "pomysł", "muza"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Wisdom",
      pl: "Mądrość",
    },
    forbiddenWords: {
      en: ["knowledge", "experience", "tooth", "intelligence", "age"],
      pl: ["wiedza", "doświadczenie", "ząb", "inteligencja", "wiek"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Generosity",
      pl: "Hojność",
    },
    forbiddenWords: {
      en: ["charity", "kindness", "giving", "liberality", "philanthropy"],
      pl: ["charytatywna", "życzliwość", "dawanie", "szczodrość", "filantropia"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Imagination",
      pl: "Wyobraźnia",
    },
    forbiddenWords: {
      en: ["creativity", "fantasy", "vivid", "vision", "dream"],
      pl: ["kreatywność", "fantazja", "bujna", "wizja", "marzenie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Empathy",
      pl: "Empatia",
    },
    forbiddenWords: {
      en: ["compassion", "understanding", "emotional", "feel", "pity"],
      pl: ["współczuć", "zrozumienie", "emocjonalny", "litość", "żałować"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Persistence",
      pl: "Wytrwałość",
    },
    forbiddenWords: {
      en: ["determination", "perseverance", "tenacity", "endurance", "resilience"],
      pl: ["determinacja", "nieustępliwość", "upór", "zawziętość", "wytrzymałość"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Achievement",
      pl: "Osiągnięcie",
    },
    forbiddenWords: {
      en: ["accomplishment", "success", "attainment", "victory", "triumph"],
      pl: ["dokonanie", "sukces", "zdobycie", "zwycięstwo", "triumf"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Software",
      pl: "Oprogramowanie",
    },
    forbiddenWords: {
      en: ["program", "application", "computer", "code", "hardware"],
      pl: ["program", "aplikacja", "komputer", "kod", "sprzęt"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Weak",
      pl: "Słaby",
    },
    forbiddenWords: {
      en: ["feeble", "fragile", "frail", "strong", "powerless"],
      pl: ["nikły", "kruchy", "delikatny", "silny", "bezsilny"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Competition",
      pl: "Konkurencja",
    },
    forbiddenWords: {
      en: ["contest", "rivalry", "olympics", "win", "opponent"],
      pl: ["konkurs", "rywalizacja", "olimpiada", "wygrać", "przeciwnik"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Stall",
      pl: "Stragan",
    },
    forbiddenWords: {
      en: ["booth", "market", "vendor", "stand", "kiosk"],
      pl: ["stoisko", "rynek", "sprzedawca", "targ", "budka"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Pattern",
      pl: "Wzór",
    },
    forbiddenWords: {
      en: ["design", "material", "template", "repetition", "sequence"],
      pl: ["projekt", "materiał", "szablon", "powtórzenie", "sekwencja"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Knife",
      pl: "Nóż",
    },
    forbiddenWords: {
      en: ["blade", "cut", "sharp", "stab", "fork"],
      pl: ["ostrze", "kroić", "ostry", "dźgnąć", "widelec"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Calorie",
      pl: "Kaloria",
    },
    forbiddenWords: {
      en: ["energy", "fat", "diet", "food", "burn"],
      pl: ["energia", "tłuszcz", "dieta", "jedzenie", "spalić"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Instruction",
      pl: "Instrukcja",
    },
    forbiddenWords: {
      en: ["direction", "guidance", "follow", "order", "manual"],
      pl: ["kierunek", "wskazówka", "stosować", "kolejność", "obsługa"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Reputation",
      pl: "Reputacja",
    },
    forbiddenWords: {
      en: ["image", "status", "standing", "bad", "smear"],
      pl: ["wizerunek", "status", "renoma", "zła", "oczerniać"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Disability",
      pl: "Niepełnosprawność",
    },
    forbiddenWords: {
      en: ["impairment", "handicap", "condition", "limitation", "wheelchair"],
      pl: ["upośledzenie", "kalectwo", "inwalidztwo", "ograniczenie", "wózek"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Payment",
      pl: "Płatność",
    },
    forbiddenWords: {
      en: ["transaction", "bill", "money", "due", "fee"],
      pl: ["transakcja", "rachunek", "pieniądze", "opłata", "należność"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "A lone wolf",
      pl: "Samotny wilk",
    },
    forbiddenWords: {
      en: ["solitary", "independent", "individual", "isolate", "pack"],
      pl: ["ustronny", "niezależny", "indywidualny", "izolować", "stado"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Hit below the belt",
      pl: "Cios poniżej pasa",
    },
    forbiddenWords: {
      en: ["unfair", "blow", "dirty", "cheap", "tactic"],
      pl: ["niesprawiedliwy", "nieczysto", "nieuczciwy", "tani", "taktyka"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Drop like flies",
      pl: "Padać jak muchy",
    },
    forbiddenWords: {
      en: ["die", "en masse", "soldier", "suffer", "group"],
      pl: ["umierać", "masowo", "żołnierz", "cierpieć", "grupa"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Knuckle down",
      pl: "Zakasać rękawy",
    },
    forbiddenWords: {
      en: ["focus", "work", "concentrate", "dedicate", "commit"],
      pl: ["skupienie", "pracować", "koncentrować się", "poświęcać", "zaangażować"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Foam at the mouth",
      pl: "Toczyć pianę",
    },
    forbiddenWords: {
      en: ["anger", "rage", "fury", "annoy", "saliva"],
      pl: ["złość", "wściekłość", "furia", "denerwować", "ślina"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Beat around the bush",
      pl: "Owijać w bawełnę",
    },
    forbiddenWords: {
      en: ["avoid", "evasive", "indirect", "elude", "directly"],
      pl: ["unikać", "wymijający", "bezpośrednio", "omijać", "wprost"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Don't look a gift horse in the mouth",
      pl: "Darowanemu koniowi nie zagląda się w zęby",
    },
    forbiddenWords: {
      en: ["appreciate", "inspect", "question", "appreciate", "gift"],
      pl: ["docenić", "sprawdzać", "pytać", "wdzięczność", "prezent"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "High and dry",
      pl: "Samotny jak palec",
    },
    forbiddenWords: {
      en: ["abandoned", "stranded", "alone", "helpless", "moist"],
      pl: ["opuszczony", "pozostawiony", "bezsilny", "bezradny", "porzucony"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Lickety split",
      pl: "Na złamanie karku",
    },
    forbiddenWords: {
      en: ["quick", "swift", "rapid", "speed", "fast"],
      pl: ["szybki", "błyskawiczny", "gwałtowny", "prędkość", "natychmiastowy"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Poke fun at",
      pl: "Nabijać się",
    },
    forbiddenWords: {
      en: ["mock", "tease", "laugh", "ridicule", "jest"],
      pl: ["drwić", "drażnić", "śmiać się", "kpić", "pośmiewisko"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Smell a rat",
      pl: "Czuć pismo nosem",
    },
    forbiddenWords: {
      en: ["sense", "detect", "suspect", "doubt", "danger"],
      pl: ["zmysł", "odkrywać", "podejrzewać", "wątpliwość", "niebezpieczeństwo"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Cut to the chase",
      pl: "Przejść do sedna",
    },
    forbiddenWords: {
      en: ["point", "direct", "shorten", "important", "subject"],
      pl: ["sprawa", "bezpośredni", "skracać", "ważny", "temat"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Needle in a haystack",
      pl: "Igła w stogu siana",
    },
    forbiddenWords: {
      en: ["find", "difficult", "search", "tiny", "impossible"],
      pl: ["znaleźć", "trudny", "szukać", "mały", "niemożliwy"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Don't judge a book by its cover",
      pl: "Nie oceniaj książki po okładce",
    },
    forbiddenWords: {
      en: ["appearance", "assumption", "prejudice", "outer", "worth"],
      pl: ["wygląd", "założenie", "uprzedzenie", "zewnątrzny", "wartość"],
    },
    difficulty: "hard",
  },
  {
    title: {
      en: "Dry",
      pl: "Suchy",
    },
    forbiddenWords: {
      en: ["moist", "wet", "water", "towel", "desert"],
      pl: ["wilgotny", "mokry", "woda", "ręcznik", "pustynia"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Rocket",
      pl: "Rakieta",
    },
    forbiddenWords: {
      en: ["space", "ship", "sky", "launch", "blast"],
      pl: ["kosmos", "statek", "niebo", "wystrzelenie", "eksplozja"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Gravity",
      pl: "Grawitacja",
    },
    forbiddenWords: {
      en: ["force", "Earth", "pull", "weight", "Newton"],
      pl: ["siła", "Ziemia", "przyciąganie", "waga", "Newton"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Want",
      pl: "Chcieć",
    },
    forbiddenWords: {
      en: ["desire", "wish", "get", "need", "lack"],
      pl: ["pragnienie", "życzenie", "dostać", "potrzebować", "brak"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Result",
      pl: "Wynik",
    },
    forbiddenWords: {
      en: ["outcome", "consequence", "effect", "end", "exam"],
      pl: ["rezultat", "konsekwencja", "efekt", "koniec", "egzamin"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Lick",
      pl: "Lizać",
    },
    forbiddenWords: {
      en: ["taste", "tongue", "lollipop", "flavor", "mouth"],
      pl: ["smak", "język", "lizak", "aromat", "usta"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Revolutionary",
      pl: "Rewolucjonista",
    },
    forbiddenWords: {
      en: ["rebel", "radical", "change", "reform", "war"],
      pl: ["buntownik", "radykalny", "zmiana", "rebeliant", "wojna"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Run",
      pl: "Biegać",
    },
    forbiddenWords: {
      en: ["sprint", "jog", "walk", "move", "race"],
      pl: ["sprint", "jogging", "chodzić", "poruszać się", "wyścig"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Tail",
      pl: "Ogon",
    },
    forbiddenWords: {
      en: ["wag", "rear", "rat", "dog", "animal"],
      pl: ["merdać", "tył", "szczur", "pies", "zwierzę"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Suspect",
      pl: "Podejrzany",
    },
    forbiddenWords: {
      en: ["murder", "guilty", "question", "victim", "crime"],
      pl: ["morderstwo", "winny", "pytanie", "ofiara", "przestępstwo"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Weakness",
      pl: "Słabość",
    },
    forbiddenWords: {
      en: ["frailty", "feeble", "ill", "power", "strength"],
      pl: ["wątłość", "nikły", "chory", "moc", "siła"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Isolation",
      pl: "Izolacja",
    },
    forbiddenWords: {
      en: ["solitude", "separation", "loneliness", "island", "alone"],
      pl: ["bezludzie", "separacja", "samotność", "wyspa", "ustronie"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Month",
      pl: "Miesiąc",
    },
    forbiddenWords: {
      en: ["time", "calendar", "year", "week", "day"],
      pl: ["czas", "kalendarz", "rok", "tydzień", "dzień"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Air",
      pl: "Powietrze",
    },
    forbiddenWords: {
      en: ["oxygen", "breathe", "atmosphere", "gas", "wind"],
      pl: ["tlen", "oddychać", "atmosfera", "gaz", "wiatr"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Loop",
      pl: "Pętla",
    },
    forbiddenWords: {
      en: ["circuit", "circle", "repeat", "cycle", "round"],
      pl: ["tor", "koło", "powtarzać", "cykl", "okrągły"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Education",
      pl: "Edukacja",
    },
    forbiddenWords: {
      en: ["learning", "school", "knowledge", "college", "teach"],
      pl: ["nauka", "szkoła", "wiedza", "uniwersytet", "uczyć"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Large",
      pl: "Duży",
    },
    forbiddenWords: {
      en: ["big", "huge", "size", "enormous", "small"],
      pl: ["gruby", "wielki", "rozmiar", "ogromny", "mały"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Context",
      pl: "Kontekst",
    },
    forbiddenWords: {
      en: ["background", "setting", "circumstance", "situation", "environment"],
      pl: ["tło", "otoczenie", "okoliczność", "sytuacja", "środowisko"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Bus",
      pl: "Autobus",
    },
    forbiddenWords: {
      en: ["public", "transport", "vehicle", "stop", "school"],
      pl: ["publiczny", "transport", "pojazd", "przystanek", "szkolny"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Shareholder",
      pl: "Akcjonariusz",
    },
    forbiddenWords: {
      en: ["stock", "ownership", "investor", "company", "equity"],
      pl: ["kapitał", "własność", "inwestor", "firma", "udział"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Sleep",
      pl: "Spać",
    },
    forbiddenWords: {
      en: ["rest", "dream", "night", "bed", "tired"],
      pl: ["odpoczynek", "sen", "noc", "łóżko", "zmęczony"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Plan",
      pl: "Plan",
    },
    forbiddenWords: {
      en: ["strategy", "arrangement", "outline", "schedule", "goal"],
      pl: ["strategia", "układ", "szkic", "harmonogram", "cel"],
    },
    difficulty: "medium",
  },
  {
    title: {
      en: "Percent",
      pl: "Procent",
    },
    forbiddenWords: {
      en: ["hundred", "rate", "fraction", "interest", "portion"],
      pl: ["sto", "wskaźnik", "ułamek", "odsetki", "część"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "President",
      pl: "Prezydent",
    },
    forbiddenWords: {
      en: ["leader", "head", "chief", "government", "country"],
      pl: ["lider", "głowa", "naczelnik", "rząd", "kraj"],
    },
    difficulty: "easy",
  },
  {
    title: {
      en: "Cousin",
      pl: "Kuzyn",
    },
    forbiddenWords: {
      en: ["relative", "family", "uncle", "aunt", "sibling"],
      pl: ["krewny", "rodzina", "wujek", "ciocia", "rodzeństwo"],
    },
    difficulty: "easy",
  },
];

export function getCardsByLanguage(language: "en" | "pl"): Array<Card> {
  return CARDS.map((card) => ({
    title: card.title[language],
    forbiddenWords: card.forbiddenWords[language],
    difficulty: card.difficulty as "easy" | "medium" | "hard",
  }));
}

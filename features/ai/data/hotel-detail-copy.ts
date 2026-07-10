import type { Locale } from "@/i18n/routing";

type HotelDetailCopy = {
  tagline: string;
  description: string;
  highlights: [string, string, string];
};

const hotelDetailCopy: Record<Locale, Record<string, HotelDetailCopy>> = {
  tr: {
    "raffles-istanbul": {
      tagline: "Zorlu Center'da çağdaş lüks ve şehir manzarası",
      description:
        "Raffles Istanbul, İstanbul'un modern yüzünde geniş süitler, spa ve seçkin restoranlarıyla üst segment konaklama sunar. İş ve lüks şehir kaçamakları için idealdir.",
      highlights: ["Geniş süitler ve teraslar", "Ödüllü spa", "Nişantaşı ve Boğaz'a yakın"],
    },
    "swissotel-bosphorus": {
      tagline: "Maçka parkına bakan ikonik Boğaz oteli",
      description:
        "Swissôtel The Bosphorus, yeşil park manzarası ve Boğaz panoramasıyla tanınır. Havuz, spa ve çoklu restoran seçenekleriyle hem iş hem tatil konaklamalarına uygundur.",
      highlights: ["Boğaz ve park manzarası", "Kapalı ve açık havuzlar", "Merkezi konum"],
    },
    "pera-palace": {
      tagline: "Orient Express mirasının yaşayan simgesi",
      description:
        "Pera Palace, İstiklal Caddesi yakınında tarihi karakterini koruyan efsanevi bir İstanbul otelidir. Kültür ve mimari meraklıları için benzersiz bir deneyim sunar.",
      highlights: ["Tarihi mimari", "Galata yakını", "Klasik lüks atmosfer"],
    },
    "museum-hotel-cappadocia": {
      tagline: "Antika koleksiyonlu mağara lüksü",
      description:
        "Museum Hotel, Kapadokya'nın kayalık yapısına entegre edilmiş odaları ve eşsiz balon manzarasıyla lüks mağara konaklamasının öncülerindendir.",
      highlights: ["Mağara ve taş odalar", "Balon seyri terasları", "Gurme mutfak"],
    },
    "argos-cappadocia": {
      tagline: "Üçhisar'da teraslar ve mağara odalar",
      description:
        "Argos in Cappadocia, restore edilmiş taş yapılardan oluşan butik kompleksinde sakin bir Kapadokya deneyimi sunar. Balon kalkışlarını izlemek için ideal konumdadır.",
      highlights: ["Teras manzaraları", "Mağara süitler", "Butik şarap mahzeni"],
    },
    "sultan-cave-suites": {
      tagline: "Göreme'de teraslı balon manzaralı mağara otel",
      description:
        "Sultan Cave Suites, Kapadokya'nın en çok tercih edilen teras manzaralarından birine sahiptir. Romantik kaçamaklar ve fotoğraf tutkunları için popülerdir.",
      highlights: ["İkonik teras manzarası", "Mağara odalar", "Göreme merkeze yakın"],
    },
    "regnum-carya": {
      tagline: "Belek'te golf ve sahil lüksü",
      description:
        "Regnum Carya, geniş sahili, golf imkânları ve premium all-inclusive konseptiyle Antalya'nın en prestijli resortlarından biridir.",
      highlights: ["Championship golf", "Geniş plaj", "Premium all-inclusive"],
    },
    "gloria-verde-resort": {
      tagline: "Belek'te golf ve aile dostu resort",
      description:
        "Gloria Verde Resort, golf sahaları, uzun sahil şeridi ve çocuk kulüpleriyle aileler ve golf tutkunları için dengeli bir resort deneyimi sunar.",
      highlights: ["Golf sahaları", "Uzun sahil", "Aile aktiviteleri"],
    },
    "lara-barut-collection": {
      tagline: "Lara sahilinde modern all-inclusive konfor",
      description:
        "Barut Collection Lara, Antalya havalimanına yakın konumu ve geniş havuz alanlarıyla pratik bir Akdeniz tatili sunar.",
      highlights: ["Havalimanına yakın", "Geniş havuz alanları", "All-inclusive"],
    },
    "d-maris-bodrum": {
      tagline: "Hisarönü Körfezi'nde izole lüks koy",
      description:
        "D Maris Bay, Bodrum'un en özel koylarından birinde konumlanır. Özel plaj, marina ve panoramik manzarasıyla ultra lüks kaçamaklar için tasarlanmıştır.",
      highlights: ["Özel koy ve plaj", "Marina", "Panoramik manzara"],
    },
    "amanruya-bodrum": {
      tagline: "Zeytinlikler içinde sakin Aman lüksü",
      description:
        "Amanruya, Bodrum yarımadasında huzurlu bir iltica sunar. Taş pavilions, özel havuzlar ve sade lüks anlayışıyla öne çıkar.",
      highlights: ["Özel havuzlu pavilions", "Sakin atmosfer", "Gurme mutfak"],
    },
    "vogue-hotel-supreme": {
      tagline: "Torba'da canlı all-inclusive resort",
      description:
        "Vogue Hotel Supreme Bodrum, genç çiftler ve aileler için enerjik bir resort atmosferi, plaj kulübü ve zengin yeme-içme seçenekleri sunar.",
      highlights: ["Plaj kulübü", "All-inclusive", "Canlı atmosfer"],
    },
    "shangri-la-paris": {
      tagline: "Eyfel'e bakan saray otel deneyimi",
      description:
        "Shangri-La Paris, Trocadéro yakınında restore edilmiş bir sarayda konumlanır. Paris'in simge yapılarına bakan odaları ve spa'sı ile lüks şehir tatili sunar.",
      highlights: ["Eyfel manzarası", "Tarihi saray binası", "Spa ve kapalı havuz"],
    },
    "le-bristol-paris": {
      tagline: "Faubourg Saint-Honoré'de Paris klasiği",
      description:
        "Le Bristol, Paris'in en seçkin adreslerinden birinde çağdaş Fransız lüksünü temsil eder. Üç Michelin yıldızlı mutfağı ve bahçesiyle ünlüdür.",
      highlights: ["Michelin yıldızlı restoran", "Şehir bahçesi", "Butik lüks"],
    },
    "atlantis-the-palm": {
      tagline: "Palmiye'de su parkı ve resort eğlencesi",
      description:
        "Atlantis The Palm, Dubai'nin en tanınmış resortlarından biridir. Aquaventure, geniş plajı ve aile odaklı aktiviteleriyle her yaştan misafire hitap eder.",
      highlights: ["Aquaventure su parkı", "Geniş plaj", "Aile aktiviteleri"],
    },
    "jumeirah-beach-hotel": {
      tagline: "Burj Al Arab manzaralı dalga formu ikon",
      description:
        "Jumeirah Beach Hotel, Dubai sahiline uzanan dalga siluetiyle tanınır. Özel plaj, spa ve Burj Al Arab manzarası sunar.",
      highlights: ["Özel plaj", "Burj Al Arab manzarası", "Aile dostu resort"],
    },
    "hotel-de-russie-rome": {
      tagline: "Piazza del Popolo yakınında Rocco Forte lüksü",
      description:
        "Hotel de Russie, Roma'nın merkezinde gizli bahçesi ve zarif odalarıyla şehir kaçamakları için ideal bir butik lüks oteldir.",
      highlights: ["Gizli bahçe", "Merkezi konum", "Spa"],
    },
    "hassler-roma": {
      tagline: "Spanish Steps'te Roma'nın efsanevi oteli",
      description:
        "Hassler Roma, Piazza di Spagna'nın tepesinde konumlanır. Panoramik teras restoranı ve klasik lüks hizmetiyle Roma'nın simge otellerindendir.",
      highlights: ["Spanish Steps konumu", "Panoramik teras", "Klasik lüks"],
    },
    "langham-london": {
      tagline: "Regent Street yakınında Londra klasiği",
      description:
        "The Langham London, lüks otelciliğin öncülerinden biridir. Merkezi konumu, spa'sı ve afternoon tea geleneğiyle tanınır.",
      highlights: ["Merkezi Londra", "Spa ve havuz", "Afternoon tea"],
    },
    "mandarin-oriental-barcelona": {
      tagline: "Passeig de Gràcia'da modern Katalan lüksü",
      description:
        "Mandarin Oriental Barcelona, şehrin en seçkin caddesinde konumlanır. Çatı katı lounge, spa ve tasarım odaklı odalarıyla öne çıkar.",
      highlights: ["Passeig de Gràcia", "Çatı katı lounge", "Spa"],
    },
  },
  en: {
    "raffles-istanbul": {
      tagline: "Contemporary luxury with skyline views at Zorlu Center",
      description:
        "Raffles Istanbul delivers upscale suites, spa rituals, and fine dining in one of the city's most modern addresses — ideal for business and luxury city breaks.",
      highlights: ["Spacious suites and terraces", "Award-winning spa", "Near Nişantaşı and the Bosphorus"],
    },
    "swissotel-bosphorus": {
      tagline: "Iconic Bosphorus hotel overlooking Maçka Park",
      description:
        "Swissôtel The Bosphorus is known for park and strait panoramas, pools, spa facilities, and multiple restaurants — suited to both leisure and business stays.",
      highlights: ["Bosphorus and park views", "Indoor and outdoor pools", "Central location"],
    },
    "pera-palace": {
      tagline: "A living legend of the Orient Express era",
      description:
        "Pera Palace preserves its historic character near Istiklal Avenue, offering a distinctive stay for culture lovers and architecture enthusiasts.",
      highlights: ["Historic architecture", "Near Galata", "Classic luxury atmosphere"],
    },
    "museum-hotel-cappadocia": {
      tagline: "Cave luxury with an antique collection",
      description:
        "Museum Hotel blends rock-cut rooms with balloon-view terraces and gourmet dining — a pioneer of luxury cave stays in Cappadocia.",
      highlights: ["Cave and stone rooms", "Balloon-view terraces", "Gourmet cuisine"],
    },
    "argos-cappadocia": {
      tagline: "Terraced cave rooms in Uchisar",
      description:
        "Argos in Cappadocia is a restored stone village complex offering a serene stay and one of the best vantage points for balloon flights.",
      highlights: ["Terrace panoramas", "Cave suites", "Boutique wine cellar"],
    },
    "sultan-cave-suites": {
      tagline: "Goreme's terrace hotel for balloon views",
      description:
        "Sultan Cave Suites is famous for its rooftop balloon panoramas and cave rooms — a favorite for romantic escapes and photography lovers.",
      highlights: ["Iconic terrace views", "Cave rooms", "Close to Goreme center"],
    },
    "regnum-carya": {
      tagline: "Golf and beach luxury in Belek",
      description:
        "Regnum Carya combines a long beachfront, championship golf, and a premium all-inclusive concept on the Antalya coast.",
      highlights: ["Championship golf", "Wide beach", "Premium all-inclusive"],
    },
    "gloria-verde-resort": {
      tagline: "Golf-forward family resort in Belek",
      description:
        "Gloria Verde Resort balances golf courses, a long beach, and kids clubs for families and golf enthusiasts alike.",
      highlights: ["Golf courses", "Long beachfront", "Family activities"],
    },
    "lara-barut-collection": {
      tagline: "Modern all-inclusive comfort on Lara Beach",
      description:
        "Barut Collection Lara offers a practical Mediterranean escape with large pool areas and proximity to Antalya Airport.",
      highlights: ["Near the airport", "Large pool areas", "All-inclusive"],
    },
    "d-maris-bodrum": {
      tagline: "Secluded luxury bay in Hisarönü",
      description:
        "D Maris Bay sits in one of Bodrum's most private coves with a marina, private beach, and panoramic Aegean views.",
      highlights: ["Private cove and beach", "Marina", "Panoramic views"],
    },
    "amanruya-bodrum": {
      tagline: "Serene Aman luxury among olive groves",
      description:
        "Amanruya offers stone pavilions, private pools, and understated luxury on the Bodrum peninsula.",
      highlights: ["Pavilions with private pools", "Peaceful setting", "Gourmet dining"],
    },
    "vogue-hotel-supreme": {
      tagline: "Vibrant all-inclusive resort in Torba",
      description:
        "Vogue Hotel Supreme Bodrum brings a lively beach-club atmosphere, all-inclusive dining, and broad appeal for couples and families.",
      highlights: ["Beach club", "All-inclusive", "Energetic vibe"],
    },
    "shangri-la-paris": {
      tagline: "Palace hotel living with Eiffel Tower views",
      description:
        "Shangri-La Paris occupies a restored palace near Trocadéro with rooms facing Paris landmarks, spa facilities, and refined service.",
      highlights: ["Eiffel Tower views", "Historic palace building", "Spa and pool"],
    },
    "le-bristol-paris": {
      tagline: "Parisian classic on Faubourg Saint-Honoré",
      description:
        "Le Bristol represents contemporary French luxury with a Michelin-starred restaurant and a celebrated interior garden.",
      highlights: ["Michelin-starred dining", "Interior garden", "Boutique luxury"],
    },
    "atlantis-the-palm": {
      tagline: "Waterpark resort fun on the Palm",
      description:
        "Atlantis The Palm is one of Dubai's best-known resorts, pairing Aquaventure, a wide beach, and family-focused entertainment.",
      highlights: ["Aquaventure waterpark", "Wide beach", "Family activities"],
    },
    "jumeirah-beach-hotel": {
      tagline: "Wave-shaped icon facing Burj Al Arab",
      description:
        "Jumeirah Beach Hotel is a Dubai classic with a private beach, spa, and views of the Burj Al Arab.",
      highlights: ["Private beach", "Burj Al Arab views", "Family-friendly resort"],
    },
    "hotel-de-russie-rome": {
      tagline: "Rocco Forte luxury near Piazza del Popolo",
      description:
        "Hotel de Russie offers elegant rooms and a secret garden in the heart of Rome — ideal for refined city breaks.",
      highlights: ["Secret garden", "Central location", "Spa"],
    },
    "hassler-roma": {
      tagline: "Legendary Roman address at the Spanish Steps",
      description:
        "Hassler Roma sits atop Piazza di Spagna with a panoramic terrace restaurant and timeless luxury service.",
      highlights: ["Spanish Steps location", "Panoramic terrace", "Classic luxury"],
    },
    "langham-london": {
      tagline: "London classic near Regent Street",
      description:
        "The Langham London is one of hospitality's original grand hotels, known for its spa, central location, and afternoon tea tradition.",
      highlights: ["Central London", "Spa and pool", "Afternoon tea"],
    },
    "mandarin-oriental-barcelona": {
      tagline: "Modern Catalan luxury on Passeig de Gràcia",
      description:
        "Mandarin Oriental Barcelona sits on the city's most prestigious avenue with a rooftop lounge, spa, and design-led rooms.",
      highlights: ["Passeig de Gràcia", "Rooftop lounge", "Spa"],
    },
  },
  es: {
    "raffles-istanbul": {
      tagline: "Lujo contemporáneo con vistas al skyline en Zorlu Center",
      description:
        "Raffles Istanbul ofrece suites amplias, spa y alta cocina en una de las direcciones más modernas de Estambul.",
      highlights: ["Suites amplias y terrazas", "Spa galardonado", "Cerca de Nişantaşı y el Bósforo"],
    },
    "swissotel-bosphorus": {
      tagline: "Hotel icónico del Bósforo con vistas al parque Maçka",
      description:
        "Swissôtel The Bosphorus destaca por sus panorámicas, piscinas, spa y varios restaurantes en el centro de Estambul.",
      highlights: ["Vistas al Bósforo y al parque", "Piscinas interior y exterior", "Ubicación céntrica"],
    },
    "pera-palace": {
      tagline: "Leyenda viva de la era del Orient Express",
      description:
        "Pera Palace conserva su carácter histórico cerca de Istiklal, ideal para amantes de la cultura y la arquitectura.",
      highlights: ["Arquitectura histórica", "Cerca de Galata", "Ambiente clásico de lujo"],
    },
    "museum-hotel-cappadocia": {
      tagline: "Lujo en cueva con colección de antigüedades",
      description:
        "Museum Hotel combina habitaciones excavadas en roca, terrazas con globos y gastronomía de autor en Capadocia.",
      highlights: ["Habitaciones en cueva y piedra", "Terrazas con globos", "Cocina gourmet"],
    },
    "argos-cappadocia": {
      tagline: "Habitaciones en cueva con terrazas en Uchisar",
      description:
        "Argos in Cappadocia es un complejo restaurado con vistas serenas y uno de los mejores puntos para ver globos.",
      highlights: ["Panorámicas desde terrazas", "Suites en cueva", "Bodega boutique"],
    },
    "sultan-cave-suites": {
      tagline: "Terraza icónica para ver globos en Goreme",
      description:
        "Sultan Cave Suites es famoso por su azotea y habitaciones en cueva, muy popular para escapadas románticas.",
      highlights: ["Vistas icónicas desde la terraza", "Habitaciones en cueva", "Cerca del centro de Goreme"],
    },
    "regnum-carya": {
      tagline: "Lujo de golf y playa en Belek",
      description:
        "Regnum Carya combina playa, golf de campeonato y un concepto premium todo incluido en Antalya.",
      highlights: ["Golf de campeonato", "Playa amplia", "Todo incluido premium"],
    },
    "gloria-verde-resort": {
      tagline: "Resort familiar con golf en Belek",
      description:
        "Gloria Verde Resort equilibra campos de golf, playa larga y clubes infantiles para familias y golfistas.",
      highlights: ["Campos de golf", "Larga playa", "Actividades familiares"],
    },
    "lara-barut-collection": {
      tagline: "Todo incluido moderno en Lara Beach",
      description:
        "Barut Collection Lara ofrece una escapada mediterránea práctica con amplias piscinas y cercanía al aeropuerto.",
      highlights: ["Cerca del aeropuerto", "Amplias piscinas", "Todo incluido"],
    },
    "d-maris-bodrum": {
      tagline: "Bahía privada de lujo en Hisarönü",
      description:
        "D Maris Bay se encuentra en una de las calas más exclusivas de Bodrum con marina y playa privada.",
      highlights: ["Cala y playa privadas", "Marina", "Vistas panorámicas"],
    },
    "amanruya-bodrum": {
      tagline: "Lujo sereno de Aman entre olivos",
      description:
        "Amanruya ofrece pabellones de piedra, piscinas privadas y lujo discreto en la península de Bodrum.",
      highlights: ["Pabellones con piscina privada", "Entorno tranquilo", "Alta cocina"],
    },
    "vogue-hotel-supreme": {
      tagline: "Resort todo incluido vibrante en Torba",
      description:
        "Vogue Hotel Supreme Bodrum ofrece ambiente de beach club, todo incluido y gran atractivo para parejas y familias.",
      highlights: ["Beach club", "Todo incluido", "Ambiente animado"],
    },
    "shangri-la-paris": {
      tagline: "Palacio con vistas a la Torre Eiffel",
      description:
        "Shangri-La Paris ocupa un palacio restaurado cerca de Trocadéro con habitaciones frente a los monumentos parisinos.",
      highlights: ["Vistas a la Torre Eiffel", "Edificio palaciego histórico", "Spa y piscina"],
    },
    "le-bristol-paris": {
      tagline: "Clásico parisino en Faubourg Saint-Honoré",
      description:
        "Le Bristol representa el lujo francés contemporáneo con restaurante con estrella Michelin y jardín interior.",
      highlights: ["Restaurante con estrella Michelin", "Jardín interior", "Lujo boutique"],
    },
    "atlantis-the-palm": {
      tagline: "Diversión resort con parque acuático en la Palm",
      description:
        "Atlantis The Palm es uno de los resorts más conocidos de Dubái con Aquaventure, playa amplia y actividades familiares.",
      highlights: ["Parque acuático Aquaventure", "Playa amplia", "Actividades familiares"],
    },
    "jumeirah-beach-hotel": {
      tagline: "Icono en forma de ola frente al Burj Al Arab",
      description:
        "Jumeirah Beach Hotel es un clásico de Dubái con playa privada, spa y vistas al Burj Al Arab.",
      highlights: ["Playa privada", "Vistas al Burj Al Arab", "Resort familiar"],
    },
    "hotel-de-russie-rome": {
      tagline: "Lujo Rocco Forte cerca de Piazza del Popolo",
      description:
        "Hotel de Russie ofrece habitaciones elegantes y un jardín secreto en el corazón de Roma.",
      highlights: ["Jardín secreto", "Ubicación céntrica", "Spa"],
    },
    "hassler-roma": {
      tagline: "Dirección legendaria en la Plaza de España",
      description:
        "Hassler Roma se sitúa sobre Piazza di Spagna con terraza panorámica y servicio clásico de lujo.",
      highlights: ["Ubicación en Plaza de España", "Terraza panorámica", "Lujo clásico"],
    },
    "langham-london": {
      tagline: "Clásico londinense cerca de Regent Street",
      description:
        "The Langham London es uno de los grandes hoteles históricos de la ciudad, famoso por su spa y afternoon tea.",
      highlights: ["Londres céntrico", "Spa y piscina", "Afternoon tea"],
    },
    "mandarin-oriental-barcelona": {
      tagline: "Lujo catalán moderno en Passeig de Gràcia",
      description:
        "Mandarin Oriental Barcelona está en la avenida más prestigiosa de la ciudad con lounge en la azotea y spa.",
      highlights: ["Passeig de Gràcia", "Lounge en azotea", "Spa"],
    },
  },
};

export function getHotelDetailCopy(locale: Locale, slug: string): HotelDetailCopy | undefined {
  return hotelDetailCopy[locale]?.[slug] ?? hotelDetailCopy.en[slug];
}

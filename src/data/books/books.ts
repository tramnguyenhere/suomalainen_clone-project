import { v4 as uuidv4 } from 'uuid'
import { BookInterface } from '../../types/types'

export const books: BookInterface[] = [
    {
        id: uuidv4(),
        title: 'Kasvattitytär',
        author: 'Enno Mustonen',
        description: 'Enni Mustosen upea uusi sarja seuraa naisten elämää Suomen historian pyörteissä yli kaksi vuosisataa sitten. Säihkyväsilmäinen ja reipas Hedda Noora Lilliehöök saapuu 17-vuotiaana emännän avuksi ja naitettavaksi - kasvattiäitinsä kotikartanoon, Nordenskiöldien Frugårdiin. Kartanon salskeista nuoristaherroista hän rakastuu laivastossa palvelevaan Ottoon, mutta kosijaksi ilmoittautuu myös Oton totinen isoveli Adolf Gustaf. Lopulta on edessä vaikea valinta. Totteleeko neito järkeään vai sydäntään?Rouvankartanon tarinoita -sarja kuvaa kartanon naisten elämää, iloja ja suruja, mukaansatempaavasti ja todenmakuisesti, niin kuin Enni Mustonen vain osaa.',
        type: 'Kovakantinen',
        price: 25.95,
        discountPercentage: 0,
        rating: 5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/4914953c734546fe93fdb989f878602c9789511454342_1.jpg?v=1678510949&width=800',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus', 'Kuumimmat tulossa olevat kirjauutuudet']
    },
    {
        id: uuidv4(),
        title: 'Tekijä, signeerattu',
        author: 'Enno Mustonen',
        description: 'Rakastetun romaanisarjan upea loppuhuipennus! Viena etsii paikkaansa kuohuvalla 1960-luvulla.Viena on palannut Amerikan-vuosien jälkeen juurilleen Leppävaaran vanhaan huvilaan. Suvun naiset totuttelevat taas elämään saman katon alla, mutta mistä löytyisi työpaikka Vienalle?Onneksi muuan määrätietoinen teräsrouva on ryhtynyt valloittamaan puuvillakoltuillaan Yhdysvaltain markkinoita. Vienasta tulee yksi tarmokkaista naisista, joiden uurastuksen ja uskollisuuden varaan Armi Ratia rakentaa imperiuminsa. Viena pyörii myös kulttuuriradikaalien joukossa ja Lapualaisoopperan kulisseissa, mutta vasta kun hän uskaltaa noudattaa Ida-mumman esimerkkiä, tulee hänestäkin oman elämänsä sankaritar.',
        type: 'Kovakantinen',
        price: 24.95,
        discountPercentage: 0,
        rating: 5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/05170d50a132879fc5775c4f61b223ef359cb805_6418616239563_1_ad818b9a-7df0-4468-bf8e-c6a40c6a4e62.jpg?v=1677165436&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Tekijä',
        author: 'Enno Mustonen',
        description: 'Rakastetun romaanisarjan upea loppuhuipennus! Viena etsii paikkaansa kuohuvalla 1960-luvulla.Viena on palannut Amerikan-vuosien jälkeen juurilleen Leppävaaran vanhaan huvilaan. Suvun naiset totuttelevat taas elämään saman katon alla, mutta mistä löytyisi työpaikka Vienalle?Onneksi muuan määrätietoinen teräsrouva on ryhtynyt valloittamaan puuvillakoltuillaan Yhdysvaltain markkinoita. Vienasta tulee yksi tarmokkaista naisista, joiden uurastuksen ja uskollisuuden varaan Armi Ratia rakentaa imperiuminsa. Viena pyörii myös kulttuuriradikaalien joukossa ja Lapualaisoopperan kulisseissa, mutta vasta kun hän uskaltaa noudattaa Ida-mumman esimerkkiä, tulee hänestäkin oman elämänsä sankaritar. 2199071',
        type: 'Kovakantinen',
        price: 12.95,
        discountPercentage: .48,
        rating: 5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/5ba8ea5d3efe4d37b2020fa019aa0db49789511349334_1.jpg?v=1680169659&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Näkijä',
        author: 'Enno Mustonen',
        description: 'Valkokankaalla rakkaus voittaa lopulta, mutta voiko niin tapahtua Hollywoodin unelmatehtaassa?Elokuussa 1953 menneisyys ja tulevaisuus kohtaavat, kun Kirsti saapuu tapaamaan tytärtään Los Angelesiin. Työ pitää Vienan järjissään silloinkin, kun sydän uhkaa särkyä. Kulisseissa ja pukuhuoneissa Viena näkee tähtien syttyvän ja sammuvan. Kun Vienasta tulee lopulta miss Monroen luottopukija, kyse ei enää ole vain roolivaatteista vaan elämästä ja kuolemasta.Näkijä vie lukijansa niin Tuntemattoman sotilaan joukkueteltoille kuin 20th Century Foxin studiokaupungin loisteliaisiin lavasteisiin.Enni Mustosen menestyssarja jatkuu! 2146841',
        type: 'Kovakantinen',
        price: 24.95,
        discountPercentage: .72,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/0972f9811bf4aae22e84a21c817f2b466f9b97d8_9789511417057_1_ccab39f9-a10a-4b43-b1a8-1dd4c2667433.jpg?v=1680168925&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Pukija',
        author: 'Enno Mustonen',
        description: 'Lukijat lumonnut Syrjästäkatsojan tarinoita -sarja jatkuu! Ida Erikssonin lahjakas tyttärentytär Viena itsenäistyy sodanjälkeisessä Amerikassa, missä kaikki on mahdollista. Jouluna 1949 pula-aika alkaa lopulta helpottaa. Kirsti yrittää sopeutua elämäänsä sotaleskenä ja isättömän Ilpo-pojan äitinä. Tytär Viena on kirjoitusten jälkeen ollut piikomassa Englannissa ja palaamassa jouluksi kotiin.Kirsti on tyttärestään huolissaan, Ida-mumma on puolestaan varma, että taiteellinen ja käsistään kätevä nuori nainen löytää paikkansa maailmasta. Viena suuntaakin muotialalle. Marimekon ensimmäisen muotinäytöksen ja Miss Universum -kisojen kautta hän päätyy Hollywoodiin, elokuvatähtien puvustajaksi. 2817411',
        type: 'Pehmeäkantinen',
        price: 10.95,
        discountPercentage: .37,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/bfd5a2093ff442389d652d273c45b04a9789511388432_1.jpg?v=1680169191&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Sotaleski',
        author: 'Enno Mustonen',
        description: 'Suomen kohtalonvuodet koettelevat Ida Erikssonin perhettä - rakastettu sarja jatkuu Hellekesänä 1939 Kirsti Eriksson matkustaa kymmenvuotiaan tyttärensä Vienan kanssa Laatokan rannalle tapaamaan miestään Iivoa, joka on lähtenyt vapaaehtoisena linnoitustöihin Karjalan kannakselle. Vaikka muut vähättelevät sodan uhkaa, Ida tuntee nahoissaan, että ankarat ajat ovat tulossa. Marraskuun viimeisen päivän aamuna pommikoneet ilmestyvät Helsingin taivaalle. Kansakunnan eloonjäämistaistelu tempaa Kirstin ompelukoneen äärestä Finlandia Uutistoimistoon ranskan kielen tulkiksi. Idan huvilasta tulee jälleen naisten, lasten ja vanhusten turvapaikka, mutta miten käy Iivon ja kaksospoikien siellä jossakin? 7185361',
        type: 'Pehmeäkantinen',
        price: 38.95,
        discountPercentage: .82,
        rating: 5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/9b2a72f1e4e22af93224f5a9fcddf8e0ea004184_9789511349341_1_a1e1de0e-ec8a-40c4-babc-a757aa90b7cb.jpg?v=1680169481&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Taiteilijan vaimo',
        author: 'Enno Mustonen',
        description: 'Taiteilijaelämää ja muodin huumaa villillä 1920-luvulla. Hurjaan suosioon singahtanut romaanisarja jatkuu!Ida Erikssonin tytär Kirsti palaa kotiin ja avioituu äitinsä iloksi kuvanveistäjä Ilmari Aaltosen kanssa. Unelmat uhkaavat kuitenkin paleltua pakkasissa. Niinpä nuoripari palaa seuraavana keväänä etelään, hummailee pitkin Rivieraa Tulenkantajien seurassa ja saapuu Suomeen entistä vahvempana. Menestys odottaa nurkan takana, mutta kuinka käy muotitalon, kun Kirsti on raskaana? Entä onnistuuko Ilmari väistämään Minna Craucherin juonet? Pikku Vienan syntymä hellyttää Idan lopulta paljastamaan totuuden Kirstin isästä. Ankarien aikojen koittaessa Ida ja Kirsti turvautuvat jälleen toisiinsa. 3210751',
        type: 'Pehmeäkantinen',
        price: 24.95,
        discountPercentage: .64,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/080ff2009ea24b25af9d174576b713729789511318699_1.jpg?v=1680169603&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Ruokarouvan tytär',
        author: 'Enno Mustonen',
        description: 'Syrjästäkatsojan tarinoita -sarja jatkuuÄkkiä huono omatuntoni vaihtui kuplivaan iloon. Oli vappuaatto, meidän ensimmäinen ylioppilasvappumme Allin kanssa, ja me olimme matkalla juhlimaan!Pikkupiiasta täysihoitolan omistajaksi kohonneen Ida Erikssonin tytär Kirsti tempautuu muodin mekkaan, 1920-luvun Pariisiin. Suosikkisarjassa pääset kurkistamaan merkkihenkilöiden arkielämään kuin Downton Abbeyssa ikään.”Todellinen historiallisen romaanin taitaja.” - Uusimaa 2817331',
        type: 'Pehmeäkantinen',
        price: 10.95,
        discountPercentage: .37,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/970d2f9dda8a40f7889b4e2189fe725a9789511322931_1.jpg?v=1680169317&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Ruokarouva',
        author: 'Enno Mustonen',
        description: 'Lopulta minäkin ennätin metsän varjoista auringon lämpöön ja häikäisevään valoon. Oli pakko seisahtua ja vetää henkeä. Meidän! Tämä paikka oli meidän kotimme eikä mikään mahti maailmassa voisi ajaa meitä täältä pois!Pienen tytön äiti Ida Eriksson ottaa paikkansa itsenäisenä naisena, jonka täysihoitolassa vierailevat Suomen kulttuurielämän merkkihenkilöt."Ida-sarjan historiantulkinta opettaa ymmärtämään menneisyydestä sitäkin aikaa, jota emme ole eläneet, ja kohtaamaan nykyisen ja tulevan." -Kaleva"Mustonen saa erityisen suurta lämpöä ja tunnelmaa kirjoihinsa, jotain sellaista, mitä voi ihan lumovoimaksi nimittää." -Epari 2817121',
        type: 'Pehmeäkantinen',
        price: 10.95,
        discountPercentage: .37,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/8044f2acd3484d2da9dad22a9fa42c839789511306931_1.jpg?v=1680169317&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Emännöitsijä',
        author: 'Enno Mustonen',
        description: 'Enää en ujostellut alastomuuttani Albertin edessä. Ensin seisoin pyyhettä pidellen kaakeliuunin lämmössä ja annoin hänen piirtää luonnospaperinsa täyteen. Kun seisominen alkoi väsyttää, hän pyysi, että istuisin lattialle pielusten päälle vielä hetkeksi.Parikymppiseksi varttunut Isa emännöi Albert Edefeltin ateljeeta 1900-luvun alun kuohuvassa Helsingissä. Hän passaa niin isännän taiteilijaystäviä kuin naisvieraitakin. Kunnes kokee oman intohimoisen romanssinsa."Aistivoimainen kerronta saa menneen eloon.--Mustonen on romaaninsa miljöössä kuin kotonaan." -KalevaLue lisää kirjasarjan taustoista: Facebook.com/SyrjastakatsojanTarinoita 2817251',
        type: 'Pehmeäkantinen',
        price: 10.95,
        discountPercentage: .37,
        rating: 5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/cbdbe878650848e78af203a78b8180d79789511292142_1_eb9e9272-f328-4469-bda9-e8f58624d190.jpg?v=1680070563&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },
    {
        id: uuidv4(),
        title: 'Paimentyttö',
        author: 'Enno Mustonen',
        description: 'Ida Eriksson, kolmetoistavuotias paimentyttö Sipoon Karhusaaresta, päätyy dramaattisten vaiheiden jälkeen Björkuddeniin Topeliusten pikkupiiaksi. Idan lähtökohdat ovat kaukana vireän kulttuurisuvun elämänmenosta, mutta vähitellen hän saa tutustua vanhenevaan, vatsavaivoista kärsivään kirjailijaan ja oppii ylittämään kieli- ja säätyrajoja. 2816911',
        type: 'Pehmeäkantinen',
        price: 10.95,
        discountPercentage: .37,
        rating: 4.5,
        image: 'https://cdn.shopify.com/s/files/1/0061/0372/8217/products/7862da874c1340cabe70963935b6f6069789511280316_1_42d1e23a-b7eb-40f3-9140-b5ba47950a96.jpg?v=1680082519&width=352',
        category: ['Historialliset romaanit', 'Kaunokirjallisuus']
    },

]
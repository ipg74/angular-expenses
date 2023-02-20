export interface Category {
  id: number;
  code: string;
  name: string;
}

export const categories = [
  {"code":"AIT","name":"Auto i transport","id":"100"},
  {"code":"AITPAL","name":"Paliwo","id":"101"},
  {"code":"AITSCZ","name":"Serwis i czesci","id":"102"},
  {"code":"AITUB","name":"Ubezpieczenia aut","id":"103"},
  {"code":"AITIN","name":"Auto i transport - inne","id":"104"},
  {"code":"COD","name":"Codzienne","id":"110"},
  {"code":"CODZCH","name":"Zywnosc i chemia domowa","id":"111"},
  {"code":"CODZW","name":"Zwierzeta zywnosc","id":"112"},
  {"code":"CODJPD","name":"Jedzenie poza domem","id":"113"},
  {"code":"DOM","name":"Dom","id":"120"},
  {"code":"DOMAW","name":"Akcesoria i wyposazenie","id":"121"},
  {"code":"DOMRIO","name":"Remont i ogród","id":"122"},
  {"code":"DOMUB","name":"Ubezpieczenie","id":"123"},
  {"code":"DOMZWI","name":"Zwierzeta","id":"124"},
  {"code":"DOMINN","name":"Dom - inne","id":"125"},
  {"code":"DZI","name":"Dzieci","id":"130"},
  {"code":"DZISZK","name":"Szkola","id":"131"},
  {"code":"DZIZD","name":"Zajecia dodatkowe","id":"132"},
  {"code":"DZIINN","name":"Dzieci - inne","id":"133"},
  {"code":"NSK","name":"Nieskategoryzowane","id":"140"},
  {"code":"NSKWG","name":"Wyplaty gotówki","id":"141"},
  {"code":"NSKBK","name":"Bez kategorii","id":"142"},
  {"code":"OSB","name":"Osobiste","id":"150"},
  {"code":"OSBODZ","name":"Odziez i obuwie","id":"151"},
  {"code":"OSBKP","name":"Multimedia, ksiazki i prasa","id":"152"},
  {"code":"OSBINN","name":"Osobiste inne","id":"153"},
  {"code":"OSBZIU","name":"Zdrowie","id":"154"},
  {"code":"OSBPREZ","name":"Prezenty","id":"155"},
  {"code":"OSBEDU","name":"Edukacja","id":"156"},
  {"code":"PLA","name":"Platnosci","id":"160"},
  {"code":"PLAGA","name":"Gaz i ogrzewanie","id":"161"},
  {"code":"PLAOP","name":"Oplaty","id":"162"},
  {"code":"PLAPOD","name":"Podatki","id":"163"},
  {"code":"PLAPR","name":"Prad","id":"164"},
  {"code":"PLASM","name":"Smieci","id":"165"},
  {"code":"PLATI","name":"Telefon, internet","id":"166"},
  {"code":"PLAUB","name":"Ubezpieczenia","id":"167"},
  {"code":"PLAWOD","name":"Woda","id":"168"},
  {"code":"PLASCI","name":"Scieki - szambo","id":"169"},
  {"code":"PLAINN","name":"Platnosci inne","id":"170"},
  {"code":"ROZ","name":"Rozrywka","id":"180"},
  {"code":"ROZPW","name":"Podróze i wyjazdy","id":"181"},
  {"code":"ROZWW","name":"Wyjscia i wydarzenia","id":"182"},
  {"code":"ROZSIH","name":"Sport i hobby","id":"183"},
  {"code":"ROZINN","name":"Rozrywka - inne","id":"184"},
  {"code":"OII","name":"Oszczednosci i inwestycje","id":"190"},
  {"code":"OIILOK","name":"Lokaty i konto oszcz.","id":"191"},
  {"code":"OIIGIE","name":"Gielda","id":"192"},
  {"code":"OIIMSZ","name":"Lokaty w metale szlachetne","id":"193"},
  {"code":"NIS","name":"Nieistotne","id":"200"},
  {"code":"NISPW","name":"Przelew wlasny","id":"201"},
  {"code":"NISINN","name":"Nieistotne - inne","id":"202"},
  {"code":"XXXXXX","name":"Nieprzypisane","id":"99999"}
];

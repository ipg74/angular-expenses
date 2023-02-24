import { Category, categories } from './categories'
const catMap = new Map(categories.map(x => [x.id, x]));

export interface Expense {
  id: number;
  rok: number;
  miesiac: number;
  id_kategoria: number;
  kwota: number;
  info: string | null;
  platnosc: string;
  kategoria: Category | undefined
}

const _expenses: Expense[] = [
  {
    id: 3659,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 155,
    kwota: 50.00,
    info: 'Zlecenie stałe |  04-620 WARSZAWA | Tytuł: JESIONKA',
    platnosc: 'I', kategoria: undefined 
  },
  {
    id: 3660,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 155,
    kwota: 70.00,
    info: 'Zlecenie stałe | Nr rach. przeciwst.: 97 1020 1390 0000 6602 0019 0280 Dane adr. rach. przeciwst.: FUNDACJA ZDROWIA ŚLĄSKA CIESZYŃSKIE UL. BIELSKA 4 43- 400 CIESZYN Data waluty: 2022-12-09 | ',
    platnosc: 'I', kategoria: undefined 
  },
  {
    id: 3661,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 133,
    kwota: 220.00,
    info: 'Przelew z rachunku | Nr rach. przeciwst.: 71 1140 2004 0000 3402 8282 5766 Dane adr. rach. przeciwst.: URSZULA GARDZIEJEWSKA Data waluty: 2022-12-14 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3662,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 167,
    kwota: 740.00,
    info: 'Ubezpieczenie domu WARTA ### Przelew z rachunku | Nr rach. przeciwst.: 53 1140 1573 9000 0639 1960 6588 Dane adr. rach. przeciwst.: TUIR WARTA S.A. Data waluty: 2022-12-20 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3663,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 155,
    kwota: 100.00,
    info: 'Zlecenie stałe | Nr rach. przeciwst.: 52 1240 4533 1111 0010 4502 9775 Dane adr. rach. przeciwst.: POLSKA FUNDACJA DLA AFRYKI UL. KROWODERSKA 24/3 31-142 KRAKÓW Data waluty: 2022-12-22 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3664,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 133,
    kwota: 255.00,
    info: 'mg mundur ## Przelew na telefon wychodzący zew. | Nr rach. przeciwst.: 46 1050 1083 1000 0022 4742 4555 Dane adr. rach. przeciwst.: MAREK RÓŻYCKI Data waluty: 2022-12-26 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3665,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 133,
    kwota: 200.00,
    info: 'mg zimowisko harcerskie Przelew na telefon wychodzący zew. | Nr rach. przeciwst.: 46 1050 1083 1000 0022 4742 4555 Dane adr. rach. przeciwst.: MAREK RÓŻYCKI Data waluty: 2022-12-26 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3666,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 141,
    kwota: 200.00,
    info: 'od mg ## Przelew z rachunku | Nr rach. przeciwst.: 29 1020 5558 0000 8702 3446 3671 Dane adr. rach. przeciwst.: PAWEŁ GARDZIEJEWSKI Data waluty: 2022-12-26 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3667,
    rok: 2022,
    miesiac: 12,
    id_kategoria: 141,
    kwota: 240.00,
    info: 'Przelew z rachunku | Nr rach. przeciwst.: 29 1020 5558 0000 8702 3446 3671 Dane adr. rach. przeciwst.: PAWEŁ GARDZIEJEWSKI Data waluty: 2022-12-30 | ',
    platnosc: 'I', kategoria: undefined
  },
  {
    id: 3668,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 131,
    kwota: 200.00,
    info: 'bilet mies ug',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3669,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 133,
    kwota: 60.00,
    info: 'fryzjer ug',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3670,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 133,
    kwota: 320.00,
    info: 'mg zimowisko zhr',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3671,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 111,
    kwota: 120.00,
    info: 'jajka',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3672,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 111,
    kwota: -44.00,
    info: 'zw. jajka',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3673,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 5,
    kwota: 20.00,
    info: null,
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3674,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 5,
    kwota: 200.00,
    info: 'of Bąków dzwon',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3675,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 155,
    kwota: 200.00,
    info: 'ofiara msze św',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3676,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 111,
    kwota: 96.00,
    info: 'jajka',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3677,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 5,
    kwota: 60.00,
    info: null,
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3678,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 152,
    kwota: 20.00,
    info: 'gn',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3679,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 133,
    kwota: 240.00,
    info: 'zimowisko mg',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3680,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 153,
    kwota: 50.00,
    info: 'ż',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3681,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 131,
    kwota: 200.00,
    info: 'bilet mies ug',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3682,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 111,
    kwota: 13.45,
    info: null,
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3683,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 152,
    kwota: 10.00,
    info: 'gn',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3684,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 131,
    kwota: 90.00,
    info: 'bilet mies mg',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3685,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 111,
    kwota: 110.00,
    info: 'jajka',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3686,
    rok: 2023,
    miesiac: 1,
    id_kategoria: 153,
    kwota: 20.00,
    info: 'ż',
    platnosc: 'G', kategoria: undefined
  },
  {
    id: 3687,
    rok: 2023,
    miesiac: 2,
    id_kategoria: 5,
    kwota: 21.00,
    info: null,
    platnosc: 'G', kategoria: undefined
  },
];

_expenses.forEach(x => x.kategoria = catMap.get(x.id_kategoria));

export const expenses = _expenses;
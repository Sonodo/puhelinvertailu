import { Operator } from '@/types';

export const operators: Operator[] = [
  // === MAJOR NETWORK OPERATORS (MNO) ===
  {
    id: 'elisa',
    name: 'Elisa',
    slug: 'elisa',
    brand: 'Saunalahti',
    description:
      'Suomen suurin teleoperaattori, joka palvelee kuluttajia Saunalahti-brändillä. Elisa tunnetaan kattavasta 5G-verkosta, luotettavista palveluista ja monipuolisesta liittymävalikoimasta. Markkinajohtaja noin 38 % markkinaosuudella.',
    founded: 1882,
    website: 'https://www.elisa.fi',
    type: 'MNO',
    marketShare: 38,
    color: '#5C2D91',
    pros: [
      'Suomen laajin 5G-verkko',
      'Luotettava ja nopea verkko',
      'Monipuolinen liittymävalikoima',
      'Hyvä asiakaspalvelu',
      'Elisa Viihde -palvelu',
    ],
    cons: [
      'Kalliimpi kuin budjettioperaattorit',
      'Määräaikaiset tarjoukset voivat nousta',
      'Lisäpalvelut voivat nostaa hintaa',
    ],
  },
  {
    id: 'dna',
    name: 'DNA',
    slug: 'dna',
    description:
      'Suomen kolmanneksi suurin teleoperaattori noin 28 % markkinaosuudella. DNA tunnetaan kilpailukykyisistä hinnoista, hyvästä 5G-kattavuudesta ja selkeistä liittymäpaketeista. Telenor-konsernin omistama.',
    founded: 2001,
    website: 'https://www.dna.fi',
    type: 'MNO',
    marketShare: 28,
    color: '#00A651',
    pros: [
      'Kilpailukykyiset hinnat',
      'Hyvä 5G-kattavuus',
      'Selkeät liittymäpaketit',
      'DNA TV ja viihdepalvelut',
      'Nopea laajakaista',
    ],
    cons: [
      'Pienemmät kaupungit voivat olla heikommin katettuja',
      'Asiakaspalvelun ruuhkat',
    ],
  },
  {
    id: 'telia',
    name: 'Telia',
    slug: 'telia',
    description:
      'Telia Finland on osa pohjoismaista Telia Company -konsernia. Noin 29 % markkinaosuudella se on Suomen toiseksi suurin operaattori. Tunnetaan laadukkaasta verkosta, yrityspuolen palveluista ja Telia TV:stä.',
    founded: 2002,
    website: 'https://www.telia.fi',
    type: 'MNO',
    marketShare: 29,
    color: '#990AE3',
    pros: [
      'Laadukas verkko',
      'Hyvät yrityspuolen palvelut',
      'Telia TV mukana monissa liittymissä',
      'Vahva pohjoismainen taustayhtiö',
      'Kattava 5G',
    ],
    cons: [
      'Hieman kalliimpi kuin DNA',
      'Liittymävalikoima voi olla sekava',
    ],
  },
  // === MVNO / BUDGET OPERATORS ===
  {
    id: 'moi',
    name: 'Moi Mobiili',
    slug: 'moi',
    description:
      'Moi Mobiili on suomalainen budjettioperaattori, joka toimii DNA:n verkossa. Tunnettu yksinkertaisista ja edullisista liittymistä ilman turhia lisäpalveluita. Kaikki hallitaan sovelluksella.',
    founded: 2016,
    website: 'https://www.moi.fi',
    type: 'MVNO',
    network: 'DNA',
    color: '#FF6B00',
    pros: [
      'Erittäin edullinen',
      'Yksinkertainen — ei piilokustannuksia',
      'Helppo hallinta sovelluksella',
      'Ei määräaikaisuutta',
      'DNA:n luotettava verkko',
    ],
    cons: [
      'Ei omaa verkkoa — riippuvainen DNA:sta',
      'Rajallinen asiakaspalvelu (chat-painotteinen)',
      'Ei viihdepalveluita',
    ],
  },
  {
    id: 'giga',
    name: 'Giga Mobiili',
    slug: 'giga',
    description:
      'Giga Mobiili on uusi markkinoille tullut budjettioperaattori, joka lupaa 20–30 % edullisemmat liittymät. Toimii Telian verkossa ja pyrkii haastamaan perinteiset operaattorit pelkistetyllä palvelumallilla.',
    founded: 2024,
    website: 'https://www.giga.fi',
    type: 'MVNO',
    network: 'Telia',
    color: '#00C2FF',
    pros: [
      'Markkinoiden edullisimpia',
      '20–30 % halvempi kuin isot operaattorit',
      'Telian verkko',
      'Yksinkertaiset liittymät',
    ],
    cons: [
      'Uusi toimija — kokemuksia vähän',
      'Suppea palveluvalikoima',
      'Ei myymälöitä',
    ],
  },
  {
    id: 'oomi',
    name: 'Oomi Mobiili',
    slug: 'oomi',
    description:
      'Oomi Mobiili on energiayhtiö Oomin lanseeraama matkapuhelinpalvelu. Tarjoaa edullisia liittymiä erityisesti Oomin sähköasiakkaille. Toimii Elisan verkossa.',
    founded: 2023,
    website: 'https://www.oomi.fi',
    type: 'MVNO',
    network: 'Elisa',
    color: '#F7941D',
    pros: [
      'Edullinen hintataso',
      'Elisan kattava verkko',
      'Energiayhtiön luotettavuus',
      'Edut Oomin sähköasiakkaille',
    ],
    cons: [
      'Suppea liittymävalikoima',
      'Tunnettuus vielä heikko',
      'Ei omia viihdepalveluita',
    ],
  },
  {
    id: 'globetel',
    name: 'Globetel',
    slug: 'globetel',
    description:
      'Globetel on kansainvälisiin puheluihin ja edullisiin liittymiin erikoistunut operaattori. Toimii DNA:n verkossa ja tarjoaa kilpailukykyisiä hintoja erityisesti ulkomaille soittaville.',
    founded: 2007,
    website: 'https://www.globetel.fi',
    type: 'MVNO',
    network: 'DNA',
    color: '#1E90FF',
    pros: [
      'Edulliset kansainväliset puhelut',
      'Kilpailukykyiset liittymähinnat',
      'DNA:n verkko',
      'Hyvä valinta ulkomaille soittaville',
    ],
    cons: [
      'Pieni toimija',
      'Rajallinen asiakaspalvelu',
      'Vähän tunnettavuutta',
    ],
  },
];

// Helper to get operator by ID
export function getOperatorById(id: string): Operator | undefined {
  return operators.find((op) => op.id === id);
}

// Helper to get operator by slug
export function getOperatorBySlug(slug: string): Operator | undefined {
  return operators.find((op) => op.slug === slug);
}

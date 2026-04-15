import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sivuston ansainta — Näin ValitseLiittymä toimii',
  description:
    'ValitseLiittymä on ilmainen liittymävertailu. Näin ansaitsemme toiminnasta ja miksi vertailu on puolueeton.',
  alternates: { canonical: '/sivuston-ansainta' },
};

export default function SivustonAnsaintaPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <article className="prose prose-slate prose-lg max-w-none">
          <h1>Sivuston ansainta</h1>

          <p>
            ValitseLiittymä on ilmainen vertailupalvelu kuluttajille. Emme veloita käyttäjiltä
            mitään — vertailun käyttö ja kaikki sisältö on maksutonta.
          </p>

          <h2>Miten ansaitsemme rahaa</h2>
          <p>
            Saamme komissiota osalta palveluntarjoajista, kun siirryt heidän sivulleen
            ValitseLiittymän kautta ja teet liittymäsopimuksen. Käytämme tähän
            Adtraction-affiliate-verkostoa, joka on yksi Pohjoismaiden suurimmista ja
            luotettavimmista mainosyhteistyöverkostoista.
          </p>

          <h2>Miten pidämme vertailun puolueettomana</h2>
          <ul>
            <li>
              <strong>Järjestys ei riipu komissiosta.</strong> Operaattorit ja liittymät näkyvät
              vertailussa samalla logiikalla riippumatta siitä, saammeko heiltä komissiota vai
              emme.
            </li>
            <li>
              <strong>Vertaamme myös operaattoreita, joista emme saa mitään.</strong> Käyttäjällä
              on oikeus nähdä koko markkina, ei vain kumppaneita.
            </li>
            <li>
              <strong>Tiedot perustuvat julkisiin lähteisiin.</strong> Hinnat, datanopeudet ja
              sopimusehdot tulevat operaattoreiden omilta sivuilta.
            </li>
            <li>
              <strong>Kumppanit ja ei-kumppanit näkyvät identtisesti.</strong> Emme nosta
              kumppaneita korkeammalle, emme piilota ei-kumppaneita, emmekä merkitse heitä eri
              tavalla.
            </li>
          </ul>

          <h2>Miksi teemme näin</h2>
          <p>
            Ilmainen vertailupalvelu tarvitsee ansaintatavan. Valitsimme komissiomallin puhtaasti
            sen takia, että se on ainoa tapa pitää palvelu maksuttomana ja silti velvoittaa meidät
            tekemään hyvää vertailua: käyttäjien pitää löytää itselleen paras liittymä, tai he
            eivät tule takaisin.
          </p>

          <h2>Kysyttävää?</h2>
          <p>
            Mikäli sinulla on kysymyksiä komissiomallista tai vertailun toimintatavasta, voit olla
            yhteydessä asiakaspalveluumme.
          </p>
        </article>
      </div>
    </div>
  );
}

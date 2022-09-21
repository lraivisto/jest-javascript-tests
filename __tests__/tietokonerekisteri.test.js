'use strict';

const Tietokonerekisteri = require('../tietokonerekisteri');
const tietokoneet = require('../tietokoneet.json');

describe('Testataan konstruktori', () => {
    test('puuttuva parametri aiheuttaa poikkeuksen "tiedot puuttuvat"', () => {
        expect(() => new Tietokonerekisteri()).toThrow('tiedot puuttuvat');
    });
});

describe('Testataan metodi haeHinta', () => {
    const rekisteri = new Tietokonerekisteri(tietokoneet);
    test('Testi 1: Testaa ilman parametria', () => {
        expect(() =>rekisteri.haeHinta()).toThrow('annetulla avaimella ei löytynyt tietoja');
    });
    test('Testi 2: Testaa olevan koneen hintaa hakuavaimella "2"', () => {
        expect(rekisteri.haeHinta(2)).toEqual(123);
    });
    test('Testi 3: Testaa olemattoman koneen hintaa hakuavaimella "323"', () => {
        expect(() => rekisteri.haeHinta(323)).toThrow('annetulla avaimella ei löytynyt tietoja');
    });
})

describe(`Testataan metodi on_yksityiskohdat`, () => {
    const rekisteri = new Tietokonerekisteri(tietokoneet);
    test('Testi 1: Testaa ilman parametria', () => {
        expect(rekisteri.on_yksityiskohdat()).toEqual(false);
    });
    test('Testi 2: Testaa olevan koneen ykistyiskohtia hakuavaimella "2"', () => {
        expect(rekisteri.on_yksityiskohdat(2)).toEqual(true);
    });
    test('Testi 3: Testaa olemattoman koneen yksityiskohtia hakuavaimella "23"', () => {
        expect(rekisteri.on_yksityiskohdat(23)).toEqual(false);
    });

})

describe(`Testataan metodi hae_tietokoneen_varit`, () => {
    const rekisteri = new Tietokonerekisteri(tietokoneet);
    test('Testi 1: Testaa ilman parametria', () => {
        const rekisteri = new Tietokonerekisteri([]);
        expect(rekisteri.hae_tietokoneen_varit()).toEqual([]);
    });
    test('Testi 2: Testaa olevan koneen värit hakuavaimella "2"', () => {
        expect(rekisteri.hae_tietokoneen_varit(2))
            .toEqual(["valkoinen", "sininen", "musta"]);
    });
    test(`Testi 3: Testaa olmeattoman koneen värit hakuavaimella "23"`, () => {
        expect(rekisteri.hae_tietokoneen_varit(23))
            .toEqual([]);
    })
})

describe(`Testataan metodi hae_tietokone_perusavaimella_numero`, () => {
    const rekisteri = new Tietokonerekisteri(tietokoneet);
    test(`Testi 1: Testaa ilman parametria`, () => {
        expect(() => rekisteri.hae_tietokone_perusavaimella_numero()).toThrow('parametri puuttuu');
    });
    test('Testi 2: Testaa olevan koneen tiedot hakuavaimella "2"', () => {
        const odotettu =
        {
            "numero": 2,
            "merkki": "Päärynä Mark II",
            "tyyppi": "pöytäkone",
            "hinta": 123,
            "valmistusvuosi": 2000,
            "värit": [
                "valkoinen",
                "sininen",
                "musta"
            ],
            "yksityiskohdat": {
                "energialuokka": "A",
                "huomautus": "ei huomauttamista",
                "malli": "chrome"
            }
        }
            ;
        expect(rekisteri.hae_tietokone_perusavaimella_numero(2)).toEqual(odotettu);
    })
    test('Testi 3: Testaa olemattoman koneen tiedot hakuavaimella "2334"', () => {
        expect(rekisteri.hae_tietokone_perusavaimella_numero(2334)).toBeNull();
    });

});


describe(`Testataan metodi hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi`, () => {
    const rekisteri = new Tietokonerekisteri(tietokoneet);
    test(`Testi 1: Testaa ilman parametria`, () => {
        expect(() => rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi()).toThrow('parametri puuttuu');
    });
    test('Testi 2: Testaa olevan tyypin koneiden hinnan hakuavaimella "kannettava"', () => {
        expect(rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("kannettava")).toEqual(1500);
    })
    test('Testi 3: Testaa olevan tyypin koneiden hinnan hakuavaimella "pöytäkone"', () => {
        expect(rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pöytäkone")).toEqual(246);
    })
    test('Testi 4: Testaa olemattomaa tyyppiä hakuavaimella "joo"', () => {
        expect(() => rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi('joo')).toThrow('annetulla avaimella ei löytynyt tietoja');
    });
})
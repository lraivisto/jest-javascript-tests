Luka Raivisto


# **Lopputehtävä** (tietokone)



## Tehtävä: Luo ja testaa **Tietokonerekisteri** -luokka
Luo luokka `Tietokonerekisteri`. Luokassa on metodit tietokonetietojen käyttöön. Käytettävä tietovarasto välitetään oliolle konstruktorin parametrina. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Täydennä taulukkoa tarvittaessa tai tee testausta varten tarvittavat vaihtoehtoiset versiot. 

### tietovarasto.json

```json
[
  {
    "numero": 1,
    "merkki": "Päärynä Mark II",
    "tyyppi": "supertietokone",
    "hinta": 700,
    "valmistusvuosi": 2005,
    "värit": [
      "oranssi",
      "sininen",
      "valkoinen"
    ],
    "yksityiskohdat": {
      "energialuokka": "A",
      "huomautus": "vanha malli",
      "malli": "GT"
    }
  },
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
  },
  {
    "numero": 3,
    "merkki": "Xunil 4.7",
    "tyyppi": "kannettava",
    "hinta": 1500,
    "valmistusvuosi": 2000,
    "värit": [
      "punainen",
      "vihreä",
      "oranssi"
    ],
    "yksityiskohdat": {
      "energialuokka": "C",
      "huomautus": "ei huomauttamista",
      "malli": "chrome"
    }
  },
  {
    "numero": 4,
    "merkki": "Xunil 4.7",
    "tyyppi": "pöytäkone",
    "hinta": 123,
    "valmistusvuosi": 2012,
    "värit": [
      "sininen",
      "musta",
      "valkoinen"
    ],
    "yksityiskohdat": {
      "energialuokka": "C",
      "huomautus": "ei huomauttamista",
      "malli": "gold"
    }
  },
  {
    "numero": 5,
    "merkki": "Xunil 4.7",
    "tyyppi": "taskutietokone",
    "hinta": 123,
    "valmistusvuosi": 1990,
    "värit": [
      "keltainen",
      "oranssi",
      "sininen"
    ]
  }
]
```


# Tietokonerekisteri - rajapinta (API)

## konstruktori

### **constructor(jsondata)**
Alustaa Tietokonerekisteri -olion

>Parametrit:
>>Parametri `jsondata` on oliolle välitettävä json-taulukko.

>Paluuarvo:
>>

>Poikkeukset:
>>Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

## Metodit

### **hae_tietokone_perusavaimella_numero(hakuavain)**
Etsii tietovarastosta olion, jonka perusavain on sama kuin  parametrina annettu `hakuavain`. Perusavain on yksilöivä.

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain numero

>Paluuarvo:
>>palauttaa tietokone -olion, jonka numero on sama kuin annettu hakuavain tai null, jos hakuavaimella ei löydy tietokone -oliota

>Poikkeukset:
>>Jos parametri puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_tietokoneen_värit(hakuavain)**
hakee tietokoneen hakuarvona annetulla perusavaimella numero ja palauttaa tietokoneen värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, palautetaan tyhjä taulukko

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain numero

>Paluuarvo:
>>palauttaa värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, tai parametri hakuavain puuttuu, palautetaan tyhjä taulukko

>Poikkeukset:
>>

### **hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi(hakuarvo)**
Hakee kaikkien niiden tietokoneiden yhteishinnan, joilla on sama tyyppi

>Parametrit:
>>tyyppi, jonka perusteella tietokoneiden hinnat lasketaan yhteen

>Paluuarvo:
>>tietokoneiden yhteenlaskettu kokonaishinta

>Poikkeukset:
>>Jos hakuarvolla ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`. Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **on_yksityiskohdat(hakuavain)**
Metodi tarkastaa löytyykö annetun hakuavaimen omaavalta tietokone-oliolta yksityiskohdat-taulukko

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain numero

>Paluuarvo:
>>palauttaa true, jos yksityiskohdat löytyi ja se ei ole tyhjätaulukko, muuten palautetaan false. Jos parametri hakuavain puuttuu palautetaan myös false.

>Poikkeukset:
>>

### **haeHinta(numero)**
hakee tietokoneen hinnan annetulla perusavaimella numero

>Parametrit:
>>tietokoneen perusavain numero

>Paluuarvo:
>>palauttaa löydetyn tietokoneen hinnan

>Poikkeukset:
>>Jos avaimella ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`

# Projekti

## Luo kansio testiprojektille
- nimeä kansio nimellä `Raivisto_Luka_tietokone`
- luo **package.json**
  - **`npm init -y`**
- asenna **jest** kehitysriippuvuudeksi
  - **`npm install jest --save-dev`**
- tee testikansio `__tests__` testeille
- muokkaa **package.json** lisäämällä `jest` `test`-scriptiin
- käytä tiedonlähteenä tiedostoa **tietovarasto.json** 

## Tee rajapintakuvauksen mukaiset testitapaukset projektikansioon Markdown-tiedostoon

Aloita tekemällä testitapaukset. Tee testitapaukset edellä olevien rajapintakuvausten mukaan. Käytä myös "mielikuvitusta" erilaisten tilanteiden löytämiseksi testitapaukset ovat sinun tulkintasi rajapinnasta.Tässä ei ole oikeita tai vääriä vastauksia.

## Tee testit ja tarkasta, että ne eivät mene läpi
## Toteuta metodit
## Testaa toteutusta ajamalla testit kunnes ne menee läpi

## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. Poista `node_modules` kansio ennen lähettämistä. Palauta projektikansiossa myös `package.json`. tiedosto.

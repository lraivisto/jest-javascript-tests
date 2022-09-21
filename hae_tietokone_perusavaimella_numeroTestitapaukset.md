# hae_tietokone_perusavaimella_numero testitapaukset

ennen testejä luodaan Tietokonerekisteri-olio oletusdatalla.

## Testi 1: Testaa ilman parametri

```js
rekisteri.hae_tietokone_perusavaimella_numero();
```

palauttaa 
```json
parametri puuttuu
```
## Testi 2: Testaa olevan koneen tiedot hakuavaimella "2"

```js
rekisteri.hae_tietokone_perusavaimella_numero(2);
```

palauttaa 
```json
{  "numero": 2,
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
            } }
```

## Testi 3: Testaa olmeattoman koneen värit hakuavaimella "2334',
```js
rekisteri.hae_tietokone_perusavaimella_numero(2334);
```
palauttaa
```json
null
```
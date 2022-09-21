# hae_tietokone_perusavaimella_numero testitapaukset

ennen testejä luodaan Tietokonerekisteri-olio oletusdatalla.

## Testi 1: Testaa ilman parametri

```js
rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi();
```

palauttaa 
```json
parametri puuttuu
```
## Testi 2: Testaa olevan koneet tyypit hakuavaimella "kannettava"

```js
rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("kannettava");
```

palauttaa 
```json
1500
```

## Testi 3: Testaa olevan koneet tyypit hakuavaimella "pöytäkone"

```js
rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pöytäkone");
```

palauttaa 
```json
246
```


## Testi 4: Testaa olmeattoman koneen tyypit hakuavaimella "joo',
```js
rekisteri.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("joo");
```
palauttaa
```json
nne
tulla avaimella ei löytynyt tietoja
```
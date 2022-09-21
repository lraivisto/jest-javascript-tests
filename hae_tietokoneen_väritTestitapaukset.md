# hae_tietokoneen_värit testitapaukset

ennen testejä luodaan Tietokonerekisteri-olio oletusdatalla.

## Testi 1: Testaa ilman parametri

```js
rekisteri.hae_tietokoneen_varit();
```

palauttaa 
```json
[]
```
## Testi 2: Testaa olevan koneen värit hakuavaimella "2"

```js
rekisteri.hae_tietokoneen_varit(2);
```

palauttaa 
```json
["valkoinen", "sininen", "musta"]
```

## Testi 3: Testaa olmeattoman koneen värit hakuavaimella "23',
```js
rekisteri.hae_tietokoneen_varit(23);
```
palauttaa
```json
[]
```
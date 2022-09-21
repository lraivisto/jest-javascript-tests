# haeHinta testitapaukset

ennen testejä luodaan Tietokonerekisteri-olio oletusdatalla.

## Testi 1: Testaa ilman parametri

```js
rekisteri.haeHinta();
```

aiheuttaa poikkeuksen
```json
annetulla avaimella ei löytynyt tietoja
```
## Testi 2: Testaa olevan koneen hintaa hakuavaimella "2"

```js
rekisteri.haeHinta(2);
```

palauttaa 
```json
123
```

## Testi 3: Testaa olemattoman koneen hintaa hakuavaimella "323"',
```js
rekisteri.haeHinta(323);
```
aiheuttaa poikkeuksen
```json
annetulla avaimella ei löytynyt tietoja
```
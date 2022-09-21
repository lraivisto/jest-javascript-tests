# on_yksityiskohdat testitapaukset

ennen testejä luodaan Tietokonerekisteri-olio oletusdatalla.

## Testi 1: Testaa ilman parametri

```js
rekisteri.on_yksityiskohdat();
```

palauttaa 
```json
false
```
## Testi 2: Testaa olevan koneen ykistyiskohtia hakuavaimella "2"

```js
rekisteri.on_yksityiskohdat(2);
```

palauttaa 
```json
true
```

## Testi 3: Testaa olemattoman koneen hintaa hakuavaimella "323"',
```js
rekisteri.on_yksityiskohdat(23);
```
palauttaa
```json
false
```
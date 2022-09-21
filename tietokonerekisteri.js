'use strict';

module.exports = class Tietokonerekisteri {

    constructor(jsondata) {
        if (!jsondata) throw new Error('tiedot puuttuvat');
        this.rekisteri = jsondata;
    }

    hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi(tyyppi) {
        if (!tyyppi) throw new Error('parametri puuttuu');
        let hinta = 0;
        let x = false;
        for (let tieto of this.rekisteri) {
            if (tieto.tyyppi === tyyppi) {
                hinta += tieto.hinta;
                x = true;
            }
        } if (x === true) {
            return hinta;
        } else {
            throw new Error("annetulla avaimella ei löytynyt tietoja")
        }
    }

    hae_tietokone_perusavaimella_numero(numero) {
        if (numero) {
            for (let tieto of this.rekisteri) {
                if (tieto.numero === numero) {
                    if (tieto) {
                        return tieto;
                    }
                }
            } 
            return null;
        } else {
            throw new Error("parametri puuttuu");
        }
    }
    hae_tietokoneen_varit(numero) {
        if (numero) {
            for (let tieto of this.rekisteri) {
                if (tieto.numero === numero) {
                    if (tieto.värit) {
                        return tieto.värit;
                    }
                }
            } return [];
        }
        else {
            return [];
        }
    }
    on_yksityiskohdat(numero) {
        if (!numero) return false;
        for (let tieto of this.rekisteri) {
         
            if (tieto.numero === numero) {
                if (tieto.yksityiskohdat) { 
                    return true; 
                }
            }
        }
            return false;
    }
    haeHinta(numero) {
        if (!numero) throw new Error("annetulla avaimella ei löytynyt tietoja");

        let hinta = 0;
        let x = false;
        for (let tieto of this.rekisteri) {
            if (tieto.numero === numero) {
                if (tieto.hinta) {
                    hinta += tieto.hinta;
                    x = true;
                }
            }
        }
        if (x === true) {
            return hinta;
        } else {
            throw new Error("annetulla avaimella ei löytynyt tietoja")
        }
    }
}
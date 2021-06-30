"use strict"

export let reikalingiDuomenys = [123, 123, 123, 123];

export class Namas {
    constructor(adresas, laiptiniuSk, butuSk) {
        this.adresas = adresas;
        this.laiptiniuSk = laiptiniuSk;
        this.butuSk = butuSk
    }
}

export function randomFunctionWitMax (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Sujungti viena javascript faila su kitu javascript failu 
// Kiekviena faila turim interpretuoti kaip moduli
// Ir tas modulis gali importuoti duomenis is kito modulio
// Ir eksportuoti duomenis is kito modulio

// norint ekportuoti duomenys prirasomas zodis export

// norint importuoti duomenys parasoma import

let kintamasis = 19;
export default  kintamasis;
// export default - numatytoji reiksme

// galima norimus objektus eksportuoti galima apsirasyti ir visus vienoje vietoje apacioje
// export {reikalingiDuomenys, Namas,randomFunctionWitMax};
// nereikia tada prie kiekvieno atskirai rasyti export
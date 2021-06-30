"use strict"

class Namas {
    constructor(adresas, laiptiniuSk, butuSk) {
        this.adresas = adresas;
        this.laiptiniuSk = laiptiniuSk;
        this.butuSk = butuSk
    }
}

export let namai = []; // tuscias masyvas

namai.push(new Namas("Sauletekio al. 1", [1, 2, 3, 4], [21, 24, 28, 23])); // push uzpildo masyva
namai.push(new Namas("Sauletekio al. 3", [1, 2, 3, 4], [21, 24, 28, 23]));
namai.push(new Namas("Sauletekio al. 5", [1, 2, 3, 4, 5], [21, 24, 28, 23,20]));
namai.push(new Namas("Sauletekio al. 7", [1, 2, 3, 4], [21, 24, 28, 23]));
namai.push(new Namas("Sauletekio al. 9", [1, 2, 3, 4], [21, 24, 28, 23]));

console.log(namai);

for (let i = 0; i < namai.length; i++) { // praeinama pro visa namu masyva
   console.log(namai[i].laiptiniuSk); // iskviesti kiekvieno objekto laiptiniu masyvai
   console.log(namai[i].laiptiniuSk.length); // laiptiniu skaicius 

   let bendrasButuSk = 0;
   for (let j = 0; j < namai[i].butuSk.length; j++) {
       bendrasButuSk += namai[i].butuSk[j]
   }
   console.log(bendrasButuSk);

}


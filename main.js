"use strict"

// importai rasosmi virsuje

import kintamasis, {reikalingiDuomenys, Namas, randomFunctionWitMax} from "./functions.js";

import * as duomenys from "./script.js" // * reiskia, kad importuojam viska, kas kitame js faile yra eksportuojama
// duomenys yra sugalvotas pavadinimas, tam viskam 
// as leidzia suteikti pavadinima

// importuojami duomenys, rasoma import {} - skliaustuose rasoma tai ka kitose failuose eksportavom
// from "" nurodomas kelias is kur importuoti

console.log(reikalingiDuomenys);
// isvedami reikalingiDuomenys, kurie yra importuoti is kito js failo

let namas = new Namas ("Sauletekio al. 1", [1, 2, 3, 4], [21, 24, 28, 23])
console.log(namas);
// susikure objektas is klases, kuris yra kitame js faile

console.log(randomFunctionWitMax(10,18));
// iskviesta funkcija, kuri yra kitame js faile 

console.log(duomenys.namai); // is script.js importuota namai masyvas
console.log(duomenys); // rodo moduli

console.log(kintamasis);
// importuojamas default rasomas atskirai importe, ne prie visu skliausteliuose
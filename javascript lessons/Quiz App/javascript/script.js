// OOP : Nesne TabanCEVAPsEÇElı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi JavaScript pkaet yönetim uygulamasıdır",
//     cevapSevenekleri: {
//         a:"Node.Js",
//         b:"typscript",
//         c:"Npm"
//     },
//     dogruCevap:"c",
//     cevabıKontrolEt: function (cevap){
//         return cevap === this.dogruCevap
//     }
// }


/*
let soru2 = {
    soruMetni: "Hangisi .Net pkaet yönetim uygulamasıdır",
    cevapSevenekleri: {
        a:"Node.Js",
        b:"nuget",
        c:"Npm"
    },
    dogruCevap:"b",
    cevabıKontrolEt: function (cevap){
        return cevap === this.dogruCevap
    }
}
console.log(soru.soruMetni);
console.log(soru.cevapSevenekleri);
console.log(soru.cevabıKontrolEt("c"));
console.log(soru2.soruMetni);
console.log(soru2.cevapSevenekleri);
console.log(soru2.cevabıKontrolEt("b"));
*/

// Sınıf, Constructor => nesne = 30;
// ES5, ES6 , ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap;
    console.log(this);
}

Soru.prototype.cevabıKontrolEt = function (cevap){
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi JavaScript pkaet yönetim uygulamasıdır ?", {a: "Node.Js", b: "Typscript", c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .Net paket yönetim uygulamasıdır ?", {a: "Node.Js", b: "nuget", c: "Npm"}, "b");

let sorular = [
    new Soru("Hangisi JavaScript pkaet yönetim uygulamasıdır ?", {a: "Node.Js", b: "Typscript", c: "Npm"}, "c"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır ?", {a: "Node.Js", b: "nuget", c: "Npm"}, "b"),
    new Soru("Hangisi JavaScript pkaet yönetim uygulamasıdır ?", {a: "Node.Js", b: "Typscript", c: "Npm"}, "c"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır ?", {a: "Node.Js", b: "nuget", c: "Npm"}, "b"),
]
/*
for (let s of sorular) {
    console.log(s.soruMetni);3
    console.log(s.cevapSecenekleri);
    console.log(s.dogruCevap);
    console.log(s.cevabıKontrolEt());
}

 */
/*
console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);
console.log(soru1.cevabıKontrolEt("c"));
console.log(soru2.cevabıKontrolEt("a"));
 */

console.log(soru1.cevabıKontrolEt("c"));
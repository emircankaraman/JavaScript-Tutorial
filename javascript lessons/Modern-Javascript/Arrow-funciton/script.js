// ES5
/*
function selam() {
    console.log("Merhaba");
}
*/

var selamalamaES5 = function () {
    console.log("Merhaba");
};
selamalamaES5();
// ES6 - arrow funciton
// const selamalamaES6 = () => console.log("Merhaba");
const selamalamaES6 = (isim) => { console.log("Merhaba " + isim); }
selamalamaES6("Emircan");

// ES5
var toplamES5 = function (a, b) {
    return a + b;
}
var sonuc = toplamES5(10, 20);
console.log(sonuc);

// ES6
const toplamES6 = (a, b) => a + b;
sonuc = toplamES6(20, 60);
console.log(sonuc); 
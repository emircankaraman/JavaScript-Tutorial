let ad = "Emircan";
let soyaAd = "Karaman";
let yas = 65;
let sehir = "Giresun";


// let mesaj   = "Benim adım " + ad + ' ve soyadım ' + soyaAd + ' Şehrim ' + sehir + ' yaşım ' + sehir ;

let emeklilik = ( 65 - yas > 0 ) ? "Emekliliğine " + (65-yas) + " yıl kaldı " : " Zaten emeklisin";
let mesaj = `Benim adım ${ad} ve soyadım  ${soyaAd} Yaşadıgım şehir ${sehir} ve yaşım ${yas}.${emeklilik}`;
console.log(mesaj);
console.log(emeklilik);
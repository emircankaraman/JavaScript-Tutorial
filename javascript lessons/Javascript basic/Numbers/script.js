let sonuc;
sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10");
sonuc = parseFloat("10.6");
sonuc = Number("10a");
sonuc = Number("a10");

sonuc = isNaN("10"); //sayısal mı değil mi ?

let sayi = 10.6645432;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.4);
sonuc = Math.sqrt(24);
sonuc = Math.pow(2, 4);
sonuc = Math.min(2,3,5,8,1)
sonuc = Math.max(2,3,5,8,1)
sonuc = Math.random() * 10;
sonuc = Math.floor(Math.random() * 10);



console.log(typeof sonuc);
console.log(sonuc);
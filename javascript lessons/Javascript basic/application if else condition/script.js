// 1-> Bir sayının 10-15 arasında olup olmama durmunu kontrol etme 
// let sayi1 = 20;
// if (sayi1 > 10 && sayi1 <50) {
//     console.log("Sayı 10 ve 50 arasındadır");
// }
// else {
//     console.log("Sayı 10 ve 50 arasında değidir");
// }



// 2-> Bir sayının pozitif tek sayı olup olmama durmunu kontrol etme 
// let sayi = 20;
// if (sayi % 2 == 1 || sayi >0 ){
//     console.log("sayı pozitiftir");
// }



// 3-> x,y,z sayılarının büyüklük karşılaştırmasını kontrol etmen 
// let x = 10;
// let y = 40;
// let z  = 30;

// if (x > y && x > z){console.log ("x en büyük ");}
// else if (y > z && y > x){console.log ("y en büyük ");}
// else if (z > y && z > x){console.log ("z en büyük ");}
// else {
//     console.log ("sayılar eşit");
// }





// 4-> 2 vize (40%) ve 1 final (60%) notuna göre hesaplama ortalam için ;
    // a -> Eger ortalama 50 ve üstündeyse geçti değilse kaldı yazın 
    // b -> Geçmek için ortalama 50 bile olsa final notu en az 50 olmalı
    // c -> Finalde 70 aldığın ortalama 50'nin altında olsa bile dersten geçilsin 

let vize1 = 50;
let vize2 = 60;
let final = 40;

let ortalama= (vize1 + vize2) / 2 * 0.4 + final * 0.6;
console.log("Ortalamanız : " + ortalama);

if (ortalama >= 50 ){
    console.log("Geçtiniz");
}
else {
    console.log("kaldınız");
}

if (ortalama >= 50 && final >= 50){
    console.log("Geçiniz");
}
else {console.log("final notunuz " + final+ " oldugun için kaldınız");}

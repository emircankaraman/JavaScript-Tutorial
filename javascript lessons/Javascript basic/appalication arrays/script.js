// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"];


// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);


// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); // Elma
console.log(meyveler[meyveler.length-1]);  // Çilek


// 4- Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
console.log(meyveler.push("Kiraz"));

// 6- Dizinin son 2 elemanını siliniz.
console.log(meyveler.pop());
console.log(meyveler.pop());

meyveler.splice(meyveler.length-2,2);
console.log(meyveler);


// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
    Öğrenci 2: Ada Bilgi 2012   (80,80,90)
    Öğrenci 3: Ahmet  2009 (60,60,70)
*/

let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [
        70,60,80
    ]
];
let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [
        80,80,90
    ]
];
let ogr3 = [
    "Ahmet",
    "Batman",
    2009,
    [
        60,60,70
    ]
];

let ogrenciler = [ogr1,ogr2,ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];
let yigit_ort = (ogrenciler[0][3][0] +ogrenciler[0][3][1]+ogrenciler[0][3][2])/3;
let ada_ort = (ogrenciler[1][3][0] +ogrenciler[1][3][1]+ogrenciler[1][3][2])/3;
let ahmet_ort = (ogrenciler[2][3][0] +ogrenciler[2][3][1]+ogrenciler[2][3][2])/3;


console.log(`Yiğitin Yaşı : ${yigit_yas} / Ada'nın Yaşı : ${ada_yas}  / Ahmet'in Yaşı : ${ahmet_yas}`);
console.log(`Yiğitin Ortalaması : ${yigit_ort.toFixed(1)} / Ada'nın Ortalaması :  ${ada_ort.toFixed(1)} / Ahmet'in Ortalaması : ${ahmet_ort.toFixed(1)}`);





















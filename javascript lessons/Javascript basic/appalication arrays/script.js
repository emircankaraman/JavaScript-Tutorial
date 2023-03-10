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





















// 1--> kendisine gönderilen kelimeyi belirtilen kez ekranda yazan  fonksiyon yapınız.

function kelimeYazdır(kelime, adet){
    for (let i =0;i<adet;i++){
        console.log(kelime);
    }
}
// kelimeYazdır("Işıl",19);

// 2--> Dikdörtgenin alan  ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevresiniHesapla(kisa,uzun){
    let alan = kisa * uzun;
    let çevre =(kisa+uzun)*2;
    return `Alan : ${alan} Çevre : ${çevre}`;
}
let sonuc = alanCevresiniHesapla(7,10);
sonuc = alanCevresiniHesapla(12,4);
// console.log(sonuc);


// 3--> Yazı tura uygulamasını fonksiyon kullanarak yapınız.


function yazıTuraAt(){
    let random = Math.random(); // 0-1
    if (random < 0.5){
        console.log("Yazı");
    }
    else (console.log("Tura"))
    console.log(random);
}
// yazıTuraAt();


// 4--> kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon yazınız.

function tamBolenler(sayi){
    let sayilar =[];

    for (let i=2; i<sayi;i++){
        if (sayi %i==0){
            sayilar.push(i);
        }
    }
    return sayilar;
}
// console.log(tamBolenler(15));
// console.log(tamBolenler(20));
// console.log(tamBolenler(8));




// 5--> değişken sayıda parametre alan toplam isminde bir fonksiyon tnaımlayınız.

function toplam(){
let sonuc = 0;
for (let i = 0; i< arguments.length;i++){
    sonuc += arguments[i];
}
return sonuc;
}
console.log(toplam(2,5));
console.log(toplam(4,7));
















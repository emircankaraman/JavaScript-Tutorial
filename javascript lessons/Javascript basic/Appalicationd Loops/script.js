let sayilar = [1,5,7,15,3,25,8,10,12,14];

// 1--> Sayilar listesindeki her bir elemanın karesini yazdırın.
// for (let sayi of sayilar){
//     console.log(sayi*sayi);
// }

// 2--> Sayilar listesindeki hangi sayılar 5'in katıdır?
// for (let i in sayilar){
//     if (sayilar[i] % 5==0){
//       console.log(sayilar[i]);
//     };
// }

// 3--> Sayılar listesindeki çift sayıların toplamı kaçtır ?
// let toplam = 0;
// for (let i in sayilar){
//     if (sayilar[i]%2==0){
//         toplam+=sayilar[i];
//     };
// };
// console.log(toplam);
//


let urunler =["iphone12","samsung s22","iphone 14","samsung s23"];
// 4--> Ürünler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// for (let urun of urunler){
//     console.log(urun.toLocaleUpperCase());
// };


// 5--> Ürünler Listesinde içinde samsung geçen kaç tane ürün vardır ?
// let adet =0;
// for (let urun of urunler){
//     if (urun.includes("samsung")){
//         adet++;
//
//     };
//
// };
//




let ogrenciler =[
    {"Ad":"Emircan" ,"SoyAd":"Karaman", "Notlar":[60,70,60]},
    {"Ad":"Işıl" ,"SoyAd":"Demirtaş", "Notlar":[80,70,80]},
    {"Ad":"Şahincan" ,"SoyAd":"Babacan", "Notlar":[70,70,60]}
];

// Öğreciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for (let ogrenci of ogrenciler){
    let toplam = 0;
    let ort=0;
    let adet = 0;
    for (let not of ogrenci.Notlar){
        toplam += not;
        adet++;
    };
    ortalama = toplam/adet;

    console.log(`${ogrenci.Ad},${ogrenci.SoyAd} isimli öğrencinin not ortalaması : ${ortalama}`);

    if (ortalama >= 50){
        console.log("Başarılı");
    }
    else (console.log("Başarısız"));
};


// Tüm öğrencilerin not ortalamarını yazdırınız.



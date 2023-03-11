/*
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler:
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12

    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/

let urun_1 ={
    "Ürün_id" : "101",
    "Sipariş_tarihi" : "31.12.2022",
    "Ödeme_şekli" : "Kredi Kartı",
    "Kargo_adresi":{
        "mahalle" : "Yahya kaptan mah",
        "ilce" : "İzmit",
        "İl" : "Kocaeli"
    },
    "urunler":[
        {
            "urun_id" : 5,
            "urun_adı":"İphone 13 Pro",
            "urun_url":"http://abc.com/iphone-13-pro",
            "urun_fiyatı":22000
        },
        {
            "urun_id" :6,
            "urun_adı":"IPhone 13 Pro Max",
            "urun_url":"http://abc.com/iphone-13-pro-max",
            "urun_fiyatı":25000
        }
    ],
    "musteri":{
        "musteri_id":"12"
    },
    "satıcı":{
        "musteri_id":"34"
    }
}

let urun_2 ={
    "Ürün_id" : "102",
    "Sipariş_tarihi" : "31.12.2022",
    "Ödeme_şekli" : "Kredi Kartı",
    "Kargo_adresi":{
        "mahalle" : "Yahya kaptan mah",
        "ilce" : "İzmit",
        "İl" : "Kocaeli"
    },
    "urunler":[
        {
            "urun_id" :6,
            "urun_adı":"IPhone 13 Pro Max",
            "urun_url":"http://abc.com/iphone-13-pro-max",
            "urun_fiyatı": 25000
        }
    ]
}

let siparis1_toplam = (urun_1.urunler[0].urun_fiyatı + urun_1.urunler[1].urun_fiyatı) * 1.18;
let siparis2_toplam = (urun_1.urunler[0].urun_fiyatı) * 1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("sipariş 1: " + siparis1_toplam);
console.log("sipariş 2: " + siparis2_toplam);

console.log("toplam ödenen miktar: " , toplam_siparis);
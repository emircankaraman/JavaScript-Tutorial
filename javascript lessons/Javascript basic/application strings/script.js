let url = "https://github.com/emircankaraman";
let kursAdı = "Komple Web Geliştirme Eğitim Kursu";

// 1--> url kaç karakterlidir ?
  let sonuc;
 sonuc = url.length;

// 2--> kursAdı kaç helimeden oluşmaktadır ?
  sonuc = kursAdı.split(" ");

// 3--> url https ile mi başlıyor ?
  sonuc = url.startsWith("https://");

// 4--> kursAdı içinde Eğitim kelimsei var mı  ?
 if (kursAdı.indexOf("Eğitimi") > -1) {
     console.log("evet var");
 } else {
     console.log("hayır yok");
 }

// 5--> url ve kursAdı değişkenliklerini kullanarak aşşağıdaki string bilgiyi oluşturunuz ?
kursAdı = kursAdı.toLocaleLowerCase();
kursAdı = kursAdı.replaceAll(" ", "/")
kursAdı = kursAdı.replaceAll("i","ı");
sonuc = `${url}/${kursAdı}`;


console.log(sonuc);
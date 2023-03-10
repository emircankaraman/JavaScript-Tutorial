let kursAdı = "Bugün Javascript kursuna çalışıyorum";
let sonuc;

sonuc = kursAdı.toLocaleUpperCase();
sonuc = sonuc.toLocaleLowerCase();
sonuc = sonuc.length;
sonuc = kursAdı[0];
sonuc =  kursAdı.slice(0,4);
sonuc = kursAdı.slice(10);
sonuc = kursAdı.slice(-10);
sonuc = kursAdı.slice(-10,-5);
sonuc = kursAdı.substring(0,6);
sonuc = kursAdı.replace("Javascript", " React");

sonuc = kursAdı.trim(); // sol ve sağ taraftaki boşlukları siler
sonuc = kursAdı.trimEnd(); // sağ taraftaki boşlukları siler
sonuc = kursAdı.trimStart(); // sol taraftaki boşlukları siler

sonuc = kursAdı.indexOf("ders");
sonuc = kursAdı.split(" ")[0];
sonuc = kursAdı.split(" ")[3];
sonuc = kursAdı.split(" ")[1];
sonuc = kursAdı.includes("Javascript"); // sorgulama yapıyor





console.log(sonuc);
let ogr1_ad = "Işıl";
let ogr1_soyad = "Demirtaş";
let ogr1_dogumTarihi="2002";
let ogr1_matematik1=70;
let ogr1_matematik2=80;
let ogr1_matematik3=50;
let ogr1_ort = (ogr1_matematik1+ogr1_matematik2+ogr1_matematik3)/3;
console.log(parseInt(ogr1_ort));
console.log(ogr1_ort >= 50);

let ogr2_ad = "Emircan";
let ogr2_soyad = "Karaman";
let ogr2_dogumTarihi="2002";
let ogr2_matematik1=70;
let ogr2_matematik2=30;
let ogr2_matematik3=70;
let ogr2_ort = (ogr2_matematik1+ogr2_matematik2+ogr2_matematik3)/3;
console.log(parseFloat(ogr2_ort));
console.log(ogr1_ort >= 50);

let time= new Date().getFullYear();
let ogr1_yas = time- parseInt(ogr1_dogumTarihi);
let ogr2_yas = time- parseInt(ogr1_dogumTarihi);





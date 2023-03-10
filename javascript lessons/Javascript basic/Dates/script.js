let simdi = new Date(); // şimdi ki zaman ve tarih biligisi

// Get methods
sonuc = simdi;
sonuc = simdi.getDate();     // tarih bilgisni verir
sonuc = simdi.getDay();      // gün bilgisi verir
sonuc = simdi.getFullYear(); // Yıl bilgisini verir
sonuc = simdi.getHours();    // saat bilgisini verir
sonuc = simdi.getTime();     // saniye bilgisni verir

// set Methods
// simdi.setFullYear(2025);
simdi.setMonth(7);
simdi.setDate(15);
sonuc = simdi;

let dogumTarihi = new Date(2002,7,31);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear()

let milisecond = simdi - dogumTarihi;
let saniye = milisecond/1000;
let dakika = saniye /60;
let saat= dakika /60;
let gun = saat /24;

console.log(gun);
console.log(typeof sonuc);

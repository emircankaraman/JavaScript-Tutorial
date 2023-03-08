let sonuc;
let a = 10, b = 20, c = 30;

// 1--> Aritmetik Operatörler
sonuc = a + b; // Toplama
sonuc = a - b; // Çıkartma
sonuc = a / b; // Bölme
sonuc = a * b; // Çarpma
sonuc = a % b; // Mod alma
// sonuc = a++; // a + 1
// sonuc = --a;
// sonuc = a--;

// 2--> Atama Operatörler
sonuc = (a + b);
sonuc += a; // sonuc = sonuc + a
sonuc -= a; // sonuc = sonuc - a
sonuc /= a; // sonuc = sonuc / a
sonuc *= a; // sonuc = sonuc * a
sonuc %= a; // sonuc = sonuc % a


// 3--> Karşılaştırma Operatörler
sonuc = (a == b); // a - b ye eşit mi ?
sonuc = (a !=b);  // a - b ye eşit değil mi ?
sonuc = (a ===b); // değer kontrolü dışında tip kontrölüde yapıyor. 
sonuc = (a > b);  // a - b den büyük mü ?
sonuc = (a < b);  // a - b den küçük mü ?
sonuc = (a >= b); // a - b ye büyük eşit mi ?
sonuc = (a <= b); // a - b ye küçük eşit 
// 4--> Mantıksal Operatörler


console.log(sonuc);
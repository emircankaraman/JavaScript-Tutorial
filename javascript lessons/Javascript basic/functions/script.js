function selamlama(msg){
    console.log(msg);
}

selamlama("Selam");
selamlama("Merhaba");
selamlama("İyi Günler");



function yasHesaplama(dogumYili){
    return new Date().getFullYear() - dogumYili;
}
let yasEmircan= yasHesaplama(2002);
let yasIşıl= yasHesaplama(2002);

console.log(yasEmircan,yasIşıl);

function emeklilikHesaplama(dogumYili,isim){
    let yas = yasHesaplama(dogumYili);
    let kalan_sene = 65-yas;
    if (kalan_sene>0){
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı`);
    }
    else (console.log("Zaten Emeklisiniz"));
}
emeklilikHesaplama(2002,"Emircan");
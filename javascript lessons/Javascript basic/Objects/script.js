// dict ,json

let user_1 = {
    "Name":"Emircan",
    "Last_Name": "Karaman",
    "Age" : 21,
    "Address" : {
        "City" : "İstanbul",
        "District" : "Pendik"
    },
    "Hobbies" : ["Cinema" , "Sport"]
}
let user_2 = {
    "Name":"Işıl",
    "Last_Name": "Demirtaş",
    "Age" : 21,
    "Address" : {
        "City" : "İzmir",
        "District" : "Bornova"
    },
    "Hobbies" : ["Cinema" , "Sport"]
}


let sonuc ;

sonuc = user_1.Name;
sonuc = user_1.Last_Name;
sonuc = user_1.Age;
sonuc = user_1.Address.City;
sonuc = user_1.Address.District;
sonuc = user_1.Hobbies[0];


let users = [
    user_1,
    user_2
]

let urunler =[

    {
        "urun_adı" : "Samsung",
        "Fıyat" : "8500"
    },
    {
        "urun_adı" : "İphone",
        "Fıyat" : "15000"
    }
]


console.log(users[0]);
console.log(users[1]);

console.log(urunler[0].urun_adı);

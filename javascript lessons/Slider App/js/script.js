var models = [
    {
        name: "Yamaha YZF R1",
        image: "/javascript%20lessons/Slider%20App/İmg/2022-Yamaha-YZF-r1.jpg",
        link: 'https://www.epey.com/motosiklet/kawasaki-ninja-h2r.html',
    },
    {
        name: "Yamaha YZF R25",
        image: "/javascript%20lessons/Slider%20App/İmg/2022-Yamaha-YZF-R25.jpg",
        link: 'https://www.epey.com/motosiklet/yamaha-yzf-r25.html',
    },
    {
        name: "BWM S1000RR",
        image: "/javascript%20lessons/Slider%20App/İmg/nsc-s1000rr-P0N3H-multiimage-2560x1440.jpg.asset.1661501760414.webp",
        link: 'https://www.epey.com/motosiklet/bmw-s-1000-rr.html',
    },
    {
        name: "Yamaha MT-09",
        image: "/javascript%20lessons/Slider%20App/İmg/yamaha-Mt-09.jpg",
        link: 'https://www.epey.com/motosiklet/yamaha-mt-09.html',
    },
    {
        name: "Kawasaki Ninja H2R",
        image: "/javascript%20lessons/Slider%20App/İmg/Kawasaki-Ninja-H2-R.jpg",
        link: 'https://www.epey.com/motosiklet/yamaha-mt-09.html',
    },
];

var index = 0;
var slaytCount = models.length;
var settings ={
    duration:'2000',
    random:true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});


function init(settings){
    // setTimeout()
    // setInterval()
    // clearInterval()
    var prev;

    setInterval(function (){
        //2 saniye de bir tekrarlanacak.
        if (settings.random){
            // ramdom index
            do {
                index = Math.floor(Math.random() * slaytCount);
            }
            while (index == prev)
            prev = index;
        }
        else {
            // artan index

        }
        console.log(index);
        showSlide(index);
    },settings.duration);
}

function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

console.log("Script is start here")

function getCarsData() {
    const cars = [
        {
            "manufacturer": "Porsche",
            "model": "911",
            "price": 135000,
            "wiki": "http://en.wikipedia.org/wiki/Porsche_997",
            "img": "2004_Porsche_911_Carrera_type_997.jpg"
        },
        {
            "manufacturer": "Nissan",
            "model": "GT-R",
            "price": 80000,
            "wiki": "http://en.wikipedia.org/wiki/Nissan_Gt-r",
            "img": "250px-Nissan_GT-R.jpg"
        },
        {
            "manufacturer": "BMW",
            "model": "M3",
            "price": 60500,
            "wiki": "http://en.wikipedia.org/wiki/Bmw_m3",
            "img": "250px-BMW_M3_E92.jpg"
        },
        {
            "manufacturer": "Audi",
            "model": "S5",
            "price": 53000,
            "wiki": "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5",
            "img": "250px-Audi_S5.jpg"
        },
        {
            "manufacturer": "Audi",
            "model": "TT",
            "price": 40000,
            "wiki": "http://en.wikipedia.org/wiki/Audi_TT",
            "img": "250px-2007_Audi_TT_Coupe.jpg"
        }
    ];
    return cars;
}

function getCarsFromServer(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param) reject("missing data");
            resolve(getCarsData())
        }, 3000);
    })
}

const result = getCarsFromServer().then((result) => {
    console.log(result)
}).catch((err) => { console.log(err) })

console.log("Script ends here")



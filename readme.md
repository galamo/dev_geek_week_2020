# Dev Geek Week 2020

## Tasks

## prerequisites

- run the following command line in VScode Terminal: node -v
- create folder + index. file inside
- put the following line inside the file `console.log("script is running")`
- run `node index. command`

### Task 1:

Create Your Own Callback function, after 4 sec operation will return the following payload to the relevant function:

```on
{
  "data": [
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
  ]
}
```

### Task 2:

Create Promise that return after 2 sec the relevant cars in your budget - try to use async await to invoke

### Task 3:

Create new API that listen to port 3200

- `npm install express`

- `npm install @types/express --save-dev`

- `npm i tsc -g`

- `npm i dotenv`

- `npm i @hapi/joi`

- `npm i axios`

### Task 4:

Create the following entry point
GET /cars
GET /cars/manufacturer
return all the cars under the relevant manufacturer

### Task 5

`npx create-react-app cars-app`
`npm start`

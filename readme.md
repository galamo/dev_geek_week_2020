# Dev Geek Week 2020

## Tasks

## prerequisites

- run the following command line in VScode Terminal: node -v
- create folder + index.js file inside
- put the following line inside the file `js console.log("script is running")`
- run `js node index.js command`

### Task 1:

Create Your Own Callback function, after 4 sec operation will return the following payload to the relevant function:

```json
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

`js npm install express`
`js npm install @types/express --save-dev`
`js npm i tsc -g`
`js npm i dotenv`
`js npm i @hapi/joi`
`js npm i axios`

### Task 4:

Create the following entry point
GET /cars
GET /cars/manufacturer
return all the cars under the relevant manufacturer

### Task 5

`js npx create-react-app cars-app`
`js npm start`

import express = require("express")
require("dotenv").config()
import data from "./data";
import Joi = require("@hapi/joi");

const app = express();

// app.get("/cars", (req, res, next) => {
//     res.json(data)
// })

const schema = Joi.object().keys({
    manufacturer: Joi.string().valid("bmw", "audi").required()
})

app.use((req, res, next) => {
    console.log("In middleware...")
    console.log(req.query)
    const { error } = schema.validate(req.query);
    if (error) {
        console.log(error.details)
        res.send("error validation")
    } else {
        next()
    }
})

app.get("/cars", (req, res, next) => {
    console.log("Start search")
    const value = (req.query.manufacturer as string)?.toLowerCase();
    const result = data.filter(car => car.manufacturer.toLowerCase() === value)
    res.json(result)
})

// app.get("/cars/:manufacturer", validate ,(req, res, next) => {
//     console.log("Start search")
//     const value = req.params.manufacturer?.toLowerCase();
//     const result = data.filter(car => car.manufacturer.toLowerCase() === value)
//     res.json(result)
// })

app.listen(process.env.PORT)
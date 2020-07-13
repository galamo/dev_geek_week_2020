import express = require("express")
require("dotenv").config()
import data from "./data";
import { getValidation } from "./validations"
import cors = require("cors");

const app = express();
app.use(cors());

const path = "cars"
app.get(`/${path}`, getValidation(path), (req, res, next) => {
    console.log("Start search")
    const value = (req.query.manufacturer as string)?.toLowerCase();
    const result = data.filter(car => car.manufacturer.toLowerCase() === value)
    res.json(result)
})

app.get(`/users`, getValidation("users"), (req, res, next) => {
    try {
        throw new Error("users are not exist")
        return res.send("users api..");
    } catch (err) {
        next(err);
    }

})


// app.get("/cars/:manufacturer", validate ,(req, res, next) => {
//     console.log("Start search")
//     const value = req.params.manufacturer?.toLowerCase();
//     const result = data.filter(car => car.manufacturer.toLowerCase() === value)
//     res.json(result)
// })

app.use((err, req, res, next) => {
    console.log("main error handler")
    res.send("Error from middleware")
})
app.listen(process.env.PORT)
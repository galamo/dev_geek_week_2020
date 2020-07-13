const express = require("express")
const data = require("./data/cars")
const app = express();

// app.get("/cars/:param/:param2", (req, res, next) => {
//     const { param, param2 } = req.params
//     res.json(data)
// })

app.get("/cars", (req, res, next) => {
    res.json(data)
})


app.listen(3500)
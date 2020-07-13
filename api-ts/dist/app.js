"use strict";
exports.__esModule = true;
var express = require("express");
require("dotenv").config();
var data_1 = require("./data");
var Joi = require("@hapi/joi");
var app = express();
// app.get("/cars", (req, res, next) => {
//     res.json(data)
// })
var schema = Joi.object().keys({
    manufacturer: Joi.string().valid("bmw", "audi").required()
});
app.use(function (req, res, next) {
    console.log("In middleware...");
    console.log(req.query);
    var error = schema.validate(req.query).error;
    if (error) {
        console.log(error.details);
        res.send("error validation");
    }
    else {
        next();
    }
});
app.get("/cars", function (req, res, next) {
    var _a;
    console.log("Start search");
    var value = (_a = req.query.manufacturer) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var result = data_1["default"].filter(function (car) { return car.manufacturer.toLowerCase() === value; });
    res.json(result);
});
// app.get("/cars/:manufacturer", validate ,(req, res, next) => {
//     console.log("Start search")
//     const value = req.params.manufacturer?.toLowerCase();
//     const result = data.filter(car => car.manufacturer.toLowerCase() === value)
//     res.json(result)
// })
app.listen(process.env.PORT);

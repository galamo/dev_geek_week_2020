"use strict";
exports.__esModule = true;
var express = require("express");
require("dotenv").config();
var data_1 = require("./data");
var validations_1 = require("./validations");
var cors = require("cors");
var app = express();
app.use(cors());
var path = "cars";
app.get("/" + path, validations_1.getValidation(path), function (req, res, next) {
    var _a;
    console.log("Start search");
    var value = (_a = req.query.manufacturer) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var result = data_1["default"].filter(function (car) { return car.manufacturer.toLowerCase() === value; });
    res.json(result);
});
app.get("/users", validations_1.getValidation("users"), function (req, res, next) {
    try {
        throw new Error("users are not exist");
        return res.send("users api..");
    }
    catch (err) {
        next(err);
    }
});
// app.get("/cars/:manufacturer", validate ,(req, res, next) => {
//     console.log("Start search")
//     const value = req.params.manufacturer?.toLowerCase();
//     const result = data.filter(car => car.manufacturer.toLowerCase() === value)
//     res.json(result)
// })
app.use(function (err, req, res, next) {
    console.log("main error handler");
    res.send("Error from middleware");
});
app.listen(process.env.PORT);

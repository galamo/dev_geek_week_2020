import React, { useState, useEffect } from "react";
import List from "../../ui-components/list";
import axios from "axios";
const testArr = ["list1", 1];
const CARS_URL = "http://localhost:4500/cars?manufacturer=audi"

export default function Home() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        getCars();
    }, [])

    async function getCars() {
        const result = await carsService();
        const { data } = result;
        if (!Array.isArray(data)) return;
        //@ts-ignore
        setCars(data);
    }

    const header = "Home Page";
    return <div className="container">
        <h1 className="jumbotron"> {header} </h1>
        <List data={cars} />
    </div>

}

async function carsService() {
    return axios.get(CARS_URL)
}
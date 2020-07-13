import React from "react"

interface IProps {
    data: Array<any>
}

interface Car {
    model: string,
    price: number,
    manufacturer: string
}

export default function List(props: IProps) {
    const { data } = props;
    return <ul className={"list-group"}>
        {data.map(car => getCarListItem(car))}
    </ul>
}


function getCarListItem(car: Partial<Car>) {
    const btn = <button className="btn btn-primary" onClick={() => { console.log(car) }} style={{ float: "right" }}>Buy</button>;
    return <li key={`${car.manufacturer}-${car.model}`} className="list-group-item"><span>Car Details:: {car.manufacturer} </span> <span> {car.model} </span> <span>  {car.price} </span> {btn}</li>
}




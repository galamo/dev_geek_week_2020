import React from "react";
import List from "../../ui-components/list";
const testArr = ["list1", 1];
export default function Home() {

    const header = "Home Page";

    return <div className="container">
        <h1 className="jumbotron"> {header} </h1>
        <List data={testArr} />
    </div>

}
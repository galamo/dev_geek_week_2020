import React from "react"

interface IProps {
    data: Array<string | number>
}

export default function List(props: IProps) {
    const { data } = props;
    return <ul className={"list-group"}>
        {data.map(str => getListItem(str))}
    </ul>
}


function getListItem(text: string | number) {
    return <li className="list-group-item"> {text} </li>
}




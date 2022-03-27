import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import dummy from "../db/data.json"

console.log(dummy);
export default function DayList(){
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onclick(){
        setCount(count+1);
    }

    function onclick2(){
        setDays([
            ...days,
            {
                id : Math.random(),
                day : 1
            }
        ])
    }

    useEffect(() =>{
        console.log("count change");
    });

    return (<>
        <ul className = "list_day">
            {dummy.days.map(day => (
                <li key = {day.id}>
                    <Link to= {`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        <button onClick={onclick}>{count}</button>
        <button onClick={onclick2}>Day Change</button>
        </>
        );
}
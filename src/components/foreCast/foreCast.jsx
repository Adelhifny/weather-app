import React, { useEffect, useState } from "react";
import Day from "./Day/Day.jsx";
import "./foreCast.css";

function ForeCast({foreCast}) {
    const [day ,setDay] = useState(0);
    const handleClick = (inc) => {
        if(inc && day != (foreCast.length - 1)){
            setDay(day+1);
        }else if(day != 0 && inc == false){
            setDay(day-1);
        }
    }
    if(Object.keys(foreCast).length > 0){
        return (
            <section className="foreCast">
                <Day foreCastDay={foreCast[day]} handleDay={handleClick}/>
            </section>
         );
    }else{
        return<>pending</>
    }
}

export default ForeCast;
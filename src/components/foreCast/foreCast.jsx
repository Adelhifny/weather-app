import React, { useEffect, useState } from "react";
import Day from "./Day";
import "./foreCast.css";
import Button from "./button";

function ForeCast({foreCast}) {
    const [day ,setDay] = useState(0);
    if(Object.keys(foreCast).length > 0){
        return (
            <div className="foreCast">
                <Day foreCastDay={foreCast[day]}/>
            </div>
         );
    }else{
        return<>pending</>
    }
}

export default ForeCast;
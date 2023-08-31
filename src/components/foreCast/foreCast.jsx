import React, { useEffect, useState } from "react";
import Day from "./Day";
import "./foreCast.css";

// <Day location={foreCast.location} foreCastDay={foreCast.forecast.forecastday[0]} selected={selected} handleClick={handleClick}num ={1}/>

function ForeCast({foreCast}) {
    const [selected,setSelected] = useState(1); 
    const handleClick = (num) => {
        setSelected(num);
    }
    if(Object.keys(foreCast).length > 0){
        return (
            <div className="foreCast">
                <div className="days">
                <Day location={foreCast.city} foreCastDay={foreCast.list[0]} selected={selected} handleClick={handleClick}num={1}/>
                    <div className="restDayss">
                        {foreCast.list.map((child,index)=>{
                            if(index !== 0){
                                return <Day key={index} location={foreCast.city} foreCastDay={child} selected={selected} handleClick={handleClick}num={(index+1)}/>
                            }
                        })}
                    </div>
                </div>
            </div>
         );
    }else{
        return<>pending</>
    }
}

export default ForeCast;
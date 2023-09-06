import { useState } from "react";
import Head from "./head";
import Content from "./content";

function Day({foreCastDay,handleDay}) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [time ,setTime] = useState(0);
  const handleTime = (inc)=>{
    if(inc && time != (foreCastDay.length - 1)){
      setTime(time+1);
    }else if(inc == false && time != 0){
      setTime(time-1);
    }
  }
    return (
        <>
          <Head foreCastDay={foreCastDay} handleDay={handleDay} time={time}/>
          <Content foreCastDay={foreCastDay} time={time} handleTime={handleTime}/>
        </>
    )
}

export default Day;
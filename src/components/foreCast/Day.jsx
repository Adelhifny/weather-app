import useGetIcon from "../../useGetIcon";
import umberlla from "../../assets/images/icon-umberella.png"
import wind from "../../assets/images/icon-wind.png"
import compass from "../../assets/images/icon-compass.png"

function Day({foreCastDay,handleClick,num,location}) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    return (
        <div className="day" onClick={()=>{handleClick(num)}}>
            <div className="head">
                <span>{days[new Date(foreCastDay.dt_txt).getDay()]}</span>
                {num == 1 &&<span style={{paddingRight:"1rem"}}>{new Date(foreCastDay.dt_txt).getDate()} {monthNames[new Date(foreCastDay.dt_txt).getMonth()]}</span>}
            </div>
           <div className={num==1?"body":"body2"}>
            {num == 1 && <h4 style={{color:"gray"}}>{location.name}</h4>}
                {num == 1 ? <div className="temp">
                    <h1>{foreCastDay.main.temp_max}°C</h1>
                    <img src={useGetIcon(foreCastDay.weather[0].main.toLowerCase())} alt="" width={"90"}/>
                </div>:<div className=" temp2">
                    <img src={useGetIcon(foreCastDay.weather[0].main.toLowerCase())} alt="" width={"48"}/>
                    <h3>{foreCastDay.main.temp_max}°C</h3>
                </div>}
                {num==1?<div className="bottom">
                    <div className="slice">
                        <img style={{width:"1.1rem"}}src={umberlla} alt="" />
                        <span style={{color:"gray"}}>{}%</span>
                    </div>
                    <div className="slice">
                        <img style={{width:"1.1rem"}}src={wind} alt="" />
                        <span style={{color:"gray"}}>{foreCastDay.wind.main}km/h</span>
                    </div>
                    <div className="slice">
                        <img style={{width:"1.1rem"}}src={compass} alt="" />
                        <span style={{color:"gray"}}>{}%</span>
                    </div>
                </div>
                :<span style={{color:"gray"}}>{foreCastDay.main.temp_min}°C</span>}
           </div>
        </div>  
    )
}

export default Day;
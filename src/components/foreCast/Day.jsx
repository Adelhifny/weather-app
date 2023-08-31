import useGetIcon from "../../useGetIcon";
import umberlla from "../../assets/images/icon-umberella.png"
import wind from "../../assets/images/icon-wind.png"
import compass from "../../assets/images/icon-compass.png"
import Button from "./button";

function Day({foreCastDay}) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    return (
        <div className="">
          <div className="head">
              <Button render={()=>{
                return (<>
                  <img id="prevDay" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/>
                  <p style={{marginLeft:"5px"}}>Prev Day</p>
                </>);
              }}/>
              <h5 style={{color:"gray"}}>{new Date(foreCastDay[foreCastDay.length/2].dt_txt).getDate()} {monthNames[new Date(foreCastDay[foreCastDay.length/2].dt_txt).getMonth()]}</h5>
              <Button render={()=>{
                return (<>
                  <p style={{marginRight:"5px"}}>Next Day</p>
                  <img id="nextDay" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/>
                </>);
              }}/>
            </div>
        </div>
    )
}

export default Day;
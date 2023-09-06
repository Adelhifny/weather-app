function Head({foreCastDay,handleDay,time}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    return ( 
        <div className="head">
            <a className="btn" href="#Day" onClick={()=>{handleDay(false)}}>
                <img id="prevDay" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/>
                <p style={{marginLeft:"5px"}}>Prev Day</p>
            </a>
            <h5 style={{color:"gray"}}>{new Date(foreCastDay[time].dt_txt).getHours()}:00:00 {new Date(foreCastDay[time].dt_txt).getDate()} {monthNames[new Date(foreCastDay[time].dt_txt).getMonth()]}</h5>
            <a className="btn" href="#Day" onClick={()=>{handleDay(true)}}>
                <p style={{marginRight:"5px"}}>Next Day</p>
                <img id="nextDay" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/>
            </a>
        </div>
     );
}

export default Head;
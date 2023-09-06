import useGetIcon from "../../../useGetIcon";
import wind from "../../../assets/images/icon-wind.png"
import 'leaflet/dist/leaflet.css'
import { MapContainer,TileLayer,useMap,Marker,Popup } from 'react-leaflet'
import { useContext, useRef } from "react";
import coordsContext from "../../../useLocationContext";

function Content({foreCastDay,time,handleTime}) {  
    const weatherInfo = useRef(null);
    const coords = useContext(coordsContext);
    const WIAnimation = (id) =>{
        let position = 0;
        let opacity = 1;
        let int = setInterval(()=>{
            if(position == 10){
                clearInterval(int);
                weatherInfo.current.style.left = null;
                weatherInfo.current.style.right = null;
                weatherInfo.current.style.opacity = 1;
            }else if(id == "leftBtn"){
                position += 2;
                opacity -= 0.4;
                weatherInfo.current.style.right = position+"rem";
                weatherInfo.current.style.opacity = opacity;
            }else{
                position += 2;
                opacity -= 0.4;
                weatherInfo.current.style.left = position+"rem";
                weatherInfo.current.style.opacity = opacity;
            }
        },40);
    } 
    const handleClick = (e)=>{
        if(e.target.id == "leftBtn"){
            if(time !== 0){
                handleTime(false);
                WIAnimation(e.target.id);
            }
        }else{
            if(time !== foreCastDay.length - 1){
                handleTime(true);
                WIAnimation(e.target.id);
            }
        }
    }
    if(Object.keys(coords).length > 0){
        return ( 
            <div className="dayContent">
                <div>
                    <a onClick={handleClick} id="leftBtn" className="timeBtn"><img id="leftBtn" width="26" height="26" src="https://img.icons8.com/metro/26/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/></a>
                    <div className="weatherInfo" ref={weatherInfo}>
                        <div className="weatherDeg">
                            <img width="60px" src={useGetIcon(foreCastDay[time].weather[0].description)} alt="" />
                            <h3>{foreCastDay[time].main.temp}°C</h3>
                        </div>
                        <div>
                            <div id="windSpeed">
                                <h5 className="windTt">Wind Speed</h5><img src={wind}/>
                                <h4>{foreCastDay[time].wind.speed} km/hr</h4>
                            </div>
                            <div id="humidity">
                                <h5 className="humidityTt">Humidity</h5>
                                <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/737373/humidity.png" alt="humidity"/>
                                <h4>{foreCastDay[time].main.humidity} gm/m</h4><sub>3</sub>
                            </div>
                            <div id="pressure">
                                <h5 className="pressureTt">Pressure</h5>
                                <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/737373/pressure.png" alt="pressure"/>
                                <h4>{foreCastDay[time].main.pressure} N/m</h4><sub>2</sub>
                            </div>
                        </div>
                    </div>
                    <a onClick={handleClick} id="rightBtm" className="timeBtn next"><img id="rightBtn" width="26" height="26" src="https://img.icons8.com/metro/26/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/></a>
                </div>
                <MapContainer
                center={[coords.lat,coords.lon]}
                zoom={5}
                className="map">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[coords.lat,coords.lon]}>
                        <Popup>
                            Current temp: {foreCastDay[0].main.temp_max}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
         );
    }else{
        <div className="dayContent">
            waiting access
        </div>
    }
}

export default Content;
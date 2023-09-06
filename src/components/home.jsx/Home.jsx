import './home.css'
import { useEffect, useState } from 'react';
import ForeCast from '../foreCast/foreCast';
import useGetForeCast from '../../useGetForeCast';
import useGetLocation from './useGetLocation';
import coordsContext from '../../useLocationContext';

function Home() {
    const [city,setCity] = useState("");
    const [foreCast,setForeCast] = useState({});
    const weather = useGetForeCast();
    const [coords,setCoords] = useState({});
    const currentCoords = useGetLocation(); 
    async function handleClick(){
        //https://api.api-ninjas.com/v1/geocoding?city=
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric`);
        const data = await resp.json();
        let arr = [[data.list[0]]];
        let count = 0;
        for(let i = 1;i < data.list.length;i++){
            console.log(new Date(arr[count][0].dt_txt).getDate() == new Date(data.list[i].dt_txt).getDate());
            if(new Date(arr[count][0].dt_txt).getDate() == new Date(data.list[i].dt_txt).getDate()){
                arr[count].push(data.list[i]);
            }else{
                arr.push([data.list[i]]);
                count++;
            }
        }
        const resp1 = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`,{
            headers:{"X-Api-Key":"YzALOrQ4+thc04Bi7Oemfw==UYx4wFTVtxNz6MeI"}
        });
        const data1 = await resp1.json();
        setCoords({lat:data1[0].latitude,lon:data1[0].longitude});
        setForeCast(arr);
    }
    if(Object.keys(weather).length > 0){
        return(
            <coordsContext.Provider value={Object.keys(coords).length > 0?{...coords}:{...currentCoords}}>
                <div className="home">
                    <div className='img'>
                        <div>
                            <input type="text"className="searchBox"placeholder='  search by city'value={city}onChange={(e)=>{setCity(e.target.value);}}/>
                            <a className='searchBtn' onClick={handleClick} >Find</a>
                        </div>
                    </div>
                    <ForeCast foreCast={Object.keys(foreCast).length > 0?foreCast:weather}/>
                </div>
            </coordsContext.Provider>
            
        );
    }else{
        return <div style={{height:"40rem",color:"white",backgroundColor:"#1e202b"}}>
        pending ---
    </div>
    };
}

export default Home;
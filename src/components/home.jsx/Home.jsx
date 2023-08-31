import './home.css'
import { useEffect, useState } from 'react';
import ForeCast from '../foreCast/foreCast';
import useGetForeCast from '../../useGetForeCast';

function Home() {
    const [city,setCity] = useState("");
    const [foreCast,setForeCast] = useState({});
    const weather = useGetForeCast();
    async function handleClick(){
        //api.openweathermap.org/data/2.5/forecast?q=${city}&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric`);
        const data = await resp.json();
        for(let i = 0;i < data.list.length;i++){
            let hour = new Date(data.list[i].dt_txt).getHours();
            if(i == 0 && hour == 12){
                data.list.splice(i+1,3);
            }
            else if(i==0){
                data.list.splice(i+1,7);
            }
            else if(hour == 0){
                data.list.splice(i+1,7);
            }
        }
        setForeCast(data);
    }
    useEffect(()=>{
        console.log(weather);
    },[])
    if(Object.keys(weather).length > 0){
        return(
            <div className="home">
                <div className='img'>
                    <div>
                        <input type="text"className="searchBox"placeholder='   search by city'value={city}onChange={(e)=>{setCity(e.target.value);}}/>
                        <a className='searchBtn' onClick={handleClick} >Find</a>
                    </div>
                </div>
                <ForeCast foreCast={Object.keys(foreCast).length > 0?foreCast:weather}/>
                
            </div>
        );
    }else{
        return <div style={{height:"100%",backgroundColor:"#1e202b"}}>
        pending ---
    </div>
    };
}

export default Home;
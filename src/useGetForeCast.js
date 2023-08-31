import { useEffect, useState } from "react";

export default function useGetForeCast(){
    //https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric
    const [foreCast,setForeCast] = useState({});
    useEffect(()=>{
        async function getForeCast(postion){
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${postion.coords.latitude}&lon=${postion.coords.longitude}&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric`);
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
            console.log(data);
            setForeCast(data);
        }
        navigator.geolocation.getCurrentPosition(getForeCast,()=>{console.log("user didnt give access")});
    },[]);
    return foreCast;
}
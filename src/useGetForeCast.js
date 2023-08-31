import { useEffect, useState } from "react";

export default function useGetForeCast(){
    //https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric
    const [foreCast,setForeCast] = useState({});
    useEffect(()=>{
        async function getForeCast(postion){
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${postion.coords.latitude}&lon=${postion.coords.longitude}&appid=991a48e98dffd42bcb08fe109d1f4978&units=metric`);
            const data = await resp.json();
            let arr = [[data.list[0]]];
            let count = 0;
            for(let i = 1;i < data.list.length;i++){
                if(new Date(arr[count][0].dt_txt).getDate() == new Date(data.list[i].dt_txt).getDate()){
                    arr[count].push(data.list[i]);
                }else{
                    arr.push([data.list[i]]);
                    count++;
                }
            }
            console.log(arr);
            setForeCast(arr);
        }
        navigator.geolocation.getCurrentPosition(getForeCast,()=>{console.log("user didnt give access")});
    },[]);
    return foreCast;
}
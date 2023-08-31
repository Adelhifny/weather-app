// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=278890ad57504e20b67f4a46dbe12d55

import { useEffect, useState } from "react";

export default function useGetNews(){
    const [news,setNews] = useState({});
    const [country1,setCountry] = useState({});
    useEffect(()=>{
        async function apiCall(postion){
            const resp1 = await fetch(`http://api.geonames.org/countryCodeJSON?lat=${postion.coords.latitude}&lng=${postion.coords.longitude}&username=adelhefny`);
            const country = await resp1.json();
            if(Object.keys(country).length > 0){
                setCountry(country);
                const resp = await fetch(`https://newsapi.org/v2/everything?q="${country.countryName}"&sortBy=popularity&apiKey=278890ad57504e20b67f4a46dbe12d55`);
                const data = await resp.json();
                data.articles.length = 10;
                console.log(data);
                setNews(data);
            }
        }
        navigator.geolocation.getCurrentPosition(apiCall,()=>{console.log("user didnt give access")});
    },[]);
    return [news,country1];
}
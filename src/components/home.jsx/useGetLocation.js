import { useEffect, useState } from "react";

export default function useGetLocation(){
    const [coords,setCoords] = useState({});
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((postion)=>{
            setCoords({
                lat:postion.coords.latitude,
                lon:postion.coords.longitude,
            });
        },()=>{console.log("user didnt give access");});
    },[])
    return coords;
}
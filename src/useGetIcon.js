import sunny from "./assets/images/icons/sunny.svg";
import partialyCloudy from "./assets/images/icons/semiCloudy.svg"
import Cloudy from "./assets/images/icons/heavyClouds.svg"
import snow from "./assets/images/icons/snowing.svg"
import rain from "./assets/images/icons/lightRaining.svg"
import rainCloud from "./assets/images/icons/heavyRaining.svg"
import windy from "./assets/images/icons/windy.svg"
import rainThunder from "./assets/images/icons/thunderRain.svg"
import thunder from "./assets/images/icons/thunder.svg"
import mist from "./assets/images/icons/mist.svg"

export default function useGetIcon(state){
    if(state == "sunny"|| state == "clear sky" || state == "clear"){
        return sunny;
    }else if(state == "partly cloudy" || state == "patchy rain possible"){
        return partialyCloudy;
    }else if(state == "rain" ||state == "light drizzle"|| state == "light rain shower"||state == "moderate rain"||state == "moderate or heavy rain shower"){
        return rain;
    }else if(state == "clouds" || state == "overcast"){
        return Cloudy;
    }else if(state == "Patchy light rain with thunder"){
        return rainThunder;
    }else if(state == "Thundery outbreaks possible"){
        return thunder;
    }else if(state == "mist"){
        return mist;
    }else if(state == "snow"){
        return snow;
    }else{
        return partialyCloudy;
    }
}
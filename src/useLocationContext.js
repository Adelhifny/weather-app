import { createContext } from "react";

const coordsContext = createContext({
    lat:0,
    lon:0,
});

export default coordsContext;
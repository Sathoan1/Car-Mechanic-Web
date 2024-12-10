import { createContext } from "react";
import { engineers, services } from "../assets/assets_frontend/assets";


export const AppContext = createContext()

const AppContextProvider = (props) => {
    

    const value = {
        engineers,
        services
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null)

// good practice
// hook that return context
export const useAppContext = () =>{
    const context = useContext(AppContext)

    if (context === undefined){
        throw new Error('Appcontext must be within appContextProvider!')
    }
    return context;
}


const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])


 const addToFavorites = (product) => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(product)

        setFavorites(newFavorites);
    }

const removeFromFavorites = (id) => {

        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.filter((product) => product.id !== id)

        setFavorites(newFavorites)

}

return(
        <AppContext.Provider value={{favorites, addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
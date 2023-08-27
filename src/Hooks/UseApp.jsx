import { useContext } from "react"
import { GlobalContext } from "../context/AppContext"

const UseApp = () => {
    const context = useContext(GlobalContext)
    if(context === undefined){
        throw new Error("Context")
    }
    return context
}

export default UseApp;
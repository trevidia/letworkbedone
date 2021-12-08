import {createContext, useState} from "react";

const DrawerContext = createContext();

const DrawerProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState()
    return <DrawerContext.Provider value={[isOpen, setIsOpen]}>
        {children}
    </DrawerContext.Provider>
}

export {DrawerProvider, DrawerContext}
import {createContext, useEffect, useReducer} from "react";
import {actions, values} from "./Constants";


const UserContext = createContext();
const initialState = {
    user: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {...state, user: action.payload};
        case actions.LOGOUT:
            return {...state, user: null};
        case actions.UPDATE_USERNAME:
            return {...state, user: {...state.user, username: action.payload}}
        default:
            throw new Error();
    }
}

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({
            type: actions.LOGIN,
            payload: JSON.parse(localStorage.getItem(values.USER))
        })
    }, []);


    return <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
}

export {UserProvider, UserContext};

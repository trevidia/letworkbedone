import {createContext, useEffect, useLayoutEffect, useReducer} from "react";
import {actions, values} from "./Constants";
import axios from "axios";


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
        default:
            return state;
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
    useEffect(
        () => {
            const getCsrfToken = async () => {
                return await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/public/sanctum/csrf-cookie`);
            }
            getCsrfToken().then(r => {
            });
        }, []
    )

    return <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
}

export {UserProvider, UserContext};

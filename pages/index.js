import axios from "axios";
import IndexBody from "../Components/IndexBody";
import {useContext, useEffect} from "react";
import {actions, values} from "../lib/Constants";
import {UserContext} from "../lib/UserContext";


const LetWorkBeDone = ({user, token}) => {
    const {dispatch} = useContext(UserContext);
    if (user) {
        const users = {...JSON.parse(user), token: token};
        useEffect(
            () => {
                dispatch({
                    type: actions.LOGIN,
                    payload: JSON.stringify(users)
                })
                localStorage.setItem(values.USER, JSON.parse(user));
            }, []
        )
        return <>
            "Logged In"
            <p>{process.env.NEXT_PUBLIC_VALUE}</p>
        </>
    }
    useEffect(() => {
        localStorage.clear()
    })
    return <IndexBody/>
}

export default LetWorkBeDone;


export const getServerSideProps = async ({req}) => {
    try {
        await axios.get(`${process.env.DOMAIN}/sanctum/csrf-cookie`);
        const token = JSON.parse(req.cookies.token ?? null);
        const user = req.cookies.user ?? null;
        // const config = token && {
        //     headers: { Authorization: `Bearer ${token}` }
        // }

        return {
            props: {
                user,
                token
            },
        }
    } catch (e) {
        return {
            props: {
                user: null,
                token: null
            }
        }
    }
}
import {useContext, useState} from "react";
import {UserContext} from "../lib/UserContext";
import {actions, values} from "../lib/Constants";
import {useRouter} from "next/router";
import Head from "next/head"
import axios from '../lib/AxiosConfig';
import {authenticateUser} from "../lib/Authentication";

const Register = ({user}) => {
    const router = useRouter();
    const {state, dispatch} = useContext(UserContext);
    const [username, setUsername] = useState('');
    // const {user} = state


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`user/${user.id}`, {
            username
        }).then((res) => {
            dispatch(
                {
                    type: actions.UPDATE_USERNAME,
                    payload: username
                }
            );
            localStorage.setItem(values.USER, JSON.stringify({...state.user, username}));
            router.push('/');
        })
    }

    return <>
        <Head>
            <title>Register</title>
        </Head>
        <main className={"flex flex-col items-center py-20"}>
            <h3 className={"text-3xl font-semibold"}>
                Onboarding...
            </h3>
            {/*    Card for setting username*/}
            <form onSubmit={handleSubmit}>
                <div className={"w-screen-40 h-max rounded-md shadow-md my-6 border border-gray-200 py-6 px-6"}>
                    {state.user && user &&
                    <div className={"w-full flex flex-col items-center"}>
                        {/*    Profile Picture */}
                        <img src={user.image_url} className={"h-max w-max rounded-full"} alt={"Profile Picture"}/>
                        <div className={"w-full"}>
                            {/*    Input field for the username*/}
                            <label>
                                <p className={"font-semibold mb-2 text-gray-800 text-sm"}>Username</p>
                            </label>
                            <input
                                type={"text"}
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                className={"w-full h-10 focus:outline-none focus:ring ring-offset-blue-300 px-3 rounded-sm transition border border-gray-300 focus:border-blue-400"}
                                placeholder={"Enter your username"}
                            />
                            <span className={"text-xs text-gray-400"}>NB: User name should not have space and Gmail should not be used as a user name. And Can't change It after also.</span>
                        </div>
                        <div className={"w-full my-3"}>
                            {/*    Input field for the disabled email*/}
                            <label>
                                <p className={"font-semibold mb-2 text-gray-800 text-sm"}>Email</p>
                            </label>
                            <input
                                type={"text"}
                                disabled
                                value={user.email}
                                className={"w-full h-10 focus:outline-none text-gray-500 bg-gray-200 focus:ring ring-offset-blue-300 px-3 rounded-sm transition border border-gray-300 focus:border-blue-400"}
                            />
                        </div>
                        <button
                            className={"bg-blue-700 w-full h-12 text-gray-100 text-xl rounded-sm ring-1 hover:bg-blue-400 transition ring-red-200"}>
                            Continue
                        </button>
                    </div>}
                </div>
            </form>
        </main>
    </>
}

export default Register;

export const getServerSideProps = async ({res, req}) => {
    let data;
    await authenticateUser(req).then((res) => {
        data = res.data
    }).catch(err => console.log(err));

    if (!data || data.username) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            user: data ? data : null
        }
    }
}
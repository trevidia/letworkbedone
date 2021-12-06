import GoogleLogin from "react-google-login";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../lib/UserContext";
import {actions, values} from "../lib/Constants";
import {useRouter} from "next/router";
import Head from "next/head"

const Register = () => {
    const router = useRouter();
    const {state, dispatch} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const {user} = state
    const getLocalStorage = async () => {
        localStorage.getItem(values.USER) === null && await router.push('/join_now')
    }

    useEffect(() => {
        getLocalStorage()
    }, [router])

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(
            {
                type: actions.UPDATE_USERNAME,
                payload: username
            }
        );
        localStorage.setItem(values.USER, JSON.stringify({...state.user, username}));
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
                    {state.user &&
                    <div className={"w-full flex flex-col items-center"}>
                        {/*    Profile Picture */}
                        <img src={state.user.imageUrl} className={"h-max w-max rounded-full"} alt={"Profile Picture"}/>
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
                                value={state.user.email}
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

export async function getServerSideProps(context) {
    // const user = JSON.parse(req.cookies.user)
    // const data = await fetch(`http://trevidia.dev:8000/login?code=${context.query.code}`);
    // console.log(data);
    return {
        props: {
            user: "fiaos"
        }
    }
}
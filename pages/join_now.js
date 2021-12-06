import axios from "axios";
import {useRouter} from "next/router";
import GoogleLogin from "react-google-login";
import {useContext, useEffect} from "react";
import {UserContext} from "../lib/UserContext";
import {actions, values} from "../lib/Constants";

const JoinNow = () => {
    const router = useRouter();
    const {state, dispatch} = useContext(UserContext);
    async function handleGoogleLogin(response) {
        console.log(response.profileObj)
        dispatch({
                type: actions.LOGIN,
                payload: {
                    ...response.profileObj, username: null
                }
            }
        );
        localStorage.setItem(values.USER, JSON.stringify({...response.profileObj, username: null}));
        await router.push('/register');
    }

    return (
        <>
            <main className={"py-20 flex items-center justify-center"}>
                <div className={"rounded-sm shadow-lg h-72 w-screen-40 border border-gray-200 bg-white py-10 px-4"}>
                    <h2 className={"font-semibold text-3xl flex justify-center mb-10"}>Get your free account</h2>
                    <GoogleLogin
                        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                        render={renderProps => (
                            <div
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className={"h-7 bg-blue-500 flex items-center rounded-full w-2/4 cursor-pointer mb-5 m-auto text-sm text-gray-100"}>
                                <img src={"/images/googlelogin.png"} className={"h-6 w-6 rounded-full"}
                                     alt={"google logo"}/>
                                <span className={"m-auto"}>
                            Sign up with Google
                            </span>
                            </div>
                        )}
                        buttonText="Login"
                        onSuccess={handleGoogleLogin}
                        onFailure={handleGoogleLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                    <div
                        className={"h-7 bg-linkedin flex items-center rounded-full w-2/4 cursor-pointer mb-5 m-auto text-sm text-gray-100"}
                        onClick={() => "nothing"}
                    >
                        <img src={"/images/linkedin_white.png"} className={"h-6 w-6 rounded-full"}
                             alt={"linkedin logo"}/>
                        <span className={"m-auto"}>
                            Sign up with Linkedin
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
}

export default JoinNow

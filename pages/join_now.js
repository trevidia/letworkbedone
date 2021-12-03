import axios from "axios";
import {useRouter} from "next/router";

const JoinNow = () => {
    const router = useRouter();

    async function handleGoogleLogin() {
        const {data} = await axios.get('https://trevidia.com/public/api/g_login');
        console.log(data.url)
        await router.push(data.url);
    }

    return (
        <>
            <main className={"py-20 flex items-center justify-center"}>
                <div className={"rounded-sm shadow-lg h-72 w-screen-40 border border-gray-200 bg-white py-10 px-4"}
                     onClick={handleGoogleLogin}
                >
                    <h2 className={"font-semibold text-3xl flex justify-center mb-10"}>Get your free account</h2>
                    <div
                        className={"h-7 bg-blue-500 flex items-center rounded-full w-2/4 cursor-pointer mb-5 m-auto text-sm text-gray-100"}>
                        <img src={"/images/googlelogin.png"} className={"h-6 w-6 rounded-full"} alt={"google logo"}/>
                        <span className={"m-auto"}>
                            Sign up with Google
                        </span>
                    </div>
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

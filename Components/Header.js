import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

// Top most nav bar
const Header = () => {
    const [focus, setFocus] = useState(false);
    const router = useRouter();
    const handleJoinNow = () => {
        router.push("/join_now").catch((err) => {
            console.log(err);
        });
    }
    const handleFocusIn = () => {
        setFocus(true);
    }
    const handleFocusOut = () => {
        setFocus(false)
    }
    return <>
        <div className=" h-20 text-sm font-semibold">
            <header className={" h-full px-5 flex justify-between"}>

                <div className={"w-full flex justify-end"}>
                    {/* Logo for let work be done*/}
                    <div className={"h-full  flex items-center mx-8"}>
                        <Link href={"/"}>
                            <a>
                                {/*<Image src={"/images/main_logo.png"} width={"100%"} height={"100%"} objectFit={"contain"} quality={100}/>*/}
                                <img src={"/images/main_logo.png"} className={"w-max"} style={{width: "150px"}}
                                     alt={"logo"}/>
                            </a>
                        </Link>
                    </div>
                    {/*    Search box for the finding services*/}
                    <div className={"w-4/6 h-full flex items-center px-3"}>
                        <div
                            className={`border-2 border-gray-300 ${focus && "border-yellow-400"} rounded-md grid grid-cols-6 items-center overflow-hidden w-full h-max`}>
                            <img src={"/images/svg/search_icon.svg"} className={"ml-1 my-1"} alt={"search icon"}/>
                            <input type={"text"} className={"focus:outline-none placeholder-gray-300 w-full col-span-3"}
                                   onFocus={handleFocusIn} onBlur={handleFocusOut} placeholder={"Find Services"}/>
                            <button className={"bg-yellow-400 hover:bg-yellow-300 h-full w-full col-span-2"}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex"}>
                    {/*    Site Navigation between basic pages*/}
                    <div className={""}>
                        <ul className={"flex w-full h-full"}>
                            <li className={"px-2 h-full flex items-center"}>
                                <Link href={"/how_it_works"}>
                                    <a className={"uppercase"}>
                                        How It works
                                    </a>
                                </Link>
                            </li>
                            <li className={"px-2 h-full flex items-center"}>
                                <Link href={"/categories"}>
                                    <a className={"uppercase"}>
                                        Buy Services
                                    </a>
                                </Link>
                            </li>
                            <li className={"px-2 h-full flex items-center"}>
                                <Link href={"/freelancers"}>
                                    <a className={"uppercase"}>
                                        Freelancers
                                    </a>
                                </Link>
                            </li>
                            <li className={"px-2 h-full flex items-center"}>
                                <Link href={"/become_seller"}>
                                    <a className={"uppercase"}>
                                        Become A Seller
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    {/*    Buttons for signing up and for join now*/}
                    <div className={"h-full flex items-center  justify-end"}>
                        <button
                            className={"w-20 bg-purple-800 hover:bg-purple-700 text-gray-100 h-10 rounded-md mx-2 font-semibold"}>
                            Sign In
                        </button>
                        <button
                            className={"w-2/4 bg-blue-600 h-10 hover:bg-blue-500 rounded-md text-gray-100 font-semibold"}
                            onClick={handleJoinNow}>
                            Join Now
                        </button>
                    </div>
                </div>
            </header>
        </div>
    </>
}

export default Header;
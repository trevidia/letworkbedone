import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

// Top most nav bar
const Header = () => {
    const [focus, setFocus] = useState(false);
    const router = useRouter();
    const handleFocusIn = () => {
        setFocus(true);
    }
    const handleFocusOut = () => {
        setFocus(false)
    }
    return <>
        <div className={"h-12 lg:h-20 text-sm font-semibold md:border-b lg:border-0 border-gray-300"}>
            <header className={" h-full px-5 flex justify-between"}>

                <div className={"w-3/4 flex justify-end text-tiny"}>
                    {/* Logo for let work be done*/}
                    <div className={"h-full items-center hidden lg:flex mx-8"}>
                        <Link href={"/"}>
                            <a>
                                {/*<Image src={"/images/main_logo.png"} width={"100%"} height={"100%"} objectFit={"contain"} quality={100}/>*/}
                                <img src={"/images/main_logo.png"} className={"w-max"} style={{width: "150px"}}
                                     alt={"logo"}/>
                            </a>
                        </Link>
                    </div>
                    {/*    Search box for the finding services*/}
                    <div className={" h-full hidden lg:flex items-center px-3"}>
                        <div
                            className={`border-2 border-gray-300 ${focus && "border-yellow-400"} rounded-md grid grid-cols-6 items-center overflow-hidden w-full h-max`}>
                            <img src={"/images/svg/search_icon.svg"} className={"ml-1 my-1"} alt={"search icon"}/>
                            <input type={"text"} className={"focus:outline-none placeholder-gray-300 px-2 w-full col-span-3"}
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
                        <ul className={"lg:grid-cols-4 grid w-full h-full"}>
                            <li className={"h-full hidden lg:flex items-center"}>
                                <Link href={"/how_it_works"}>
                                    <a className={"uppercase"}>
                                        How It works
                                    </a>
                                </Link>
                            </li>
                            <li className={" h-full  hidden lg:flex items-center"}>
                                <Link href={"/categories"}>
                                    <a className={"uppercase"}>
                                        Buy Services
                                    </a>
                                </Link>
                            </li>
                            <li className={" h-full flex items-center"}>
                                <Link href={"/freelancers"}>
                                    <a className={"uppercase"}>
                                        Freelancers
                                    </a>
                                </Link>
                            </li>
                            <li className={"w-full h-full hidden lg:flex items-center"}>
                                <Link href={"/become_seller"}>
                                    <a className={"uppercase"}>
                                        Become A Seller
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    {/*    Buttons for signing up and for join now*/}
                    <div className={"h-full flex items-center md:ml-0 ml-2 sm:w-full lg:w-max justify-end"}>
                        <button
                            className={"w-20 bg-purple-800 hover:bg-purple-700 text-gray-100 md:h-10 h-8 rounded-md mx-2 font-semibold"}>
                            Sign In
                        </button>
                        <Link href={"/join_now"}>
                        <button
                            className={"w-20 bg-blue-600 md:h-10 h-8 hover:bg-blue-500 rounded-md text-gray-100 px-1 font-semibold"}
                            >
                            Join Now
                        </button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    </>
}

export default Header;
import Link from "next/link";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../lib/UserContext";
import {actions, values} from "../lib/Constants";
import {useRouter} from "next/router";
import SubProfileDropdown from "./Nav/SubProfileDropdown";
import {useHasUser} from "../lib/CustomHooks";
import Image from "next/image";
import {DrawerContext} from "../lib/DrawerContext";

// Top most nav bar
const Header = () => {
    const usernameLink = useRef();
    const [focus, setFocus] = useState(false);
    const [usernameClick, setUsernameClick] = useState(false);
    const {state, dispatch} = useContext(UserContext);
    const {user} = state
    const router = useRouter();
    const hasUser = useHasUser()
    const [isOpen, setIsOpen] = useContext(DrawerContext);

    const handleHeaderClick = (e) => {
        if (!(e.target === usernameLink.current || e.target.parentElement === usernameLink.current)) {
            setUsernameClick(false);
        }
    }

    useEffect(
        () => {
            window.addEventListener('click', handleHeaderClick)
            return () => {
                window.removeEventListener('click', handleHeaderClick)
            };
        }, []
    )

    const handleFocusIn = () => {
        setFocus(true);
    }
    const handleFocusOut = () => {
        setFocus(false)
    }

    const handleClick = (e) => {
        e.stopPropagation();
        setUsernameClick(true);
    }

    return <>
        <div className={"h-12 lg:h-20 text-xs font-semibold border-b lg:border-0 border-gray-300"}>
            <header className={" h-full px-5 flex justify-between"}>

                <div className={"flex text-tiny " + (!hasUser && "justify-start lg:justify-end md:w-1/3 lg:w-3/4 ")}>
                    {/*side menu hamburger menu*/}
                    <div className={'lg:hidden flex'}>
                        <Image
                            src={'/images/svg/menu.svg'}
                            width={30} height={30} alt={"menu_btn"}
                            onClick={() => {
                                setIsOpen(true)
                            }}/>
                    </div>
                    <div className={"h-full items-center hidden lg:flex mx-8"}>
                        {/* Logo for let work be done*/}
                        <Link href={"/"}>
                            <a>
                                {/*<Image src={"/images/main_logo.png"} width={"100%"} height={"100%"} objectFit={"contain"} quality={100}/>*/}
                                <Image src={"/images/main_logo.png"} width={150} height={35}
                                       alt={"logo"}/>
                            </a>
                        </Link>
                    </div>
                    {/*    Search box for the finding services*/}
                    {
                        !hasUser && <div className={" h-full hidden lg:flex items-center px-3"}>
                            <div
                                className={`border-2 border-gray-300 ${focus && "border-yellow-400"} rounded-md grid grid-cols-6 items-center overflow-hidden w-full h-max`}>
                                <img src={"/images/svg/search_icon.svg"} className={"ml-1 my-1"} alt={"search icon"}/>
                                <input type={"text"}
                                       className={"focus:outline-none placeholder-gray-300 px-2 w-full col-span-3"}
                                       onFocus={handleFocusIn} onBlur={handleFocusOut} placeholder={"Find Services"}/>
                                <button className={"bg-yellow-400 hover:bg-yellow-300 h-full w-full col-span-2"}>
                                    Search
                                </button>
                            </div>
                        </div>
                    }

                </div>
                <div className={"w-full flex"}>

                    {
                        (user === null || user.username === null) && <>
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
                            <div className={"h-full flex items-center md:ml-0 ml-2 w-full lg:w-max justify-end"}>
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
                        </>

                    }
                    {
                        user !== null && user.username !== null && <>
                            <ul className={"flex justify-end w-full h-full lg:pr-6"}>
                                <li className={"h-full hidden md:flex items-center mx-1"}>
                                    <Link href={`/users/${user.username}/requests/post_request`}>
                                        <a className={"uppercase hover:text-link"}>
                                            Post A request
                                        </a>
                                    </Link>
                                </li>
                                <li className={" h-full  hidden md:flex items-center mx-1"}>
                                    <Link href={`/users/${user.username}/proposals/create_proposal`}>
                                        <a className={"uppercase hover:text-link"}>
                                            Post A Gig
                                        </a>
                                    </Link>
                                </li>
                                <li className={" h-full flex items-center mx-1"}>
                                    <a className={"uppercase cursor-pointer"}>
                                        Notifications
                                    </a>
                                </li>
                                <li className={" h-full flex items-center mx-1"}>
                                    <a className={"uppercase cursor-pointer "}>
                                        Inbox
                                    </a>
                                </li>
                                <li className={" h-full hidden md:flex items-center mx-1"}>
                                    <Link href={`/users/${user.username}/favorites`}>
                                        <a className={"uppercase cursor-pointer hover:text-link"}>
                                            Favorites
                                        </a>
                                    </Link>
                                </li>
                                <li className={" h-full hidden md:flex items-center mx-1"}>
                                    <Link href={`/users/${user.username}/cart`}>
                                        <a className={"uppercase hover:text-link"}>
                                            Cart
                                        </a>
                                    </Link>
                                </li>
                                <li className={" h-full flex items-center mx-1 "}>
                                    <div className={"relative block"}
                                         onClick={handleClick}
                                         ref={usernameLink}>

                                        <div className={"uppercase flex items-center hover:text-link cursor-pointer "}>
                                            <img src={user.imageUrl} alt={"Profile"}
                                                 className={"rounded-full h-7 w-7"}/>
                                            <span className={"ml-2"}>{user.username}</span>
                                            <img src={"/images/svg/arrow_drop_down.svg"} alt={"dropdown"}/>

                                        </div>
                                        {
                                            // If profile link was clicked a dropdown route appears
                                            usernameClick && <div
                                                className={"absolute my-3 z-30 right-0 lg:left-0 border border-gray-300 w-48 bg-white font-normal text-base py-4"}>
                                                <ul>
                                                    <li>
                                                        <Link href={`/users/${user.username}/dashboard`}>
                                                            <a className={"py-1 px-3"}>
                                                                Dashboard
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className={"py-1 "}>
                                                        <SubProfileDropdown title={"Selling"} subList={[
                                                            {
                                                                title: "My Gigs",
                                                                url: `/users/${user.username}/proposals/view_proposals`,
                                                            },
                                                            {
                                                                title: "Create Gig",
                                                                url: `/users/${user.username}/proposals/create_proposal`,
                                                            }
                                                        ]}/>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <SubProfileDropdown title={"Buying"} subList={[
                                                            {
                                                                title: "Orders",
                                                                url: `/users/${user.username}/buying_orders`,
                                                            },
                                                            {
                                                                title: "Purchases",
                                                                url: `/users/${user.username}/purchases`,
                                                            },
                                                            {
                                                                title: "Favorites",
                                                                url: `/users/${user.username}/favorites`,
                                                            }
                                                        ]}/>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <SubProfileDropdown title={"Requests"} subList={[
                                                            {
                                                                title: "Post A Request",
                                                                url: `/users/${user.username}/requests/post_request`,
                                                            },
                                                            {
                                                                title: "Manage Request",
                                                                url: `/users/${user.username}/requests/manage_requests`,
                                                            }
                                                        ]}/>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <SubProfileDropdown title={"Contacts"} subList={[
                                                            {
                                                                title: "My Buyers",
                                                                url: `/users/${user.username}/manage_contacts?my_buyers`,
                                                            },
                                                            {
                                                                title: "My Sellers",
                                                                url: `/users/${user.username}/manage_contacts?my_sellers`,
                                                            },
                                                        ]}/>
                                                    </li>
                                                    <li className={"py-1 px-3"}>
                                                        <Link href={`/users/${user.username}/inbox`}>
                                                            Inbox Messages
                                                        </Link>
                                                    </li>
                                                    <li className={"py-1 px-3"}>
                                                        <Link href={`/${user.username}`}>
                                                            My Profile
                                                        </Link>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <SubProfileDropdown title={"Settings"} subList={[
                                                            {
                                                                title: "Profile Settings",
                                                                url: `/users/${user.username}/settings?profile_settings`,
                                                            },
                                                            {
                                                                title: "Account Settings",
                                                                url: `/users/${user.username}/settings?account_settings`,
                                                            }
                                                        ]}/>
                                                    </li>
                                                    <li className={"py-1 cursor-pointer px-3"} onClick={() => {
                                                        dispatch({
                                                            type: actions.LOGOUT,
                                                        });
                                                        // todo send request to backend
                                                        localStorage.removeItem(values.USER);
                                                        router.push("/")
                                                    }
                                                    }>Logout
                                                    </li>
                                                </ul>
                                            </div>

                                        }
                                    </div>


                                </li>
                                <li className={" h-full hidden lg:flex items-center mx-1"}>
                                    <div
                                        className={"w-12 bg-blue-700 h-7 flex justify-center text-md rounded-sm text-gray-100 items-center"}>
                                        $0.00
                                    </div>
                                </li>
                            </ul>
                        </>
                    }
                </div>
            </header>
        </div>
    </>
}

export default Header;
import Image from "next/image";
import Link from "next/link";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../lib/UserContext";
import {DrawerContext} from "../../lib/DrawerContext";
import SubProfileDropdown from "./SubProfileDropdown";
import {useFetchCategories} from "../../lib/CustomHooks";


const SideMenu = () => {
    const dropDown = useRef();
    const [isOpen, setIsOpen] = useContext(DrawerContext)
    const {state} = useContext(UserContext);
    const {user} = state
    const [categories, setCategories] = useFetchCategories();

    useEffect(() => {
        window.onclick = ev => {
            // if the transparent modal is clicked the dropdown should disappear
            if (ev.target === dropDown.current) {
                setIsOpen(false);
            }
        }
    })

    return (
        <nav>
            {
                user && <div ref={dropDown}
                             className={"fixed h-screen bg-black bg-opacity-5 backdrop-filter backdrop-brightness-50 z-40 w-full " + (!isOpen && "hidden")}>
                    <div className={"bg-white relative h-screen w-72 overflow-auto"}>
                        {/*Close Button*/}
                        <div className={"flex w-full justify-end px-2 py-2"}>
                            <div className={"hover:bg-red-400 rounded-sm p-1 fixed"}>
                                <button onClick={() => setIsOpen(false)} className={"justify-center items-center flex"}>
                                    <Image src={'/images/svg/close_icon.svg'} width={15} height={15} alt={"close_btn"}/>
                                </button>
                            </div>
                        </div>
                        <div className={"pt-2 px-4"}>
                            <Image src={"/images/main_logo.png"} width={150} height={35} alt={"logo"}/>
                            <div className={""}>
                                <ul className={"w-full pb-10"}>
                                    <li className={"py-2"}>
                                        <Link href={"/"}>
                                            <a>
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={"py-2"}>
                                        <Link href={`/users/${user.username}/dashboard`}>
                                            <a>
                                                Dashboard
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={"py-2"}>
                                        <Link href={`/users/${user.username}/settings`}>
                                            <a>
                                                Settings
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={''}>
                                        <h3 className={"border-b border-gray-300 text-link mt-3 w-full mb-3 py-2"}>
                                            Buying
                                        </h3>
                                        <ul className={"ml-2 w-full"}>
                                            <li className={"py-2"}>
                                                <Link href={`/users/${user.username}/requests/post_request`}>
                                                    <a>
                                                        Post a request
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className={"py-2"}>
                                                <Link href={`/users/${user.username}/cart`}>
                                                    <a>
                                                        Cart
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className={"py-2"}>
                                                <Link href={`/users/${user.username}/favorites`}>
                                                    <a>
                                                        Favorites
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={''}>
                                        <h3 className={"border-b border-gray-300 text-link mt-3 w-full mb-3 py-2"}>
                                            Selling
                                        </h3>
                                        <ul className={"ml-2 w-full"}>
                                            <li className={"py-2 "}>
                                                <Link href={`/users/${user.username}/proposals/create_proposal`}>
                                                    <a>
                                                        Create A Gig
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"py-2"}>
                                                <Link href={`/users/${user.username}/proposals/view_proposals`}>
                                                    <a>
                                                        View Proposals
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={''}>
                                        <h3 className={"border-b border-gray-300 text-link mt-3 w-full mb-3 py-2"}>
                                            Categories
                                        </h3>
                                        <ul className={"ml-2 w-full"}>
                                            {
                                                categories.map((el) => {
                                                    return <li key={el.title} className={"py-2 "}>
                                                        {/*<Link href={`/categories/${el.url}`}>*/}
                                                        {/*    <a>*/}
                                                        <SubProfileDropdown
                                                            title={el.title}
                                                            subList={el.subCategories}
                                                        />
                                                        {/*    </a>*/}
                                                        {/*</Link>*/}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default SideMenu
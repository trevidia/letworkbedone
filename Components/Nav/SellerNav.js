import Link from "next/link";
import {useContext} from "react";
import {UserContext} from "../../lib/UserContext";
import HoverDropDown from "./HoverDropDown";

const SellerNav = () => {
    const {state} = useContext(UserContext);
    const {user} = state
    return <>
        {
            user && <nav>
                <div className={"text-gray-700"}>
                    <ul className={"lg:flex hidden h-10 px-10 items-center border-t border-b border-gray-300"}>
                        <li className={'mx-2'}>
                            <Link href={`/users/${user.username}/dashboard`}>
                                <a className={"hover:text-link"}>
                                    Dashboard
                                </a>
                            </Link>
                        </li>
                        <li className={'mx-2'}>
                            <HoverDropDown title={"Selling"} subList={[
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
                        <li className={'mx-2'}>
                            <HoverDropDown title={"Buying"} subList={[
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
                        <li className={'mx-2'}>
                            <HoverDropDown title={"Requests"} subList={[
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
                        <li className={'mx-2'}>
                            <HoverDropDown title={"Contacts"} subList={[
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
                        <li className={'mx-2'}>
                            <Link href={`/users/${user.username}/inbox`}>
                                <a className={"hover:text-link"}>
                                    Inbox Messages
                                </a>
                            </Link>
                        </li>
                        <li className={'mx-2'}>
                            <Link href={`/users/${user.username}/notifications`}>
                                <a className={"hover:text-link"}>
                                    Notifications
                                </a>
                            </Link>
                        </li>
                        <li className={'mx-2'}>
                            <Link href={`/${user.username}`}>
                                <a className={"hover:text-link"}>
                                    My Profile
                                </a>
                            </Link>
                        </li>
                        <li className={'mx-2'}>
                            <HoverDropDown title={"Settings"} subList={[
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
                    </ul>
                </div>
            </nav>
        }
    </>
}

export default SellerNav;
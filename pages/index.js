import axios from "axios";
import IndexBody from "../Components/IndexBody";
import {useContext, useEffect} from "react";
import {actions, values} from "../lib/Constants";
import {UserContext} from "../lib/UserContext";
import Link from "next/link";
import GigCard from "../Components/ProposalComponents/GigCard";


const LetWorkBeDone = () => {

    const {state, dispatch} = useContext(UserContext);
    if (state.user !== null) {
        return <>
            <main className={"py-2 px-5  mx-8"}>
                {/*Dashboard Header*/}
                <section className={"flex my-3 "}>
                    <div className={"w-3/12 px-1"}>
                        <div className={"border border-gray-300 h-64 px-1 py-10"}>
                            <div className={"font-semibold mb-3 mx-2 px-2"}>
                                Welcome, <span className={"text-username capitalize"}>{state.user.username}</span>
                            </div>
                            <div className={"flex border-t border-b border-gray-300 py-5 mx-2 text-sm"}>
                                <div className={'mx-2'}>
                                    <ul>
                                        <li className={'my-1'}>
                                            <Link href={"/users/user/dashboard"}>
                                                <a className={"dashboard_link"}>
                                                    Dashboard
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={'my-1'}>
                                            <Link href={"/start_selling"}>
                                                <a className={"dashboard_link"}>
                                                    Start Selling
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={'my-1'}>
                                            <Link href={"/users/user/requests/post_request"}>
                                                <a className={"dashboard_link"}>
                                                    Post A Request
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={'px-2 border-l border-gray-300 '}>
                                    <ul>
                                        <li className={'my-1'}>
                                            <Link href={"/users/user/buying_orders"}>
                                                <a className={"dashboard_link"}>
                                                    View Purchases
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={'my-1'}>
                                            <Link href={"/users/user/settings/edit_profile"}>
                                                <a className={"dashboard_link"}>
                                                    Edit Profile
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={'my-1'}>
                                            <Link href={"/users/user/settings/account_settings"}>
                                                <a className={"dashboard_link"}>
                                                    Setting
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-9/12 ml-8 relative"}>
                        <img src={"/images/slides_images/gs3.jpg"} className={"h-full "} alt={"background"}/>
                        <div className={"h-full px-6 pt-16 z-10 absolute top-0 inset-x-0"}>
                            <div className={"text-gray-100 w-4/5"}>
                                <h1 className={"text-5xl mb-3"}>
                                    Turn your Career Into Money making Machine
                                </h1>
                                <p>Letworkbedone is the best platform that you will use to make money online . Its free
                                    to get started</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Top Featured Gigs*/}
                <section className={"my-3"}>
                    <div className={"gig_sections_header mb-10"}>
                        <h3 className={"gig_sections_title"}>Top Featured Gigs</h3>
                        <Link href={"/featured_gigs"}>
                            <button className={"dashboard_btn"}>
                                View All
                            </button>
                        </Link>
                    </div>

                    {/*    Cards for the gigs*/}
                    <div className={"grid grid-cols-4 gap-x-4 gap-y-8"}>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                    </div>

                </section>
                <section className={"my-3"}>
                    <div className={"gig_sections_header mb-10"}>
                        <h3 className={"gig_sections_title"}>Top Rated Service</h3>
                        <Link href={"/top_rated"}>
                            <button className={"dashboard_btn"}>
                                View All
                            </button>
                        </Link>
                    </div>

                    {/*    Cards for the gigs*/}
                    <div className={"grid grid-cols-4 gap-x-4 gap-y-8"}>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                    </div>

                </section>
                <section className={"my-3"}>
                    <div className={"gig_sections_header mb-10"}>
                        <h3 className={"gig_sections_title"}>Buy Again from trusted sellers</h3>
                        <Link href={"/buy_it_again"}>
                            <button className={"dashboard_btn"}>
                                View All
                            </button>
                        </Link>
                    </div>

                    {/*    Cards for the gigs*/}
                    <div className={"grid grid-cols-4 gap-x-4 gap-y-8"}>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                    </div>

                </section>
                <section className={"my-3"}>
                    <div className={"gig_sections_header mb-10"}>
                        <h3 className={"gig_sections_title"}>Recently Viewed</h3>
                        <Link href={"/recently_viewed"}>
                            <button className={"dashboard_btn"}>
                                View All
                            </button>
                        </Link>
                    </div>

                    {/*    Cards for the gigs*/}
                    <div className={"grid grid-cols-4 gap-x-4 gap-y-8"}>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                    </div>

                </section>
                <section className={"my-3"}>
                    <div className={"gig_sections_header mb-10"}>
                        <h3 className={"gig_sections_title"}>Random Gigs</h3>
                        <Link href={"/random_gigs"}>
                            <button className={"dashboard_btn"}>
                                View All
                            </button>
                        </Link>
                    </div>

                    {/*    Cards for the gigs*/}
                    <div className={"grid grid-cols-4 gap-x-4 gap-y-8"}>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                        <GigCard/>
                    </div>

                </section>
            </main>
        </>
    }
    return <IndexBody/>
}

export default LetWorkBeDone;
//
// export const getServerSideProps = async ({req}) => {
//     try {
//         const token = JSON.parse(req.cookies.token ?? null);
//         const user = req.cookies.user ?? null;
//         // const config = token && {
//         //     headers: { Authorization: `Bearer ${token}` }
//         // }
//
//         return {
//             props: {
//                 user,
//                 token
//             },
//         }
//     } catch (e) {
//         return {
//             props: {
//                 user: null,
//                 token: null
//             }
//         }
//     }
// }
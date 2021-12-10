import Link from 'next/link';
import {useContext} from "react";
import {UserContext} from "../../lib/UserContext";
import Image from "next/image";

const ProposalNav = ({active}) => {
    const {state} = useContext(UserContext);
    return <nav>
        <div className={"px-8 h-10 border-b border-gray-300"}>
            <ul className={"flex items-center h-full text-sm"}>
                {
                    state.user ? <>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={1 <= active ? "circle_active" : "circle_nonactive"}>1</span>
                                        <span>Overview</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal?scope_pricing`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={2 <= active ? "circle_active" : "circle_nonactive"}>2</span>
                                        <span>Scope and Pricing</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal?description_faq`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={3 <= active ? "circle_active" : "circle_nonactive"}>3</span>
                                        <span>Description & Faq</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal?requirements`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={4 <= active ? "circle_active" : "circle_nonactive"}>4</span>
                                        <span>Requirements</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal?gallery`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={5 <= active ? "circle_active" : "circle_nonactive"}>5</span>
                                        <span>Gallery</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={"px-2"}>
                            <Link href={`/users/${state.user.username}/proposals/create_proposal?publish`}>
                                <a>
                                    <div className={"flex items-center"}>
                                        <span className={6 <= active ? "circle_active" : "circle_nonactive"}>6</span>
                                        <span>Publish</span>
                                        <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                               alt={"icon nav"}/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </> : "Loading....."
                }

            </ul>
        </div>
    </nav>
}

export default ProposalNav;
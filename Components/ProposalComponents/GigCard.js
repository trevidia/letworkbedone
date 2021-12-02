import Link from "next/link";

const GigCard = () => {
    return <div className={"w-max border border-gray-300"}>
        <div>
            {/*    Gig image*/}
            <img src={"/images/proposals/1_1601787313.png"}
                 alt={"proposal image"}
                 className={"h-40 w-60 object-cover"}/>
        </div>
        <div className={"flex mt-2 w-full items-center px-3"}>
            <img src={"/images/user_images/7d79c6b3-ea6a-489f-b5b8-8912fd09acc9_1602314198.png"}
                 alt={"profile"}
                 className={"h-9 w-9 rounded-full"}/>
            <div className={"flex flex-col text-sm ml-2"}>
                               <span className={"font-semibold"}>
                                   Atwabi
                               </span>
                <span className={"text-gray-400"}>
                                   Level Two
                               </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                 fill={"#848C8E"} className={"ml-auto mr-2"}>
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {/*    Gig owner and his level and if it is liked*/}
        </div>
        <div className={"w-60 mt-2 border-b border-gray-200 px-3"}>
            <Link href={"/user/i_will_create_something"}>
                <a className={"hover:text-link text-gray-800"}>
                    <span>I Will create a professional website or redesign</span>
                </a>
            </Link>
            <div className={"flex items-center text-sm pb-5"}>

                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
                     className={"h-4"}
                     viewBox="0 0 24 24" width="24px" fill="#2718f7">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                </svg>
                <span className={"text-username mx-1"}>
                                    5.0
                                </span>
                <span className={"text-username"}>
                                    (46)
                                </span>
            </div>
            {/*    Gig title along with rating*/}
        </div>
        <div className={"text-gray-700 flex justify-end my-3 px-3"}>
            {/*    gig price*/}
            <span className={"uppercase text-sm"}>
                                Starting At
                            </span>
            <span className={"font-semibold ml-2"}>
                                $30.00
                            </span>
        </div>
    </div>
}

export default GigCard;
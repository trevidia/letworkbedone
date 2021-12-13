import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../../lib/UserContext";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "../../../Components/ProgressBar";

const Dashboard = () => {
    const filterDropdown = useRef();
    const [filter, setFilter] = useState("Active Order(0)")
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const {state, dispatch} = useContext(UserContext)
    const {user} = state
    useEffect(() => {
        window.onclick = ev => {
            if (ev.target !== filterDropdown.current && filterIsOpen) {
                setFilterIsOpen(false)
            }
        }
    })
    const changeFilter = (ev) => {
        setFilter(ev.target.innerText);
        setFilterIsOpen(false);
    }
    return (
        <main className={"py-10 bg-gray-100 px-10"}>
            <div className={"w-full flex flex-wrap lg:flex-nowrap"}>
                {
                    user && <>
                        <div className={"w-80  "}>
                            {/* Profile stats */}
                            <div className={"border border-gray-300 bg-white px-3 py-4"}>
                                <div className={"flex justify-between pr-6 pb-4 border-b border-gray-300"}>
                                    <div className={"flex items-center"}>
                                        <div>
                                            <img className={"rounded-full overflow-hidden"} src={user.imageUrl}
                                                 width={100} height={100} alt={"profile"}/>
                                        </div>
                                        <span className={"text-2xl ml-5 text-gray-600 font-semibold"}>
                                          {user.username}
                                      </span>
                                    </div>
                                    <div className={"flex items-center text-yellow-400 text-lg"}>
                                        <Image src={'/images/svg/star_black.svg'} width={25} height={25} alt={"star"}/>
                                        <span>5</span>
                                    </div>
                                </div>
                                <div className={"border-b border-gray-300 pb-3"}>
                                    <div className={"flex justify-between my-4"}>
                                      <span className={"text-gray-800 w-2/3"}>
                                          Inbox response rate
                                      </span>
                                        {/* Progress bar*/}
                                        <ProgressBar percent={20}/>
                                    </div>
                                    <div className={"flex justify-between my-4"}>
                                  <span className={"text-gray-800 w-2/3 "}>
                                  Inbox response rate
                                  </span>
                                        {/* Progress bar*/}
                                        <div className={"flex items-center"}>
                                          <span className={"ml-4 text-blue-600"}>
                                             1 Hrs
                                         </span>
                                        </div>
                                    </div>
                                    <div className={"flex justify-between my-4"}>
                                  <span className={"text-gray-800 w-2/3"}>
                                  Order response rate
                                  </span>
                                        {/* Progress bar*/}
                                        <ProgressBar percent={70}/>
                                    </div>
                                    <div className={"flex justify-between my-4"}>
                                  <span className={"text-gray-800 w-2/3"}>
                                  Delivered on time
                                  </span>
                                        {/* Progress bar*/}
                                        <ProgressBar percent={100}/>
                                    </div>
                                    <div className={"flex justify-between my-4"}>
                                  <span className={"text-gray-800 "}>
                                  Order Completion
                                  </span>
                                        {/* Progress bar*/}
                                        <ProgressBar percent={100}/>
                                    </div>
                                </div>
                                <div className={" flex justify-between text-gray-700 mt-3"}>
                                  <span>
                                      Amount Earned in December
                                  </span>
                                    <span>
                                      $0.00
                                  </span>
                                </div>
                            </div>
                            <div className={"border border-gray-300 mt-8 text-gray-900 bg-white "}>
                                <div className={"flex justify-between px-4 items-center py-6 border-b border-gray-300"}>
                                  <span>
                                      Inbox(0)
                                  </span>
                                    <Link href={`/users/${user.username}/inbox`}>
                                        <a className={"font-semibold "}>
                                            View All
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <p className={"flex justify-center py-3"}>No Messages</p>
                                </div>
                            </div>
                        </div>

                        {/* Right section*/}
                        <div className={"w-9/12 ml-8"}>

                            {/* Header that shows the orders by filter chosen*/}

                            <div
                                className={"flex justify-between flex-wrap px-3 border border-gray-300 py-4 items-center bg-white"}>
                              <span className={"text-xl"}>
                                  {filter}
                              </span>
                                <div className={"relative"} ref={filterDropdown}>
                                    {/* if filter dropdown isn't open set it as opened*/}
                                    <div

                                        onClick={() => !filterIsOpen ? setFilterIsOpen(true) : setFilterIsOpen(false)}
                                        className={"border border-gray-300 cursor-pointer rounded-md flex justify-between w-52 text-xl text-gray-700  py-3 px-2"}>
                                      <span>
                                          {filter}
                                      </span>
                                        <div>
                                            <Image src={"/images/svg/arrow_drop_down.svg"} width={30} height={30}/>
                                        </div>
                                    </div>
                                    {
                                        filterIsOpen && <div
                                            className={"w-52 absolute overflow-hidden z-10 bg-white mt-2 border border-gray-300 rounded-md"}>
                                            <div className={"dashboard_drop_filter_items"} onClick={changeFilter}>Active
                                                Order(0)
                                            </div>
                                            <div className={"dashboard_drop_filter_items"} onClick={changeFilter}>In
                                                Progress(0)
                                            </div>
                                            <div className={"dashboard_drop_filter_items"}
                                                 onClick={changeFilter}>Delivered(0)
                                            </div>
                                            <div className={"dashboard_drop_filter_items"}
                                                 onClick={changeFilter}>Completed(0)
                                            </div>
                                            <div className={"dashboard_drop_filter_items"}
                                                 onClick={changeFilter}>Canceled(0)
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/*    Order display section*/}
                            <div className={"my-8 "}>
                                <p className={"text-lg text-gray-700 text-center"}>No active orders at the moment</p>
                            </div>

                            {/*<!-- Article Sections -->*/}
                            <section>
                                <div className={"flex items-center"}>
                                    <div className={"text-gray-500 w-52 font-semibold"}>
                                        Upgrade your business
                                    </div>
                                    <div className={"h-0.5 bg-gray-400 w-full ml-7"}>
                                    </div>
                                </div>
                                <article className={"mt-4 bg-white py-8 px-4 border border-gray-300"}>
                                    <h3 className={"text-2xl text-gray-800 font-semibold"}>How to build your success on
                                        Letworkbedone in 3 steps</h3>
                                    <p className={"text-lg text-gray-600 w-10/12 mt-3"}>The key to your success on
                                        letworkbedone is the brand you build for yourself
                                        through your letworkbedone reputation. We gathered some tips and resources to
                                        help you become a leading seller on letworkbedone</p>
                                </article>
                                <article className={"mt-4 bg-white py-8 px-4 border border-gray-300"}>
                                    <h3 className={"text-2xl text-gray-800 mb-5 font-semibold"}>Take These steps to
                                        become a
                                        top seller on Letworkbedone</h3>
                                    <div className={"text-lg text-gray-600 w-full mt-16"}>
                                        <div className={"grid grid-cols-3 w-full gap-x-10"}>
                                            <div>

                                                <div className={""}>
                                                    <svg height={70} width={70} fill={"#374151"}>
                                                        <use xlinkHref={"/images/symbol-defs.svg#icon-freelancer"}/>
                                                    </svg>
                                                </div>
                                                <h3 className={"text-xl text-gray-700 font-semibold mb-2"}>
                                                    Create professional, thought-out gigs
                                                </h3>
                                                <p>
                                                    A good gig should stand out by a professional look and some sort of
                                                    uniqueness. Create Gigs that are very unique and professional to
                                                    your customers.
                                                </p>
                                            </div>
                                            <div>
                                                <div className={""}>
                                                    <svg height={70} width={70} fill={"#374151"}>
                                                        <use xlinkHref={"/images/symbol-defs.svg#icon-money"}/>
                                                    </svg>
                                                </div>
                                                <h3 className={"text-xl text-gray-700 font-semibold mb-2"}>
                                                    Set an irresistible price
                                                </h3>
                                                <p>
                                                    A good looking gig alone won’t do the magic. Once you have created
                                                    your gigs, you have to make sure that it will pop up in the search
                                                    results at the very top by setting keywords customers are likely to
                                                    type in Letworkbedone Search Bar
                                                </p>
                                            </div>
                                            <div>
                                                <figure className={"text-gray-700"}>
                                                    {/*55, 65, 81*/}
                                                    <svg height={70} width={70} fill={"#374151"}>
                                                        <use
                                                            xlinkHref={"/images/symbol-defs.svg#icon-satisfaction-badge"}/>
                                                    </svg>
                                                </figure>
                                                <h3 className={"text-xl text-gray-700 font-semibold mb-2"}>
                                                    Share your Gigs on social media
                                                </h3>
                                                <p>
                                                    Tap into the power of social media by sharing your Gig, and get
                                                    Exposure to grow your impact. This will help you to get more orders
                                                    from your social media Clients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                            </section>
                        </div>
                    </>
                }
            </div>
        </main>
    )
}

export default Dashboard;

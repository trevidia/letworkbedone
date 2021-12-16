import {useContext} from "react";
import {UserContext} from "../lib/UserContext";
import Link from "next/link";
import Image from "next/image";

const StartSelling = () => {
    const {state, dispatch} = useContext(UserContext);
    return (
        <>
            <header className="h-screen-60 relative">
                {/*<img src={"/images/start_selling.jpeg"} className=" z-0 fixed object-cover w-full h-screen-70"*/}
                {/*     alt="background image"/>*/}
                <div className="h-full flex flex-col bg-black  justify-center items-center text-white
                  absolute top-0 inset-x-0 bg-opacity-70  z-10"
                     style={{
                         backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/start_selling.jpeg)",
                         backgroundAttachment: "fixed"
                     }}>
                    <h1 className={" md:text-4xl text-2xl uppercase font-bold"}>
                        Become A Seller On Our Platform
                    </h1>
                    <p className="w-3/4 mt-3 text-lg text-center">
                        You bring the skill. We'll make earnings as easy as 1,2,3
                    </p>
                    {
                        state.user === null ?
                            <div className={"mt-16"}>
                                <Link href={'/join_now'}>
                                    <a className={"flex bg-blue-800 py-2 px-3 rounded-md ring-1 ring-red-400 ring-opacity-50 hover:bg-blue-400 transition-colors"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                             fill="currentColor">
                                            <path
                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                        </svg>
                                        <span className={"ml-2"}>
                                            Create An Account
                                        </span>
                                    </a>
                                </Link>
                            </div> :
                            <div className={"mt-16"}>
                                <Link href={`/users/${state.user.username}/proposals/create_proposal`}>
                                    <a className={"flex bg-blue-800 py-2 px-3 rounded-md ring-1 ring-red-400 ring-opacity-50 hover:bg-blue-400 transition-colors"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                        </svg>
                                        <span className={"ml-2"}>
                                            Create Gig
                                        </span>
                                    </a>
                                </Link>
                            </div>

                    }

                </div>
            </header>
            <main>
                <section className={"py-14 "}>
                    <h3 className={"text-3xl font-semibold flex justify-center"}>
                        How Does This Work?
                    </h3>
                    <div className={"grid grid-cols-3  gap-x-10 px-14 gap-y-8 py-10 text-gray-900"}>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/create-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Create A gig
                                </h5>
                            </div>

                            <p>
                                Once you create an account, all you have to do to become a seller is to create A gig.
                                Make sure you Gig is as captivating as possible. Potential customers actually read
                                through your content.
                            </p>
                        </div>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/approve-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Submit A gig
                                </h5>
                            </div>

                            <p>
                                After you've created your amazing Gig, submit it so the admin can make sure everything
                                looks good. Admins rarely decline services, however, make sure everything looks good
                                before submitting.
                            </p>
                        </div>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/receive-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Get Orders. Worldwide.
                                </h5>
                            </div>

                            <p>
                                Yay! so your service was approved by the admin. Now's the good part, start receiving a
                                ton of orders from customer from all over the world. Just perform your very best on
                                every single order.
                            </p>
                        </div>
                    </div>
                    <div className={"border-b border-gray-300 mx-14 my-8"}>
                    </div>
                    <div className={"grid grid-cols-3 gap-x-10 px-14 gap-y-8 py-10 text-gray-900"}>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/delivered-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Deliver Masterpieces
                                </h5>
                            </div>
                            <p>
                                Once you've received orders, try your very best to satisfy your customers. This is very
                                important for return customers and amazing reviews. Communication is key, make sure you
                                are in touch with your customer.
                            </p>
                        </div>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/rate-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Rate Your Customers
                                </h5>
                            </div>
                            <p>
                                A lot of customers do check their own ratings. It is important to rate customers based
                                on their behavior during the order process. This is important for other sellers, and for
                                the admins. Most sellers give 5 stars.
                            </p>
                        </div>
                        <div>
                            <div className={"flex items-center mb-7 flex-col"}>
                                <div>
                                    <Image src={"/images/comp/earn-icon.png"} width={150} height={100}
                                           alt={"create a gig"}/>
                                </div>
                                <h5 className={"text-2xl font-semibold"}>
                                    Get Paid. On Time.
                                </h5>
                            </div>
                            <p>
                                Get paid on time, every time. After the clearance period, payment is transferred to you.
                                Our system lets you transfer funds from our system to your PayPal, Mobile Money,
                                Payoneer or Crypto account.
                            </p>
                        </div>
                    </div>
                    {
                        state.user === null ?
                            <div className={"mt-16 w-full text-white flex justify-center"}>
                                <Link href={'/join_now'}>
                                    <a className={"flex bg-blue-800 w-max py-2 px-3 rounded-md ring-1 ring-red-400 ring-opacity-50 hover:bg-blue-400 transition-colors"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                             fill="currentColor">
                                            <path
                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                        </svg>
                                        <span className={"ml-2"}>
                                            Create An Account
                                        </span>
                                    </a>
                                </Link>
                            </div> :
                            <div className={"mt-16 w-full text-white flex justify-center"}>
                                <Link href={`/users/${state.user.username}/proposals/create_proposal`}>
                                    <a className={"flex bg-blue-800 py-2 px-3 w-max rounded-md ring-1 ring-red-400 ring-opacity-50 hover:bg-blue-400 transition-colors"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                        </svg>
                                        <span className={"ml-2"}>
                                            Create Gig
                                        </span>
                                    </a>
                                </Link>
                            </div>

                    }

                </section>
            </main>
        </>

    )
}

export default StartSelling;
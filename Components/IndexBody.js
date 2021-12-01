import {useRouter} from "next/router";
import Link from "next/link";

const IndexBody = () => {
    const router = useRouter();
    // const [user] = router.query
    return <>
        {/*Header for the page for searching for proposals when the user isn't logged in*/}
        <header className="h-auto relative">
            <img src={"/images/background_image.jpg"} className=" z-0 object-cover w-full h-screen-70"
                 alt="background image"/>
            <div className="h-full flex flex-col  justify-center items-center text-white
                  absolute top-0 inset-x-0 bg-opacity-20  z-10">
                <h1 className={" md:text-4xl text-2xl uppercase font-bold"}>
                    GET YOUR WORK DONE FROM $5
                </h1>
                <p className="w-3/4 mt-3 text-lg text-center">
                    Browse through thousands of Services. Choose one you trust. Pay as you go.
                </p>
                {/*Search bar */}
                <div className={"w-full flex items-center justify-center mt-3"}>
                    <input className={"w-4/6 h-10 md:h-16 rounded-md px-3 text-black"} type={"text"}
                           placeholder={"Find Service"}/>
                    <button
                        className={"md:ml-4 ml-1 bg-yellowgreen md:h-full h-10   w-20 md:w-32 text-sm rounded-md md:text-xl uppercase"}>
                        Search
                    </button>
                </div>
            </div>
        </header>
        {/*    End of Header */}
        <main className={"w-full py-10"}>
            {/* Beginning of find service category */}
            <section className={"flex-col-center w-full pb-14 border-b border-gray-300"}>
                <div className={"mb-20 flex-col-center"}>
                    <h2 className={"text-3xl font-semibold "}>
                        Find Top Freelancers
                    </h2>
                    <div className={"w-20 border-b-2 border-blue-800 h-2"}>
                    </div>
                </div>
                {/* Grid for the categories */}
                <section className={"grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mb-14"}>
                    <Link href={"/categories/graphics_design"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-1"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Graphics & Design
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    99 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>

                    <Link href={"/categories/writing_translation"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-2"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Writing & Translation
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    19 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/digital_marketing"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-3"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Digital Marketing
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    27 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/video_animation"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-4"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Video & Animation
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    407 freelancers
                                </span>


                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/programming_tech"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-5"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Programming & Tech
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    39 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/business"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-6"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Business
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    30 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/fun_lifestyle"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-7"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Fun & Lifestyle
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    19 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/music_audio"}>
                        <a>
                            <div className={"freelance-grid-child freelance"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-8"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Music & Audio
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    50 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                    <Link href={"/categories/software_packages"}>
                        <a>
                            <div className={"freelance-grid-child freelance hover:scale-50"}>
                                <svg className={"h-8 mb-2"}>
                                    <use xlinkHref={"/images/symbol-defs.svg#icon-cat-9"}>
                                    </use>
                                </svg>
                                <h4 className={"font-semibold"}>
                                    Software Packages
                                </h4>
                                <span className={"text-gray-600 text-sm"}>
                                    43 freelancers
                                </span>

                            </div>
                        </a>
                    </Link>
                </section>
                {/*    End of the Grid Categories*/}
                <button className={"bg-primary h-16 w-32 rounded-md text-white uppercase " +
                "font-semibold border-4 border-transparent hover:border-primary hover:text-gray-800 hover:bg-transparent"}
                        onClick={() => router.push("/categories")}>
                    See All Skills
                </button>
            </section>

            {/* End of Grid Section for categories And beginning of Its easy to get work done    */}
            <section className={"py-10 flex-col-center"}>
                <div className={"mb-20 flex-col-center"}>
                    <h2 className={"md:text-3xl text-xl font-semibold "}>
                        It's Easy To Get Work Done on Letworkbedone
                    </h2>
                    <div className={"w-20 border-b-2 border-blue-800 h-2"}>
                    </div>
                </div>
                <div className={"md:grid-cols-4 sm:grid-cols-1 grid px-14 pb-12 gap-4"}>
                    <div className={"flex-col-center w-full"}>
                        <div
                            className={"rounded-full h-24 w-24 filter drop-shadow-xl shadow-md mb-12 flex justify-center items-center bg-gray-100"}>
                            <svg role="img" className={"h-16"} aria-label="Post a Job">
                                <use xlinkHref={"/images/symbol-defs.svg#icon-hiw-post-job"}>
                                </use>
                            </svg>
                        </div>
                        <h4 className={"font-semibold text-lg"}>
                            Post a Request
                        </h4>
                        <span className={"text-center"}>
                            Create your free request posting and start receiving Quotes within hours.
                        </span>
                    </div>
                    <div className={"flex-col-center w-full"}>
                        <div
                            className={"rounded-full h-24 w-24 filter drop-shadow-xl shadow-md mb-12 flex justify-center items-center bg-gray-100"}>
                            <svg role="img" className={"h-16"} aria-label="Hire freelancers">
                                <use xlinkHref={"/images/symbol-defs.svg#icon-hiw-hire-freelancer"}>
                                </use>
                            </svg>
                        </div>
                        <h4 className={"font-semibold text-lg"}>
                            Hire Freelancers
                        </h4>
                        <span className={"text-center"}>
                           Compare the Quotes you receive and hire the best freelance professionals for the job.
                        </span>
                    </div>
                    <div className={"flex-col-center w-full"}>
                        <div
                            className={"rounded-full h-24 w-24 filter drop-shadow-xl shadow-md mb-12 flex justify-center items-center bg-gray-100"}>
                            <svg role="img" className={"h-16"} aria-label="Get work done">
                                <use xlinkHref={"/images/symbol-defs.svg#icon-hiw-get-work-done"}>
                                </use>
                            </svg>
                        </div>
                        <h4 className={"font-semibold text-lg"}>
                            Get Work Done
                        </h4>
                        <span className={"text-center"}>
                            Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work.
                        </span>
                    </div>
                    <div className={"flex-col-center w-full"}>
                        <div
                            className={"rounded-full h-24 w-24 filter drop-shadow-xl shadow-md mb-12 flex justify-center items-center bg-gray-100"}>
                            <svg role="img" className={"h-16"} aria-label="Make secure payment">
                                <use xlinkHref={"/images/symbol-defs.svg#icon-hiw-make-payment"}>
                                </use>
                            </svg>
                        </div>
                        <h4 className={"font-semibold text-lg"}>
                            Make Secure Payments
                        </h4>
                        <span className={"text-center"}>
                          Choose from multiple payment methods with SafePay payment protection.
                        </span>
                    </div>
                </div>
                <button
                    className={"bg-primary h-12 w-80 rounded-md text-white mt-3 text-sm uppercase font-semibold border-4 border-transparent hover:border-primary hover:text-gray-800 hover:bg-transparent"}
                    onClick={() => router.push("/how_it_works")}>
                    See How letworkbedone works
                </button>
            </section>

            {/* End of Its easy to get work done and beginning of post request   */}
            <section className={"bg-secondary h-52 text-gray-200 flex-col-center justify-center"}>
                <span className={"text-lg"}>
                    Get Quotes from Top Freelance Professionals for Free!
                </span>
                <button
                    className={"bg-primary h-12 w-52 rounded-md text-white mt-8 text-sm uppercase font-semibold border-4 border-transparent hover:border-primary hover:bg-transparent"}
                    onClick={() => router.push("/users/gemzy/requests/post_request")}>
                    Post a request now
                </button>
            </section>
            {/* End of post request and beginning of what is great with let work done */}
            <section className={"flex-col-center pb-28"}>
                <h2 className={"md:text-3xl text-2xl font-semibold  my-16"}>
                    What is Great With letworkbedone
                </h2>
                <div className={"grid md:grid-cols-3 sm:grid-cols-1 w-5/6 gap-12 "}>
                    <div>

                        <h3 className={"text-2xl my-4 font-semibold"}>Browse Portfolio</h3>
                        <span>
                            Find professionals you can trust by browsing their samples of previous
                            work and reading their profile reviews.
                        </span>
                    </div>
                    <div>
                        <h3 className={"text-2xl my-4 font-semibold"}>View Bids</h3>
                        <span>
                            Receive free bids from our talented freelancers within seconds.
                        </span>
                    </div>
                    <div>
                        <h3 className={"text-2xl my-4 font-semibold"}>Live Chat</h3>
                        <span>
                          You can live chat with your freelancers to
                            get constant updates on the progress of your work.
                        </span>
                    </div>
                    <div>
                        <h3 className={"text-2xl my-4 font-semibold"}>Pay for quality</h3>
                        <span>
                            Pay for work when it has been completed and you're 100% satisfied.
                        </span>
                    </div>
                    <div>
                        <h3 className={"text-2xl my-4 font-semibold"}>Track progress</h3>
                        <span>
                            Keep up-to-date and on-the-go with our time tracker, and mobile app.
                        </span>
                    </div>
                    <div>
                        <h3 className={"text-2xl my-4 font-semibold"}>24/7 support </h3>
                        <span>
                            We're always here to help. Our support
                            consists of real people who are available 24/7.
                        </span>
                    </div>

                </div>
            </section>
        </main>

    </>
}

export default IndexBody;
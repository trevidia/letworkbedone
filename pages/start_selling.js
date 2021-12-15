const StartSelling = () => {
    return (
        <main>
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
                    <button>

                    </button>

                </div>
            </header>
        </main>
    )
}

export default StartSelling;
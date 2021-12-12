const Publish = () => {
    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <section style={{width: "600px"}}>
                    <div className={"w-full rounded-md flex justify-center text-center bg-white py-8 px-2"}>
                        <div className={" w-2/3 flex flex-col "}>
                            <h2 className={"text-link text-3xl mb-2"}>
                                You are almost done!
                            </h2>
                            <h3 className={"text-gray-800 text-2xl"}>
                                Let's publish your Service and get some buyers rolling in.
                            </h3>
                            <div className={"flex justify-between mt-8"}>
                                <button
                                    className={"h-10 w-32 border border-gray-300 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                                    Back
                                </button>
                                <button
                                    className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                                    Save And Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Publish;
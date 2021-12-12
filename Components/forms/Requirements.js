const Requirements = () => {
    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <section style={{width: "600px"}}>
                    <div className={"bg-white py-3 px-2 rounded-md border border-gray-300"}>
                        <div className={"border-b border-gray-300 pb-1"}>
                            <h3 className={"text-2xl text-gray-800 mb-1 pt-2"}>Tell your buyer what you need to get
                                started (Optional)</h3>
                            <h5 className={"text-lg text-gray-500"}>Structure your Buyer Instructions as free text.</h5>
                        </div>
                        <div className={"w-full bg-gray-200 my-2 py-2 px-3 border border-gray-300"}>
                            <p className={"mb-2"}>Requirements</p>
                            <textarea
                                className={"w-full h-32 border border-gray-300 px-3 py-1 input"}
                                placeholder={"If you need to obtain information, files or other items from the buyer prior to starting your work," +
                                " please add your instructions here. For example: Please send me your company name or Please send me the photo" +
                                " you need me to edit."}/>
                        </div>
                        {/*Cancel Gig creation and save and continue*/}
                        <div className={"flex justify-between mt-8"}>
                            <button
                                className={"h-10 w-32 border border-gray-300 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                                Cancel
                            </button>
                            <button
                                className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                                Save And Continue
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Requirements;
import Image from "next/image";

const Gallery = () => {
    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <section style={{width: "700px"}}>
                    <div className={"border-b border-gray-300 pb-4"}>
                        <h2 className={"text-3xl text-gray-800"}>
                            Build Your Gig Gallery
                        </h2>
                        <h5 className={"text-lg text-gray-700"}>
                            Add memorable Images and a video to your gallery to set yourself apart from competitors.
                        </h5>
                    </div>
                    <div className={"flex justify-between text-sm items-center mt-3"}>
                        <span className={"text-gray-800"}>Gig Photos/Audio</span>
                        <span className={"text-gray-500 text-xs"}>Upload Photos that describe or related to your Gig. Your image size must be 550 x 370 pixels.</span>
                    </div>
                    <div className={"flex px-3 mt-3 justify-between border-gray-300 border-b pb-5"}>
                        <div
                            className={"h-44 w-52 border cursor-pointer border-gray-300 bg-white flex flex-col items-center justify-center"}>
                            <div>
                                <Image src={"/images/svg/image.svg"} width={40} height={40} alt={"image"}/>
                            </div>
                            <div className={"text-gray-700"}>
                                Browse Images
                            </div>
                        </div>
                        <div
                            className={"h-44 w-52 border cursor-pointer border-gray-300 bg-white flex flex-col items-center justify-center"}>
                            <div>
                                <Image src={"/images/svg/image.svg"} width={40} height={40} alt={"image"}/>
                            </div>
                            <div className={"text-gray-700"}>
                                Browse Images
                            </div>
                        </div>
                        <div
                            className={"h-44 w-52 border cursor-pointer border-gray-300 bg-white flex flex-col items-center justify-center"}>
                            <div>
                                <Image src={"/images/svg/image.svg"} width={40} height={40} alt={"image"}/>
                            </div>
                            <div className={"text-gray-700"}>
                                Browse Images
                            </div>
                        </div>
                    </div>
                    <div className={"flex justify-between text-sm items-center mt-3"}>
                        <span className={"text-gray-800"}>Add Video</span>
                        <span className={"text-gray-500 text-xs"}>(Optional) Supported Video Extensions Include : 'mp4','mov','avi','flv','wmv'.</span>
                    </div>
                    <div className={"flex px-3 mt-3 justify-between pb-5"}>
                        <div
                            className={"h-44 w-52 border cursor-pointer border-gray-300 bg-white flex flex-col items-center justify-center"}>
                            <div>
                                <Image src={"/images/svg/video.svg"} width={40} height={40} alt={"image"}/>
                            </div>
                            <div className={"text-gray-700"}>
                                Add Video
                            </div>
                        </div>
                    </div>
                    {/*Cancel Gig creation and save and continue*/}
                    <div className={"flex justify-between mt-8"}>
                        <button className={"h-10 w-32 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                            Cancel
                        </button>
                        <button
                            className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                            Save And Continue
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Gallery;
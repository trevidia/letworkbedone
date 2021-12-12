import {useEffect, useRef} from "react";
import style from '../../styles/customCss.module.css';
import Image from "next/image";

const DescriptionFaq = () => {

    const descriptionInput = useRef();

    useEffect(() => {
        document.execCommand("defaultParagraphSeparator", false, "p");
    }, [])

    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <section style={{width: "600px"}}>

                    <div className={"border-b border-gray-300 pb-4 "}>
                        <h3 className={"text-3xl font-semibold"}>
                            Description
                        </h3>
                    </div>
                    {/* Editing box*/}
                    <h4 className={"mt-2 text-md "}>
                        Project Details
                    </h4>
                    <div className={"border border-gray-300 mt-8 overflow-hidden rounded-md"}>
                        <div className={"bg-indigo-100 flex items-center px-3 h-12"}>
                            <div className={"flex items-center mr-2 "}>
                                <button
                                    onClick={() => {
                                        document.execCommand("bold", true, null)
                                    }}
                                    className={"h-8 w-8 border-l border-t rounded-l-md border-b border-gray-300 bg-gray-100 font-bold text-lg font-serif"}>
                                    B
                                </button>
                                <button
                                    onClick={() => {
                                        document.execCommand("italic", true, "em")
                                    }}
                                    className={"h-8 w-8 bg-gray-100 font-bold text-lg italic font-serif border border-gray-300"}>
                                    I
                                </button>
                                <button
                                    onClick={() => {
                                        document.execCommand("underline", true, null)
                                    }}
                                    className={"h-8 w-8 bg-gray-100 font-bold text-lg font-serif border-r border-t rounded-r-md border-b border-gray-300 underline"}>
                                    U
                                </button>
                            </div>
                            <div className={" rounded-md h-8 w-8 border bg-gray-100 mr-2 border-gray-300"}>
                                <button
                                    onClick={() => document.execCommand("insertUnorderedList", true, "ul")}
                                    className={"h-full w-full flex  justify-center items-center"}>
                                    <Image src={"/images/svg/format_list_bulleted.svg"} height={25} width={25}/>
                                </button>
                            </div>
                            <div className={" rounded-md h-8 w-8 border bg-gray-100 mr-2 border-gray-300"}>
                                <button
                                    onClick={() => document.execCommand("insertOrderedList", true, "ol")}
                                    className={"h-full w-full flex  justify-center items-center"}>
                                    <Image src={"/images/svg/format_list_numbered.svg"} height={25} width={25}/>
                                </button>
                            </div>
                            <div className={"flex rounded-md px-2 border border-gray-300 items-center bg-gray-100 h-8"}>
                                <span className={"mr-2 text-sm"}>Font Color: </span>
                                <input
                                    type={"color"}
                                    onChange={(ev) => document.execCommand("foreColor", false, ev.target.value)}/>
                            </div>
                            <div
                                className={"flex rounded-md px-2 border border-gray-300 items-center bg-gray-100 mx-2 h-8"}>
                                <span className={"mr-2 text-sm"}>Background Color: </span>
                                <input
                                    type={"color"} value={"#ffffff"}
                                    onChange={(ev) => document.execCommand("backColor", false, ev.target.value)}/>
                            </div>
                        </div>
                        <div
                            className={"h-72 overflow-y-auto w-full bg-white px-3 py-6 focus:outline-none cursor-text " + style.text_editor}
                            contentEditable={true} ref={descriptionInput}>
                        </div>
                    </div>

                    <div className={"flex justify-between border-b mt-8 border-gray-300 pb-4"}>
                        <h4 className={"text-xl font-semibold"}>
                            Frequently Asked Questions
                        </h4>
                        <div className={"flex"}>
                            {/*if the multipackage is true it animates to the right, if false it animates back to the left*/}
                            <button className={"text-blue-800 hover:text-blue-400 transition-all"}>
                                + Add Faq
                            </button>
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

export default DescriptionFaq;
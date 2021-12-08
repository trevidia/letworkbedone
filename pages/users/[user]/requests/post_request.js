import Image from "next/image";
import {useState} from "react";
import RequestToolTip from "../../../../Components/RequestToolTip";

const PostRequests = () => {
    const [charLeft, setCharLeft] = useState(0);
    const [days, setDays] = useState(null);
    const [budget, setBudget] = useState(null);
    const [requestTitle, setRequestTitle] = useState('');
    const [requestDescription, setRequestDescription] = useState('');
    return (
        <>
            <main className={"py-10 px-5"}>
                <div className={"flex"}>
                    <Image src={'/images/svg/add_circle.svg'} width={20} height={20}/>
                    <h3 className={"ml-2 text-2xl font-semibold"}>Post A New Request</h3>
                </div>
                <section>
                    <form>
                        <div className={" border border-gray-300 my-8 w-2/3 px-10 py-6"}>
                            {/* First Form section for the post request */}
                            <div className={"flex group border-b z-0 pb-10 border-gray-300"}>
                                <div>
                                    <Image src={"/images/comp/book.png"} width={64} quality={10} height={64}/>
                                </div>
                                <div className={"ml-20 w-3/4"}>
                                    <input
                                        onChange={(e) => setRequestTitle((e.target.value))}
                                        value={requestTitle}
                                        type={"text"}
                                        placeholder={"Request Title"}
                                        className={"outline-none border border-gray-300 rounded-sm px-2 w-3/4 h-8 my-1 focus:ring ring-blue-200 focus:border-blue-400"}
                                    />
                                    <textarea
                                        onChange={(e) => {
                                            setCharLeft(e.target.value.length)
                                            setRequestDescription(e.target.value)
                                        }}
                                        value={requestDescription}
                                        maxLength={380}
                                        placeholder={"Request Description"}
                                        className={"outline-none border border-gray-300 my-1 resize-none rounded-sm px-2 py-1 w-3/4 h-32 focus:ring ring-blue-200 focus:border-blue-400"}/>
                                    <div className={"w-3/4 flex justify-between"}>
                                        <input type={"file"} className={"w-60"}/>
                                        <span className={"text-sm font-semibold"}>
                                        {charLeft} / 380 max
                                        </span>
                                    </div>
                                </div>
                                {/* Tooltip */}
                                <RequestToolTip
                                    title={"Define in Details"}
                                    description={"Include all the necessary details needed to complete your request."}
                                    example={" if you are looking for a logo, you can specify your company name, business type, preferred color, etc."}
                                />
                            </div>
                            <div className={"py-6 group flex border-b pb-10 border-gray-300"}>
                                <div>
                                    <Image src={"/images/comp/folder.png"} width={64} height={64}/>
                                </div>
                                <div className={"ml-20 w-3/4 flex items-center text-gray-700"}>
                                    {/*Collect the categories using axios*/}
                                    <select
                                        className={"w-1/3 mr-4 focus:outline-none focus:ring ring-blue-200 border h-8 px-2 rounded-sm border-gray-300 bg-white focus:border-blue-400"}>
                                        <option disabled hidden> Select A Category</option>
                                        <option>Graphics and Design</option>
                                        <option>Business</option>
                                    </select>
                                    <select
                                        className={"w-1/3 focus:outline-none focus:ring ring-blue-200 border h-8 px-2 rounded-sm border-gray-300 bg-white focus:border-blue-400"}>
                                        <option disabled hidden> Select A Category</option>
                                        <option>Graphics and Design</option>
                                        <option>Business</option>
                                    </select>
                                </div>
                                <RequestToolTip
                                    title={"Refine your Request"}
                                    description={"Choose the category and subcategory that best fits your request."}
                                    example={" if you are looking for a logo, you should choose 'Logo Design' within the 'Graphics & Design' category."}
                                />
                            </div>
                            <div className={"py-2 group mt-3"}>
                                <h5>Once you place your order, when would you like your order delivered</h5>
                                <div className={"py-6 flex border-b pb-10 border-gray-300"}>
                                    <div>
                                        <Image src={"/images/comp/timetable.png"} width={64} height={64}/>
                                    </div>
                                    <div className={"ml-20 w-3/4 flex items-center text-gray-700"}>
                                        <input
                                            onChange={(e) => {
                                                if (e.target.value.length <= 2) {
                                                    setDays(e.target.value);
                                                }
                                            }}
                                            required
                                            value={days}
                                            type={"number"}
                                            className={"outline-none border border-gray-300 rounded-sm px-2 w-3/4 h-8 my-1 focus:ring ring-blue-200 focus:border-blue-400"}
                                        />
                                        <span className={"ml-2"}>
                                        Days
                                    </span>
                                    </div>
                                    <RequestToolTip
                                        title={"Set a Delivery Time"}
                                        description={"This is the amount of time the seller has to work on your order. Please note that a request for faster delivery may impact the price."}
                                    />
                                </div>
                            </div>
                            <div className={"py-2 group"}>
                                <h5>What is your budget for this service? (Optional)</h5>
                                <div className={"py-6 flex border-b pb-10 border-gray-300"}>
                                    <div>
                                        <Image src={"/images/comp/budget.png"} width={64} height={64}/>
                                    </div>
                                    <div className={"ml-20 w-3/4 flex items-center text-gray-700"}>
                                        <span
                                            className={"h-8 w-8 bg-gray-400 justify-center items-center flex rounded-l-sm text-white"}>
                                            $
                                        </span>
                                        <input
                                            onChange={(e) => {
                                                setBudget(parseInt(e.target.value))
                                            }}
                                            value={budget}
                                            type={"number"}
                                            step={5}
                                            placeholder={"5$ Minimum"}
                                            className={"outline-none border border-gray-300 rounded-r-sm px-2 w-3/4 h-8 my-1 focus:ring ring-blue-200 focus:border-blue-400"}
                                        />
                                    </div>
                                    <RequestToolTip
                                        title={"Set Your Budget"}
                                        description={"Enter an amount you are willing to spend for this service."}
                                    />
                                </div>
                            </div>
                            <div className={"mt-3 flex justify-end"}>
                                {/*    Submit button that sends everything to the backend*/}
                                <button
                                    className={"bg-blue-800 px-4 py-2 text-white rounded-md hover:bg-primary ring-1 ring-red-200 "}>
                                    Submit your Request
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default PostRequests;
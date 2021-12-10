import ProposalNav from "../Nav/ProposalNav";
import {useState} from "react";

const range = () => {
    let x = [];
    for (let i = 0; i <= 30; i++) {
        x.push(i);
    }
    return x;
}

const ScopePricing = () => {
    const [multiPackage, setMultiPackage] = useState(false);
    const handleChecked = (e) => {
        if (multiPackage) {
            setMultiPackage(false)
        } else {
            setMultiPackage(true);
        }
    }
    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <div className={"flex justify-between border-b border-gray-300 pb-4"} style={{width: "600px"}}>
                    <span>
                        Pricing
                    </span>
                    <div className={"flex"}>
                        <span>
                            3 Packages:
                        </span>
                        {/*if the multipackage is true it animates to the right, if false it animates back to the left*/}
                        <div
                            className={(multiPackage ? "bg-primary" : "bg-gray-300") + " py-1 ml-2 rounded-md h-max px-2 w-16 transition-all"}>
                            <div
                                className={"bg-white rounded-md h-5 w-5 cursor-pointer transform-gpu transition-transform  " + (multiPackage && "translate-x-7")}
                                onClick={handleChecked}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={" py-5 px-3 bg-white mt-8 rounded-md"} style={{width: "600px"}}>
                    <div className={"relative"}>
                        <table className={"w-full text-sm border border-gray-200 table-fixed"}>
                            <thead className={"bg-gray-100 h-10 border-b border-gray-200 text-xl text-left"}>
                            <tr>
                                <th className={"w-32"}>
                                </th>
                                <th className={"gig_package_header"}>Basic</th>
                                <th className={"gig_package_header"}>Standard</th>
                                <th className={"gig_package_header"}>Premium</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Description Row */}
                            <tr>
                                <td className={"gig_package_label"}>Description</td>
                                <td className={"gig_package_data"}><textarea
                                    className={"w-full p-2 focus:outline-none h-36  resize-none"}
                                    placeholder={"Description"}/></td>
                                <td className={"gig_package_data"}><textarea
                                    className={"w-full p-2 focus:outline-none h-36 resize-none"}
                                    placeholder={"Description"}/></td>
                                <td className={"gig_package_data"}><textarea
                                    className={"w-full p-2 focus:outline-none h-36 resize-none"}
                                    placeholder={"Description"}/></td>
                            </tr>
                            {/* Delivery Row */}

                            <tr className={"border-t border-gray-200"}>
                                <td className={"gig_package_label"}>Delivery Time</td>
                                <td className={"gig_package_data "}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            return <option key={number + "basic_day" + index}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            return <option key={number + "normal_day" + index}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            return <option key={number + "premium_day" + index}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                            </tr>

                            {/*  SubCategory specific info*/}

                            <tr className={"border-t border-gray-200"}>
                                <td className={"gig_package_label"}>Revision</td>
                                <td className={"gig_package_data"}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "basic_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option>Unlimited</option>
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "normal_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option>Unlimited</option>
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "premium_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option>Unlimited</option>
                                    </select>
                                </td>
                            </tr>

                            {/* Price Of proposal*/}
                            <tr className={"border-t border-gray-200 h-12"}>
                                <td className={"gig_package_label"}>Price</td>
                                <td className={"gig_package_data"}><input type={"number"} step={5}
                                                                          className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                                <td className={"gig_package_data"}><input type={"number"} step={5}
                                                                          className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                                <td className={"gig_package_data"}><input type={"number"} step={5}
                                                                          className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {
                            multiPackage && <div
                                className={"absolute z-20 right-0 top-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm h-full"}
                                style={{width: '298px'}}>
                                <div className={"w-4/6 pt-20 text-center text-xl m-auto"}>

                                    <p> Unlock your potential revenue with all 3 Packages</p>
                                    <button
                                        className={"bg-blue-600 px-3 py-1 text-white rounded-md hover:bg-blue-500 mt-3 ring-1 ring-red-200"}
                                        onClick={handleChecked}>
                                        Try Now
                                    </button>
                                </div>

                            </div>
                        }
                    </div>

                </div>
                {/*Cancel Gig creation and save and continue*/}
                <div className={"flex justify-between mt-8"} style={{width: '600px'}}>
                    <button className={"h-10 w-32 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                        Cancel
                    </button>
                    <button
                        className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                        Save And Continue
                    </button>
                </div>
            </main>
        </>
    )
}

export default ScopePricing;
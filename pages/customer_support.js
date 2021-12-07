import {useState} from "react";

const CustomerSupport = () => {
    const [roleOrder, setRoleOrder] = useState(false);
    const [changed, setChanged] = useState(false);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [orderNumber, setOrderNumber] = useState("");
    const [role, setRole] = useState("");
    const handleFormChange = (e) => {
        setChanged(true);
        const value = e.target.options[e.target.selectedIndex].value
        if (value === "1" || value === "2") {
            setRoleOrder(true);
        } else {
            setRoleOrder(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Subject is ", subject);
        // console.log("Message is ", message);
        // console.log("Order Number is ", orderNumber);
        // console.log("Role is ", role);
    }
    return (
        <>
            <main className={"w-full px-20 pb-10"}>
                {
                    <div className={"h-10 bg-alert text-alert flex items-center w-full px-6 my-4"}>
                        <p>Sorry You can't submit a support request without logging in first. If you have a general
                            question, please email us at <a href={"mailto:Info@letworkbedone.com"}>
                                Info@letworkbedone.com</a>.</p>
                    </div>
                }
                <section className={"border border-gray-300 rounded-lg"}>
                    {/* The box for messaging support */}
                    <div
                        className={"flex flex-col items-center h-24 justify-center bg-gray-200 border-b border-gray-300"}>
                        <h3 className={"text-2xl text-gray-800 mb-3 font-semibold"}>
                            Submit A Support Request
                        </h3>
                        <p className={"text-gray-500 "}>
                            If you have any questions, please feel free to contact us, Our customer service center is
                            online 24/7
                        </p>
                    </div>
                    <div className={"h-max px-52 py-3"}>
                        <form onSubmit={handleSubmit} className={"w-full flex-col items-center flex"}>
                        <span className={"label"}>
                            Select Relevant Inquiry Subject
                        </span>
                            <select
                                className={"input input-height bg-white"}
                                onChange={handleFormChange} defaultValue={"Select Inquiry"}>
                                <option disabled hidden>Select Inquiry</option>
                                <option value={1}>Order Support</option>
                                <option value={2}>Review Removal</option>
                                <option value={3}>Account Support</option>
                                <option value={4}>Report A Bug</option>
                            </select>
                            {
                                changed && (
                                    <>
                                    <span className={"label"}>
                                    Subject
                                    </span>
                                        <input
                                            type={"text"}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className={"input input-height"}
                                            value={subject}
                                            required/>
                                        <span className={"label"}>
                                        Message
                                    </span>
                                        <textarea
                                            className={"input textarea-height resize-none py-3"}
                                            onChange={(e) => setMessage(e.target.value)}
                                            value={message}
                                            required
                                        />
                                        {
                                            roleOrder && (
                                                <>
                                                <span className={"label"}>
                                                    Order Number
                                                </span>
                                                    <input
                                                        type={"text"}
                                                        onChange={(e) => setOrderNumber(e.target.value)}
                                                        className={"input input-height"}
                                                        value={orderNumber}
                                                        required/>
                                                    <span className={"label"}>
                                                    Order Number
                                                </span>
                                                    <select
                                                        className={"input input-height bg-white"}
                                                        defaultValue={"Select user role"}
                                                        onChange={event => setRole(event.target.options[event.target.selectedIndex].value)}
                                                        required
                                                    >
                                                        <option disabled hidden>Select user role</option>
                                                        <option>User</option>
                                                        <option>Buyer</option>
                                                    </select>
                                                </>
                                            )
                                        }
                                        <span className={"label"}>
                                        Attachment
                                    </span>
                                        <div className={"input input-height flex items-center"}>
                                            <input type={"file"} required/>
                                        </div>
                                        <button
                                            type={"submit"}
                                            className={"bg-purple-700 my-4 w-36 text-gray-100 h-10 rounded-sm focus:ring ring-blue-200 transition"}>
                                            Submit Request
                                        </button>
                                    </>
                                )
                            }
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CustomerSupport;
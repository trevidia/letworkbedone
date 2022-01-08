import {useEffect, useState} from "react";
import Image from "next/image";
import {pricingActions} from "../lib/state/PricingFormState";

const AddUserExtraService = ({extras, dispatch}) => {
    const [formVisible, setFormVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [customExtras, setCustomExtras] = useState([])

    useEffect(() => {
        let custom = extras.filter(extra => extra.custom === "true")
        if (custom !== undefined) {
            setCustomExtras(custom)
        }
    }, [extras])

    return <>
        <div
            className={` h-max px-4 flex items-center py-5 ${formVisible || customExtras.length !== 0 ? "border-b" : ""} border-gray-300`}>
            <input type={"checkbox"} checked={formVisible}
                   onChange={(e) => e.target.checked ? setFormVisible(true) : setFormVisible(false)}/>
            <span className={" ml-4"}>Add Extra Service</span>
        </div>
        {/* the extras in the parent state*/}
        {/* form*/}
        {
            customExtras.map((extra, index) => {
                return <CustomExtra
                    isNotLast={index !== (customExtras.length - 1)}
                    key={extra.title + index}
                    title={extra.title}
                    dispatch={dispatch}
                    customPrice={extra.price}/>
            })
        }
        {
            formVisible && <>
                <div
                    className={` h-max px-4 flex items-center justify-between ${customExtras.length !== 0 ? "border-t" : ""} border-gray-300 py-5 `}>
                    <div className={"flex w-5/12 mr-7 items-center"}>
                    <span className={"w-1/6  text-gray-700"}>
                        Title
                    </span>
                        <div className={"w-3/4 ml-4"}>
                            <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)}
                                   className={"input h-8"}/>
                        </div>
                    </div>
                    <div className={"flex w-5/12 items-center"}>
                    <span className={"w-1/6  text-gray-700"}>
                        Price
                    </span>
                        <div className={"w-3/4 ml-4"}>
                            <input type={"number"} value={price} onChange={event => setPrice(event.target.value)}
                                   step={5} className={"input h-8"}/>
                        </div>
                    </div>
                </div>
                <div className={'py-2 flex px-4 justify-end'}>
                    <button
                        onClick={() => {
                            if (title.length !== 0 && price.length !== 0 && extras.find(el => el.title === title) === undefined) {
                                dispatch({
                                    type: pricingActions.addGigExtra,
                                    payload: {title: title, additionalDays: "0", custom: "true", price: price}
                                })
                                setPrice('')
                                setTitle('')
                                setFormVisible(false)
                            }
                        }
                        }
                        className={" h-8 w-max text-white bg-blue-600 px-5 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md"}>
                        Insert
                    </button>
                </div>
            </>
        }
    </>
}

const CustomExtra = ({title, dispatch, customPrice, isNotLast}) => {
    const [customTitle, setCustomTitle] = useState(title)
    const [price, setPrice] = useState(customPrice)
    const [isOpen, setIsOpen] = useState(false)
    console.log(isNotLast, "is not last")
    return <div>
        <div onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
             className={`py-3 px-4 flex items-center text-[14px] font-light ${isOpen || isNotLast ? "border-b" : ""} border-gray-300 h-max`}>
            {/*    The controller with the title*/}
            <span className={"mr-4"}>
                 <Image src={'/images/svg/menu.svg'} width={20} height={20} alt={"close_btn"}/>
            </span>
            <span className={"w-1/2"}>
                {title}
            </span>
            <span className={"ml-auto"}>
                 <Image src={'/images/svg/arrow_drop_down.svg'} width={20} height={20} alt={"close_btn"}/>
            </span>
        </div>
        {
            isOpen && (
                <>
                    <div className={` h-max px-4 flex items-center justify-between  py-5 `}>
                        <div className={"flex w-5/12 mr-7 items-center"}>
                    <span className={"w-1/6  text-gray-700"}>
                        Title
                    </span>
                            <div className={"w-3/4 ml-4"}>
                                <input type={"text"} value={customTitle}
                                       onChange={event => setCustomTitle(event.target.value)} className={"input h-8"}/>
                            </div>
                        </div>
                        <div className={"flex w-5/12 items-center"}>
                    <span className={"w-1/6  text-gray-700"}>
                        Price
                    </span>
                            <div className={"w-3/4 ml-4"}>
                                <input type={"number"} value={price} onChange={event => setPrice(event.target.value)}
                                       step={5} className={"input h-8"}/>
                            </div>
                        </div>
                    </div>
                    <div className={`py-2 flex px-4 justify-between ${isNotLast ? "border-b" : ""} border-gray-300`}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: pricingActions.removeGigExtra,
                                    payload: title
                                })
                            }}
                            className={" h-8 w-max text-white bg-rose-600 px-5 py-1 shadow-md hover:bg-rose-500 ring-red-200 ring-1 rounded-md"}>
                            Delete
                        </button>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: pricingActions.editGigExtra,
                                    payload: {
                                        pastTitle: title,
                                        newTitle: customTitle,
                                        price: price
                                    }
                                })
                            }}
                            className={" h-8 w-max text-white bg-blue-600 px-5 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md"}>
                            Save
                        </button>
                    </div>
                </>
            )
        }
    </div>
}

export default AddUserExtraService;
import {useEffect, useState} from "react";
import range from "../lib/UseFullFunctions";
import {pricingActions} from "../lib/state/PricingFormState";

const GigSpecificExtra = ({gigExtraTitle, isLast, dispatch, daysDispatch, attribute, attributes}) => {
    const [checked, setChecked] = useState(false);
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')
    const [title, setTitle] = useState(attribute.extra_spec_title)

    useEffect(() => {
        let attrib = attributes.find(el => el.title === title)
        console.log(attrib, "attrib")
        if (attrib !== undefined) {
            setChecked(true)
            setPrice(attrib.price)
            setDays(attrib.additionalDays)
        }
    }, [attributes])

    const handleChecked = (e) => {
        if (e.target.checked) {
            setChecked(true)
        } else {
            // remove the extra from the state if its not checked
            dispatch({
                type: pricingActions.removeGigExtra,
                payload: title
            })
            setChecked(false)
        }
    }

    return <div
        className={"h-16 px-4 flex items-center  py-5 border-gray-300 " + (!(isLast !== null && isLast === true) && "border-b ")}>
        <input type={"checkbox"} checked={checked} onChange={handleChecked}/>
        <span className={" ml-4 w-1/5"}>{gigExtraTitle}</span>
        <div className={"w-5/6 flex items-center"}>
            {
                checked && (
                    <>
                        <span className={'w-1/6 ml-2'}>for an extra</span>
                        <div className={"w-3/4 flex items-center"}>
                            <div className={"w-1/3 mr-2"}>
                                <input type={'number'} value={price} onChange={event => {
                                    dispatch({
                                        type: pricingActions.addGigExtra,
                                        payload: {
                                            title: attribute.extra_spec_title,
                                            custom: "false",
                                            price: event.target.value
                                        }
                                    })
                                }} className={"input h-8 rounded-md "}/>
                            </div>
                            <span>$ and additional</span>
                            <div>
                                {
                                    <select onChange={event => {
                                        dispatch({
                                            type: pricingActions.addGigExtra,
                                            payload: {
                                                title: attribute.extra_spec_title,
                                                custom: "false",
                                                additionalDays: event.target.value
                                            }
                                        })
                                    }
                                    } value={days}
                                            className={"gig_select_input border border-gray-300 rounded-md ml-2"}>
                                        {range().map((number, index) => {
                                            return <option key={number + "extra_day" + index}
                                                           value={number}>{number} days</option>
                                        })}
                                    </select>
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    </div>
}

export default GigSpecificExtra;
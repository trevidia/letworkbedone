import {useEffect, useReducer, useState} from "react";
import GigSpecificExtra from "../GigSpecificExtra";
import range from "../../lib/UseFullFunctions";
import AddUserExtraService from "../AddUserExtraService";
import axios from "../../lib/AxiosConfig";
import {useRouter} from "next/router";
import {init, initialPricingState, pricingActions, pricingReducer} from "../../lib/state/PricingFormState";

const ScopePricing = () => {
    const [state, dispatch] = useReducer(pricingReducer, initialPricingState, init)
    const [multiPackage, setMultiPackage] = useState(false);
    const [gig, setGig] = useState([])
    const router = useRouter()

    useEffect(() => {
        const id = router.query.id
        const getPackageSpec = async () => {
            await axios.get(`/gig/${id}`).then((res) => {
                setGig(res.data)
                console.log(res.data)
            })
        }
        getPackageSpec()
    }, [])

    useEffect(() => {
        const assigner = (pricingActs, value, attrib) => {
            pricingActs.forEach((act) => {
                dispatch({
                    type: act,
                    payload: {
                        title: attrib.specification,
                        attributeId: attrib.id,
                        value: value
                    }
                })
            })
        }
        gig.attributes && gig.attributes.map((attribute, index) => {
            switch (attribute.type) {
                case "checkbox":
                    assigner([pricingActions.addBasicSpecs, pricingActions.addStandardSpecs, pricingActions.addPremiumSpecs], false, attribute)
                    break
                default:
                    assigner([pricingActions.addBasicSpecs, pricingActions.addStandardSpecs, pricingActions.addPremiumSpecs], "", attribute)
                    break
            }
        })
    }, [gig])

    const handleChecked = () => {
        if (multiPackage) {
            setMultiPackage(false)
        } else {
            setMultiPackage(true);
        }
    }

    const submission = () => {
        let data = state
        if (!multiPackage) {
            data = {...data, premium: null, standard: null}
        }
        axios.patch(`/gig/${gig.id}`, data).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        console.table(data)
    }

    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <div className={"flex justify-between border-b border-gray-300 pb-4"} style={{width: "600px"}}>
                    <h4 className={"text-xl font-semibold"}>
                        Pricing
                    </h4>
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
                <div className={" py-5 px-3 bg-white mt-8 rounded-md border border-gray-300"} style={{width: "600px"}}>
                    <div className={"relative"}>
                        <table className={"w-full text-sm border border-collapse border-gray-200 table-fixed"}>
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
                                    value={state.basic.description}
                                    onChange={(e) => {
                                        dispatch({
                                            type: pricingActions.addBasicDescription,
                                            payload: e.target.value
                                        })
                                    }}
                                    className={"w-full p-2 focus:outline-none h-36  resize-none"}
                                    placeholder={"Description"}/></td>
                                <td className={"gig_package_data"}><textarea
                                    value={state.standard.description}
                                    onChange={(e) => {
                                        dispatch({
                                            type: pricingActions.addStandardDescription,
                                            payload: e.target.value
                                        })
                                    }}
                                    className={"w-full p-2 focus:outline-none h-36 resize-none"}
                                    placeholder={"Description"}/></td>
                                <td className={"gig_package_data"}><textarea
                                    value={state.premium.description}
                                    onChange={(e) => {
                                        dispatch({
                                            type: pricingActions.addPremiumDescription,
                                            payload: e.target.value
                                        })
                                    }}
                                    className={"w-full p-2 focus:outline-none h-36 resize-none"}
                                    placeholder={"Description"}/></td>
                            </tr>
                            {/* Delivery Row */}

                            <tr className={"border-t border-gray-200"}>
                                <td className={"gig_package_label"}>Delivery Time</td>
                                <td className={"gig_package_data "}>
                                    <select
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addBasicDelivery,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}
                                        value={state.basic.delivery}>
                                        {range().map((number, index) => {
                                            return <option key={number + "basic_day" + index}
                                                           value={number}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addStandardDelivery,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}
                                        value={state.standard.delivery}>
                                        {range().map((number, index) => {
                                            return <option key={number + "normal_day" + index}
                                                           value={number}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addPremiumDelivery,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}
                                        value={state.premium.delivery}>
                                        {range().map((number, index) => {
                                            return <option key={number + "premium_day" + index}
                                                           value={number}>{number} days</option>
                                        })}
                                    </select>
                                </td>
                            </tr>


                            {/*  SubCategory specific info*/}

                            {
                                gig.attributes && gig.attributes.map((attribute, index) => {

                                    switch (attribute.type) {
                                        case "checkbox":
                                            return (
                                                <tr key={attribute.specification + index}
                                                    className={"border-t border-gray-200"}>
                                                    <td className={'gig_package_label'}>{attribute.specification}</td>
                                                    <td className={"gig_package_data"}>
                                                        <div
                                                            className={"flex w-full h-full items-center justify-center"}>
                                                            <input
                                                                type={'checkbox'}
                                                                checked={state.basic.attributes.length !== 0 && state.basic.attributes.find(el => el.attributeId === attribute.id).value === "true"}
                                                                onChange={(e) => {
                                                                    dispatch({
                                                                        type: pricingActions.addBasicSpecs,
                                                                        payload: {
                                                                            title: attribute.specification,
                                                                            attributeId: attribute.id,
                                                                            value: e.target.checked ? "true" : "false"
                                                                        }
                                                                    })
                                                                }}/>
                                                        </div>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <div
                                                            className={"flex w-full h-full items-center justify-center"}>
                                                            <input
                                                                type={'checkbox'}
                                                                checked={state.standard.attributes.length !== 0 && state.standard.attributes.find(el => el.attributeId === attribute.id).value === "true"}
                                                                onChange={(e) => {
                                                                    dispatch({
                                                                        type: pricingActions.addStandardSpecs,
                                                                        payload: {
                                                                            title: attribute.specification,
                                                                            attributeId: attribute.id,
                                                                            value: e.target.checked ? "true" : "false"
                                                                        }
                                                                    })
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <div
                                                            className={"flex w-full h-full items-center justify-center"}>
                                                            <input
                                                                type={'checkbox'}
                                                                checked={state.premium.attributes.length !== 0 && state.premium.attributes.find(el => el.attributeId === attribute.id).value === "true"}
                                                                onChange={(e) => {
                                                                    dispatch({
                                                                        type: pricingActions.addPremiumSpecs,
                                                                        payload: {
                                                                            title: attribute.specification,
                                                                            attributeId: attribute.id,
                                                                            value: e.target.checked ? "true" : "false"
                                                                        }
                                                                    })
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        case "select":
                                            let generator = (key) => {
                                                return [...Array(parseInt(attribute.drop_down_range)).keys()].map((number, index) => {
                                                    return <option key={number + key + index}
                                                                   value={number + 1}>{number + 1}</option>
                                                })
                                            }
                                            console.log(state.standard.attributes.length !== 0 ? state.standard.attributes.find(el => el.attributeId === attribute.id).value : "")
                                            return (
                                                <tr key={attribute.specification + index}
                                                    className={"border-t border-gray-200"}>
                                                    <td className={'gig_package_label'}>{attribute.specification}</td>
                                                    <td className={"gig_package_data"}>
                                                        <select
                                                            value={state.basic.attributes.length !== 0 && state.basic.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addBasicSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            className={'gig_select_input'}>
                                                            {
                                                                generator("basic")
                                                            }
                                                        </select>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <select
                                                            value={state.standard.attributes.length !== 0 && state.standard.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addStandardSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            className={'gig_select_input'}>
                                                            {
                                                                generator("standard")
                                                            }
                                                        </select>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <select
                                                            value={state.premium.attributes.length !== 0 && state.premium.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addPremiumSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            className={'gig_select_input'}>
                                                            {
                                                                generator("premium")
                                                            }
                                                        </select>
                                                    </td>
                                                </tr>
                                            )
                                        default:
                                            return (
                                                <tr key={attribute.specification + index}
                                                    className={"border-t border-gray-200"}>
                                                    <td className={'gig_package_label'}>{attribute.specification}</td>
                                                    <td className={"gig_package_data"}>
                                                        <input
                                                            value={state.basic.attributes.length !== 0 && state.basic.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addBasicSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            type={'text'}
                                                            className={"focus:outline-none w-full h-full px-4"}/>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <input
                                                            value={state.standard.attributes.length !== 0 && state.standard.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addStandardSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            type={'text'}
                                                            className={" focus:outline-none w-full h-full px-4"}/>
                                                    </td>
                                                    <td className={"gig_package_data"}>
                                                        <input
                                                            value={state.premium.attributes.length !== 0 && state.premium.attributes.find(el => el.attributeId === attribute.id).value}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: pricingActions.addPremiumSpecs,
                                                                    payload: {
                                                                        title: attribute.specification,
                                                                        attributeId: attribute.id,
                                                                        value: e.target.value
                                                                    }
                                                                })
                                                            }}
                                                            type={'text'}
                                                            className={"focus:outline-none w-full h-full px-4"}/>
                                                    </td>
                                                </tr>
                                            )
                                    }
                                })
                            }

                            <tr className={"border-t border-gray-200"}>
                                <td className={"gig_package_label"}>Revision</td>
                                <td className={"gig_package_data"}>
                                    <select
                                        value={state.basic.revision}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addBasicRevision,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "basic_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option value={99}>Unlimited</option>
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select
                                        value={state.standard.revision}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addStandardRevision,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "normal_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option value={99}>Unlimited</option>
                                    </select>
                                </td>
                                <td className={"gig_package_data"}>
                                    <select
                                        value={state.premium.revision}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addPremiumRevision,
                                                payload: e.target.value
                                            })
                                        }}
                                        className={"gig_select_input"}>
                                        {range().map((number, index) => {
                                            if (index <= 10) {
                                                return <option
                                                    key={number + "premium_revision" + index}>{number} </option>
                                            }
                                        })}
                                        <option value={99}>Unlimited</option>
                                    </select>
                                </td>
                            </tr>

                            {/* Price Of proposal*/}
                            <tr className={"border-t border-gray-200 h-12"}>
                                <td className={"gig_package_label"}>Price</td>
                                <td className={"gig_package_data"}>
                                    <input
                                        value={state.basic.price}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addBasicPrice,
                                                payload: e.target.value
                                            })
                                        }}
                                        type={"number"} step={5}
                                        className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                                <td className={"gig_package_data"}>
                                    <input
                                        value={state.standard.price}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addStandardPrice,
                                                payload: e.target.value
                                            })
                                        }}
                                        type={"number"} step={5}
                                        className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                                <td className={"gig_package_data"}>
                                    <input
                                        value={state.premium.price}
                                        onChange={(e) => {
                                            dispatch({
                                                type: pricingActions.addPremiumPrice,
                                                payload: e.target.value
                                            })
                                        }}
                                        type={"number"} step={5}
                                        className={"focus:outline-none w-full h-full px-4"}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {
                            !multiPackage && <div
                                className={"absolute border border-gray-300 z-20 right-0 top-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm h-full"}
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

                {/* Proposal Extras */}
                <div className={"mt-8"}>
                    <div>
                        <h4 className={"text-xl mb-3"}> My Proposal Extras </h4>
                    </div>
                    <div className={"bg-white rounded-md border text-xs border-gray-300"} style={{width: "600px"}}>
                        {/*    Gig specific extras*/}
                        {
                            gig.attributes && gig.attributes.map((attribute, index) => {
                                return <GigSpecificExtra
                                    key={attribute.extra_spec_title + index}
                                    dispatch={dispatch}
                                    attribute={attribute}
                                    gigExtraTitle={attribute.extra_spec_title}
                                />
                            })
                        }
                        {/*  Add extra services option  */}
                        <AddUserExtraService/>
                    </div>
                </div>
                {/*Cancel Gig creation and save and continue*/}
                <div className={"flex justify-between mt-8"} style={{width: '600px'}}>
                    <button className={"h-10 w-32 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                        Cancel
                    </button>
                    <button
                        onClick={submission}
                        className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                        Save And Continue
                    </button>
                </div>
            </main>
        </>
    )
}

export default ScopePricing;
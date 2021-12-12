import {useState} from "react";
import range from "../lib/UseFullFunctions";

const GigSpecificExtra = ({gigExtraTitle, isLast}) => {
    const [checked, setChecked] = useState(false);

    const handleChecked = (e) => {
        if (e.target.checked) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }

    return <div
        className={"h-16 px-4 flex items-center  py-5 border-gray-300 " + (!(isLast !== null && isLast === true) && "border-b ")}>
        <input type={"checkbox"} onChange={handleChecked}/>
        <span className={" ml-4 w-1/5"}>{gigExtraTitle}</span>
        <div className={"w-5/6 flex items-center"}>
            {
                checked && (
                    <>
                        <span className={'w-1/6 ml-2'}>for an extra</span>
                        <div className={"w-3/4 flex items-center"}>
                            <div className={"w-1/3 mr-2"}>
                                <input type={'number'} className={"input h-8 rounded-md "}/>
                            </div>
                            <span>$ and additional</span>
                            <div>
                                {
                                    <select className={"gig_select_input border border-gray-300 rounded-md ml-2"}>
                                        {range().map((number, index) => {
                                            return <option key={number + "extra_day" + index}>{number} days</option>
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
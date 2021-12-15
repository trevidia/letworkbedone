import Image from "next/image";
import {useState} from "react";

const DynamicTable = ({headings, action, controllers, actionDropDown}) => {
    const [active, setActive] = useState(controllers[0].title);
    return (
        <>

            {/* Table Tabs*/}
            <div className={"flex text-gray-600 w-full"}>
                {
                    controllers.map(
                        (control, index) => {
                            return <div
                                className={`table_dynamic_link ${active === control.title && "table_active"}`}
                                onClick={() => setActive(control.title)}
                                key={control.title + index}>
                              <span>
                                  {control.title}
                              </span>
                                <span className={"table_badge"}>
                                  {control.amount}
                              </span>
                            </div>
                        }
                    )
                }
            </div>

            {/*    Tables */}
            <div className={"shadow border border-gray-300 mt-7"}>
                <table className={"w-full table-fixed"}>
                    <thead>
                    <tr className={"text-xl text-left border-b border-gray-300"}>
                        {
                            controllers.find(element => element.title === active).columns.map(
                                (element, index, array) => {
                                    let border
                                    if (action) {
                                        border = "border-r"
                                    } else if (action === false && index !== headings.length - 1) {
                                        border = "border-r"
                                    } else {
                                        border = "border-r-0"
                                    }
                                    return <th
                                        key={element + index}
                                        className={"font-normal px-3 py-2 border-gray-300 " + border}
                                        colSpan={index === 0 ? array[0] - 1 : 1}>
                                        {element}
                                    </th>
                                }
                            )
                        }
                        {
                            action && <th className={"font-normal px-3 py-2 "}>
                                Actions
                            </th>
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        actionDropDown
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DynamicTable
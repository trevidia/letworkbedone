import {useContext, useState} from "react";
import Link from 'next/link'
import {UserContext} from "../../../../lib/UserContext";
import Image from "next/image";
import DynamicTable from "../../../../Components/DynamicTable";
import LoadingSpinner from "../../../../Components/LoadingSpinner";
import GigTableBody from "../../../../Components/TableBodies/GigTableBody";

const ViewProposals = ({data}) => {
    const [active, setActive] = useState(data[0].title);
    const {state, dispatch} = useContext(UserContext);
    const {user} = state;
    const [vacationMode, setVacationMode] = useState(false)

    return (
        <main className={"p-12 "}>
            {/* Header for the page*/}
            <div className={"flex justify-between"}>
                <h2 className={"text-3xl font-semibold"}>View My Gigs</h2>
                {/* On Vacation Switch*/}
                <div className={"flex items-center"}>
                <span className={"text-xl"}>
                    Vacation Mode
                </span>
                    <div
                        onClick={() => vacationMode ? setVacationMode(false) : setVacationMode(true)}
                        className={"p-1 cursor-pointer bg-gradient-to-t transition-all ml-4 w-12 rounded-full "
                        + (!vacationMode ? "from-gray-300 to-gray-100 " : "from-blue-400 to-green-200")
                        }>
                        <div
                            className={"h-3 w-3 rounded-full bg-white transition-all transform-gpu " + (vacationMode && "translate-x-7")}>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex justify-end mt-7"}>
                {
                    user && <Link href={`/users/${user.username}/proposals/create_proposal`}>
                        <a>
                            <div
                                className={'h-8 bg-blue-700 text-white flex items-center px-3 rounded-sm ring-1 ring-red-600 hover:bg-blue-400 transition-colors'}>
                                <Image src={'/images/svg/add_circle_white.svg'} width={20} height={20} alt={"add"}/>
                                <span className={"ml-3"}>
                                  Add new Gig
                              </span>
                            </div>
                        </a>
                    </Link>
                }
            </div>

            {/* Table Tabs*/}
            <div className={"flex text-gray-600 w-full"}>
                {
                    data.map(
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
                            data.find(element => element.title === active).columns.map(
                                (element, index, array) => {
                                    let border
                                    if (index !== array[0].length - 1) {
                                        border = "border-r"
                                    } else {
                                        border = "border-r-0"
                                    }

                                    return <th
                                        key={element + index}
                                        className={"font-normal px-3 py-2 border-gray-300 " + border}
                                        colSpan={index === 0 ? array.length : 1}>
                                        {element}
                                    </th>
                                }
                            )
                        }
                        <th className={"font-normal px-3 py-2 "}>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        active !== "Requires Modification" ?
                            <GigTableBody data={data.find(sections => sections.title === active).gigs}/> :
                            data.find(element => element.title === "Requires Modification").modifications.map((value, index) => {
                                return <tr key={value.title + index}
                                           className={`border-gray-300 ${index !== value.length - 1 && "border-b"}`}>
                                    <td colSpan={2} className={"border-r border-gray-300 h-14"}>
                                        <p className={"px-2 "}>
                                            {
                                                value.title
                                            }
                                        </p>
                                    </td>
                                    <td className={"border-r border-gray-300"}>
                                        <p className={" px-2"}>
                                            {value.message}
                                        </p>
                                    </td>
                                    <td>
                                        <div className={"flex  justify-center h-full items-center"}>
                                            <div className={"bg-blue-800 w-max h-8 flex items-center rounded-md"}>
                                                <Image src={"/images/svg/arrow_drop_down_white.svg"} width={30}
                                                       height={40} alt={"arrow"}/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })
                    }

                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default ViewProposals;

export function getServerSideProps() {
    return {
        props: {
            data: [
                {
                    title: "Active",
                    url: "/active_gigs",
                    amount: 6,
                    columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                    gigs: [
                        {
                            title: "I Will Make a football trading company",
                            price: 30,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will Make the future bright",
                            price: 500,
                            views: "1k",
                            orders: 15,
                        },
                        {
                            title: "I Will Destroy a server for you",
                            price: 90,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will hack into facebook",
                            price: 7000,
                            views: 380,
                            orders: 4,
                        },
                    ]
                },
                {
                    title: "Paused Gigs",
                    url: "/paused_gigs",
                    amount: 9,
                    columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                    gigs: [
                        {
                            title: "I Will Make a football trading company",
                            price: 30,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will Make the future bright",
                            price: 500,
                            views: "1k",
                            orders: 15,
                        },
                        {
                            title: "I Will Destroy a server for you",
                            price: 90,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will hack into facebook",
                            price: 7000,
                            views: 380,
                            orders: 4,
                        },
                    ]
                },
                {
                    title: "Pending Gigs",
                    url: "/pending_gigs",
                    amount: 2,
                    columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                    gigs: [
                        {
                            title: "I Will Make a football trading company",
                            price: 30,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will Make the future bright",
                            price: 500,
                            views: "1k",
                            orders: 15,
                        },
                        {
                            title: "I Will Destroy a server for you",
                            price: 90,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will hack into facebook",
                            price: 7000,
                            views: 380,
                            orders: 4,
                        },
                    ]
                },
                {
                    title: "Requires Modification",
                    url: "/requires_modification",
                    amount: 5,
                    columns: ["Modification GigTitle", "Modification Message"],
                    modifications: [
                        {
                            title: "I Will hack into facebook",
                            message: "Modify Gig Title if the service is unethical"
                        },
                        {
                            title: "Destroy a server for you",
                            message: "Modify Gig Title if the it is illegal"
                        },
                    ]
                },
                {
                    title: "Draft",
                    url: "/drafted_gigs",
                    amount: 8,
                    columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                    gigs: [
                        {
                            title: "I Will Make a football trading company",
                            price: 30,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will Make the future bright",
                            price: 500,
                            views: "1k",
                            orders: 15,
                        },
                        {
                            title: "I Will Destroy a server for you",
                            price: 90,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will hack into facebook",
                            price: 7000,
                            views: 380,
                            orders: 4,
                        },
                    ]
                },
                {
                    title: "Declined",
                    url: "/declined",
                    amount: 6,
                    columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                    gigs: [
                        {
                            title: "I Will Make a football trading company",
                            price: 30,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will Make the future bright",
                            price: 500,
                            views: "1k",
                            orders: 15,
                        },
                        {
                            title: "I Will Destroy a server for you",
                            price: 90,
                            views: 200,
                            orders: 2,
                        },
                        {
                            title: "I Will hack into facebook",
                            price: 7000,
                            views: 380,
                            orders: 4,
                        },
                    ]
                },
            ]
        }
    }
}
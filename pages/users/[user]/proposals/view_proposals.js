import {useContext, useEffect, useState} from "react";
import Link from 'next/link'
import {UserContext} from "../../../../lib/UserContext";
import axios from "../../../../lib/AxiosConfig";
import Image from "next/image";
import GigTableBody from "../../../../Components/TableBodies/GigTableBody";
import ActionDropdown from "../../../../Components/ActionDropdown";
import {useDeleteGig, useDropControl} from "../../../../lib/CustomHooks";

const ViewProposals = () => {
    const [isOpen, handleDropControl, activeGig, setActiveGig] = useDropControl()
    const [active, setActive] = useState('Active');
    const {state, dispatch} = useContext(UserContext);
    const {user} = state;
    const [data, setData] = useState([]);
    const [shouldDelete, setShouldDelete, deleteGig] = useDeleteGig([false, 0]);
    const [vacationMode, setVacationMode] = useState(false)

    useEffect(() => {
        if (state.user !== null) {
            const getGigs = async () => {
                let data = [];
                await axios.get(`/user_gigs/${user.id}`).then((res) => {
                    console.log(res)
                    data = res.data
                    console.log(data, "data")
                }).catch(err => console.log(err));

                let activeGigs = [];
                let paused = [];
                let pending = [];
                let requiresMod = [];
                let drafts = [];
                let declined = [];
                data.forEach((gig) => {
                    switch (gig.gig_status.status) {
                        case "draft":
                            drafts = [...drafts, gig]
                            break;
                        case 'active':
                            activeGigs = [...activeGigs, gig]
                            break
                        case 'paused':
                            paused = [...paused, gig]
                            break
                        case 'modification':
                            requiresMod = [...requiresMod, gig]
                            break
                        case 'pending':
                            pending = [...pending, gig]
                            break
                        case 'declined':
                            declined = [...declined, gig]
                            break
                    }
                })
                let gig_columns = ["Gig's Title", "Gig's Price", "Views", "Orders"];
                const gigs = [
                    {
                        title: "Active",
                        columns: gig_columns,
                        actions: ["Preview", "Make Proposal Featured", "Deactivate Proposal", "View Coupons", "View Referrals", "Edit", "Delete"],
                        gigs: activeGigs
                    },
                    {
                        title: "Paused",
                        columns: gig_columns,
                        actions: ["Preview", "Activate", "View Referrals", "Edit", "Delete"],
                        gigs: paused
                    },
                    {
                        title: "Pending",
                        columns: gig_columns,
                        actions: ["Preview", "Edit", "Delete"],
                        gigs: pending
                    },
                    {
                        title: "Requires Modification",
                        columns: ["Modification Gig Title", "Modification Message"],
                        actions: ["Preview", "Edit", "Delete"],
                        gigs: requiresMod
                    },
                    {
                        title: "Draft",
                        columns: gig_columns,
                        actions: ["Edit", "Delete"],
                        gigs: drafts
                    },
                    {
                        title: "Declined",
                        columns: gig_columns,
                        actions: ["Delete"],
                        gigs: declined
                    },
                ]
                setData(gigs)
            }
            getGigs();
        }
    }, [state]);


    const compareTitles = (data, search) => {
        console.log(data)
        return data.find(sections => sections.title === search)
    }

    return (
        <main className={"p-12 "}>
            {/* Header for the page*/}
            {
                shouldDelete[0] &&
                <div
                    className={"fixed flex items-center justify-center inset-x-0 z-20 top-0 h-screen bg-slate-100 backdrop-blur-[2px] backdrop-brightness-[0.8] bg-opacity-5"}>
                    <div className={"bg-white w-[400px] h-[250px] rounded-md"}>
                        <div
                            className={"text-xl text-rose-600 h-2/3 flex flex-col w-11/12 mx-auto text-center justify-center items-center"}>
                            Are you sure you want to delete this proposal, changes made are irreversible.
                        </div>
                        <div className={'flex justify-between items-center px-8 h-1/3 w-full'}>
                            <button onClick={deleteGig}
                                    className={"w-[100px] bg-rose-400 text-white rounded h-[50px] hover:bg-rose-500 hover:drop-shadow transition-all"}>
                                Delete
                            </button>
                            <button onClick={() => setShouldDelete([false, 0])}
                                    className={"w-[100px] bg-teal-400 text-white rounded h-[50px] hover:bg-teal-500 hover:drop-shadow transition-all"}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            }
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
                    user && <Link href={`/users/${user.username}/proposals/manage_proposal?overview`}>
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
                                  {control.gigs.length}
                              </span>
                            </div>
                        }
                    )
                }
            </div>


            <div className={"shadow border border-gray-300 mt-7"}>
                <table className={"w-full table-fixed"}>
                    <thead>
                    <tr className={"text-xl text-left border-b border-gray-300"}>
                        {
                            data.length !== 0 && data.find(element => element.title === active).columns.map(
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
                            <GigTableBody data={compareTitles(data, active)}/> :
                            data.find(element => element.title === "Requires Modification").gigs.map((value, index) => {
                                console.log(value)
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
                                            {value.gig_status.message}
                                        </p>
                                    </td>
                                    <td>
                                        <div className={'relative h-full'}>
                                            <div className={"flex  justify-center h-full items-center  "}>
                                                <div
                                                    className={"bg-blue-800 w-max h-8 flex items-center rounded-md cursor-pointer"}
                                                    onClick={() => {
                                                        setActiveGig(value.id)
                                                        handleDropControl()
                                                    }
                                                    }>
                                                    <Image src={"/images/svg/arrow_drop_down_white.svg"} width={30}
                                                           height={40} alt={"arrow"}/>
                                                </div>
                                            </div>
                                            {
                                                isOpen && activeGig === value.id &&
                                                <ActionDropdown list={["Preview", "Edit", "Delete"]}
                                                                deletefn={setShouldDelete} gig={value}/>
                                            }
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

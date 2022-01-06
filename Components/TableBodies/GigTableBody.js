import Image from "next/image";
import ActionDropdown from "../ActionDropdown";
import {useDeleteGig, useDropControl} from "../../lib/CustomHooks";


const GigTableBody = ({data}) => {
    const [isOpen, handleDropControl, activeGig, setActiveGig] = useDropControl()
    const [shouldDelete, setShouldDelete, deleteGig] = useDeleteGig([false, 0]);

    if (data !== undefined) {
        return (
            <>
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
                {
                    data.gigs.map((gig, index) => {
                        return <tr key={gig.title + index}
                                   className={`border-gray-300 ${index !== gig.length - 1 && "border-b"}`}>
                            <td colSpan={4} className={"border-r border-gray-300 h-14"}>
                                <p className={"px-2 "}>
                                    {
                                        gig.title
                                    }
                                </p>
                            </td>
                            <td className={"border-r border-gray-300"}>
                                <p className={"text-blue-800 px-2"}>
                                    {
                                        gig.packages.length !== 0 ? `${gig.packages.price}` : 0
                                    }
                                </p>
                            </td>
                            <td className={"border-r border-gray-300"}>
                                <p className={" px-2"}>
                                    {
                                        gig.views.length !== 0 ? `${gig.views.length}` : 0
                                    }
                                </p>
                            </td>
                            <td className={"border-r border-gray-300"}>
                                <p className={" px-2"}>
                                    {
                                        gig.orders.length !== 0 ? `${gig.orders.length}` : 0
                                    }
                                </p>
                            </td>
                            <td>
                                <div className={'relative h-full'}>
                                    <div className={"flex  justify-center h-full items-center  "}>
                                        <div
                                            className={"bg-blue-800 w-max h-8 flex items-center rounded-md cursor-pointer"}
                                            key={gig.title + gig.id} onClick={() => {
                                            setActiveGig(gig.id)
                                            handleDropControl()
                                        }
                                        }>
                                            <Image src={"/images/svg/arrow_drop_down_white.svg"} width={30}
                                                   height={40} alt={"arrow"}/>
                                        </div>
                                    </div>
                                    {
                                        isOpen && activeGig === gig.id &&
                                        <ActionDropdown list={data.actions} gig={gig} deletefn={setShouldDelete}/>
                                    }
                                </div>
                            </td>
                        </tr>
                    })
                }
            </>
        )
    } else {
        return <></>
    }
}

export default GigTableBody
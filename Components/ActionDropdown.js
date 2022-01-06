import Link from 'next/link'
import axios from '../lib/AxiosConfig'
import {useRouter} from "next/router";

const ActionDropdown = ({list, gig, deletefn}) => {
    const router = useRouter();

    const deactivate = () => {
        axios.patch(`/deactivate_gig/${gig.id}`).then(
            (res) => {
                console.log(res, "deactivate response")
                router.reload();
            }
        ).catch(err => console.log(err))
    }
    const activate = () => {
        axios.patch(`/activate_gig/${gig.id}`).then(
            (res) => {
                console.log(res, "activate response")
                router.reload();
            }
        ).catch(err => console.log(err))
    }

    return (
        <div
            className={" absolute w-[179px] bg-white drop-shadow-md border border-slate-300 rounded-md mt-2 mx-2 z-10 text-sm"}>
            {
                // it gives the dropdown interactive selection based on the list items
                // used on the action column in the manage gig page
                list.map((value, index) => {
                    switch (value) {
                        case "Preview":
                            return (<Link href={`/${gig.user.username}/${gig.slug}`} key={value + index}>
                                <a>
                                    <div
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                                </a>
                            </Link>)
                        case "Make Proposal Featured":
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                        case "Deactivate Proposal":
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}
                                        onClick={deactivate}> {value}</div>
                        case "Activate":
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}
                                        onClick={activate}> {value}</div>
                        case "View Coupons":
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                        case "View Referrals":
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                        case "Edit":
                            console.log(gig.gig_status)
                            if (gig.gig_status.status === "draft") {
                                console.log("its in draft");
                                return <Link
                                    href={`/users/${gig.username}/proposals/manage_proposal?overview&id=${gig.id}`}
                                    key={value + index}>
                                    <a>
                                        <div key={value + index}
                                             className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                                    </a>
                                </Link>
                            }
                            return <div key={value + index}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                        case "Delete":
                            return <div key={value + index} onClick={() => deletefn([true, gig.id])}
                                        className={"py-2 px-3 hover:bg-slate-200 text-slate-800 cursor-pointer"}> {value}</div>
                    }
                })
            }
        </div>
    )
}

export default ActionDropdown
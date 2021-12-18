import Link from 'next/link';
import {useContext} from "react";
import {UserContext} from "../../../../lib/UserContext";
import LoadingSpinner from "../../../../Components/LoadingSpinner";

const AccountSettings = () => {
    const {state, dispatch} = useContext(UserContext)
    return (
        <main className={"py-10"}>
            <div className={"grid grid-cols-12 gap-x-10 pl-6 pr-10"}>
                {
                    state.user !== null ?
                        <>
                            <div className={"col-span-3 py-4 px-3 border border-gray-300 rounded-md"}>
                                <Link href={`/users/${state.user.username}/settings/edit_profile`}>
                                    <a>
                                        <div
                                            className={"py-2 px-2 hover:text-link my-2 cursor-pointer rounded-md "}>
                                            <span>
                                                Profile Settings
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={`/users/${state.user.username}/settings/account_settings`}>
                                    <a>
                                        <div
                                            className={"py-2 px-2 cursor-pointer rounded-md text-white bg-blue-400"}>
                                            <span>
                                                Account Settings
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className={"col-span-9 bg-blue-400"}>

                            </div>
                        </> : <LoadingSpinner/>
                }
            </div>
        </main>
    )
}

export default AccountSettings;
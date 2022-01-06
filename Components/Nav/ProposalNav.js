import {useContext} from "react";
import {UserContext} from "../../lib/UserContext";
import GigNavLink from '../GigNavLink';
import {useGigId} from "../../lib/CustomHooks";

const ProposalNav = ({active}) => {
    const {state} = useContext(UserContext);
    const gigId = useGigId();

    return <nav>
        <div className={"px-8 h-10 border-b border-gray-300"}>
            <ul className={"flex items-center h-full text-sm"}>
                {
                    state.user ? <>

                        <li className={"px-2"}>
                            <GigNavLink
                                position={1}
                                title={'Overview'}
                                active={1 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?overview&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>
                        <li className={"px-2"}>
                            <GigNavLink
                                position={2}
                                title={'Scope and Pricing'}
                                active={2 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?scope_pricing&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>
                        <li className={"px-2"}>
                            <GigNavLink
                                position={3}
                                title={'Description & Faq'}
                                active={3 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?description_faq&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>
                        <li className={"px-2"}>
                            <GigNavLink
                                position={4}
                                title={'Requirements'}
                                active={4 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?requirements&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>
                        <li className={"px-2"}>
                            <GigNavLink
                                position={5}
                                title={'Gallery'}
                                active={5 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?gallery&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>
                        <li className={"px-2"}>
                            <GigNavLink
                                position={6}
                                title={'Publish'}
                                active={6 <= active}
                                link={`/users/${state.user.username}/proposals/manage_proposal?publish&${gigId ? `id=${gigId}` : ''}`}/>
                        </li>

                    </> : "Loading....."
                }

            </ul>
        </div>
    </nav>
}

export default ProposalNav;
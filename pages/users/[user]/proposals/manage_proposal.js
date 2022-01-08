import {useRouter} from "next/router";
import ScopePricing from "../../../../Components/forms/ScopePricing";
import DescriptionFaq from "../../../../Components/forms/DescriptionFaq";
import Requirements from "../../../../Components/forms/Requirements";
import Gallery from "../../../../Components/forms/Gallery";
import Overview from "../../../../Components/forms/Overview";
import Publish from "../../../../Components/forms/Publish";
import ProposalNav from "../../../../Components/Nav/ProposalNav";
import {useEffect, useState} from "react";
import {values} from "../../../../lib/Constants";

const CreateProposal = () => {
    const router = useRouter();
    const [path, setPath] = useState('');
    const [user, setUser] = useState({})
    const queries = router.query;
    // get if the route has the property if it has it then return a particular form
    console.log(router.asPath.split('?')[1]);
    useEffect(
        () => {
            setUser(JSON.parse(window.localStorage.getItem(values.USER)));
            const firstPath = router.asPath.split('?')[1];
            if (firstPath) setPath(firstPath.split('&')[0]);
        }, [router.asPath]
    )
    switch (path) {
        case "scope_pricing":
            return <><ProposalNav active={2}/><ScopePricing user={user}/></>
        case "description_faq":
            return <><ProposalNav active={3}/><DescriptionFaq/></>
        case "requirements":
            return <><ProposalNav active={4}/><Requirements/></>
        case "gallery":
            return <><ProposalNav active={5}/><Gallery/></>
        case "publish":
            return <><ProposalNav active={6}/><Publish/></>
        case "overview":
            return <><ProposalNav active={1}/><Overview/></>
        default:
            return "not available"

    }
}

export default CreateProposal;
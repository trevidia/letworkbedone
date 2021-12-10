import {useRouter} from "next/router";
import ScopePricing from "../../../../Components/forms/ScopePricing";
import DescriptionFaq from "../../../../Components/forms/DescriptionFaq";
import Requirements from "../../../../Components/forms/Requirements";
import Gallery from "../../../../Components/forms/Gallery";
import Overview from "../../../../Components/forms/Overview";
import Publish from "../../../../Components/forms/Publish";
import ProposalNav from "../../../../Components/Nav/ProposalNav";

const CreateProposal = () => {
    const router = useRouter();
    const queries = router.query;
    // console.log(router.asPath.split('?')[1])
    // get if the route has the property if it has it then return a particular form
    switch (router.asPath.split('?')[1]) {
        case "scope_pricing":
            return <><ProposalNav active={2}/><ScopePricing/></>
        case "description_faq":
            return <><ProposalNav active={3}/><DescriptionFaq/></>
        case "requirements":
            return <><ProposalNav active={4}/><Requirements/></>
        case "gallery":
            return <><ProposalNav active={5}/><Gallery/></>
        case "publish":
            return <><ProposalNav active={6}/><Publish/></>
        default:
            return <><ProposalNav active={1}/><Overview/></>

    }
}

export default CreateProposal;
import Header from "./Header";
import CategoryNav from "./Nav/CategoryNav";
import Footer from "./Footer";
import Head from "next/head";
import SellerNav from "./Nav/SellerNav";
import SideMenu from "./Nav/SideMenu";
import {useHasUser} from "../lib/CustomHooks";
import {DrawerProvider} from "../lib/DrawerContext";

const MainBody = ({children}) => {
    const hasUser = useHasUser()
    return (
        <>
            <Head>
                <title>Letworkbedone</title>
            </Head>
            <DrawerProvider>
                <SideMenu/>
                <Header/>
            </DrawerProvider>
            {
                hasUser ? <SellerNav/> : <CategoryNav/>
            }
            <div className={""}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainBody;
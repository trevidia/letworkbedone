import Header from "./Header";
import CategoryNav from "./Nav/CategoryNav";
import Footer from "./Footer";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import SellerNav from "./Nav/SellerNav";

const MainBody = ({children}) => {
    const [hasUser, setHasUser] = useState(false);
    const router = useRouter();
    useEffect(
        () => {
            if (router.pathname.includes("users")) {
                setHasUser(true)
            } else {
                setHasUser(false)
            }
        }, [router.pathname]
    )
    return (
        <>
            <Head>
                <title>Letworkbedone</title>
            </Head>
            <Header/>
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
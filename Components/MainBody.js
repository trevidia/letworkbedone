import Header from "./Header";
import CategoryNav from "./Nav/CategoryNav";
import Footer from "./Footer";
import Head from "next/head";

const MainBody = ({children}) => {
    return (
        <>
            <Head>
                <title>Letworkbedone</title>
            </Head>
            <Header/>
            <CategoryNav/>
            <div className={""}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainBody;
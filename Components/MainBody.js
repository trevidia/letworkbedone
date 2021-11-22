import Header from "./Header";
import CategoryNav from "./Nav/CategoryNav";
import Footer from "./Footer";

const MainBody = ({children}) => {
    return (
        <>
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
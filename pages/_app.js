import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import MainBody from "../Components/MainBody";

const MainApp = ({Component, pageProps}) => {
    return <MainBody>
            <Component {...pageProps}/>
        </MainBody>
}

export default MainApp
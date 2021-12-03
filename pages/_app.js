import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import MainBody from "../Components/MainBody";
import {UserProvider} from "../lib/UserContext";

const MainApp = ({Component, pageProps}) => {
    return <UserProvider>
        <MainBody>
            <Component {...pageProps}/>
        </MainBody>
    </UserProvider>
}

export default MainApp
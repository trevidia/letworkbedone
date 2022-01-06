import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import MainBody from "../Components/MainBody";
import {UserProvider} from "../lib/UserContext";
import {StrictMode} from "react";

const MainApp = ({Component, pageProps}) => {
    return <StrictMode>
        <UserProvider>
            <MainBody>
                <Component {...pageProps}/>
            </MainBody>
        </UserProvider>
    </StrictMode>
}

export default MainApp
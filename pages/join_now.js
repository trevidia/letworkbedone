import axios from "axios";
import {useRouter} from "next/router";
import {useEffect} from "react";

const JoinNow = ()=>{
    const router = useRouter();
     async function handleClick(){
         const {data} = await axios.get('http://localhost:8000/api/g_login');
         console.log(data.url)
         await router.push(data.url);

     }

    return (
        <>
            <h1>
                <button onClick={handleClick}>
                    click me
                </button>
            </h1>
        </>
    );
}

export default JoinNow
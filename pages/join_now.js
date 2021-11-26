import axios from "axios";
import {useRouter} from "next/router";
import {useEffect} from "react";

const JoinNow = ()=>{
    const router = useRouter();
     async function handleClick(){
            const data = await axios.get('http://localhost:8000/api/login?code=2321');
         console.log(data.data)
            await router.push(data.data[0].data);
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
import { useEffect, useState } from "react"

export default function Effect1(){
    const [count, setCount] = useState(0);
    useEffect(()=> {
        const id = setInterval(()=>{
            setCount((prev) => prev+ 1);
        },1000);
        return () => clearInterval(id);
    },[]);
    return(<>
        <h2>타이머 : {count}초</h2>
    </>)
}
import { useEffect, useState } from "react"

export default function UseEffect1(){
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const timer = setInterval(() => setSeconds((s) => s+1), 1000);
        return () => clearInterval(timer);
    },[]);
    return (
        <div>
            <p> 타이머 : {seconds}초</p>
        </div>
    )
}
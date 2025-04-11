import { useState } from "react"

export default function Props1(){
    const [msg, setMsg] = useState("안녕");
    
    return(<>
        <Child text = {msg} />
        <button onClick={() => setMsg("반가워!")}>메시지 바꾸기</button>
    </>);
}

function Child({text}) {
    return <p>자식이 받은 메시지 : {text}</p>
}

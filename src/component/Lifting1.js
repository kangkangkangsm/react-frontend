import { useState } from "react";

export default function Lifting1(){
    const [text, setText] = useState("");
    return(<>
       <Input setText={setText} />
       <Display text={text} />
    </>);
}

function Input({ setText }){
    return (
        <input onChange={(e) => setText(e.target.value)} placeholder="ㅋㅋㅋ"></input>
    );
}

function Display({ text }) {
    return <h3> 입력값 : {text}</h3>;
}
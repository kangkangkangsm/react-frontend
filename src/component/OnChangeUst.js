import { useState } from "react";

export default function OnChangeUst() {
    const [text, setText] = useState("");

    return (<>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="입력"></input>
        <p>입력한 값 : {text} </p>
    </>);
}

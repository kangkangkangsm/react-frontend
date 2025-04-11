import { useState } from "react";

export default function Array1(){
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = () => {
        if(input.trim()) {
            setItems([...items, input]);
            setInput("");
        }
    }

    return(<>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="할일"></input>
        <button onClick={addItem}>추가</button>
        <ui>{items.map((item,idx) => 
            <li key={idx}>{item}</li>
            ) }</ui>
    </>);

}
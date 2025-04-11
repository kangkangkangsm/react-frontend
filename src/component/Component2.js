import { useState } from "react";

export default function Component2() {
    const [name, setName] = useState('Mike');
    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
    }
    return (<>
        <h2>컴포넌트의 속성값(useState)</h2> 
        <h3>{name}</h3>
        <button onClick={changeName}> 클릭</button>
    </>);
}
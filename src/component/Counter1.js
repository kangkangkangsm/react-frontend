import { useState } from "react";

export default function Counter1(){
    const [count, setCount] = useState(0);
    return(<>
        <h2>{count}</h2>
        <button onClick={() => setCount(count +1)}>증가</button>
        <button onClick={() => setCount(count -1)}>감소</button>
        <button onClick={() => setCount(0)}>리셋</button>
    </>);
}
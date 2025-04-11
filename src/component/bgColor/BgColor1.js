import { useState } from "react";
import Todo1 from "../Todo/Todo1";

export default function BgColor1() {
    const [bgColor, setBgColor] = useState("White");

    return (
        <div
            style={{
                height : "100vh",
                backgroundColor : bgColor,
                padding : "20px"
            }}
        >
            <h2> 색상 변경기</h2>
            <button onClick={() => setBgColor("skyblue")}>하늘색</button>
            <button onClick={() => setBgColor("lightgreen")}>연두색</button>
            <button onClick={() => setBgColor("salmon")}>살몬색</button>
            <button onClick={() => setBgColor("white")}>초기화</button>
            <Todo1/>

        </div>
    )
}
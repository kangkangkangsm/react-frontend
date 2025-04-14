import { useState } from "react"
import Son1 from "./Son1"
import Timer1 from "../component/Timer1"
import BgColor1 from "../component/bgColor/BgColor1"
import Todo2 from "../component/Todo/Todo2"
import Todo1 from "../component/Todo/Todo1"

export default function Home1(){
    return(
    <div>
        <h3>홈페이지</h3>

        <hr></hr>
        <Son1 />
        <hr></hr>
        <Timer1 />
        <hr></hr>
        <BgColor1 />
        <hr></hr>
        <Todo2 />
        <Todo1 /> 
    </div> 
    )
}
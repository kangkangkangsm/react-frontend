import { Link, Outlet } from "react-router-dom";

export default function Route1() {
    return (
        <div>
            <h2> 라우트 1</h2>
            <nav>
                <div><Link to="route1_1">라우트1_1</Link></div>
                <div><Link to="route1_2">라우트1_2</Link></div>
                <div><Link to="../">돌아가기</Link></div>
            </nav>
            <Outlet />
        </div>
    )
}
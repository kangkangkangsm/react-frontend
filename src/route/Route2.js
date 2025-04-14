import { Link, Outlet } from "react-router-dom";

export default function Route2() {
    return (
        <div>
        <h2> 라우트 2</h2>
        <nav>
            <div><Link to="route2_1">라우트2_1</Link></div>
            <div><Link to="../">돌아가기</Link></div>
        </nav>
        <Outlet />
        </div>
    )
}
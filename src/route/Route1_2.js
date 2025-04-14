import { Link, Outlet } from "react-router-dom";

export default function Route1_2() {
    return (
        <div>
        <h2> 라우트 1_2</h2>
        <nav>
            <div><Link to="../">돌아가기</Link></div>
        </nav>
        <Outlet />
        </div>
    )
}
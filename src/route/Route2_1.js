import { Link, Outlet } from "react-router-dom";

export default function Route2_1() {
    return (
        <div>
           <h2> 라우트 2_1</h2>
        <nav>
            <div><Link to="../">돌아가기</Link></div>
        </nav>
            <Outlet />
        </div>
    );
}
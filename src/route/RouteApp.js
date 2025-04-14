import { Link, Outlet } from "react-router-dom";

export default function RouteApp() {
    return (
        <div>
            <h2> 라우트 </h2>
            <nav>
                <div><Link to="route1">라우트1</Link></div>
                <div><Link to="route2">라우트2</Link></div>
            </nav>
            <Outlet />
        </div>
    )
}
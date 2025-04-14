import { Link, Outlet } from "react-router-dom";

export default function community(){
    return(
        <div>
            <h2> 커뮤니티 메인 </h2>
            <nav>
                <Link to="notice">공지사항</Link>
            </nav>
            <Outlet />
        </div>
    )
}
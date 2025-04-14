import { Link } from "react-router-dom";

export default function Notice() {
    return (
        <div>
            <h3>공지사항 목록</h3>
            <ul>
                <li><Link to="1">공지사항 1</Link></li>
                <li><Link to="2">공지사항 2</Link></li>
            </ul>
        </div>
    );
}

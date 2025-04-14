import { useParams } from "react-router-dom"

export default function NoticeDetail(){
    const { id } = useParams(); 
    return (
        <div>
            공지사항 상세 페이지 (ID : {id})
        </div>
    )
}
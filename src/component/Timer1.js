import { useEffect, useState } from "react"

export default function Timer1(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      // 컴포넌트 종료 시 타이머 정리 (clean up)
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div style={{ padding: "20px", fontSize: "2rem" }}>
        <h2></h2>
        <p>{time}</p>
      </div>
    );
}
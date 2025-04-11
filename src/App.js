import './App.css';
import BgColor1 from './component/bgColor/BgColor1';
import Timer1 from './component/Timer1';
import Todo1 from './component/Todo/Todo1';
import Todo2 from './component/Todo/Todo2';

function App() {
  
  return (
    <div className='App'>
      <hr></hr>
      <Timer1 />
      <hr></hr>
      <BgColor1 />
      <hr></hr>
      <Todo2 />
      <Todo1 />
    </div>
  );
}

export default App;

































// const [members, setMembers] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/members')
  //     .then(response => {
  //       setMembers(response.data);
  //     })
  //     .catch(error => {
  //       console.error('에러 발생!', error);
  //     });
  // }, []);

  // return (
  //   <div style={{ padding: '20px' }}>
  //     <h2> 리액트 공부 </h2>
  //     <hr></hr>
  //     <h3> 1. 백엔드 데이터 불러오기</h3>
  //     <ul>
  //       {members.map(member => (
  //         <li key={member.id}>
  //           {member.name} ({member.email})
  //         </li>
  //       ))}
  //     </ul>
  //     <hr></hr>
  //     <h3>2.</h3>
  //   </div>
  // );
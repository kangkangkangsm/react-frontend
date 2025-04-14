import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home1 from './home/Home1';
import About1 from './home/About1';
import Community from './home/Community';
import NoticeDetail from './home/NoticeDetail';
import Notice from './home/Notice';
import TodoApp from './todo/TodoaApp';
import Filter1 from './filter/Filter1';
import RouteApp from './route/RouteApp';
import Route1 from './route/Route1';
import Route2 from './route/Route2';
import Route1_1 from './route/Route1_1';
import Route1_1_1 from './route/Route1_1_1';
import Route1_2 from './route/Route1_2';
import Route2_1 from './route/Route2_1';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <Link to="/">홈</Link> | <Link to="/about">소개</Link> | <Link to="/community"> 커뮤니티</Link>
          | <Link to="/todo">TODO</Link> | <Link to="/filter">Filter</Link> | <Link to="/route">라우트</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home1 />}/>
          <Route path="/about" element={<About1 />}/>
          <Route path="/community" element={<Community />}>
            <Route path="notice" element={<Notice />}/>
            <Route path="notice/:id" element={<NoticeDetail />}/> 
          </Route>
          <Route path='/todo' element={<TodoApp />}/>
          <Route path='/filter' element={<Filter1 />}/>
          <Route path='/route' element={<RouteApp />}>
            <Route path='route1' element={<Route1 />}>
              <Route path='route1_1' element={<Route1_1 />}>
                <Route path='route1_1_1' element={<Route1_1_1 />}/>
              </Route>
              <Route path='route1_2' element={<Route1_2 />}/>
            </Route>
            <Route path='route2' element={<Route2 />}>
              <Route path='route2_1' element={<Route2_1 />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
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
import { useState } from "react"

export default function TodoApp(){
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const clickAdd = () => {
        if(todo.trim() === '') return;

        const newItem = {id: Date.now(), text:todo};
        setTodoList([...todoList, newItem]);
        setTodo('');
    };

    const clickDelete = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요"
            />

            <button onClick={clickAdd}> 추가</button>

            <ul>
                {todoList.map(item => (
                  <li key={item.id}>
                    {item.text}
                    <button onClick={() => clickDelete(item.id)}>삭제</button>
                  </li>  
                ))}
            </ul>
        </div>
    )
}
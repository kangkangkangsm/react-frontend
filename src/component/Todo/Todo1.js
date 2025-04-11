import { useState } from "react"

export default function Todo1(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
  
    const handleAdd = () => {
      if (input.trim() === "") return;
      const newTodo = {
        id: Date.now(),
        text: input,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    };
  
    const handleToggle = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    };
  
    const handleDelete = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h2> DAILY</h2>
  
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
  
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => handleToggle(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.done ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
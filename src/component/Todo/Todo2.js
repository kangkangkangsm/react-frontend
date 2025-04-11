import { useState } from "react";

export default function Todo2(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const todoAdd = () => {
        if(input.trim === "") return;
        const newTodo = {
            id : Date.now(),
            text : input,
            done : false
        };
        setTodos([...todos, newTodo]);
        setInput("");
    }

    const todoDone = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id? {...todo, done: !todo.done} : todo
            )
        );
    };

    const todoDelete = (id) => {
        setTodos(
            todos.filter((todo)=> todo.id !== id)
        );
    }

   return(
   <div style={{padding : "30px"}}>
        <h2> TODOLIST</h2>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="할 일을 입력하세요"></input>
        <button onClick={todoAdd}>추가</button>
        <p> 입력중인값 : {input} </p>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}
                onClick={()=> todoDone(todo.id)} 
                style={{
                    cursor: "pointer",
                    textDecoration: todo.done ? "line-through" : "none",
                    color: todo.done ? "#aaa" : "#000",
                  }}
                ><span>{todo.text} - {todo.id}</span>
                <button onClick={() => todoDelete(todo.id)}> X</button>
                </li>
            ))}
        </ul>
   </div>
   ); 
}
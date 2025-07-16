import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import {useState} from "react";


const App = () => {

    const [todoList, setTodoList] = useState([
        {id: 1, name: "Learning React"},
        {id: 2, name: "Watching Youtube"},
    ])
    const data = {
        name: "Duy Can",
        age: 35,
        address: "Dong Thap",
        country: "Vietnam",
    }
    const addNewTodo = (name) => {
        const newTodo = {
            id: getRndInteger(1, 1000),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }
    const getRndInteger=(min, max)=> {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    return (
        <div className="todo-container">
            <div className="todo-title"> Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}/>
            <TodoData
                data={data}
                todoList={todoList}

            />
        </div>
    )
}

export default App

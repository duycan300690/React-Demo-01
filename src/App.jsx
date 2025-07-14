import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";

const App = () => {
    const data = {
        name: "Duy Can",
        age: 35,
        address: "Dong Thap",
        country: "Vietnam",
    }
    const addNewTodo = (name) => {
        alert(`Call me: ${name}`);
    }
    return (
        <div className="todo-container">
            <div className="todo-title"> Todo List</div>
            <TodoNew addNewTodo={addNewTodo}/>
            <TodoData
                data={data}/>
        </div>
    )
}

export default App

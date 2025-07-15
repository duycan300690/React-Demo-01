import {useState} from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("");

    const {addNewTodo} = props;
    //addNewTodo("Duy Can")
    const handleClick = () => {
        alert(`Click me ${valueInput}`)
    }
    const handleOnChange = (name) => {
        // console.log("handleOnChange", name)
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                   onChange={(event) => {
                       handleOnChange(event.target.value)
                   }}/>
            <button onClick={handleClick}> Add</button>
            <div>
                {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;
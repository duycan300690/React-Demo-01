import {useState} from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("");

    const {addNewTodo} = props;
    //addNewTodo("Duy Can")
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
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
                   }} value={valueInput}/>
            <button onClick={handleClick}> Add</button>
            <div>
                {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;
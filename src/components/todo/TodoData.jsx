const TodoData = (props) => {
    const {name, age, address, country} = props.data;
    console.log({props})
    const {todoList} = props
    return (

        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>Age: {age}</div>
            <div>Address: {address}</div>
            <div>Country: {country}</div>
            <div>
                {
                    JSON.stringify(todoList)
                }
            </div>
        </div>
    );
}

export default TodoData;
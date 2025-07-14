const TodoData = (props) => {
    const {name, age, address, country} = props.data;
    return (

        <div className="todo-data">
            <div>My name is: {props.data.name}</div>
            <div>Age: {props.data.age}</div>
            <div>Address: {props.data.address}</div>
            <div>Country: {props.data.country}</div>
        </div>
    );
}

export default TodoData;
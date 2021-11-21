import Header from "./Header";

function AddTask({inputText, setInputText, tasks, setTasks}){
    const getValue = (event) => {
        setInputText(event.target.value);
    }

    const taskSubmit = (event, value) => {
        event.preventDefault();
        setTasks([...tasks, {task: inputText, done: false, id: Math.round(Math.random()*10000)}]);
        setInputText("");
    }
    return (
        <>
            <div className="task-container">
                <Header/>
                <div className="add-task-component">
                    <form onSubmit={taskSubmit}>
                        <input
                            type="text"
                            onChange={getValue}
                            name="task"
                            value={inputText}
                            placeholder="Type any stuff..."
                        />
                        <button className="btn btn--long btn--main ml-10">
                            <i className="fas fa-plus"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTask;
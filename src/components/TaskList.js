import Task from "./Task"

function TaskList({taskList, changeTasks}) {
    const clearCompleted = () => {
        changeTasks(taskList.filter((item) =>!item.done))
    }

    return (
        <>
            <div className="task-list mt-30">
                {
                    taskList.map(task => (
                        <Task key={task.id} task={task.task} taskList={taskList} taskItem={task} changeTasks={changeTasks}/>
                    ))
                }
                <button className="btn btn--long btn--warning btn--shadow mt-20" onClick={clearCompleted}>
                    <i className="fas fa-broom"></i> Clear Completed
                </button>
            </div>
        </>
    );
}

export default TaskList;
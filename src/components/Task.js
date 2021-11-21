function Task({task, taskList, taskItem, changeTasks}){
    const finishIt = () => {
        changeTasks(taskList.map((item) => {
            if(item.id === taskItem.id){
                return {
                    ...item, done: !item.done
                }
            }
            return item;
        }))
    }
    return (
        <div className="task-list__item">
            <div className="item__status">
                <div className={taskItem.done ? "status-done" : "status-ongoing"}></div>
            </div>
            <div className={taskItem.done ? "item__description done" : "item__description"}>{task}</div>
            <div className="item__process">
                <button className="btn btn--main" onClick={finishIt}>
                    <i className="fas fa-exchange-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Task;
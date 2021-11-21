import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
import {useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
    <h1>{inputText}</h1>
      <AddTask inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks}/>
      <TaskList taskList={tasks} changeTasks={setTasks}/>
    </>
  );
}

export default App;

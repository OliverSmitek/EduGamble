import {useState} from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import RenderOfSum from "../RenderOfSum";


function Todolist () {
    const [tasks, setTasks] = useState(
        [
        ]
    )




    let [sum,setSum] = useState(0);

    const addTask = (newTask) => {
        let newId = Math.max(...tasks.map(task => task.id)) + 1;
        if (newId === -Infinity) {
            newId = 0;
        }
        newTask.id = newId;
        setTasks([...tasks, newTask]);
        setSum(sum + parseInt( newTask.description) );
    }

    const removeTask = (id) => {
        setSum(sum - tasks.filter(task => task.id === id)[0].description);
        setTasks(tasks.filter((task) => task.id !== id));

    }

    return (
        <div className="App container p-5">
            <Header text="To-do List" className="mb-3 mt-3"/>
            <AddTask onSubmit={addTask} />
            <Tasks tasks={tasks} Delete={removeTask} />
            <RenderOfSum sum={sum} />

        </div>
    );
}

export default Todolist;
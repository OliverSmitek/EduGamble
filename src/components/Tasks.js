import Task from './Task';

function Tasks({tasks, Delete}) {
    if (tasks.length !== 0) {
        return (
            <div className="rounded-3 p-3">
                {tasks.map((task) => (
                    <Task key={task.id} Name={task.name} Description={task.description} Id={task.id} Delete={Delete}/>
                ))}
            </div>
        )
    } else {
        return (<h3>Žádné úlohy k zobrazení.</h3>)
    }
}
export default Tasks;
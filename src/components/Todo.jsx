import React, { useState } from "react";



const Todo = ({ task, id, deleteTodo, editTodo}) => {
    const [edit, setEdit] = useState(false)
    const [newTask, setNewTask] = useState(task)

    const editTask = e => setNewTask(e.target.value)

    const cancelEdit = () => setEdit(edit => !edit)
    const saveEdit = () => null
    return (
        <div>
            {task}
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => setEdit(e => !e)}>Edit</button>
            {
                edit ? 
                <section>
                    <input type="text" value={newTask} onChange={editTask}/>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </section> :
                null
            }
        </div>
    )
}

export default Todo

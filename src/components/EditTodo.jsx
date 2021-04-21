import React, { useState } from 'react'

const EditTodo = ({ currentTask, id, edit, setActive}) => {

    const [newTask, setNewTask] = useState(currentTask)

    const handleNewTask = (e) => setNewTask(e.target.value)

    const saveEdit = () => {
        edit(id, newTask)
        setActive(a => !a)
    }
    const cancelEdit = () => setNewTask(currentTask)
    return (
        <section>
            <input type="text" value={newTask} onChange={handleNewTask}/>
            <button onClick={saveEdit}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </section>
    )
}

export default EditTodo

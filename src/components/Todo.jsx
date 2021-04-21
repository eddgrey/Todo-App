import React, { useState } from "react";

const Todo = ({ description, id, priority, deleteTodo, editTodo }) => {
    const [edit, setEdit] = useState(false)
    const [newTask, setNewTask] = useState(description)

    const editTask = e => setNewTask(e.target.value)

    const cancelEdit = () => {
        setEdit(edit => !edit)
        setNewTask(description)
    }

    const saveEdit = (e) => {
        e.preventDefault()
        editTodo(id, newTask, e.target[1].value)
        setEdit(edit => !edit)
    }

    return (
        !edit ?
        <div className="p-4 mb-2 felx flex-row justify-center border border-red-500">
            <span>{priority}</span>
            {description}
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => setEdit(e => !e)}>Edit</button>
        </div>
        :
        <form onSubmit={saveEdit}>
            <input type="text" value={newTask} onChange={editTask}/>
            <div>
                <label htmlFor="priority">Priority</label>
                <select id='priority' name='priority'>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </div>
            <button type="submit">Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </form> 

    )
}

export default Todo

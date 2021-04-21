import { useState } from 'react'
import { nanoid } from "nanoid"

const Form = ({ todos, setTodos, visible}) => {
    const [task, setTask] = useState("add tarea")
    const handleTask = (e) => setTask(e.target.value)

    const addTodo = (e) => {
        const priority = e.target[1].value
        e.preventDefault()
        setTodos([...todos, { id: nanoid(3), priority ,description: task}])
        visible(false)
    }

    return (
        <form onSubmit={addTodo}>
            <input type="text" value={task} onChange={handleTask}/>
            <div>
                <label htmlFor="priority">Priority</label>
                <select id='priority' name='priority'>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form

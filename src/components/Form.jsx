import { useState } from 'react'
import { nanoid } from "nanoid"

const Form = ({ todos, setTodos, visible, action, currentTask="",id}) => {
    const [task, setTask] = useState(currentTask)
    const handleTask = (e) => setTask(e.target.value)

    const addTodo = (priority) => {
        console.log("Add")
        setTodos([...todos, { id: nanoid(3), priority ,description: task}])
        visible(false)
    }

    const editTodo = (idToEdit, newDescription, newPriority) => {
        console.log("Edit")
        const newTodos = todos.map( todo => {
            if (todo.id === idToEdit){
                return {...todo, description: newDescription, priority: newPriority}
            }else{
                return todo
            }
        })
        setTodos(newTodos)
    }

    
    const cancel = () => {
        visible(false)
        setTask(currentTask)
    }

    const accept = (e) => {
        const priority = e.target[1].value
        e.preventDefault()
        if (action === "add"){
            addTodo(priority)
        }else if (action === "edit"){
            editTodo(id, task, priority)
            visible(false)
        }
    }

    const button = "px-6 py-1 border rounded-xl focus:outline-none focus:ring"

    return (
        // <form onSubmit={addTodo}>
        //     <input type="text" value={task} onChange={handleTask}/>
        //     <div>
        //         <label htmlFor="priority">Priority</label>
        //         <select id='priority' name='priority'>
        //             <option value='high'>High</option>
        //             <option value='medium'>Medium</option>
        //             <option value='low'>Low</option>
        //         </select>
        //     </div>
        //     <button type="submit">Add</button>
        // </form>
        <form onSubmit={accept} className="flex flex-col p-2">
        <input type="text" value={task} onChange={handleTask} className="border border-gray-600 focus:outline-none p-2"/>
        <div>
            <label htmlFor="priority">Priority</label>
            <select id='priority' name='priority'>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
            </select>
        </div>
        <div className="flex flex-row justify-around">
            <button type="submit" className=" px-6 py-1 border rounded-xl bg-green-500 focus:outline-none focus:ring focus:bg-green-400 foucus:bg-green-400"><i className="far fa-check-circle"></i></button>
            <button onClick={cancel} className={`${button} bg-red-500 focus:bg-red-400`}><i className="far fa-times-circle"></i></button> 
        </div>
    </form>
    )
}

export default Form

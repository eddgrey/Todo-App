import { useState } from 'react'
import { nanoid } from "nanoid"

const Form = ({ todos, setTodos, visible, action, currentTask="",id, color, category}) => {
    const [task, setTask] = useState(currentTask)
    const [emptyTask, setEmptyTask] = useState(false)
    const [emptyDate, setEmptyDate] = useState(false)

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const addTodo = (priority, date, category) => {
        setTodos([...todos, { id: nanoid(3), priority ,description: task, date, category}])
        visible(false)
    }

    const editTodo = (idToEdit, newDescription, newPriority, newDate) => {
        const newTodos = todos.map( todo => {
            if (todo.id === idToEdit){
                return {...todo, description: newDescription, priority: newPriority, date: newDate}
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
        const date = e.target[2].value
        e.preventDefault()
        
        if(task.length === 0 || date.length === 0){
            setEmptyTask(task.length === 0)
            setEmptyDate(date.length === 0)
        }else{
            if (action === "add"){
                addTodo(priority, date, category)
            }else if (action === "edit"){
                editTodo(id, task, priority, date)
                visible(false)
            }
        }
    }
    const categoryColor = color === "bg-orange-400"? "border-orange-700" : color === "bg-green-400"? "border-green-700" : "border-blue-700"

    return (

        <form onSubmit={accept} className={`form--todo ${categoryColor}`}>
            <input type="text" value={task} onChange={handleTask} className={`border ${categoryColor} focus:outline-none p-2 mb-2`}/>

            {emptyTask 
                ? <p className="text-red-600 text-sm italic">*Obligatory</p> 
                : null}
            <div>
                <label htmlFor="priority" className="mr-2">Priority:</label>
                <select id='priority' name='priority'>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </div>
            <input type="date" className={`border ${categoryColor} focus:outline-none p-2 mt-2`}/>

            {   emptyDate 
                ? <p className="text-red-600 text-sm italic">*Obligatory</p>
                : null
            }
            
            <div className="flex flex-row justify-around my-4">
                <button type="submit" className="button bg-green-500  focus:bg-green-400">Accept <span className="ml-2">
                    <i className="far fa-check-circle"></i>
                    </span></button>
                <button onClick={cancel} className={`button bg-red-500 focus:bg-red-400 py-1`}>Cancel <span className="ml-2"><i className="far fa-times-circle"></i></span></button> 
            </div>
        </form>
    )
}

export default Form

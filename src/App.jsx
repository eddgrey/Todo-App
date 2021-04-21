import { nanoid } from 'nanoid'
import { useState } from 'react'
import Todo from './components/Todo'

const App = () => {
    const [task, setTask] = useState("agregar tarea")
    const [todos, setTodos] = useState([])

    const handleTask = (e) => setTask(e.target.value)

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, { id: nanoid(3), description: task}])
    }

    const deleteTodo = idToDelete => (
        setTodos(todos.filter(todo => todo.id !== idToDelete))
    )

    const editTodo = (idToEdit, newDescription) => (
        setTodos(todos.map(({id, description}) => id === idToEdit? description = newDescription : description))
    )
    

    return (
        <main>
            <form>
                <input type="text" value={task} onChange={handleTask}/>
                <button type="submit" onClick={addTodo}>Add</button>
            </form>
            <p>Task: {todos.length}</p>
            <section>
                {todos.map(({ id, description}) => <Todo key={id} id={id} task={description} deleteTodo={deleteTodo} editTodo={editTodo}/>)}
            </section>
        </main>
    )
}

export default App

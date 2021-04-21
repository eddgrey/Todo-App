import { useState } from 'react'
import Board from './components/Board'

const App = () => {
    // const [task, setTask] = useState("agregar tarea")
    // const [todos, setTodos] = useState([])

    // const handleTask = (e) => setTask(e.target.value)

    return (
        <main>
            <Board />
            {/* <section>
                {todos.map(({ id, description}) => <Todo key={id} id={id} task={description} deleteTodo={deleteTodo} editTodo={editTodo}/>)}
            </section> */}
        </main>
    )
}

export default App

import {useState} from 'react'
import Category from './Category'

const Board = () => {

    const initalState = [
        {id: "fjaslk", description: "open Todo App", priority: "medium", date: "today", category: "ToDo"},
        {id: "fk2", description: "leer pdf doing...", priority: "low", date: "fdas", category: "Doing"},
        {id: "fk3", description: "leer pdf done", category:"Done"},
    ]

    const [todos, setTodos] = useState(initalState)

    const handleChangeCategory = (id) => {
        console.log("Change!!")
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                const newCategory = todo.category === "ToDo"? "Doing" : "Done"
                return {...todo, category: newCategory}
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <section className="flex flex-row justify-around flex-wrap md:flex-nowrap">
        <Category 
            title={"ToDo"} 
            todos={todos} 
            setTodos={setTodos} 
            handleChangeCategory={handleChangeCategory}  
        /> 

        <Category
            title={"Doing"} 
            todos={todos} setTodos={setTodos} 
            handleChangeCategory={handleChangeCategory}
        /> 

        <Category 
            title={"Done"} 
            todos={todos} 
            setTodos={setTodos} 
            handleChangeCategory={handleChangeCategory}    
        /> 
        </section>
    )
}

export default Board

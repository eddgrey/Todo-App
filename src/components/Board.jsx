import {useState} from 'react'
import Category from './Category'

const Board = () => {

    const initalState = [
        {id: "fjaslk", description: "Read pdf", priority: "low", category: "ToDo"},
        {id: "fk2", description: "Learn React", priority: "high", category: "Doing"},
        {id: "fk3", description: "Open Todo App", priority: "medium", date: "today", category:"Done"},
    ]

    const [todos, setTodos] = useState(initalState)

    const handleChangeCategory = (id) => {
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

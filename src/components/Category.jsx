import React, { useState } from 'react'
import Form from './Form'
import Todo from "./Todo"

const Category = ({title, todos, setTodos, handleChangeCategory}) => {
    
    const [visibleForm, setVisibleForm] = useState(false)
    const [hidden, setHidden] = useState(false)

    const todosCount = () => todos.filter(todo => todo.category === title).length

    const categoryColor = title === "ToDo" ? "bg-orange-400" : title === "Doing" ? "bg-green-400" : "bg-blue-400"

    return (
        <section className={`flex flex-col m-4 border w-3/4 px-2 md:w-1/3 lg:w-1/4`}>
            <header className={`categoryHeader ${categoryColor}`}>
                <h3 className="text-lg font-bold">{title}</h3>
                <p>Tasks: {todosCount()}</p>
                <button onClick={() => setHidden(v => !v)} className="focus:outline-none">
                    <i className="fas fa-eye-slash"/>
                </button>
            </header>
            <div>
                {visibleForm? 
                    <Form todos={todos} setTodos={setTodos} action="add" visible={setVisibleForm} color={categoryColor} category={title}/> 
                : 
                <button className="button--add" onClick={() => setVisibleForm(true)}>
                    <span className="mr-4">
                        <i className="fas fa-plus"/>
                    </span>
                    Add a item 
                </button>}

            </div>
            {!hidden ?
                <div>
                    {todosCount() > 0 ? 
                        todos.filter(todo => todo.category === title).map(
                            ({id, description, priority, date}) => (
                                <Todo 
                                    key={id} id={id} 
                                    description={description} 
                                    priority={priority} date={date} 
                                    todos={todos} setTodos={setTodos}
                                    category={title}
                                    color={categoryColor}
                                    handleChangeCategory={handleChangeCategory}
                                />
                                )
                            )
                        :
                        <p className="text-center">Empty</p>
                    }
                </div>
                    :
                null
            }
        </section>
    )
}

export default Category

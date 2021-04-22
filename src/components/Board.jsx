import React from 'react'
import Category from './Category'

const Board = () => {
    return (
        <section className="flex flex-row bg-gray-200 justify-around">
            <Category title={"To do"}/>
            <Category title={"Doing"}/>
            <Category title={"Done"}/>
        </section>
    )
}

export default Board

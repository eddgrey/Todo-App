import Board from './components/Board'

const App = () => {

    return (
        <main className="bg-gray-200 max-w-screen min-h-screen">
            <header className=" bg-gray-700 text-gray-50 p-4 md:py-6 text-center">
                <h1 className="text-4xl font-bold">Todo App</h1>
            </header>
            <Board/>
        </main>
    )
}

export default App

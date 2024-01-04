import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>
        React Todo-List
        </h1>
        <Header/>
      </div>
    </>
  )
}

export default App

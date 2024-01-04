import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-3xl p-10 font-bold text-blue-400'>
        React Todo-List
        </h1>
        <Header />
        <div className='w-[350px] flex items-center flex-col p-10'>
          <input type='text' className='w-full'/>
          <button type='submit' className='w-full bg-blue-950 p-1 m-3 text-white'>ADD</button>
        </div>
      </div>
    </>
  )
}

export default App

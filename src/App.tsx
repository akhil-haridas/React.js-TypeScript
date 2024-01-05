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
        <form className='w-[350px] flex items-center flex-col p-10'>
          <input type='text' className='w-full'/>
          <button type='submit' className='w-full bg-blue-950 p-1 m-3 text-white'>ADD</button>
        <section className='h-52 overflow-auto w-full '>
          <div className='flex justify-between py-2 border border-slate-200 pl-2 mb-2 mr-1'>
            <p className='text-white'>JavaScript</p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </button>
          </div>
        </section>
        </form>
      </div>
    </>
  )
}

export default App

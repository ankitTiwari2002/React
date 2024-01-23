
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

     <Card userName="Ankit" btn="visit here"/>
     <Card userName="Akash"btn="view here"/>

    </>
  )
}

export default App

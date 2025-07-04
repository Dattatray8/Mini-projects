import { useState } from 'react'
import './App.css'
import AllCards from './components/AllCards'
import data from './utils/data'

function App() {
  const [val, setVal] = useState('')
  const [currentData, filterData] = useState(data)
  return (
    <div className='flex flex-col justify-center gap-7 items-center min-h-screen'>
      <h1 className='text-4xl font-bold p-5'>Aalu lelo aalu lelo</h1>
      <div className='flex w-full justify-center items-center'>
        <input type="text" placeholder='kya mangta ?' onChangeCapture={(e) => {
          setVal(e.target.value);
          filterData(data.filter(card => {
            return card.title.toLowerCase().includes(val.toLowerCase())
          }))
        }} className='border py-1 px-3 rounded-l-3xl focus:outline-none' />
        <button onClick={() => {
          filterData(data.filter(card => {
            if (card.title.toLowerCase().includes(val.toLowerCase())) {
              return card
            }
          }))
        }} className='bg-[#181717] text-white py-[5px] rounded-r-3xl px-3 hover:bg-[#181717ce]'>lelo</button>
      </div>
      <AllCards cards={currentData} />
    </div>
  )
}

export default App
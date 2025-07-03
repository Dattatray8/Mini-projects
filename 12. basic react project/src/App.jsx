import { useState } from 'react'
import './App.css'
import AllCards from './components/AllCards'
import data from './utils/data'

function App() {
  const [val, setVal] = useState('')
  const [currentData, filterData] = useState(data)
  return (
    <>
      <h1>Aalu lelo aalu lelo</h1>
      <div>
        <input type="text" placeholder='kya mangta ?' onChangeCapture={(e) => {
          setVal(e.target.value);
          filterData(data.filter(card => {
            return card.title.toLowerCase().includes(val.toLowerCase())
          }))
        }} />
        <button onClick={() => {
          filterData(data.filter(card => {
            if (card.title.toLowerCase().includes(val.toLowerCase())) {
              return card
            }
          }))
        }}>lelo</button></div>
      <AllCards cards={currentData} />
    </>
  )
}

export default App
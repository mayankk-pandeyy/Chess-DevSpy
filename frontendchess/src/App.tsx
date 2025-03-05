import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Game from './components/Game'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </div>
  )
}

export default App

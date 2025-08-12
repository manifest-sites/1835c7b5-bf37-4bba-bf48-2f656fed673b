import { useState } from 'react'
import Monetization from './components/monetization/Monetization'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Monetization>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Fun Button Clicker!</h1>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-purple-600 mb-2">{count}</div>
            <p className="text-gray-600">Clicks</p>
          </div>
          
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-110 transition-all duration-200 active:scale-95"
          >
            Click Me! 🎉
          </button>
        </div>
      </div>
    </Monetization>
  )
}

export default App
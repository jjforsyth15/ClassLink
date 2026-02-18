import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <h1>Home</h1>
  )
}

function App() {
  return (
    <div>
      <h1>ClassLink</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
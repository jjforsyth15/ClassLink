import { useState } from "react"

function App() {
  const [message, setMessage] = useState<string>("")

  const testApi = async () => {
    try {
      const res = await fetch("/api/v1/hello")
      const data = await res.json()
      setMessage(data.message)
    } catch {
      setMessage("API call failed")
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>ClassLink</h1>

      <button onClick={testApi}>Test Backend</button>

      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  )
}

export default App
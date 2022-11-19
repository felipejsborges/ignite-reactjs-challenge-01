import './global.styles.css'
import { Home } from "./pages/Home"
import { makeServer } from "./server.js"

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App

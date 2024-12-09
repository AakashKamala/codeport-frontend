import { Route, Routes } from "react-router-dom"
import Create from "./components/Create"
import Port from "./components/Port"
import Logo from "./components/Logo"
import Home from "./Home"
import Ques from "./Ques"
import Deploy from "./Deploy"

const App = () => {
  return (
    <div>
      <Logo />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/port" element={<Port />} />
        <Route path='/home' element={<Home />} />
        <Route path='/deploy' element={<Deploy />} />
        <Route path='/:id' element={<Ques />} />
      </Routes>
    </div>
  )
}

export default App
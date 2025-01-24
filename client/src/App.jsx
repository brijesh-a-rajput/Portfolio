import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './assets/Home'
import Contact from './assets/Contact'
import About from './assets/About'
import Skills from './assets/Skills'
import Projects from './assets/Projects'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
}

export default App

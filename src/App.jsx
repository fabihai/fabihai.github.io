import { Link } from 'react-router-dom'
import '../styles.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'

function App() {
    return (
        <div className="content">
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default App;
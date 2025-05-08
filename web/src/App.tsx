import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                {/*<Route path="/dj" element={<DJPage />} />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </Layout>
    )
}

export default App

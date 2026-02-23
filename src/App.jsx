import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SemiconductorServices from './pages/SemiconductorServices'
import ITServices from './pages/ITServices'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])
    return null
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/semiconductor-services" element={<SemiconductorServices />} />
                        <Route path="/it-services" element={<ITServices />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App

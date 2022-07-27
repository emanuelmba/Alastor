import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './data/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/Scroll'
import Catalogo from './pages/Catalogo'
import Libro from './pages/Libro'
import Autores from './pages/Autores'
import Contacto from './pages/Contacto'

function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <div className='site'>
          <div className='container'>
            <Header />
            <Routes>
              <Route exact path='/' element={<Catalogo />} />
              <Route path='/:url' element={<Libro />} />
              <Route path='/autores' element={<Autores />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  )
}

export default App

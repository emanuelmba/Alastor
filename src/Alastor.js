import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './data/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/Scroll'
import Catalogo from './pages/Catalogo'
import Libro from './pages/Libro'
import Autores from './pages/Autores'
import Autor from './pages/Autor'
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
              <Route path='/*' element={<Catalogo />} />
              <Route path='/catalogo' element={<Catalogo />} />
              <Route path='/catalogo/:url' element={<Libro />} />
              <Route path='/autores' element={<Autores />} />
              <Route path='/autores/:url' element={<Autor />} />
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

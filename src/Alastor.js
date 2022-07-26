import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './data/Content'
import BookData from './data/BookData'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalogo from './components/Catalogo'
import Autores from './components/Autores'
import Contacto from './components/Contacto'

function App() {
  const [books] = useState(BookData)

  return (
    <ContentProvider>
      <Router>
        <div className='site'>
          <div className='container'>
            <Header />
            <Routes>
              <Route exact path='/' element={<Catalogo books={books} />} />
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

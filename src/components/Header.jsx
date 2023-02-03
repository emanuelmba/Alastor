import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Content from '../data/Content'

function Header() {
  const { banner } = useContext(Content)

  const headerImg = {
    backgroundImage: banner,
  }

  return (
    <header style={headerImg}>
      <Link to='/'>
        <img className='logo fade' src={'../imgs/logo.png'} alt='Editorial Alastor' />
      </Link>
      <nav>
        <Link to='/catalogo'>
          <button className='fraktur'>Catálogo</button>
        </Link>
        <Link to='/autores'>
          <button className='fraktur'>Autores</button>
        </Link>
        <Link to='/contacto'>
          <button className='fraktur'>Contacto</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header

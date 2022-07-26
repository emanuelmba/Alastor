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
      <div>
        <Link to='/'>
          <img className='logo fade' src={'../imgs/logo.png'} alt='Editorial Alastor' />
        </Link>
      </div>
      <nav>
        <Link to='/'>
          <button className='nav-btn'>Catálogo</button>
        </Link>
        <Link to='/autores'>
          <button className='nav-btn'>Autores</button>
        </Link>
        <Link to='/contacto'>
          <button className='nav-btn'>Contacto</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header

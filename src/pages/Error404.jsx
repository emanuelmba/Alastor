import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import CatalogueItem from '../components/CatalogueItem'

function Catalogo() {
  const { setBanner, books } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-cat.jpg)')
  }, [])

  document.title = 'Editorial Alastor | Error 404'

  return (
    <main className='cat'>
      <div className='error social'>
        <p className='e404'>ERROR 404</p>
        <img className='e404' src='../imgs/ea.png' alt='Editorial Alastor' />
        <h3>
          La página o archivo buscados no existen o han cambiado de ubicación.
          <br />
          Puede probar nuevamente consultando nuestro catálogo:
        </h3>
      </div>
      {books.map((item) => (
        <CatalogueItem key={item.id} item={item} />
      ))}
    </main>
  )
}

export default Catalogo

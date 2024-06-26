import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import CatalogueItem from '../components/CatalogueItem'

function Catalogo() {
  const { setBanner, books } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-cat.jpg)')
  }, [])

  document.title = 'Editorial Alastor'

  return (
    <main id='catalogue'>
      {books.map((item) => (
        <CatalogueItem key={item.id} item={item} />
      ))}
      <div className='filler'></div>
      <div className='filler'></div>
    </main>
  )
}

export default Catalogo

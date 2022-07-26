import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import CatalogoItem from './CatalogoItem'

function Catalogo({ books }) {
  const { setBanner } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-cat.jpg)')
  }, [])

  return (
    <main>
      {books.map((item) => (
        <CatalogoItem key={item.id} item={item} />
      ))}
      <div className='filler'></div>
      <div className='filler'></div>
    </main>
  )
}

export default Catalogo

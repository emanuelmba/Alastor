import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Content from '../data/Content'
import Card from './Card'

function CatalogueItem({ item }) {
  const { setBook, fullTitle } = useContext(Content)

  return (
    <Card>
      <Link onClick={() => setBook(item)} to={`/catalogo/${item.code}${item.url}`}>
        <img
          className='book'
          src={`../imgs/ea${item.code}.jpg`}
          alt={`${fullTitle(item)}`}
          title={`${fullTitle(item)}`}
        />
      </Link>
    </Card>
  )
}

export default CatalogueItem

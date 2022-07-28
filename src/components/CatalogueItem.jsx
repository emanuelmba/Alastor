import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Content from '../data/Content'
import Card from './Card'

function CatalogueItem({ item }) {
  const { setBook } = useContext(Content)

  return (
    <Card>
      <Link onClick={() => setBook(item)} to={`/catalogo/${item.url}`}>
        <img
          className='book'
          src={`../imgs/ea${item.code}.jpg`}
          alt={item.author + ' - ' + item.title}
          title={item.author + ' - ' + item.title}
        />
      </Link>
    </Card>
  )
}

export default CatalogueItem

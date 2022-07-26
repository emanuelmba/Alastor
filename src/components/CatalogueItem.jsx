import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Content from '../data/Content'
import Card from './Card'

function CatalogueItem({ item }) {
  const { getBook } = useContext(Content)
  const code = item.id <= 9 ? '0' + item.id : item.id

  return (
    <Card>
      <Link onClick={() => getBook(item)} to={`/${item.url}`}>
        <img
          className='book'
          src={`../imgs/ea${code}.jpg`}
          alt={item.author + ' - ' + item.title}
          title={item.author + ' - ' + item.title}
        />
      </Link>
    </Card>
  )
}

export default CatalogueItem

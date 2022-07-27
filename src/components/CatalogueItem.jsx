import { Link } from 'react-router-dom'
import Card from './Card'

function CatalogueItem({ item }) {
  const code = item.id <= 9 ? '0' + item.id : item.id

  return (
    <Card>
      <Link to={`/${item.url}`}>
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

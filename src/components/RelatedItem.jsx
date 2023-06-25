import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Content from '../data/Content'
import CardRel from './CardRel'

function RelatedItem({ item }) {
  const { setBook } = useContext(Content)

  return (
    <CardRel>
      <Link onClick={() => setBook(item)} to={`/catalogo/${item.code}${item.url}`}>
        <img
          className='book'
          src={`../imgs/ea${item.code}.jpg`}
          alt={item.author + ' - ' + item.title}
          title={item.author + ' - ' + item.title}
        />
        <br />
        {item.author}
        <br />
        <em>{item.title}</em>
      </Link>
    </CardRel>
  )
}

export default RelatedItem

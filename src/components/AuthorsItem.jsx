import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Content from '../data/Content'

function AuthorsItem({ item }) {
  const { setAuthor, fullName } = useContext(Content)

  return (
    <Link onClick={() => setAuthor(item)} to={`/autores/${item.url}`}>
      <img
        className='unfade'
        src={`../imgs/th-${item.url}.png`}
        alt={`${fullName(item)}`}
        title={`${fullName(item)}`}
      />
    </Link>
  )
}

export default AuthorsItem

import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import AuthorsItem from '../components/AuthorsItem'

function Autores() {
  const { setBanner, authors } = useContext(Content)

  authors.sort((a, b) => a.surname.localeCompare(b.surname))

  useEffect(() => {
    setBanner('url(../imgs/alastor-aut.jpg)')
  }, [])

  document.title = 'Editorial Alastor | Autores'

  return (
    <main className='cat aut'>
      {authors.map((item) => (
        <AuthorsItem key={item.id} item={item} />
      ))}
      <a href='http://editorial-alastor.blogspot.com/' target='_blank' rel='noreferrer'>
        <img
          className='unfade'
          src='../imgs/th-otros-autores.png'
          alt='Otros autores'
          title='Otros autores'
        />
      </a>
    </main>
  )
}

export default Autores

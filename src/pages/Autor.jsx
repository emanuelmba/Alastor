import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { FaFeatherAlt } from 'react-icons/fa'
import Content from '../data/Content'
import Card from '../components/Card'
import RelatedItem from '../components/RelatedItem'

function Autor() {
  const { author, setAuthor, authors, books, setBanner, fullName } = useContext(Content)

  useEffect(() => {
    if (author.id === undefined) {
      const validReq = authors.find(
        (x) => x.url === window.location.pathname.substring(9)
      )
      if (validReq !== undefined) {
        setAuthor(validReq)
      } else {
        window.location = '/Error404'
      }
    }
    setBanner('url(../imgs/alastor-aut.jpg)')
  }, [])

  window.addEventListener('popstate', function (event) {
    const validReq = authors.find(
      (x) => x.url === window.location.pathname.substring(9)
    )
    if (validReq !== undefined) {
      setAuthor(validReq)
    }
  })

  if (author.id === undefined) {
    return <div>Loading...</div>
  } else {
    document.title = `Editorial Alastor | ${fullName(author)}`
    const related = books.filter((item) => author.rels.includes(item.id))

    return (
      <main className='content'>
        <Card>
          <img
            className='cover'
            src={`../imgs/pic-${author.url}.jpg`}
            alt={fullName(author)}
            title={fullName(author)}
          />
        </Card>

        <aside className='none'>
          <Link className='btn' to='/autores'>
            &nbsp;&nbsp;
            <FaFeatherAlt /> &nbsp;Lista de Autores &nbsp;&nbsp;
          </Link>
        </aside>

        <section>
          <div>
            <h1>{fullName(author)}</h1>
            <span className='shade'>{author.life}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: author.bio }} />
          <div>
            <strong>
              <em>Traducciones disponibles online:</em>
            </strong>
            {author.trads.map((trad, index) => (
              <p key={index}>
                <strong>·&nbsp;</strong>
                <a href={author.links[index]} target='_blank' rel='noreferrer'>
                  {trad}
                </a>
              </p>
            ))}
          </div>
        </section>

        <section className='related'>
          <div>
            <strong>Libros del autor en Editorial Alastor:</strong>
          </div>
          <div className='rel'>
            {related.reverse().map((item) => (
              <RelatedItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    )
  }
}

export default Autor

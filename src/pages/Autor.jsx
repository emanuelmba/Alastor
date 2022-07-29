import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import Card from '../components/Card'
import RelatedItem from '../components/RelatedItem'

function Autor() {
  const { author, setAuthor, authors, books, setBanner } = useContext(Content)

  useEffect(() => {
    if (author.id === undefined) {
      const validReq = authors.find(
        (x) => x.url === window.location.pathname.substring(9)
      )
      if (validReq !== undefined) {
        setAuthor(validReq)
      } else {
        window.location = '/'
      }
    }
    setBanner('url(../imgs/alastor-aut.jpg)')
  }, [])

  if (author.id === undefined) {
    return <div>Loading...</div>
  } else {
    const related = books.filter((item) => author.rels.includes(item.id))

    return (
      <div className='content'>
        <Card>
          <img
            className='cover'
            src={`../imgs/pics-${author.url}.jpg`}
            alt={author.name + ' ' + author.surname}
            title={author.name + ' ' + author.surname}
          />
        </Card>

        <div className='pdf'>
          <br />
        </div>

        <div className='info'>
          <div>
            <h1>{author.name + ' ' + author.surname}</h1>
            <span className='shade'>{author.life}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: author.bio }}></div>
          <div>
            <strong>
              <em>Traducciones disponibles online:</em>
            </strong>
            {author.trads.map((trad, index) => (
              <p key={index}>
                ·&nbsp;
                <a href={author.links[index]} target='_blank' rel='noreferrer'>
                  {trad}
                </a>
              </p>
            ))}
            <br />
            <br />
          </div>
        </div>

        <div className='related'>
          <div>
            <strong>Libros del autor en Editorial Alastor:</strong>
          </div>
          <div className='rel'>
            {related.reverse().map((item) => (
              <RelatedItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Autor

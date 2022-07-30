import { useContext, useEffect } from 'react'
import { FaRegFilePdf, FaBook, FaTabletAlt } from 'react-icons/fa'
import Content from '../data/Content'
import Card from '../components/Card'

function Libro() {
  const { book, setBook, books, setBanner, prices, mpago, fullTitle } =
    useContext(Content)

  useEffect(() => {
    if (book.id === undefined) {
      const validReq = books.find(
        (x) => x.url === window.location.pathname.substring(10)
      )
      if (validReq !== undefined) {
        setBook(validReq)
      } else {
        window.location = '/'
      }
    }
  }, [])

  useEffect(() => {
    setBanner(`url(../imgs/alastor-${book.code}.jpg)`)
  })

  if (book.id === undefined) {
    return <div>Loading...</div>
  } else {
    document.title = `Editorial Alastor | ${fullTitle(book)}`

    return (
      <main className='content'>
        <Card>
          <img
            className='cover'
            src={`../imgs/ea${book.code}.jpg`}
            alt={fullTitle(book)}
            title={fullTitle(book)}
          />
        </Card>

        <div className='pdf'>
          <br />
          <a
            className='btn'
            href={`/imgs/${book.url}.pdf`}
            target='_blank'
            rel='noreferrer'
          >
            <FaRegFilePdf /> &nbsp;Descargar muestra
          </a>
        </div>

        <div className='info'>
          <div>
            <h2>{book.author}</h2>
            <h1>{book.title}</h1>
          </div>

          <div className='specs'>
            <div>
              {book.translated && (
                <>
                  <strong>Traducción </strong>&nbsp;
                  <span className='shade'>E. Ehrendost</span>
                  <br />
                </>
              )}
              <strong>ISBN</strong> &nbsp;
              <span className='shade'>{book.isbn}</span>
              <br />
              <strong>Formato</strong> &nbsp;
              <span className='shade'>
                {book.pags > 0 && book.pags + ' p. | '}ebook
              </span>
              <br />
              <strong>Precio</strong> &nbsp;
              <span className='shade'>
                {book.pags > 0 && '$ ' + prices[book.price] + ' | '}$ {prices[0]}
              </span>
            </div>
            <div className='buy'>
              {book.mlibre !== '' && (
                <a className='btn' href={book.mlibre} target='_blank' rel='noreferrer'>
                  <FaBook /> &nbsp;Comprar libro
                </a>
              )}
              <a className='btn' href={mpago} target='_blank' rel='noreferrer'>
                <FaTabletAlt /> &nbsp;Comprar ebook
              </a>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: book.desc }} />

          <div>
            <strong>Contenidos</strong>
            <div className='index' dangerouslySetInnerHTML={{ __html: book.index }} />
          </div>
        </div>
      </main>
    )
  }
}

export default Libro

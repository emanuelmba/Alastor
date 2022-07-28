import { useContext, useEffect } from 'react'
import { FaRegFilePdf, FaBook, FaTabletAlt } from 'react-icons/fa'
import Content from '../data/Content'
import Card from '../components/Card'

function Libro() {
  const { book, setBook, books, setBanner, prices, mpago } = useContext(Content)

  useEffect(() => {
    if (book.id === undefined) {
      let count = 0
      for (let i in books) {
        if (books[i].url === window.location.pathname.substring(10)) {
          setBook(books[i])
          count += 1
        }
      }
      if (count === 0) {
        window.location = '/'
      }
    }
  }, [])

  useEffect(() => {
    setBanner(`url(../imgs/alastor-${book.code}.jpg)`)
  })

  return (
    <div className='content'>
      <Card>
        <img
          className='cover'
          src={`../imgs/ea${book.code}.jpg`}
          alt={book.author + ' - ' + book.title}
          title={book.author + ' - ' + book.title}
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
            <span className='shade'>{book.pags > 0 && book.pags + 'p. | '}ebook</span>
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

        <div className='desc' dangerouslySetInnerHTML={{ __html: book.desc }}></div>

        <div>
          <strong>Contenidos</strong>
          <div className='index' dangerouslySetInnerHTML={{ __html: book.index }}></div>
        </div>
      </div>
    </div>
  )
}

export default Libro

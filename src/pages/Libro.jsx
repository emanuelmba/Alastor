import { useContext, useEffect } from 'react'
import Content from '../data/Content'
import Card from '../components/Card'

function Libro() {
  const { book, setBook, books, setBanner, prices } = useContext(Content)

  useEffect(() => {
    for (let i in books) {
      if (books[i].url === window.location.pathname.substring(1)) {
        setBook(books[i])
      }
    }
  }, [])

  const code = book.id <= 9 ? '0' + book.id : book.id

  useEffect(() => {
    setBanner(`url(../imgs/alastor-${code}.jpg)`)
  })

  return (
    <div className='content'>
      <Card>
        <img
          className='cover'
          src={`../imgs/ea${code}.jpg`}
          alt={book.author + ' - ' + book.title}
          title={book.author + ' - ' + book.title}
        />
      </Card>
      <div className='info'>
        <div>
          <h2>{book.author}</h2>
          <h1>{book.title}</h1>
        </div>
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

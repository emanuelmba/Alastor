import { useContext, useEffect } from 'react'
import { FaRegFilePdf, FaBook, FaTabletAlt } from 'react-icons/fa'
import Content from '../data/Content'
import Card from '../components/Card'
import RelatedItem from '../components/RelatedItem'

function Libro() {
  const { book, setBook, books, setBanner, prices, mpago, fullTitle } =
    useContext(Content)

  useEffect(() => {
    if (book.id === undefined) {
      const validReq = books.find(
        (x) => x.url === window.location.pathname.substring(12)
      )
      if (validReq !== undefined) {
        setBook(validReq)
      } else {
        window.location = '/Error404'
      }
    }
  }, [])

  useEffect(() => {
    setBanner(`url(../imgs/alastor-${book.code}.jpg)`)
  })

  window.addEventListener('popstate', function (event) {
    const validReq = books.find((x) => x.url === window.location.pathname.substring(12))
    if (validReq !== undefined) {
      setBook(validReq)
    }
  })

  if (book.id === undefined) {
    return <div>Loading...</div>
  } else {
    document.title = `Editorial Alastor | ${fullTitle(book)}`
    const related = books.filter((item) => book.rels.includes(item.id))
    let isFinished,
      isAvailable = false
    if (book.price !== 0) {
      isFinished = true
    }
    if (book.mlibre !== '') {
      isAvailable = true
    }

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

        {isFinished && (
          <aside>
            <a
              className='btn-aside border-btn'
              href={`/imgs/${book.code}${book.url}.pdf`}
              target='_blank'
              rel='noreferrer'>
              <FaRegFilePdf /> &nbsp;Descargar muestra
            </a>
            <p className='howtobuy'>
              <b>CÓMO COMPRAR</b>
              <br />
              <br />
              <b>Libro físico: </b>Por MercardoLibre, con el botón de{' '}
              <i>Comprar libro</i>
              , o de manera directa vía email o formulario de contacto. Métodos de pago:
              transferencia bancaria, MercadoPago, efectivo. Métodos de entrega: retiro
              en persona por Villa Devoto (CABA, Argentina), entregas en CABA (consultar
              precio según zona), envíos por Correo Argentino.
              <br />
              <br />
              <b>Versión ebook: </b>Por MercadoPago, con el botón de{' '}
              <i>Comprar ebook</i>, y contactando luego a la editorial mencionando el
              título adquirido, el formato de archivo requerido (epub o mobi) y un email
              en el cual recibirlo.
              <br />
              <br />
              <b>Fuera de Argentina: </b>Vía email o formulario de contacto. Consultar
              precio en dólares y costo del envío para el caso de libros físicos.
              Métodos de pago: PayPal, WesternUnion, Airtm.
            </p>
          </aside>
        )}

        <section>
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
              {isFinished ? (
                <>
                  <strong>Formato</strong> &nbsp;
                  <span className='shade'>
                    {isAvailable && book.pags + ' p. | '}ebook
                  </span>
                  <br />
                  <strong>Precio</strong> &nbsp;
                  <span className='shade'>
                    {isAvailable && '$ ' + prices[book.price] + ' | '}$ {prices[1]}
                  </span>
                </>
              ) : (
                <>
                  <br />
                  <strong>
                    <span className='msg-error'>
                      Volumen de futura aparición.
                      <br />
                      Próximamente disponible.
                    </span>
                  </strong>
                </>
              )}
            </div>

            {isFinished && (
              <div className='btn-buy border-btn'>
                {isAvailable && (
                  <a
                    href={book.mlibre}
                    target='_blank'
                    rel='noreferrer'
                    title={'MercadoLibre: $ ' + prices[book.price]}>
                    <FaBook /> &nbsp;Comprar libro
                  </a>
                )}
                <a
                  href={mpago}
                  target='_blank'
                  rel='noreferrer'
                  title={'MercadoPago: $ ' + prices[1]}>
                  <FaTabletAlt /> &nbsp;Comprar epub
                </a>
              </div>
            )}
          </div>

          <div dangerouslySetInnerHTML={{ __html: book.desc }} />

          <div>
            <strong>Contenidos</strong>
            <div className='index' dangerouslySetInnerHTML={{ __html: book.index }} />
          </div>
        </section>

        <section className='related'>
          <div>
            <strong>Otros títulos relacionados:</strong>
          </div>
          <div className='rel'>
            {related.map((item) => (
              <RelatedItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    )
  }
}

export default Libro

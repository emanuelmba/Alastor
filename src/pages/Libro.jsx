import { useContext, useEffect } from 'react'
import { FaRegFilePdf, FaBook, FaTabletAlt } from 'react-icons/fa'
import Content from '../data/Content'
import Card from '../components/Card'
import RelatedItem from '../components/RelatedItem'

function Libro() {
  const { book, setBook, books, setBanner, prices, fullTitle } = useContext(Content)

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
    if (book.paper_id !== '') {
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
              <strong>CÓMO COMPRAR</strong>
              <br />
              <br />
              Puede comprar a través de nuestra Tienda con los botones de{' '}
              <em>Comprar libro</em> y <em>Comprar epub</em>, o dirigirse a nuestros
              perfiles en MercadoLibre o Amazon.
              <br />
              <br />
              <strong>Métodos de pago en Tienda</strong>
              <br />
              <strong>En Argentina:</strong>{' '}
              <em>MercadoPago, transferencia bancaria, efectivo.</em>
              <br />
              <strong>Desde el exterior:</strong> <em>PayPal, Western Union.</em>
              <br />
              <br />
              <strong>Métodos de envío en Tienda</strong>
              <br />
              <strong>CABA:</strong>{' '}
              <em>entregas a domicilio, retiro en persona (zona Villa Devoto).</em>
              <br />
              <strong>Resto de Argentina:</strong>{' '}
              <em>
                Correo Argentino (consultar por otros métodos como Andreani, Vía Cargo o
                MercadoEnvíos).
              </em>
              <br />
              <strong>Al exterior:</strong>{' '}
              <em>
                envío aéreo por correo regular con número de seguimiento.
                <br />
                <br />
                Los eBooks se envían al mail del comprador tras la acreditación del
                pago. Aclarar en caso de que se necesite formato mobi.
              </em>
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
                    href={`https://editorial-alastor.com.ar/tienda/product_info.php?products_id=${book.paper_id}&currency=ARS`}
                    rel='noreferrer'
                    title={'$ ' + prices[book.price]}>
                    <FaBook /> &nbsp;Comprar libro
                  </a>
                )}
                <a
                  href={`https://editorial-alastor.com.ar/tienda/product_info.php?products_id=${book.ebook_id}&currency=ARS`}
                  rel='noreferrer'
                  title={'$ ' + prices[1]}>
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

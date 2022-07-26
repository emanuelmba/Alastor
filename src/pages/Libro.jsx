import { useContext, useEffect } from 'react'
import Content from '../data/Content'

function Libro() {
  const { eaBook, setBanner } = useContext(Content)
  const code = eaBook.id <= 9 ? '0' + eaBook.id : eaBook.id

  useEffect(() => {
    setBanner(`url(../imgs/alastor-${code}.jpg)`)
  }, [])

  return (
    <div>
      {eaBook.author} - {eaBook.title}
    </div>
  )
}

export default Libro

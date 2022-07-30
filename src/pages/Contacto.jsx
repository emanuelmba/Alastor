import { useContext, useEffect } from 'react'
import { FaAmazon, FaBloggerB, FaRegHandshake } from 'react-icons/fa'
import Content from '../data/Content'

function Contacto() {
  const { setBanner } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-con.jpg)')
  }, [])

  document.title = 'Editorial Alastor | Contacto'

  return (
    <main>
      <div>Contacto</div>
      <div>
        <FaAmazon />
        <FaBloggerB />
        <FaRegHandshake />
      </div>
    </main>
  )
}

export default Contacto

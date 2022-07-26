import { useContext, useEffect } from 'react'
import Content from '../data/Content'

function Contacto() {
  const { setBanner } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-con.jpg)')
  }, [])

  return <div>Contacto</div>
}

export default Contacto

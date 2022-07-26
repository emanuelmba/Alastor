import { useContext, useEffect } from 'react'
import Content from '../data/Content'

function Autores() {
  const { setBanner } = useContext(Content)

  useEffect(() => {
    setBanner('url(../imgs/alastor-aut.jpg)')
  }, [])

  return <div>Autores</div>
}

export default Autores

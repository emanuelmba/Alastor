import { useContext } from 'react'
import Content from '../data/Content'

function Footer() {
  const { mail } = useContext(Content)
  const year = new Date().getFullYear()

  return (
    <footer>
      <p className='tahoma'>
        &copy; {year} Editorial Alastor | <a href={`mailto:${mail}`}>{mail}</a>
      </p>
    </footer>
  )
}

export default Footer

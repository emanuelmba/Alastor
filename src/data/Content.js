import { createContext, useState } from 'react'
import AuthorData from './AuthorData'
import BookData from './BookData'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const [authors] = useState(AuthorData)
  const [books] = useState(BookData)
  const mail = 'info@editorial-alastor.com.ar'
  const mpago = 'https://mpago.la/1MjwDsg'
  const prices = [500, 700]

  const [author, setAuthor] = useState({
    item: {},
  })

  const [book, setBook] = useState({
    item: {},
  })

  return (
    <Content.Provider
      value={{
        setAuthor,
        setBanner,
        setBook,
        author,
        authors,
        banner,
        book,
        books,
        mail,
        mpago,
        prices,
      }}
    >
      {children}
    </Content.Provider>
  )
}

export default Content

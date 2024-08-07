import { createContext, useState } from 'react'
import AuthorData from './AuthorData'
import BookData from './BookData'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const [authors] = useState(AuthorData)
  const [books] = useState(BookData)
  const mail = 'info@editorial-alastor.com.ar'
  const mpago = 'https://mpago.la/2zpEVzD'
  const prices = [0, 4000, 8000, 12500]

  const [author, setAuthor] = useState({
    item: {},
  })

  const [book, setBook] = useState({
    item: {},
  })

  const fullTitle = (item) => {
    return item.author + ' - ' + item.title
  }

  const fullName = (item) => {
    return item.name + ' ' + item.surname
  }

  return (
    <Content.Provider
      value={{
        setAuthor,
        setBanner,
        setBook,
        fullTitle,
        fullName,
        author,
        authors,
        banner,
        book,
        books,
        mail,
        mpago,
        prices,
      }}>
      {children}
    </Content.Provider>
  )
}

export default Content

import { createContext, useState } from 'react'
import BookData from './BookData'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const [books] = useState(BookData)
  const mail = 'info@editorial-alastor.com.ar'
  const prices = [500, 700]
  const mpago = 'https://mpago.la/1MjwDsg'

  const [book, setBook] = useState({
    item: {},
  })

  return (
    <Content.Provider
      value={{
        setBanner,
        setBook,
        banner,
        book,
        books,
        mail,
        prices,
        mpago,
      }}
    >
      {children}
    </Content.Provider>
  )
}

export default Content

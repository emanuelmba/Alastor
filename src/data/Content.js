import { createContext, useState } from 'react'
import BookData from './BookData'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const [book, setBook] = useState('')
  const [books] = useState(BookData)
  const mail = 'info@editorial-alastor.com.ar'
  const prices = [500, 700]

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
      }}
    >
      {children}
    </Content.Provider>
  )
}

export default Content

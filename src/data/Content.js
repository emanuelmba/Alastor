import { createContext, useState } from 'react'
import BookData from './BookData'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const [books] = useState(BookData)
  const mail = 'info@editorial-alastor.com.ar'
  const trad = 'E. Ehrendost'
  const prices = [500, 700]

  const [eaBook, getBook] = useState({
    item: {},
  })

  return (
    <Content.Provider
      value={{
        setBanner,
        getBook,
        banner,
        books,
        eaBook,
        mail,
        trad,
        prices,
      }}
    >
      {children}
    </Content.Provider>
  )
}

export default Content

import { createContext, useState } from 'react'

const Content = createContext()

export const ContentProvider = ({ children }) => {
  const [banner, setBanner] = useState('')
  const mail = 'info@editorial-alastor.com.ar'
  const trad = 'E. Ehrendost'
  const prices = [500, 700]

  return (
    <Content.Provider
      value={{
        banner,
        setBanner,
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

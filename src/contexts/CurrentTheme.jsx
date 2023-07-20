/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const CurrentThemeContext = createContext()

export default CurrentThemeContext

export function CurrentThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("")

  return (
    <CurrentThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  )
}

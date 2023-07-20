/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react"

const CurrentUserContext = createContext()

export const useUserNameContext = () => useContext(CurrentUserContext)

export function CurrentUserContextProvider({ children }) {
  const [userName, setUserName] = useState("")

  return (
    <CurrentUserContext.Provider value={{ userName, setUserName }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

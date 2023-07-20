import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { CurrentThemeContextProvider } from "./contexts/CurrentTheme"
import { CurrentUserContextProvider } from "./contexts/CurrentUser"

function App() {
  return (
    <CurrentUserContextProvider>
      <CurrentThemeContextProvider>
        <Header />
        <Main />
        <Footer />
      </CurrentThemeContextProvider>
    </CurrentUserContextProvider>
  )
}

export default App

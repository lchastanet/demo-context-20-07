import { useUserNameContext } from "../contexts/CurrentUser"

function NavBar() {
  const { userName } = useUserNameContext()

  return <div>NavBar {userName}</div>
}

export default NavBar

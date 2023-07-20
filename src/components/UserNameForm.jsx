import { useUserNameContext } from "../contexts/CurrentUser"

function UserNameForm() {
  const { userName, setUserName } = useUserNameContext()

  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  )
}

export default UserNameForm

import {useContext} from 'react';
import Context from './UserContext'

function LoggedOut() {
  const onClickLogin = async (e) => {
    const response = await fetch('http://localhost:3000/api/profile')
    const user = await response.json()
    login(user)
  }
  const {login} = useContext(Context)
  return (
    <div>
      <button onClick = {onClickLogin}>Login</button>
    </div>
  )
}

export default LoggedOut


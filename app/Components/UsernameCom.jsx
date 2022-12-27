import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import Gravatar from './Gravatar'



export default function UsernameCom({ id }) {
  const supabase = useSupabaseClient()
  const [username, setUsername] = useState()
  useEffect(() => {
    getUsername()
  })
  async function getUsername() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
      }
    } catch (error) {
      //alert('Error loading user data!')
      console.log(error)
    } 
  }



  return (
    <span>{username}</span>
  )
}



// <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>
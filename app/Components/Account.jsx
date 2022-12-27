import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import Gravatar from './Gravatar'
/* @refresh reset */



export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
    
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select('username, phoneNumber')
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      console.log(data)

      if (data) {
        setUsername(data.username)
        setPhoneNumber(data.phoneNumber)
      }
    } catch (error) {
      //alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, phoneNumber }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
        email: user.email,
        phoneNumber
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div class="form">
<br /><br />
      <label htmlFor="email">Email : </label>
      <input type="email" value={session ? session.user.email : ''} disabled />
      <br /><br />
      <label htmlFor="username">Username : </label>
      <input
        type="text"
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <label htmlFor="phoneNumber">Phone number : </label>
      <input
        type="text"
        value={phoneNumber || ''}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
<br /><br />

      <div>
        <button
          class="submitForm"
          onClick={() => updateProfile({ username, phoneNumber })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button class="submitForm" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    <Gravatar email={session ? session.user.email : ''}/>
    </div>
  )
}



// <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>
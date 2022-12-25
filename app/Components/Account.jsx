import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import Gravatar from './Gravatar'



export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
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
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
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
      <input type="email" value={session.user.email} disabled />
      <br /><br />
      <label htmlFor="username">Username : </label>
      <input
        type="text"
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <label htmlFor="website">Message : </label>
      <input
        type="text"
        value={website || ''}
        onChange={(e) => setWebsite(e.target.value)}
      />
<br /><br />

      <div>
        <button
          class="submitForm"
          onClick={() => updateProfile({ username, website, avatar_url })}
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

    <Gravatar email={session.user.email}/>
     
    </div>
  )
}



// <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>
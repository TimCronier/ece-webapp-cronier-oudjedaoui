import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import Gravatar from './Gravatar'
import { comment } from 'postcss'
import Router, { useRouter } from 'next/router'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'
/* @refresh reset */



export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [articles, setArticles] = useState()

  useEffect(() => {
    getProfile()
    
  }, [session])


  useEffect(() => {
    async function loadArticles() {
      let { data: articles, error } = await supabase
        .from('articles')
        .select('*')
        .eq('author_id', session.user.id)
        .order('created_at', { ascending: false })

      setArticles(articles)
    }
    loadArticles()
  })
 

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

  async function deleteArticle({ id }) {
    try {
       const { data } = await supabase
          .from('articles')
          .delete()
          .eq('id', id)
       alert("Your article was deleted !")
    } catch (error) {
       console.log(error)
    }
 }

 function editArticle({id}) {
  router.push('/editArticles/' + id)
 }

  return (
    <div class="accountGlobbalWrapper">
      <div class="modifyAccount" >
        <div class="middle"><Gravatar email={session ? session.user.email : ''} /></div>
        <br />
        <label htmlFor="email">Email : </label><br/>
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
      </div>

      <div class="listArticlesWrapper">
        <div class="listArticlesTitle"><span>All your articles : </span></div>
        <div class="listArticles">
          {articles ? articles.map(article => (
            <div class="articlesWrap">
              <p>{article.title}</p>
              <p>Created at : {new Date(article.created_at).getDate() + "/" +
                           (new Date(article.created_at).getMonth() + 1) + "/" +
                           new Date(article.created_at).getFullYear() + " | " +
                           ((new Date(article.created_at).getHours() + 1) % 24) + ":" +
                           new Date(article.created_at).getMinutes()}</p>
                           <br/><br/>
              <button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}onClick={() => deleteArticle(article)} class="commentsAuthorEditImage" ><img src="https://cdn-icons-png.flaticon.com/512/4662/4662653.png" ></img></button>
              <button onClick={() => editArticle(article)} class="commentsAuthorEditImage" ><img src="https://cdn-icons-png.flaticon.com/512/3756/3756522.png" ></img></button>
              </div> 
              

          )) : <></>}
        </div>
      </div>
    </div>

  )
}



// <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>
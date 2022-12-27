import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import UsernameCom from '../../Components/UsernameCom'


export default function Articles(props) {
   const session = useSession()
   const supabaseClient = useSupabaseClient()
   const [data, setData] = useState()
   const [username, setUsername] = useState()


   useEffect(() => {
      async function loadData() {
         const { data: articles } = await supabaseClient
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false })
         setData(articles)
      }
      loadData()

   })

   async function loadUsername({ author_id }) {
      try {
         let { data, error, status } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', author_id)
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
      <div class="articlesWrapper">
         <span class={!props.darkMode ? "articlesTitleDark" : "articlesTitle"}>ARTICLES</span>
         {data ? data.map(article => (
            <Link href={'/articles/' + article.id} key={article.id}>
               {props.darkMode ? 
               <div class="articleBoxDark"> 
                  <img class="articleIconImage" src={article.source}></img>
                  <p class="articleIconTitle">{article.title}</p>
                  <br />
                  <p class="articleAuthor">Written by <UsernameCom id={article.author_id} /> </p>
               </div>
               : 
               <div class="articleBox"> 
                  <img class="articleIconImage" src={article.source}></img>
                  <p class="articleIconTitle">{article.title}</p>
                  <br />
                  <p class="articleAuthor">Written by <UsernameCom id={article.author_id} /> </p>
               </div>
               }
                  
               
            </Link>
         )) : <></>}
      </div>
   )

}

// export const getStaticProps = async () => {
   //    const supabaseClient = useSupabaseClient()
   //    const res = await supabaseClient
   //          .from('articles')
   //          .select('*')
   //          setData(data.json())
   //    const data = await res.json()
   //    return {
   //       props: {articles: data}
   //    }
   //  }


   // <div style = {{minHeight: '81.3vh'}} id="list">
   //       {data ? data.map(article => (
   //          <Link href={'/articles/' + article.id} key={article.id}>
   //             <ul class='user'>
   //                <a>
   //                   Title : {article.title}
   //                   <li>Content : {article.content}</li>
   //                   <li>Author : {article.author_id}</li>
   //                </a>
   //             </ul>
   //          </Link>
   //       )) : <></>}
   //    </div>

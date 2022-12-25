import { useUser, useSupabaseClient, useSession} from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'



export default function Articles() {
   const session = useSession()
   const supabaseClient = useSupabaseClient()
   const [data, setData] = useState()


   useEffect(() => {
      async function loadData() {
         const {data: articles} = await supabaseClient
         .from('articles')
         .select('*')
         
         setData(articles)
      }
      loadData()
   })


   return (
      <div style = {{minHeight: '81.3vh'}} id="list">
         {data ? data.map(article => (
            <Link href={'/articles/' + article.id} key={article.id}>
               <ul class='user'>
                  <a>
                     Title : {article.title}
                     <li>Content : {article.content}</li>
                     <li>Author : {article.author_id}</li>
                  </a>
               </ul>
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
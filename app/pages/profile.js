import { useEffect } from 'react'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Account from '../Components/Account'


export default function Profile() {
   const router = useRouter()
   const session = useSession()
   const supabaseClient = useSupabaseClient()
   
   useEffect(() => {
      if (!session) router.push('/login')
      async function loadData() {
         if(session) {
            const { data, error } = await supabaseClient
            .from('profiles')
            .select('email')
            .eq('id', session.user.id)
            .single()
            if(error) throw error
            if(data.email) {
               await supabaseClient
               .from('profiles')
               .update({email: session.user.email})
               .eq('id', session.user.id)
            }
         }
      }
      loadData()
   })



   return (
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
         {session ? (<Account session={session} />) : (<p>caca</p>)}
         <button onClick={async () => {
            
            if (data.email) alert("caca pas null")
            else alert("caca null")
         }}>zebi</button>
      </div>
   )
}
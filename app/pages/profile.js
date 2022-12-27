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
      <Account session={session} />
   )
}
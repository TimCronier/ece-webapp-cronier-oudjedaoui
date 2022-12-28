import { Auth } from '@supabase/auth-ui-react'
import { useEffect } from 'react'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'



export default function Login() {
   const router = useRouter()

   const supabase = useSupabaseClient()
   const session = useSession()

   useEffect(() => {
      if (session) router.push('/profile')
   })

   return (
      <div className="container" style={{ marginTop:'260px' ,position:'absolute', padding: '50px 0 100px 0' }}>
         {!session ? (
            <Auth supabaseClient={supabase} providers={['github']} />) : (<p></p>
         )}
      </div>
   )
}



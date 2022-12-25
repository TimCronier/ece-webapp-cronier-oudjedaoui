import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import LoginUsername from '../Components/LoginUsername'

function Header({ }) {
   const session = useSession()
   const supabase = useSupabaseClient()
   return (
      <div style={{ backgroundColor: 'rgb(197, 109, 2)' }}>
         <div id="headerbanner">
            <img class="logopunch" src="https://cdn-icons-png.flaticon.com/512/1021/1021799.png" alt="Doctor icon" />
            PUNCHOLOGUE

         </div>
         <div class="username">
            {!session ? (
               <p></p>
            ) : (
               <LoginUsername session={session}/>
            )}
         </div>
      </div>

   )
}

export default Header
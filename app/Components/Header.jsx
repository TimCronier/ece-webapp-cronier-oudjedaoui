/* @refresh reset */

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoginUsername from '../Components/LoginUsername'
import Navbar from './Navbar'

function Header({ }) {
   const session = useSession()
   const supabase = useSupabaseClient()
   const [user, setUser] = useState()
   const router = useRouter()
   
   async function getUsername() {
      try {
         const {data: username} = await supabase
         .from('profiles')
         .select('username')
         .eq('id', session.user.id)
         .single()

         setUser(username.username)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getUsername()
      console.log("a")
   })

   async function goToLogin() {
      router.push('/login')
   }

   return (
      <div class="headerWrapper">
         <span class="headerTitle">
            PUNCHOLOGUE
         </span>
         <img class="headerLogo" src="https://cdn-icons-png.flaticon.com/512/1021/1021799.png" alt="Doctor icon" />         
         <div class="navbarWrapper">
            <Navbar></Navbar>
         </div>
         <div class="accountWrapper">
            <button onClick={() => goToLogin()} class="headerButton"><img style={{ height: '50px', width: '50px' }} src="https://img.icons8.com/ios-glyphs/512/user.png"></img></button>
            <p class="headerUsername">{session ? user : "Login"}</p>
         </div>
         
      </div>

   )
}

export default Header

// <div class="username">
//             {!session ? (
//                <p></p>
//             ) : (
//                <LoginUsername session={session}/>
//             )}
//          </div>
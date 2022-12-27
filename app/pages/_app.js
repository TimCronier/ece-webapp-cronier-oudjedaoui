import '../styles/globals.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { UserContextProvider } from '../Components/UserContext'


function MyApp({ Component, pageProps }) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <div>
      <title>Punchologue</title>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <UserContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </UserContextProvider>

      </SessionContextProvider>
    </div>

  )
}



export default MyApp

import '../styles/globals.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { UserContextProvider } from '../Components/UserContext'


function MyApp({ Component, pageProps }) {

  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div class={!darkMode ? "darkText darkBg" : "lightText lightBg"}>
      <title>Punchologue</title>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <UserContextProvider>
          <div>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          </div>
          <div class={!darkMode ? "darkText darkBg" : "lightText lightBg"}>
            <Component {...pageProps} darkMode={darkMode} />
          </div>
          <Footer darkMode={darkMode}/>
        </UserContextProvider>

      </SessionContextProvider>
    </div>

  )
}



export default MyApp

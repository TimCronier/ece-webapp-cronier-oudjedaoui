import { useUser, useSupabaseClient, useSession} from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

const ContactPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState()
  const session = useSession()

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('contacts').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    loadData()
  }, [user]
  )

  async function handlesubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const message = event.target.message.value;
    const date = new Date();
    
    if (!session) alert("You must be connected !")
    else {
      if ((date) && (email) && (firstname) && (lastname) && (message)) {
        const { add } = await supabaseClient.from('contacts').insert({ created_at: date, firstname: firstname, lastname: lastname, email: email, message: message })
        if ({ add }) alert("Contact added to the database.")
      }
      else alert("One of the field is empty !")
    }

  }

  return (

    <form onSubmit={handlesubmit} style = {{minHeight: '81.3vh'}}>
      <br/><br/>
      <div class="form">
        <label>Please enter your firstname : </label>
        <input type="text" name="firstname"></input>
        <br /><br />

        <label>Please enter your lastname : </label>
        <input type="text" name="lastname"></input>
        <br /><br />

        <label>Please enter your email : </label>
        <input type="email" name="email"></input>
        <br /><br />

        <label>Please enter your message : </label>
        <input type="text" name="message"></input>
        <br /><br />
        
      </div>
      

      <button type='submit' class="submitForm"> <span>SUBMIT</span></button>

    </form>
  )
}

export default ContactPage



// import { comment, list } from "postcss";
// import supabase from "../../utils/supabase";

// export async function getStaticProps() {
//   const {data: posts, error} = await supabase.from('contacts').select('*')
//   console.log(posts[0])
//   if (error) {
//     throw new Error(error);
//   }
//   return {
//     props: {
//       posts,
//     }
//   }
// }

// async function handleSubmit(event) {
//   event.preventDefault()
//   // const email = email.target.email.value
//   console.log("fares")
// }

// export default function Home({ posts }) {
//   return (
//     <div style={{ paddingLeft: 20 + 'px', paddingBottom: 20 + 'px', paddingTop: 20 + 'px'}}>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="firstname" id="firstname"  />
//         <br/><br/>
//         <input type="text" name="lastname" id="lastname"  />
//         <br/><br/>
//         <input type="email" name="email" id="email"  />
//         <br/><br/>
//         <input type="text" name="message" id="message"  />
//         <button type='submit' style={{ paddingLeft: 10 + 'px' }}>SUBMIT</button>
//         <br/><br/>
//       </form>
//     </div>
//   );
// }




// // import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
// // import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

// // const Home = () => {
// //   const session = useSession()
// //   const supabase = useSupabaseClient()

// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Home

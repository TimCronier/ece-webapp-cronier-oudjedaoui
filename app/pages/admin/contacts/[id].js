import supabase from "../../../utils/supabase"

export async function getServerSideProps({ params }) {
   const { data: post, error } = await supabase
   .from('contacts')
   .select('*')
   .eq('id', params.id)
   .single()

   if (error) throw new Error(error.message)

   return {
      props: {
         post,
      }
   }
}

export default function ContactPage({ post }) {
   return (
      <div>
      <h1> {post.firstname} </h1>
      <p> {post.email} </p>
      </div>
   )
}
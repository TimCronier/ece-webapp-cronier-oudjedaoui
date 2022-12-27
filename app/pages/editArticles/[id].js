import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import supabase from "../../utils/supabase"

export async function getServerSideProps({ params }) {
   const { data: post, error } = await supabase
      .from('articles')
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

export default function EditArticle({ post }) {
    const session = useSession()
    const router = useRouter()
    const [content, setContent] = useState("You must be connected !")
    const [title, setTitle] = useState("You must be connected !")
    const [source, setSource] = useState("You must be connected !")
    const [char1, setChar1] = useState("0 (100 max)")
    const [char2, setChar2] = useState("0 (1000 max)")
    const [ok, setOk] = useState(false)
    const [first, setFirst] = useState(true)
    
    
    useEffect(() => {
         if (session && first) {
            if (session.user.id === post.author_id) {
               setTitle(post.title)
               setContent(post.content)
               setSource(post.source)
               setOk(true)
               setFirst(false)
            } else {
               setTitle("You can't modify an article that isn't yours !")
               setContent("You can't modify an article that isn't yours !")
               setSource("You can't modify an article that isn't yours !")
            }
         }
    })


    async function editArticle() {
        if (content && title && source) {
            try {
                await supabase.from('articles').upsert({
                    id: post.id,
                    content: content,
                    title: title,
                    source: source
                })
                alert("Your article is modified !")
            } catch (error) {
                console.log(error)
            }
            router.push('/profile')
            setContent(null)
            setTitle(null)
            setSource(null)
        } else {
            alert("You must fill every field !")
        }
    }
        

    return (
        <div class="globalWrapper">
            <div class="writeCommentWrapper">
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Title :</span>
                <textarea value={title || ''} disabled={!ok} onChange={(e) => {
                    (
                        setChar1(e.target.value.length + " (max 100)"));
                        setTitle(e.target.value);
                }}
                    maxlength='100'
                    class="writeArticleTitle"></textarea>
                <p class="countChar">{char1}</p>
                <br /><br />
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Content :</span>
                <br />
                <textarea value={content || ''} disabled={!ok} onChange={(e) => {
                    (
                        setChar2(e.target.value.length + " (max 1000)"));
                        setContent(e.target.value);
                }}
                    maxlength='1000'
                    class="writeArticleContent"></textarea>
                <p class="countChar">{char2}</p>
                <br /><br />
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Image source :</span>
                <textarea value={source || ''} disabled={!ok} onChange={(e) => setSource(e.target.value)} class="writeArticleTitle"></textarea>
                <br />
                <button disabled={!ok} onClick={(e) => { editArticle() }} class={ok ? "submitForm" : "submitFormDisabled"}><span>EDIT</span></button>
            </div>
        </div>
    )

}
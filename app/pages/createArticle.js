import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"


export default function CreateArticle(props) {
    const session = useSession()
    const supabase = useSupabaseClient()
    const router = useRouter()
    const [content, setContent] = useState("You must be connected !")
    const [title, setTitle] = useState("You must be connected !")
    const [source, setSource] = useState("You must be connected !")
    const [char1, setChar1] = useState("0 (100 max)")
    const [char2, setChar2] = useState("0 (1000 max)")
    const [a, setA] = useState(true)


    useEffect(() => {
        if (session && a) {
            setContent(null)
            setTitle(null)
            setSource(null)
            setA(false)
        }
    })

    async function postArticle() {
        if (content && title && source) {
            try {
                await supabase.from('articles').insert({
                    author_id: session.user.id,
                    content: content,
                    title: title,
                    source: source,
                    created_at: new Date().toISOString()
                })
                alert("Your article is uploaded !")
            } catch (error) {
                console.log(error)
            }
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
                <textarea value={title || ''} disabled={session ? false : true} onChange={(e) => {
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
                <textarea value={content || ''} disabled={session ? false : true} onChange={(e) => {
                    (
                        setChar2(e.target.value.length + " (max 1000)"));
                    setContent(e.target.value);
                }}
                    maxlength='1000'
                    class="writeArticleContent"></textarea>
                <p class="countChar">{char2}</p>
                <br /><br />
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Image source :</span>
                <textarea value={source || ''} disabled={session ? false : true} onChange={(e) => setSource(e.target.value)} class="writeArticleTitle"></textarea>
                <br />
                {!props.darkMode ?
                    <button disabled={session} onClick={(e) => { postArticle() }} class={session ? "submitFormDark" : "submitFormDisabledDark"}><span>SUBMIT</span></button>
                    : <button disabled={session} onClick={(e) => { postArticle() }} class={session ? "submitForm" : "submitFormDisabled"}><span>SUBMIT</span></button>
                }
            </div>
        </div>
    )

}
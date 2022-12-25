import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useState, useEffect } from "react"


export default function CreateArticle() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const [content, setContent] = useState()
    const [title, setTitle] = useState()
    const [source, setSource] = useState()
    const [char1, setChar1] = useState("0 (100 max)")
    const [char2, setChar2] = useState("0 (1000 max)")

    async function postArticle() {
        try {
            await supabase.from('articles').insert({
                author_id: session.user.id,
                content: content,
                title: title,
                source: source
            })
            alert("Your article is uploaded !")
        } catch (error) {
            console.log(error)
        }
        setContent(null)
        setTitle(null)
        setSource(null)
    }

    return (
        <div class="globalWrapper">
            <div class="writeCommentWrapper">
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Title :</span>
                <textarea onChange={(e) => {
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
                <textarea onChange={(e) => {
                    (
                        setChar2(e.target.value.length + " (max 1000)"));
                    setContent(e.target.value);
                }}
                    maxlength='1000'
                    class="writeArticleContent"></textarea>
                <p class="countChar">{char2}</p>
                <br /><br />
                <span style={{ fontSize: '30px', fontWeight: '600' }}>Image source :</span>
                <textarea onChange={(e) => setSource(e.target.value)} class="writeArticleTitle"></textarea>
                <br />
                <button onClick={(e) => { postArticle() }} class="submitForm"></button>
            </div>
        </div>
    )
}
import supabase from "../../utils/supabase"
import Gravatar from "../../Components/Gravatar"
import { useEffect, useState } from "react"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { RealtimePresence } from "@supabase/supabase-js"
import UsernameCom from "../../Components/UsernameCom"

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



export default function Article({ post }) {
   const session = useSession()
   const [comments, setComments] = useState()
   const [char1, setChar1] = useState("0 (100 max)")
   const [char2, setChar2] = useState("0 (1000 max)")
   const [newCom, setNewCom] = useState()

   function countChar(val) {
      console.log(val)
      var str = "" + val
      var len = str.length
      console.log(len)
      return len
   }

   useEffect(() => {
      async function loadComments() {
         const { data: comments } = await supabase
            .from('comments')
            .select('*')
            .eq('article_id', post.id)
            .order('created_at', { ascending: false })

         setComments(comments)
      }
      loadComments()
   })

   async function deleteComment({ id }) {
      try {
         const { data } = await supabase
            .from('comments')
            .delete()
            .eq('id', id)
         alert("Your comment was deleted !")
      } catch (error) {
         console.log(error)
      }
   }

   async function postComment() {
      try {
         const { data } = await supabase
            .from('comments')
            .insert({
               author_id: session.user.id,
               content: newCom,
               created_at: new Date().toISOString(),
               article_id: post.id,
               author_email: session.user.email
            })
      } catch (error) {
         console.log(error)
      }
      setNewCom(null)
   }

   if (session) {
      return (
         <div style={{ minHeight: '81.3vh' }} class="articleWrapper">
            <p class="articleTitle">{post.title}</p>
            <div class="articleImage">
               <img src={post.source} class="articleImg" style={{ width: '600px', height: '600px' }}></img>
            </div>
            <div class="articleContent"> {post.content} </div>

            <div class="globalWrapper">
               <div class="commentWrapper">
                  {comments ? comments.map(comment => (
                     <div key={comment.id} class={comment.author_id === session.user.id ? "commentsAuthor" : "comments"}>
                        <div class="commentImage">

                           <Gravatar email={comment.author_email} />
                        </div>
                        <div class="commentContent">
                           <UsernameCom id={comment.author_id} /> <br /><br />
                           <span>{comment.content}</span> <br />
                           <span class="commentDate">{new Date(comment.created_at).getDate() + "/" + 
                           (new Date(comment.created_at).getMonth()+1) + "/" +
                           new Date(comment.created_at).getFullYear() + " | " + 
                           (new Date(comment.created_at).getHours()+1) + ":" + 
                           new Date(comment.created_at).getMinutes()}</span> <br />

                           {comment.author_id === session.user.id ?
                              <button onClick={() => deleteComment(comment)} class="commentsAuthorEditImage" ><img src="https://cdn-icons-png.flaticon.com/512/4662/4662653.png" ></img></button>
                              : <></>}
                           
                        </div>
                     </div>
                  )) : <></>}
               </div>

               <div class="writeCommentWrapper">
                  <textarea value={newCom || ''} onChange={(e) => setNewCom(e.target.value)} class="writeComment"></textarea>
                  <button onClick={() => postComment()} class="submitForm"><span>Post comment</span></button>
               </div>
            </div>

         </div >
      )
   } else {
      return (
         <div style={{ minHeight: '81.3vh' }} class="articleWrapper">
            <p class="articleTitle">{post.title}</p>
            <div class="articleImage">
               <img src={post.source} class="articleImg" style={{ width: '600px', height: '600px' }}></img>
            </div>
            <div class="articleContent"> {post.content} </div>

            <div class="commentWrapper">
               {comments ? comments.map(comment => (
                  <div key={comment.id} class="comments">
                     <div class="commentImage">

                        <Gravatar email={comment.author_email} />
                     </div>
                     <div class="commentContent">
                        <UsernameCom id={comment.author_id} /> <br /><br />
                        <span>{comment.content}</span> <br />
                        <span class="commentDate">{new Date(comment.created_at).getSeconds()}</span> <br />
                     </div>
                  </div>
               )) : <></>}

            </div>

            <div class="writeComment">

            </div>{comment.author_id === session.user.id ?
                              <button class="commentsAuthorEditImage" ><img src="https://cdn-icons-png.flaticon.com/512/3756/3756522.png" ></img></button>
                              : <></>}
         </div >
      )
   }
}




{/* <div class="writeArticle">
               <span style={{fontSize:'30px', fontWeight:'600'}}>Title :</span>
               <textarea onChange={(e) => (setChar1(e.target.value.length + " (max 100)"))} maxlength='100' class="writeArticleTitle"></textarea>
               <p class="countChar">{char1}</p>
               <br/><br/>
               <span style={{fontSize:'30px', fontWeight:'600'}}>Content :</span>
               <br/>
               <textarea onChange={(e) => (setChar2(e.target.value.length + " (max 1000)"))} maxlength='1000' class="writeArticleContent"></textarea>
               <p class="countChar">{char2}</p>
               <br/><br/>
               <span style={{fontSize:'30px', fontWeight:'600'}}>Image source :</span>
               <textarea class="writeArticleTitle"></textarea>
               
            </div>  */}
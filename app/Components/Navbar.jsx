import Link from "next/link";

function Navbar() {
   return (
      <div >
         <a class="anim-underline-fx" href="/" > HOME </a>    |
         <a class="anim-underline-fx" href="/createArticle" > CREATE ARTICLE </a>    |
         <a class="anim-underline-fx" href="/articles" > ARTICLES </a>    |
         <a class="anim-underline-fx" href="/contacts" > CONTACTS </a>
      </div>
   )
}

export default Navbar
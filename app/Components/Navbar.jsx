import Link from "next/link";

export default function Navbar(props) {
   return (
      <div >
         <a class={!props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx" } href="/" > HOME </a>    |
         <a class={!props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx" } href="/createArticle" > CREATE ARTICLE </a>    |
         <a class={!props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx" } href="/articles" > ARTICLES </a>    |
         <a class={!props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx" } href="/contacts" > CONTACTS </a>
      </div>
   )
}


import Link from "next/link";

function Navbar() {
   return (
      <div style={{ backgroundColor: 'rgb(197, 109, 2)' }}>
         <header>
            <div id="wsh">
               <a class="anim-underline-fx" href="/" > HOME </a>    |
               <a class="anim-underline-fx" href="/about" > ABOUT </a>    |
               <a class="anim-underline-fx" href="/articles" > ARTICLES </a>    |
               <a class="anim-underline-fx" href="/contacts" > CONTACTS </a>
            </div>
         </header>
      </div>
   )
}

export default Navbar
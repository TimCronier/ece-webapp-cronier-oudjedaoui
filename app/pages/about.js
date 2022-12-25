// pages/about.js

const t = (props) => {
   return (
      <div>
         {props == true ? 'zeb' : 'ok' }
      </div>
   )
}

export default function About() {
   return (
      <div>
         <h2>About us</h2>
         <t a = "true"/>
         <p>
            This project is being made by Timothée Cronier and Sami Ouedjani. We are students at ECE Paris
         </p>
      </div>
   )
}
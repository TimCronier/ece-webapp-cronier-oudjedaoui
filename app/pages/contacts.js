import zebi from "../Components/zebi"

export default function Contacts() {
   return (
      <div id="list" style = {{minHeight: '81.3vh'}}>
         <p>Contacts</p>
         <ul>
             <zebi username="wsh">d</zebi> 
            <li>Timothée Cronier - <strong>timothee.cronier@edu.ece.fr</strong></li>
            <li>Sami Ouedjani - <strong>sami.ouedjani@edu.ece.fr</strong></li>
         </ul>
      </div>
   )
}
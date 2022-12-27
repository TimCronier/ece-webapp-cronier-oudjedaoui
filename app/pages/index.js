import autoprefixer from "autoprefixer";
import React, { useState } from "react";


export default function Home() {

   const  [box, setBox] = useState("BOX 1")
   
   return (
      <div>
         <div class="introText">Punchologue est un média traitant toute l&apos;actualité dans le milieu du rap français. </div>
         <div style={{fontSize: '40px', fontWeight:'700', textAlign: "center"}}>Dernière vidéo</div> <br/>
         <div style={{margin: '50px auto', width: 'fit-content'}}>
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/HDxadEouqdw" title="3 Raisons d'aimer Hiver à Paris de Dinos : Culture Rap, Références et Punchlines !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </div>
   )
}





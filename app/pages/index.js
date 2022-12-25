import React, { useState } from "react";
import Menu from "../Components/Menu";


export default function Home() {

   const  [box, setBox] = useState("BOX 1")

   return (
      <div>
         <div id="introtext">Punchologue est un média traitant toute l&apos;actualité dans le milieu du rap français. </div>
         <div id="mainbox" class="clearfix">
            <div class="box">{box}</div>
            <div class="box">BOX 2</div>
            <div class="box"> <button onClick={() => setBox(prevState => prevState + " caca")}> add a caca</button> </div>
         </div>
         <c/>
      </div>
   )
}





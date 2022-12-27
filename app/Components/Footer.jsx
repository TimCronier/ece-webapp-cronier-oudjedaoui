function Footer(props) {
   return (
      <div class={!props.darkMode ? "darkText darkBg footDark" : " footLight lightText lightBg"}>
         <p>
            Site créé par Timothée Cronier et Sami Ouedjani
         </p>
      </div>
   )
}

export default Footer



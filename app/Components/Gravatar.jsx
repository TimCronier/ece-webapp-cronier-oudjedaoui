import MD5 from 'crypto-js/md5'
import { useSession } from '@supabase/auth-helpers-react'
import { useState } from 'react';







export default function Gravatar({ email }) {

  const [first, setFirst] = useState(true)
  const [src, setSrc] = useState()
  const [same, setSame] = useState()

  function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  async function sameImages() {
    const session = useSession()
    const a = new Image()
    a.crossOrigin = "anonymous"
    const b = new Image()
    b.crossOrigin = "anonymous"
    a.src = 'https://www.gravatar.com/avatar/' + MD5(email)
    b.src = 'https://www.gravatar.com/avatar/'

    // might need to wait until a and b have actually loaded, ignoring this for now
    const a_base64 = getBase64Image(a)
    const b_base64 = getBase64Image(b)

    if (a_base64 === b_base64) setSame(true)
    else setSame(false)
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max)

  }
  var icons = new Array("https://i.postimg.cc/J4D1jKx0/ze2.png", "https://i.postimg.cc/hG5nJdmT/ze3.png", "https://i.postimg.cc/GmnxC7Ss/ze4.png", "https://i.postimg.cc/nrjV014H/ze5.png")
  const i = getRandomInt(icons.length)

  if (first) {
    sameImages()
    setSrc(icons[i])
    setFirst(false)
  }

  if (same) {
    return (
      <img src={src} class="round"></img>
    )
  } else {
    return (
      <img src={"https://www.gravatar.com/avatar/"
        + MD5(email)}
        class="round"></img>

    )
  }

}


import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"


function Layout( {Children} ) {
  return (
    <div> 
        <Header/>
        <Navbar/>
        { Children }
        <Footer/>
    </div>
  )
}

export default Layout
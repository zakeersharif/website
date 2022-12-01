import { Fragment } from "react"
import Products from "../Products/Products"
import Faqs from "../Faqs/Faqs"
import Footer from "../Footer/Footer"
import Cards from "../Cards/Cards"
import Description from "../Description/Description"


const Home=()=>{
 return(
    <Fragment>
     <Description/>
      <Cards/>
    <Products/>
    <Faqs/>
      <Footer/>
    </Fragment>
 )
}
export default Home
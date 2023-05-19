import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getCategories } from "../api";
import Reviews from "./Reviews";

const Nav = () => {
 
const [categories, setCategories] = useState([])

useEffect(() => {
  getCategories().then((categories) =>{
    setCategories(categories)
  })
}, [])

useEffect(() => {
  
}, [])

console.log(categories)
 return (

  <div className="landing">
   <div>
    <ul>
      {categories.map((category, index) => {
        return <Link to="/reviews"><li key={index}>{category.slug}</li></Link>
      })}
    </ul>
   </div>
   <Link to="/reviews">
    
  </Link>
  <div className="landingContent"><Reviews/>
  </div>
  </div>
 )
}

export default Nav; 
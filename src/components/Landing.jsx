import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getCategories } from "../api";


const Nav = () => {
 
const [categories, setCategories] = useState([])

useEffect(() => {
  getCategories().then((categories) =>{
    setCategories(categories)
  })
}, [])

 console.log(categories)
 return (

  <div className="landing">
   <div>
    <ul>
      {}
    </ul>
   </div>
   <Link to="/reviews">
    <p>View all reviews</p>
    <p>View by category</p>
  </Link>
  </div>
 )
}

export default Nav; 
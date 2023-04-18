import { Link } from "react-router-dom"
import { useState } from "react";

const Nav = () => {
 const [category, setCategory] = useState("")

 return (
   <Link to="/reviews">
    <p>View all reviews</p>
  </Link>
 )
}

export default Nav; 
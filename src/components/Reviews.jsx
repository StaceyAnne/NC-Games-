import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Reviews = ( { categories }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); 
  const [sortCategory, setSortCategory] = useState(false)
  const [sortOrder, setSortOrder] = useState(false)
  const [order, setOrder] = useState(false)
  console.log(reviews[0], order)

  useEffect(() => {
    getReviews(category, order).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category, order]);

  const handleCategoryClick = () => {
    if (sortCategory) setSortCategory(false) 
    else setSortCategory(true)
    
  }

  const handleOrderClick = (event) => {
    if (sortOrder) setSortOrder(false)
    else setSortOrder(true) 
  }

const handleWindowClick = (event) => {
  if (event.target.value !== "button")  {
  setSortCategory(false)
   setSortOrder(false)
  }
  }

  

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <section onClick={handleWindowClick}>
      <div className="sortButtons">
      <div className="sortBy">
      <button className="sortCategory" value="button" onClick={handleCategoryClick}>Sort by category</button>
      {sortCategory && <div className="sortCategoryDropDown">
        <ul>
          <Link to="/reviews"><li key="default">all reviews</li></Link>
        {categories.map((category) => {
          return (
           <Link to={`/reviews/${category.slug}`}>
          <li>{category.slug}</li>
          </Link>)
        })}
        </ul>
      </div>}
      </div>
      <div className="orderBy">
      <button className="sort" value="button" onClick={handleOrderClick}>Sort by</button>
      {sortOrder && <div className="orderByDropDown">
        <ul>
          <li onClick={() => { setOrder()}}>Most recent</li>
          <li onClick={() => { setOrder('desc')}}>Oldest</li>
        </ul>
      </div>}
      </div>
      </div>
      <p>Showing: {(category || "all") + " reviews"}</p>
      <ul className="reviewList">
        {reviews.map((review) => {
          return (
           <li key={review.review_id}>
              <ReviewCard review={review}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;

import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";

const Reviews = ( { categories }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); 

  useEffect(() => {
    getReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <section>
      <div className="sortButtons">
      <div className="sortBy">
      <button className="sortCategory" >Sort by category</button>
      <div className="sortCategoryDropDown">
        {categories.map((category) => {
          
        })}
      </div>
      </div>
      <div className="orderBy">
      <button className="sort">Sort by</button>
      <div className="orderByDropDown"></div>
      </div>
      </div>
      <p>Showing: {(category || "all") + " reviews"}</p>
      <ul className="reviewList">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewCard review={review} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;

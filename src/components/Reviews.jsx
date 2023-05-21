import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); 
  console.log(category)


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
      <button className="sortCategory">Sort by cateogory</button>
      <button className="sort">Sort by</button>
      <p>Showing: all reviews</p>
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

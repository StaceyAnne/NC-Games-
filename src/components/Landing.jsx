import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";
import image from "./category.png";

const Nav = ({ categories, setCategories }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // need to refactor into promise all
  useEffect(() => {
    getReviews().then(({ reviews }) => {
      const topReviews = reviews.filter((review, index) => {
        return index <= 5;
      });
      setReviews(topReviews);
    });

    setLoading(false);
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="landing">
      <div>
        <ul className="sideBar">
          {categories.map((category, index) => {
            return (
              <Link to={`/reviews/${category.slug}`}>
                <li key={index}>
                  <div className="categoryItem">
                    <img src={image} className="catImage"></img>
                    {category.slug}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="landingContent">
        <Link to="/reviews">
          <button className="viewReviewsButton">View all reviews</button>
        </Link>
        <h3>Most recent reviews</h3>
        <ul className="landingContentList">
          {reviews.map((review) => {
            return (
              <li>
                <ReviewCard review={review} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

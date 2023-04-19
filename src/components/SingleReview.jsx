import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../api";
import { Link } from "react-router-dom";

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState("");
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setSingleReview(response);
      setLoading(false);
    });
  });

  if (loading) return <p>Loading...</p>;

  const date = new Date(singleReview.created_at);
  const newDate = date.toString().split("GMT");
  const formattedDate = newDate[0];
  const category = singleReview.category[0].toUpperCase() + singleReview.category.slice(1); 

console.log(singleReview)
  return (
    <div className="singleItem">
      <section className="singleReview">
        <h2>{singleReview.title}</h2>
        <div className="singleReviewBody">
          <img src={singleReview.review_img_url} alt={singleReview.title}></img>
     
     
          <p className="reviewContent">{singleReview.review_body}</p>
        
        </div>
        <p className="author">
          Written by: {<Link to="/users">{singleReview.owner}</Link>} on{" "}
          {formattedDate}
        </p>
        <p>Category: {category}</p>

        <div className="reviewInfo">
          <div className="voteContainer">
            <p>Votes: {singleReview.votes}</p>
            <form>
              <label htmlFor="vote">Add vote</label>
              <input type="number" name="vote"></input>
              <button>Submit vote</button>
            </form>
          </div>
          <div className="commentDiv">
            <p>{singleReview.comment_count} comments</p>
            <form>
              <label htmlFor="comment">Add a comment: </label>
              <input type="text" name="comment"></input>
              <button>Submit comment</button>
            </form>
          </div>
        </div>
        <Link to="/">
          <button className="backReviews">Back to reviews</button>
        </Link>
      </section>
    </div>
  );
};

export default SingleReview;

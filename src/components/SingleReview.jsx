import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getReviewById } from "../api";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState("");
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [commentSection, setCommentSection] = useState([]);
  const [commentShow, setCommentShow] = useState(false);

  useEffect(() => {
    getReviewById(review_id).then(
      (response) => {
        setSingleReview(response);
        setLoading(false);
      },
      [commentSection]
    );
  });

  const handleClick = () => {
    if (!commentShow) {
      setCommentShow(true);
    } else {
      setCommentShow(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  const category =
    singleReview.category[0].toUpperCase() + singleReview.category.slice(1);

  const formattedDate = formatDate(singleReview.created_at);

  return (
    <div className="singleItem">
      <section className="singleReview">
        <h2>{singleReview.title}</h2>
        <div className="singleReviewBody">
          <img src={singleReview.review_img_url} alt={singleReview.title}></img>
          <div className="imgReview">
            <p className="author">
              Written by: {<Link to="/users">{singleReview.owner}</Link>} on{" "}
              {formattedDate}
            </p>
            <p>Category: {category}</p>
            <p className="reviewContent">{singleReview.review_body}</p>
          </div>
        </div>
        <div className="reviewInfo">
          <div className="voteContainer">
            <p>Votes: {singleReview.votes}</p>
            <form>
              <label htmlFor="vote">Add vote</label>
              <input type="number" name="vote" className="voteBox"></input>
              <button>Submit vote</button>
            </form>
          </div>
          <div className="commentDiv">
            <p>{singleReview.comment_count} comments</p>
            <button className="commentLink" onClick={handleClick}>
              View all comments
            </button>
            <div className="allComments">
              <CommentCard
                review={singleReview.review_id}
                commentSection={commentSection}
                setCommentSection={setCommentSection}
                commentShow={commentShow}
              />
            </div>
          </div>
        </div>
        <Link to="/users">
          <button>Sign in here</button>
        </Link>
        <Link to="/">
          <button className="backReviews">Back to reviews</button>
        </Link>
      </section>
      <section className=""></section>
    </div>
  );
};

export default SingleReview;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getReviewById } from "../api";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";
import Votes from "./Votes";

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
        </div>
        <div className="imgReview">
          <p className="author">
            Written by: {<Link to="/users">{singleReview.owner}</Link>} on{" "}
            {formattedDate}
          </p>
          <p>Category: {category}</p>
        </div>
        <div className="reviewInfo">
          <Votes review={singleReview.review_id} votes={singleReview.votes} />
          <div className="commentDiv">
            <p>{singleReview.comment_count} comments</p>
            <a href="#commentSection">
              <button className="commentLink" onClick={handleClick}>
                View all comments
              </button>
            </a>
          </div>
        </div>
        <div className="content">
          <p className="reviewContent">{singleReview.review_body}</p>
        </div> 
        <Link to="/users">
          <button>Sign in here</button>
        </Link>
        <Link to="/">
          <button className="backReviews">Back to reviews</button>
        </Link>
        <div className="allComments" id="commentSection">
          <CommentCard
            review={singleReview.review_id}
            commentSection={commentSection}
            setCommentSection={setCommentSection}
            commentShow={commentShow}
          />
        </div>
      </section>
      <section className=""></section>
    </div>
  );
};

export default SingleReview;

import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../api";
import { Axios } from "axios";
import SingleReview from "../components/SingleReview";
import { formatDate } from "../utils";

const CommentCard = ({
  review,
  commentSection,
  setCommentSection,
  commentShow,
}) => {
  const [loading, setLoading] = useState(true);
  const [commentValue, setCommentValue] = useState("")

  useEffect(() => {
    getCommentsByReviewId(review).then(({ comments }) => {
      setCommentSection(comments);
      setLoading(false);
    });
  }, [commentShow]);

  function handleSubmit(event) {
    event.preventDefault()
    console.log("added comment");
  }

  if (loading) return <p>Loading....</p>;

  if (commentShow) {
    if (commentSection.length === 0) return <p>No comments to show</p>;
    return (
      <section className="commentBox">
        <ul className="commentList">
          <h4>Comments: </h4>
          {commentSection.map((comment) => {
            const formattedDate = formatDate(comment.comment_id);

            return (
              <li key={comment.comment_id} className="commentListItem">
                <p>
                  by {comment.author} at {formattedDate}
                </p>
                <p>"{comment.body}"</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
        <form>
          <label htmlFor="addComment">Add a comment: </label>
          {/* <input type="textbox" id='addComment'></input> */}
          <textarea></textarea>
          <button onClick={handleSubmit}>post comment</button>
        </form>
      </section>
    );
  }
};

export default CommentCard;

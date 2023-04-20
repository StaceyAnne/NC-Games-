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
  const [commentValue, setCommentValue] = useState("");
  const [newComment, setNewComment] = useState([]);
  // const [postingComment, setPostingComment] = useState(false)

  useEffect(() => {
    getCommentsByReviewId(review).then(({ comments }) => {
      setCommentSection(comments);
      setLoading(false);
    });
  }, []); /*[commentShow]*/

  function handleSubmit(event) {
    event.preventDefault();
    //setPostingComment(true)
    setCommentSection()
    console.log(event.target);
  }

  function handleText(event) {
    event.preventDefault();
    console.log(event.target.value);
    setCommentValue(event.target.value);
  }

  if (loading) return <p>Loading....</p>;
  //if (postingComment) return <p>posting comment.....</p>

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Add a comment: </label>
          <textarea
            name="commenttextArea"
            value={commentValue}
            id="comment"
            type="text"
            onChange={handleText}
          ></textarea>
          <button>post comment</button>
        </form>
      </section>
    );
  }
};

export default CommentCard;

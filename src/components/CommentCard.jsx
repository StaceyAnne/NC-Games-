import { useState, useEffect } from "react";
import { getCommentsByReviewId, postCommentByReviewId } from "../api";
import { formatDate } from "../utils";
import { useContext } from "react";
import { SignInContext } from "../contexts/SignIn";
const CommentCard = ({
  review,
  commentSection,
  setCommentSection,
  commentShow,
}) => {
  const [loading, setLoading] = useState(true);
  const [commentValue, setCommentValue] = useState("");
  const [newComment, setNewComment] = useState([]);
  const { user, setUser } = useContext(SignInContext);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getCommentsByReviewId(review).then(({ comments }) => {
      setCommentSection(comments);
      setLoading(false);
    });
  }, []);

  // handles new posted comment 

  function handleSubmit(event) {
    event.preventDefault();
    if (!user) {
      return setError(`You must be signed in to post a comment!`);
    }

    const userName = user.name;
    const postBody = { username: userName, body: commentValue };
    setMessage("Comment posting....")
    postCommentByReviewId(review, postBody).then((response) => {
        setMessage("Your comment has been successfully posted")
    }).catch(() => {
      setMessage("Error: Your comment was not succesfully posted. Please try again")
    });

  }


  function handleText(event) {
    event.preventDefault();
    setCommentValue(event.target.value);
  }

  if (loading) return <p>Loading....</p>;

  if (commentShow) {
    return (
      <section className="commentBox">
        <ul className="commentList">
          <h4>Comments: </h4>
          {commentSection.length <= 0 && (
            <p className="no comments">No comments to show</p>
          )}
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
            placeholder={message}
          ></textarea>
          <button>post comment</button>
          <p className="errorMessage">{error}</p>
        </form>
      </section>
    );
  }
};

export default CommentCard;

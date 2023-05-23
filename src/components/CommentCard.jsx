import { useState, useEffect } from "react";
import { getCommentsByReviewId, postCommentByReviewId, deleteCommentById } from "../api";
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
  const { user, setUser } = useContext(SignInContext);
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState("Add comment....");
  
 let userImage = ""; 

  if (user) {
    userImage = user.avatar
  }



  useEffect(() => {
    getCommentsByReviewId(review).then(({ comments }) => {
      setCommentSection(comments);
      setLoading(false);
    });
  }, [commentSection, review, setCommentSection]);


  // handles new posted comment 

  function handleSubmit(event) {
    event.preventDefault();
    if (!user) {
      return setError(`You must be signed in to post a comment!`);
    }
    const userName = user.name;
    const postBody = { username: userName, body: commentValue };
    setPlaceholder("Posting comment...")
    postCommentByReviewId(review, postBody).then((response) => {
      setCommentValue("")
     setPlaceholder("add comment...")
    }).catch(() => {
      setError("Error: Your comment was not succesfully posted. Please try again")
    });
  }

  function handleDelete(event) {
    const commentId = event.target.value; 
    console.log(commentId)
    deleteCommentById(commentId).then(() => {
      return; 
    })
  }


  function handleText(event) {

    setCommentValue(event.target.value);
  }

  if (loading) return <p>Loading....</p>;


    if (commentShow) {
            if (commentSection.length === 0) return <p>No comments to show</p>
       return(
        <section className="commentBox">
          <form onSubmit={handleSubmit}>
          <img src={userImage} className="commentImg"></img>
          <label htmlFor="comment">
          </label>
          <input
            name="commenttextArea"
            type="text"
            value={commentValue}
            id="comment"
            className="commentTextBox"
            onChange={handleText}
            placeholder={placeholder}
          ></input>
         <button>post comment</button>
        </form>
          <p className="errorMessage">{error}</p>
       <ul className="commentList">
        <h4>Comments: </h4>
        {commentSection.map((comment) => {
      
            const formattedDate = formatDate(comment.created_at)
      
            return <li key={comment.comment_id} className="commentListItem">
                <p>by {comment.author} at {formattedDate}</p>
                <p>"{comment.body}"</p>
                <p>Votes: {comment.votes}</p>
                {user && (comment.author == user.name) && <button value={comment.comment_id} onClick={handleDelete}>Delete</button>}
              </li>
        }
            )}
        </ul>
        
      </section>
    )
        }
};

export default CommentCard;

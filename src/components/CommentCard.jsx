
import { useState, useEffect } from "react";
import { getAllComments } from "../api";
import { Axios } from "axios";
import SingleReview from '../components/SingleReview'
import { formatDate } from "../utils";


const CommentCard = ({review, commentSection, setCommentSection, commentShow}) => {
    

    useEffect(() => {
        getAllComments(review).then(({ comments } ) => {
       
           setCommentSection(comments)
       }) 
    }, [commentShow])

    if (commentShow) {

       return(
        <section className="commentBox">
       <ul className="commentList">
        <h4>Comments: </h4>
        {commentSection.map((comment) => {
            const formattedDate = formatDate(comment.comment_id)
           
            return <li key={comment.comment_id} className="commentListItem">
                <p>by {comment.author} at {formattedDate}</p>
                <p>"{comment.body}"</p>
                <p>Votes: {comment.votes}</p>
                </li>
        })}
       </ul>
       <form>
        <label htmlFor="addComment">Add a comment: </label>
        <input type="textbox" id='addComment'></input>
        <button>Submit comment</button>
       </form>
       </section>
       )
    }
 
}

export default CommentCard; 
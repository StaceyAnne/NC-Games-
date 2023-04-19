// {/* <form>
// <label htmlFor="comment">Add a comment: </label>
// <input type="text" name="comment"></input>
// <button>Submit comment</button>
// </form> */}
import { useState, useEffect } from "react";
import { getAllComments } from "../api";
import { Axios } from "axios";

const CommentCard = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getAllComments((comments) => {
            console.log("comments", comments)
        })
    })
}

export default CommentCard; 
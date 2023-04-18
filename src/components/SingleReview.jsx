import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewById } from '../api';


const SingleReview = () => {
    const [singleReview, setSingleReview] = useState("")
    const { review_id } = useParams();

   useEffect(() => {
    getReviewById(review_id).then((response) => {
        setSingleReview(response)
})
   })
   console.log(singleReview)
    return (
        <section className="singleReview">
    <h3>{singleReview.title} by {singleReview.owner}</h3>
    <img src={singleReview.review_img_url} alt={singleReview.title}></img>
    <p>{singleReview.review_body}</p>
    <p>Votes: {singleReview.votes}</p>
    <form>
        <label htmlFor="vote">Add vote</label>
        <input type='number' name="vote"></input>
        <button>Submit vote</button>
    </form>
    <p>{singleReview.comment_count} comments</p>
    <form>
        <label htmlFor="comment">Add a comment: </label>
        <input type="text" name="comment"></input>
        <button>Submit comment</button>
    </form>
    <button>Previous review</button>
    <button>Next review</button>
    </section>
    )
}

export default SingleReview; 
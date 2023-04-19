import { Link } from 'react-router-dom'; 

const ReviewCard = ({ review }) => {
   

    return (
       //<Link to=`/reviews/:{review.review_id}`>
        <section className="reviewCard">
        <h3>{review.title}</h3>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>Written by: {review.owner}</p>
        <button>View Review</button>
        </section>
       
    )
}

export default ReviewCard; 
import { Link } from 'react-router-dom'; 

const ReviewCard = ({ review }) => {
    const date = new Date(review.created_at); 
    console.log(review)
      const newDate = date.toString().split('GMT'); 
      const formattedDate = newDate[0]

    return (
       <Link to={`/review/${review.review_id}`}>
        <section className="reviewCard">
        <h3>{review.title}</h3>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>Written by: {review.owner}</p>
        <p>Created at: {formattedDate}</p>
        <button>View Review</button>
        </section>
        </Link>
    )
}

export default ReviewCard; 
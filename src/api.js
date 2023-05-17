import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-1onq.onrender.com/api",
});

export const getReviews = (category) => {
  if (category) {
    return gamesApi.get(`/reviews/sort_by=${category}`).then(({ data }) => {
      return data;
    });
  } else {
    return gamesApi.get("/reviews").then(({ data }) => {
      return data;
    });
  }
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data: { review } }) => {
    return review;
  });
};

export const getCommentsByReviewId = (review) => {
  return gamesApi.get(`/reviews/${review}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVoteByReviewId = (review, vote) => {
  const input = { inc_votes: vote}
  return gamesApi.patch(`/reviews/${review}`, input).then(({data: {review: { votes }}}) => {
    return votes; 
  })
}


export const postCommentByReviewId = (review_id, body) => {
console.log(JSON.stringify(body))
 return gamesApi.post(`/reviews/${review_id}/comments`, body).then((response) => 
 {
  console.log(response)
   return response; 
 })

}

export const getUsers = () => {
  return gamesApi.get('/users').then(( { data: {rows}}) => {
    return rows; 
    
  })
}



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
    return gamesApi.get('/reviews').then(({ data }) => {
        return data; 
       
    });
  }
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
      const { review } = data; 
      return review; 

  })
}

export const getAllComments = (review) => {
  return gamesApi.get(`/reviews/${review}/comments`).then(({ data }) => {
    return data; 
  })
}
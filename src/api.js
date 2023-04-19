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

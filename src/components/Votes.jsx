import { useState } from "react";
import { patchVoteByReviewId } from "../api";

const Votes = ({ review, votes }) => {
    const [voteCount, setVoteCount] = useState(votes); 
    const [error, setError] = useState(""); 

    const handleAddVote = () => {
        setError("")
        setVoteCount(() => voteCount + 1) 
    
            patchVoteByReviewId(review, 1).then((result) => {
            }).catch(() => {
                setError("vote failed")
                setVoteCount((voteCount) => voteCount-1)
             })
    }

    const handleDownVote = () => {
        setError("")
        setVoteCount(() => voteCount - 1) 
        patchVoteByReviewId(review, -1).then((result) => {
            console.log(result)
        }).catch(() => {
           setError("vote failed")
           setVoteCount((voteCount) => voteCount-1)
        })
    }

    return (
    <div className="voteDiv">
        
              <p>Add vote:{error}</p>
              <div className="addVoteArrows">
              <button className="addVote" onClick={handleAddVote}>&#8679;</button>
            <p className="voteCount"><span className="star">&#11088;</span> {voteCount} votes </p> 
              <button className="downVote" onClick={handleDownVote}>&#8681;</button>
              </div>
          </div>
    )
}

export default Votes; 
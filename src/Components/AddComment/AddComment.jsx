import { useState } from "react";
import user3Img from "/Images/image-maxblagun.png";
import CommentStore from "../../Store/CommentStore";
import './AddComment.css'
function AddComment() {
    const {AddNewComment}=CommentStore()
    const [inputvalue,setinputvalue]=useState("")
    function handleSendPost() {
      const newComment = {
          id: Date.now(), // Unique ID for the new comment
          count: 0,
          likes: 0,
          comments: [],
          userimg: user3Img,
          username: "ammar salim", // Replace with the actual username if needed
          userpost: inputvalue,
      };
      AddNewComment(newComment);
      setinputvalue("");
  }
    function handleOnchange(event){
        setinputvalue(event.target.value);
        
    }
  return (
    <div id='newpost'>
      <img src={user3Img}></img>
      <input placeholder="Send New Post"value={inputvalue} onChange={handleOnchange} ></input>
      <button onClick={handleSendPost}>Send</button>
    </div>
  );
}
export default AddComment;

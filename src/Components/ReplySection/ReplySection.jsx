import { useState } from "react";
import "./ReplySection.css";
import useCommentStore from "../../Store/CommentStore";
function ReplySection({ commentId,userImg, hideReplySection }) {
  const [replyText, setReplyText] = useState("");
  const { AddReply, Arrayofcomments } = useCommentStore();
  function handleAddReply() {
  // AddReply(replyText, commentId);
  
    console.log(`Reply to comment ${commentId}: ${replyText}`);

    setReplyText("");
    hideReplySection();
  }

  function handleOnChange(event) {
    setReplyText(event.target.value);
  }

  return (
    <div className="replySection">
      <img src={userImg} alt="User" />
      <input
        placeholder="Add a reply"
        value={replyText}
        onChange={handleOnChange}
      />
      <button onClick={handleAddReply}>Reply</button>
    </div>
  );
}

export default ReplySection;

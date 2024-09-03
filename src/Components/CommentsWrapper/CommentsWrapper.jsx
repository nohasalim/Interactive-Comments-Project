import useCommentStore from "../../Store/CommentStore";
import plusImg from "/Images/icon-plus.svg";
import minusImg from "/Images/icon-minus.svg";
import replyImg from "/Images/icon-reply.svg";
import "./CommentsWrapper.css";
import AddComment from "../AddComment/AddComment";
import ReplySection from "../ReplySection/ReplySection";
import { useState } from "react";

function CommentsWrapper() {
  const { Arrayofcomments, inc, dec, DeleteCommentByName ,AddReply} = useCommentStore();
  const [replyDivs, setReplyDivs] = useState({});

  function toggleReplyDiv(id) {
    setReplyDivs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  

  return (
    <div>
      {Arrayofcomments.map((comment) => {
        function handleDec() {
          return dec(comment.id);
        }
        function handleInc() {
          return inc(comment.id);
        }
        function handleDelByName() {
          return DeleteCommentByName(comment.username);
        }
        function handleReplyPost() {
          toggleReplyDiv(comment.id);
        }

        return (
          <div key={comment.id} className="WrapperDiv">
            <div className="post">
              <div id="counterDiv">
                <button onClick={handleInc}>
                  <img src={plusImg} alt="Increase count" />
                </button>
                <span>{comment.count}</span>
                <button onClick={handleDec}>
                  <img src={minusImg} alt="Decrease count" />
                </button>
              </div>
              <div id="mainDiv">
                <div id="userDiv">
                  <div id="div1">
                    <img src={comment.userimg} alt="User" />
                    <span>{comment.username}</span>
                  </div>

                  <div id="div2">
                    {comment.username === "ammar salim" ? (
                      <button onClick={handleDelByName}>Delete</button>
                    ) : null}

                    <img src={replyImg} alt="Reply" />
                    <button onClick={handleReplyPost}>Reply</button>
                  </div>
                </div>
                <p>{comment.userpost}</p>
              </div>
            </div>
            {replyDivs[comment.id] && (
              <ReplySection 
                commentId={comment.id} 
                userImg={comment.userimg} 
                hideReplySection={() => toggleReplyDiv(comment.id)} 
              />
            )}
          </div>
        );
      })}
      <AddComment />
    </div>
  );
}

export default CommentsWrapper;

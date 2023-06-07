import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../data.js";
import { useState } from "react";
import Like from '../../assets/like.png';
import Hearth from '../../assets/heart.png';



function Post({ photo, desc, like, comment, userId, date }) {
  const [liked,setLiked]=useState(like);
  const [isLiked,setIsliked]=useState(false);

  const handleLike=()=>{
    setLiked(isLiked ? liked-1 : liked+1);
    setIsliked(!isLiked);
  }
  return (
    <div className="post_Container">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={Like} alt="" className="likeIcon" onClick={handleLike} />
            <img src={Hearth} alt="" className="likeIcon" onClick={handleLike} />
            <span className="postLikeCounter">{liked} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

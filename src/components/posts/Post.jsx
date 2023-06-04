import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Post() {
  return (
    <div className="post_Container">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="src\assets\person\1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">Jane Doe</span>
            <span className="postDate">5 May</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">It is my first post</span>
          <img src="src\assets\post\1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="src\assets\like.png" alt="" className="likeIcon" />
            <img src="src\assets\heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

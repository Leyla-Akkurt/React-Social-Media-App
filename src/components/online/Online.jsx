import "./online.css";

function Online({profilePicture,username}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarImageContainer">
        <img
          src={profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="circle"></span>
      </div>
      <span className="rightbarUserName">{username}</span>
    </li>
  );
}

export default Online;

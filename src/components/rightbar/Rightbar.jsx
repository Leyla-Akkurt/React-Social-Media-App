import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar_container">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="src\assets\gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pole Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="src\assets\ad.png" alt="" className="rightbarAd" />
        <ul className="rightbarFriends">
          <span className="rightbarFriendsText">Online Friends</span>

          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarImageContainer">
              <img
                src="src\assets\person\3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="circle"></span>
            </div>
            <span className="rightbarUserName">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;

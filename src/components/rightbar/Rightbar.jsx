import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";
import CloseFriend from './../closeFriend/CloseFriend';
import UserFriends from './../userFriends/UserFriends';

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="src\assets\gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pole Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="src\assets\ad.png" alt="" className="rightbarAd" />
        <ul className="rightbarFriends">
          <span className="rightbarFriendsText">Online Friends</span>
          {Users.map((user) => (
            <Online key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="InfoKey">City: </span>
            <span className="InfoValue">Ankara</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="InfoKey">From: </span>
            <span className="InfoValue">Mardin</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="InfoKey">Relationship: </span>
            <span className="InfoValue">Single</span>
          </div>

        <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">

            {Users.map(user=>(
              <UserFriends key={user.id} {...user}/>
            ))}
        </div>


        </div>
      </>
    );
  };

  return (
    <div className="rightbar_container">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;

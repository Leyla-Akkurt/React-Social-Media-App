import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";
import UserFriends from './../userFriends/UserFriends';
import Gift from '../../assets/gift.png';
import Ad from '../../assets/ad.png';

function Rightbar({ profile }) {
  const [first,second,...newUser]=Users;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={Gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pole Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={Ad} alt="" className="rightbarAd" />
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
          </div>
        <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">

            {newUser.map(user=>(
              <UserFriends key={user.id} {...user}/>
            ))}
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

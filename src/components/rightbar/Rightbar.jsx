import "./rightbar.css";
import {Users} from '../../data';
import Online from "../online/Online";

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
            {Users.map( user=>(
               <Online key={user.id} {...user}/>
            )

            )}

        </ul>
      </div>
    </div>
  );
}

export default Rightbar;

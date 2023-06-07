import "./profile.css";
import Topbar from "./../../components/topbar/Topbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Feed from "./../../components/feed/Feed";
import Rightbar from "./../../components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile_Container">
        <div className="profileLeft">
          <Sidebar />
        </div>
        <div className="profileRight">
          <div className="profileRight_Top">
            <div className="profileCover">
              <img src="src\assets\post\3.jpeg" alt="" className="coverImg" />
              <img src="src\assets\person\6.jpeg" alt="" className="userImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dilruba Akkurt</h4>
              <span className="profileDesc">Hello My Friends!</span>
            </div>
          </div>
          <div className="profileRight_Bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

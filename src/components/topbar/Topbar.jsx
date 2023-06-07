import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TopbarImg from "../../assets/person/1.jpeg";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft"> ZED Social</div>
      <div className="topbarCenter">
        <div className="topbarItem">
          <SearchIcon className="searchIcon" />
          <input
            className="topbarInput"
            type="search"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIcon">
            <PersonIcon className="topbarIconItem" />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIcon">
            <ChatIcon className="topbarIconItem" />
            <span className="topbarIconBadge">3</span>
          </div>

          <div className="topbarIcon">
            <NotificationsIcon className="topbarIconItem" />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <div>
          <img src={TopbarImg} className="topbarImg" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;

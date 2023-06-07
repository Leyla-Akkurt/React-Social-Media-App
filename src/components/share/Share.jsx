import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ShareImg from '../../assets/person/1.jpeg'

function Share() {
  return (
    <div className="share_Container">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={ShareImg}
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="What's in your mind Leyla? "
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon className=" shareIcon mediaIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
              <LabelIcon className="shareIcon labelIcon" />
              <span className="shareOptionText">Tags</span>
            </div>

            <div className="shareOption">
              <LocationOnIcon className="shareIcon locationIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotionsIcon className="shareIcon emotionIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;

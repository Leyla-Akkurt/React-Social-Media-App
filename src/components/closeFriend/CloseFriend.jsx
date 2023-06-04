import './closeFriend.css';

function CloseFriend({profilePicture,username}) {
  return (
    <li className="sidebar_friend">
    <img
      src={profilePicture}
      alt=""
      className="sidebar_friendImg"
    />
    <span className="sidebar_FriendName">{username}</span>
  </li>
  )
}

export default CloseFriend

import './userFriends.css';

function UserFriends({profilePicture,username}) {
  return (
    <div className="rightbarFollowing">
     <img
              src={profilePicture}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{username}</span>
    </div>
  )
}

export default UserFriends

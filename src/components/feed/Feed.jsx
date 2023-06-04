
import Post from '../posts/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from '../../data.js';

function Feed() {

  return (
    <div className='feed_container'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map(post=>(
          <Post key={post.id} {...post}/>
        ))}

      </div>
    </div>
  )
}

export default Feed

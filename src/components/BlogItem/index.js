// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem=props=>{
    const {blogItem}=props
    const {id,title,imageUrl,avatarUrl,author,topic}=blogItem

    return(
      <li>
        <Link to={`/blogs/${id}`}>
        <div className="item-details-container">
          <img src={imageUrl} className="topic-image" alt={`items ${id}`}/>
          <div className="text-container">
            <p className="Topic">{topic}</p>
            <h1 className="heading">{title}</h1>
          <div className="avatar-author-container">
          <img src={avatarUrl} className="avatar-image" alt={`avatar ${id}`}/>
          <p className="Author">{author}</p>
        </div>       
      </div>
      </div>
      </Link>
    </li>
    )
}

export default BlogItem


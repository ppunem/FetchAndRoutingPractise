// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component{
    state ={fetchedBlogItem:{},isLoading:true}

    componentDidMount(){
        this.getBlogItemDetails()
    }

    getBlogItemDetails=async()=>{
        const {match}=this.props
        const {params}=match
        const {id}=params

        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data=response.json()
        const updatedData={
            title: data.title,
            imageUrl: data.image_url,
            content: data.content,
            avatarUrl: data.avatar_url,
            author: data.author,
        }

        this.setState({fetchedBlogItem:updatedData,isLoading:false})
    }

    renderBlogItemDetails=()=>{
        const {fetchedBlogItem}=this.state
        const {title,imageUrl,content,avatarUrl,author}=fetchedBlogItem

        return(
            <div className="main-container">
              <h1 className="title-text">{title}</h1>
              <div className="Avatar-Author-container">
                <img src={avatarUrl} className="Avatar-image" alt="avatar"/>
                <p className="Author-Text">{author}</p>
              </div>
              <img src={imageUrl} className="Topic-Image" alt="Image"/>
              <p className="Content">{content}</p>
            </div>
        )
    }

    render(){
        const {isLoading}=this.state
        return(
            <>
             {isLoading?(<Loader type="TailSpin" color="00BFFF" height={50} width={50}/>):(this.renderBlogItemDetails())}
            </>
        )
    }
}

export default BlogItemDetails

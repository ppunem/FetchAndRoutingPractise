// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component{
    state={blogItems:[],blogItemsLoading:true}

    componentDidMount(){
        this.renderBlogItems()
    }

    renderBlogItems=async ()=>{
        const response=await fetch("https://apis.ccbp.in/blogs")
        const data= await response.json()
        const formattedData=data.map(eachItem=>({
            id: eachItem.id,
            title: eachItem.title,
            imageUrl: eachItem.image_url,
            avatarUrl: eachItem.avatar_url,
            author: eachItem.author,
            topic: eachItem.topic,
        }))
        this.setState({blogItems:formattedData,blogItemsLoading:false})
    }

    render(){
        const {blogItems,blogItemsLoading}=this.state

        return(
            <div className="blogItems-container">
            {blogItemsLoading?(<div data-testid="loader"><Loader type="TailSpin" color="#00bfff" height={50} width={50} /></div>):(blogItems.map(eachBlogItem=>
                <BlogItem blogItem={eachBlogItem} key={eachBlogItem.id}/>
            ))}
            </div>
        )

    }
}

export default BlogList

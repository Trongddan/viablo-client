import React from 'react'
import {Link} from "react-router-dom"
import banner from "../static/image/banner.jpg"
import {FaEye,FaComment} from "react-icons/fa"
const Post = ({id,name,date,username,tags,numOfCmt,numOfLike,avatar}) => {
    return (
        <div className="post">
        <div className=" py-3 row col-lg-12">
        <a className="col-sm-1 col-12">
            <img className="avatar_user_post_list rounded-circle" src={`http://localhost:8080/AvatarImage/${avatar}`} alt=""/>
        </a>
        <div className="col-sm-11 col-12">
            <div className="user_time_list_post row">
            <p className="col-sm-3 col-3"><a className="name_user_list_post" href="">{username}</a></p>
            <p className="col-sm-9 col-9 date_post">{date}</p>
            </div>
            <div className="row  mb-2">
                <div className=" col-sm-12 name_post_list mb-2">
                <Link className="name_post"  to={`/post/${id}`}>
                   {name}
                </Link>
                </div>
                <div className="col-sm-12 row mb-2">
                    {
                        tags.map((tag,index)=> <a key={index} href="#" className="ml-3 mr-4 badge badge-secondary">{tag.name}</a>)
                    }
                </div>
                <div className="col-sm-12 margin_icon_seen_cmt">
                    <div className="mr-4 text-secondary">
                    <FaEye className="mr-1"/>
                    {numOfLike}
                    </div>
                    
                    <div className="mr-4 text-secondary">
                    <FaComment className="mr-1"/>
                    {numOfCmt}
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
        </div>
      

    )
}

export default Post

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostByUser } from "../actions/actionPost";
import {Link} from "react-router-dom"
import { FaEye, FaComment } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import PostDetail from "../pages/PostDetail"
const RelatePost = ({ user, post_id,post_tag }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(PostByUser(user.id,1));
    }
  }, [user]);
  const { posts } = useSelector((state) => state.postByUser);



  return (
    <>

    <div className="col-sm-12  text-white ">
      <div className="title_post_detail">
        <p className="ml-2 text-center justify-content-center ">
          Bài viết liên quan
        </p>
      </div>
      <div className="border-top mt-2"></div>
      {post_tag?.length? post_tag.map(tag =><a key={tag.id} className=" mt-2 mb-2 mr-2 badge badge-secondary p-2" href="">{tag.name}</a>):null}
      
      <div className="border-top"></div>
      {posts?.length &&
        posts.map((post) => (
          <div key={post.id} className="row relativePost mt-3 border-bottom">
            <Link className="col-sm-12" to={`/post/${post.id}`}>
              {''}
              {post.name}
            </Link>
            <div className="col-sm-12 margin_icon_seen_cmt mt-2 ">
              <div className="mr-4  text-secondary">
                <FaEye className="mr-1"/>
                {post.numOfLike}
              </div>

              <div className="mr-4 text-secondary">
                <FaComment className="mr-1"/>
                {post.numOfCmt}
              </div>

              <div className="mr-4 text-secondary">
                <ImCheckboxChecked className="mr-1"/>
                17
              </div>
            </div>
            <a className="col-sm-12 text-secondary mb-2 mt-2" href="">
              Doan Trong Dan
            </a>
          </div>
        ))}
    </div>
   </>
  );
};

export default RelatePost;

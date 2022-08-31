import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom"
import Post from "./Post";
import { searchPost, UserDeletePost } from "../actions/actionPost";
import { RiDeleteBackFill } from "react-icons/ri";
const ListPostSearch = ({ match }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
        dispatch(searchPost(search))
  };
  const getSearchPost = useSelector((state) => state.searchPost);
  const { posts } = getSearchPost;

  let arrayPath = window.location.pathname.split("/");
 
  useEffect(() => {
    dispatch(searchPost(arrayPath[arrayPath.length-1]));
  }, [arrayPath[arrayPath.length-1]]);


  return (
    <>
      <div className="search-in form-group row mt-3 ">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mt-2 col-sm-7 "
        />
        
        <button
          onClick={handleSearch}
          className="btnSearch btn mt-2 btn-success col-sm-2 "
        >
          Search
        </button>
      </div>
      <div className="col-sm-11 mt-4 contentWrapper">
        <div className="row mb-3">
          <h6 className="col-sm-9">Kết quả tìm kiếm</h6>
        </div>

        {posts ? (
          posts.map((post, index) => (
            <div key={index} className="row">
              <div className="col-sm-11 user_Post_bg">
                <Post
                  id={post.id}
                  avatar={post.user.avatar}
                  name={post.name}
                  date={post.date}
                  username={post.user.username}
                  tags={post.tag}
                  numOfCmt={post.numOfCmt}
                  numOfLike={post.numOfLike}
                />

                {/* <RiDeleteBackFill
                    onClick={(e) => clikDelete(post.id)}
                    className="btnxoa  "
                  /> */}
              </div>
            </div>
          ))
        ) : (
          <p>Không có bài viết</p>
        )}
      </div>
    </>
  );
};

export default ListPostSearch;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Post from "./Post";
import { PostByUser, UserDeletePost } from "../actions/actionPost";
import { RiDeleteBackFill } from "react-icons/ri";
const Mylist = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostByUser(match.params.id,2));
  }, []);

  const getPostByUser = useSelector((state) => state.postByUser);

  const {
    loading: loadingDeleteCart,
    success: successDeleteCart,
    error: errorDeleteCart,
  } = useSelector((state) => state.deletePost);
  useEffect(() => {
    if (!loadingDeleteCart && (successDeleteCart || errorDeleteCart)) {
      dispatch({
        type: "USER_DELETE_POST_RESET",
      });
    }
  }, [loadingDeleteCart]);

  //load lai list post khi co su thay doi trang thai cua error hoac delete
  useEffect(() => {
    if (errorDeleteCart || successDeleteCart)
      dispatch(PostByUser(match.params.id));
  }, [errorDeleteCart, successDeleteCart]);

  const { posts, error } = getPostByUser;
  const clikDelete = (id) => {
    Swal.fire({
      title: "Bạn có muốn xóa không?",
      text: "Không thể khôi phục được thao tác này",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      width:"380px"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(UserDeletePost(id));
        Swal.fire("Đã xóa!", "Bài viết của bạn đã được xóa", "Thành công");
      }
    });
  };

  return (
    <>
      <div className="col-sm-11 mt-4 contentWrapper">
        <div className="row mb-3">
          <h6 className="col-sm-9">Bài viết của tôi</h6>
        </div>

        {posts? (
          posts.map((post, index) => (
            
              <div key={index} className="row">
                <div  className="col-sm-11 user_Post_bg">
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

                  <RiDeleteBackFill
                    onClick={(e) => clikDelete(post.id)}
                    className="btnxoa  "
                  />
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

export default Mylist;

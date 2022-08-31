import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment,AddComment,UpdateCMT} from "../actions/actionPost";
import Banner from "../static/image/banner.jpg";
import Comment from "./Comment";
const ListComment = ({post_id}) => {

    const {
        loading: loadingAddCmt,
        success: successAddcmt,
        error: errorAddcmt,
      } = useSelector(state=>state.addComment);

    useEffect(() => {
        if (!loadingAddCmt && (successAddcmt || errorAddcmt)) {
          dispatch({
            type: 'ADD_COMMENT_RESET',
          });
        }
      }, []);
      useEffect(()=>{
        if(successAddcmt || errorAddcmt)
        dispatch(getComment(post_id))
        
      },[successAddcmt,errorAddcmt])



    const dispatch = useDispatch();
    const [content,setContent] = useState("");
  const userDetail = useSelector((state) => state.userLogin);
  const { userInfo } = userDetail;
  const getcmt = useSelector((state) => state.getComment);
  const { comments } = getcmt;
const crateComment = (e)=>{
    e.preventDefault();
    dispatch(AddComment({
        content:content,
        postId:post_id,
        userId:userInfo.id
    }));
    dispatch(UpdateCMT(post_id,1))
    setContent("");
}
  return (
    <div className="card">
      <div className="m-4">
        {comments?.length ? (
          comments.map((cmt) => (
            <Comment
              key={cmt.id}
              post_id={post_id}
              cmtid={cmt.id}
              user_id = {cmt.user.id}
              name={cmt.user.username}
              content={cmt.content}
              avatar={cmt.user.avatar}
            />
          ))
        ) : (
          <p>Không có bình luận nào cho bài viết này...</p>
        )}
        {userInfo?
        <div className="m-1 row">
          <img
            className="avatar_user_post_list rounded-circle"
            src={`http://localhost:8080/AvatarImage/${userInfo.avatar}`}
            alt=""
          />
          <div className="mt-3 ml-3">
            <form onSubmit={crateComment} action="">
              <textarea 
              value={content}
                required
                className="form-control fieldCmt"
                cols="80"
                rows="3"
                type="text"
                onChange={e=>{setContent(e.target.value)
                }}
              > 
             
              </textarea>
              <button type="submit" className="mt-3 float-right btn btn-secondary">
                Bình luận
              </button>
            </form>
          </div>
        </div>
        :<p>Vui lòng đăng nhập để bình luận...</p>}
      </div>
    </div>
  );
};

export default ListComment;

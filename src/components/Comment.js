import React,{useEffect} from "react";
import { FiMoreVertical } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { DeleteComment,getComment,UpdateCMT} from "../actions/actionPost";
import { useDispatch, useSelector } from "react-redux";
const Comment = ({ cmtid, content, avatar, name, user_id,post_id }) => {
  const userDetail = useSelector((state) => state.userLogin);
  const { userInfo } = userDetail;
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.deleteCmt);
  const clickXoaCmt = (e) => {
    e.preventDefault();
    if (window.confirm("Bạn có muốn xóa bình luận này không ?")) {
      dispatch(DeleteComment(cmtid, userInfo.id));
    }
  };

  useEffect(() => {
    if (!loading && (success || error)) {
      dispatch({
        type: 'DELETE_COMMENT_RESET',
      });
    }
  }, [loading]);

  useEffect(()=>{
    if(error || success){
      dispatch(getComment(post_id));
      dispatch(UpdateCMT(post_id,-1))
    }
  },[error,success])

  return (
    <div className="m-1 row">
      <div className="col-sm-1 col-1">
        <img
          className="avatar_user_post_list rounded-circle"
          src={`http://localhost:8080/AvatarImage/${avatar}`}
          alt=""
        />
      </div>
      <div className="col-sm-10 ml-2  col-10">
        <div className="row">
          <h6 className="akk col-sm-6 col-6">{name}</h6>
          {userInfo && user_id == userInfo.id && (
            <div onClick={clickXoaCmt} className="moreCommentButton col-sm-5 col-5 ">
              <FiMoreVertical className="float-right" />
            </div>
          )}
          <p className="col-sm-12 text-justify">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

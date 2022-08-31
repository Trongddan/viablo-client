import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostDetails, PostByUser, getComment,UpdateView} from "../actions/actionPost";
import DetailPost from "../components/DetailPost";
import ListComment from "../components/ListComment";
import RelatePost from "../components/RelatePost";

const PostDetail = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // setInterval(()=>{
    //   console.log(match.params.id)
    // },2000)
    dispatch(PostDetails(match.params.id));
    dispatch(getComment(match.params.id));
    dispatch(UpdateView(match.params.id));
    // return ()=>{
    //   dispatch({
    //     type:"POST_DETAIL_RESET"
    //   })
    // }
  }, [match.params.id]);


  const getpostdetail = useSelector((state) => state.postDetail);
  const { post } = getpostdetail;
  

  return (
    <>
      <div className="row mb-5 mt-4">
        <div className="col-sm-8">
          <DetailPost className="mb-5" post={post ? post : null} />
          <h6 className="mt-3">Bình luận</h6>
          <ListComment post_id={post ? post.id : null} className="mt-5" />
        </div>
        <div className="col-sm-4">
          <RelatePost post_tag={post?post.tag:null} post_id={post?post.id:null} user={post?post.user:null} />
        </div>
      </div>
    </>
  );
};

export default PostDetail;

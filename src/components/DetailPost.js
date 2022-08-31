import React, { ReactDOM,useEffect,useState } from "react"; 
import { FaRoad } from "react-icons/fa";
import {UserFollow,getUserById} from "../actions/actionUser"
import { RiUserFollowLine } from "react-icons/ri";
import {useSelector,useDispatch} from "react-redux"
const DetailPost = ({ post }) => {
  const [isFollow,setisFollow] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('userInfo')){
    dispatch(getUserById(JSON.parse(localStorage.getItem('userInfo')).id))
    if(user && user.users){
      user.users.forEach(u=>{
        if(post && post.user){
            if(u.id == post.user.id){
              setisFollow(true)
            }
        }
    })
    }}
  },[])
  const userLogin = useSelector(state =>state.userLogin)
  const{userInfo} = userLogin;
  const userdetails= useSelector(state=>state.userdetail);
  const {user}=userdetails;

  const userfollow= useSelector(state=>state.userFollow);
  const {loading,success}=userfollow;

  const clickFollow =()=>{
    if(post && post.user){
      dispatch(UserFollow(JSON.parse(localStorage.getItem('userInfo')).id,post.user.id));
    }
    setisFollow(true)
  }
// useEffect(()=>{
//   if(user){
//     user.users.forEach(u=>{
//       if(post){
//           if(u.id == post.user.id){
//             setisFollow(true)
//           }
//       }
//   })
//   }
// },[loading,success])

  return (
    <>
      <div className="title_post_detail text-white mb-2 ">
        <p className="ml-2 ">Nội dung bài viết</p>
      </div>
      <div className="border-top"></div>
      <div className="row mt-3">
        <p className="col-sm-7 col-12">{post?post.date:null}</p>
        {post && post.user&& userInfo && userInfo.id != post.user.id ?  <div className="col-sm-5 ">
          <div className="col-12 row mb-2 ">
            <div className="">
              <img
                className="avatar_user_post_list rounded-circle"
                src={`http://localhost:8080/AvatarImage/${
                  post?.user ? post.user.avatar : ""
                }`}
                alt=""
              />
            </div>
            <div style={{ alignItems: "center" }} className="mr-2 usernameFollow">
              <p className="usernameFollow">{post?.user ? post.user.username : null}</p>
            </div>
            <div className="">
              <button disabled={isFollow?"disabled":null} onClick={clickFollow} className="btnFollow btn">
                <RiUserFollowLine /> {isFollow?"followed":"Follow"}
              </button>
            </div>
          </div>
        </div>:""}

      </div>

      <h5>{post?post.name:null}</h5>
      <div
        className="post_content_detail text-justify"
        dangerouslySetInnerHTML={{ __html: post?post.content:null }}
      />
    </>
  );
};

export default DetailPost;

import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Banner from "../static/image/banner.jpg"
import {FaPen} from "react-icons/fa"
import { RiDeleteBackFill } from "react-icons/ri";
import {getUserById} from "../actions/actionUser"
const FollowUser = () => {
    const userdetails= useSelector(state=>state.userdetail);
    const {user}=userdetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserById(JSON.parse(localStorage.getItem('userInfo')).id))
    },[])
    return (
        <>
        {user?.users?
        user.users.map(user=>
        <div key={user.id} className="row mt-5 ml-5">
            <div className="col-sm-1 user_avater_follower_list col-2">
                <img className="avatar_follow rounded-circle" src={`http://localhost:8080/AvatarImage/${user.avatar}`} alt=""/>
            </div>
            <div className="row col-sm-5 col-5">
                <p className="col-sm-12 col-12">{user.username}</p>
                <p title="bài viết" className="col-sm-12 col-12" style={{fontSize: "12px"}}><FaPen/> 12</p>
            </div>
            <div className="col-sm-4 col-4">
                <RiDeleteBackFill/>
            </div>
        </div>):null}
        </>
    )
}

export default FollowUser

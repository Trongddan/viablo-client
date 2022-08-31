import React,{useState} from 'react'
import logo from "../static/image/logo.jpg"
import{Link,useHistory,NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { logout } from '../actions/actionUser';
import {BsSearch} from "react-icons/bs"
const Header = () => {
const [search,setSearch] = useState();
  
const userLogin = useSelector(state =>state.userLogin)
const{userInfo} = userLogin;
// console.log(userInfo.avatar)
const dispatch = useDispatch();
const history = useHistory();
const logoutHandler = ()=>{
    dispatch(logout())
    history.push("/")
}
    return (
      
        <nav className=" navbar text-dark navbar-expand-lg navbar-dark backHeader">
              <div className="container">
  <img src={logo} alt="" className="logo rounded-circle"/>
  <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink  className="nav-link title_page" to="/home">
          Bài viết
          </NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className=" nav-link title_page" to="/questions">
          Hỏi đáp
          </NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className=" nav-link title_page" to="/s">
          Thảo luận
          </NavLink>
      </li>

    </ul>
    <div className="row ml-3 h-100 ">
  <div id="search-autocomplete" className="form-outline">
    <input onChange={e=>setSearch(e.target.value)} type="search" id="form1" placeholder="tìm kiếm nội dung" className="form-control" />
  </div>
  <Link to={search ? `/search/${search}`:"/search/ "}  className="btn btn-primary ml-2">
      <BsSearch/>
  </Link>
</div>
    <ul className="navbar-nav p-2  h-100">
      {userInfo ?
      <>
      <div className="btn-group ml-3">
        <img className="avatar_user_post_list dropdown-toggle rounded-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={`http://localhost:8080/AvatarImage/${userInfo.avatar}`} alt=""/>
  <div className="dropdown-menu">
    <NavLink className="dropdown-item" to={`/user/${JSON.parse(localStorage.getItem('userInfo')).id}`}>Trang cá nhân</NavLink>
    <NavLink className="dropdown-item" to="/managepost/quanlybaiviet">Quản lý nội dung</NavLink>
    <div className="dropdown-divider"></div>
    <a onClick={logoutHandler} className="dropdown-item" >Đăng xuất</a>
  </div>
</div>
 
      </>
:
<>
<li className="nav-item">
        <Link to="/register"><p className="m-3 text-white">Đăng ký</p></Link>
      </li>
      <li className="nav-item">
        <Link to="/login"><p className="m-3 text-white">Đăng nhập</p></Link>
      </li>
</>
}
     

    </ul>
  </div>
  </div>
</nav>
    )
}

export default Header

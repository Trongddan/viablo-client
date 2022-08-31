import React from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import banner from "../static/image/banner.jpg";
import Mylist from "../components/Mylist";
import { Container } from "react-bootstrap";
import MyListQuestion from "../components/MyListQuestion";
import FollowUser from "../components/FollowUser";

const UserDetailScreen = () => {
  const userDetail = useSelector((state) => state.userLogin);
  const { userInfo } = userDetail;
  return (
    <div className="row w-100">
      <div className="container ">
        <div className="row m-4 ">
          <div className="col-sm-1 col-1  mr-5">
            <img
              className="rounded-circle avatar_img"
              src={`http://localhost:8080/AvatarImage/${userInfo.avatar}`}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-6">
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>
          </div>
          <div className="col-sm-3 col-2">
            <button className="btn btn-secondary">
              <Link to="/updateuser">sửa</Link>
            </button>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <div className="row w-100 ml-3 nav_detail">
          <NavLink
            to={`/user/${JSON.parse(localStorage.getItem("userInfo")).id}`}
            className="col-sm-2 col-12 text-center userdetail_title"
          >
            Bài viết
          </NavLink>
          <NavLink
            to={`/user/q/${JSON.parse(localStorage.getItem("userInfo")).id}`}
            className="col-sm-2 col-12 text-center userdetail_title"
          >
            Câu hỏi
          </NavLink>
          <NavLink
            to="/user/follow/a"
            className="col-sm-2 col-12 text-center userdetail_title"
          >
            Đang follow
          </NavLink>
          <NavLink
            to="/ssss"
            className="col-sm-2 col-12 text-center userdetail_title"
          >
            Liên hệ
          </NavLink>

          <div className="select_option dropdown show">
  <a className="btn btn-light h-100 w-40 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Tùy chọn
  </a>

  <div className="dropdown-menu listSelect" aria-labelledby="dropdownMenuLink">
  <NavLink
            to={`/user/${JSON.parse(localStorage.getItem("userInfo")).id}`}
            className=" m-2 "
          >
            Bài viết
          </NavLink>
          <NavLink
            to={`/user/q/${JSON.parse(localStorage.getItem("userInfo")).id}`}
            className=" m-2"
          >
            Câu hỏi
          </NavLink>
          <NavLink
            to="/user/follow/a"
            className="m-2"
          >
            Đang follow
          </NavLink>
  </div>
</div>

          
        </div>
        <Switch>
          <React.Fragment>
            <Container>
              <Route exact path="/user/:id" component={Mylist} />
              <Route path="/user/q/:id" component={MyListQuestion} />
              <Route path="/user/follow/a" component={FollowUser} />
            </Container>
          </React.Fragment>
        </Switch>
      </BrowserRouter>

      <div className="userDetail_content"></div>
    </div>
  );
};

export default UserDetailScreen;

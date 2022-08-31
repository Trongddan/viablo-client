import React,{ useRef } from "react";
import AddPost from "../components/AddPost";
import SidebarManage from "../components/SidebarManage";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import AddQuestion from "../components/AddQuestion";
import Mylist from "../components/Mylist";
import PostDetail from "./PostDetail";
const ManagePostScreen = () => {
const listDanhMuc = document.querySelectorAll(".danhmuc li")

  return (
    <div className="container managepost row">
  
      <BrowserRouter>
      <SidebarManage/>
      <Route exact path ="/post/:id" component={PostDetail}/>  
      <Switch>
        {/* <Route exact path="/managepost/quanlybaiviet/:id" component={Mylist}></Route> */}
        <Route exact path="/managepost/quanlybaiviet" component={AddPost} />
        <Route path="/managepost/quanlycauhoi" component={AddQuestion}></Route>
        <Route path="/managepost/thembaiviet" component={AddPost}></Route>
      </Switch>
      </BrowserRouter>
     
       
      
      
    </div>
  );
};

export default ManagePostScreen;

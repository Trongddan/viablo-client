import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPen, FaQuestion } from "react-icons/fa";

const SidebarManage = () => {
  return (
    <div className="col-sm-3">
      <ul className="danhmuc">
          {/* <NavLink className="" to={`/managepost/quanlybaiviet/${JSON.parse(localStorage.getItem('userInfo')).id}`}> */}
          <NavLink className="" to="/managepost/quanlybaiviet">
        <li >
            <FaPen className="m-3  text-secondary" /> Bài viết
        </li>
          </NavLink>
          <NavLink  className="" to="/managepost/quanlycauhoi">
        <li >
            <FaQuestion className="m-3 text-secondary" /> Câu hỏi
        </li>
          </NavLink>
          <NavLink  className="" to="/managepost/quanlycauhoiu">
        <li >
            <FaQuestion className="m-3 text-secondary" /> Diễn đàn
        </li>
          </NavLink>
      </ul>
    </div>
  );
};

export default SidebarManage;

import React from 'react'
import banner from "../static/image/banner.jpg"
import {useSelector} from "react-redux"
const UserUpdateScreen = () => {
    const userDetail = useSelector(state=>state.userLogin)
    const {useInfo} = userDetail
    return (
        <div className="container" >
            <div className="card m-5 text-center">
            <h5 className="mt-4">Chỉnh sửa thông tin cá nhân</h5>
            <div>
                <img className="rounded-circle avatar_img m-3" src={banner} alt=""/>
            </div> 
            <form>
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputPassword" placeholder="email"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Họ và tên</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputPassword" placeholder="họ và tên"/>
    </div>
  </div>
    <button className="btn btn-secondary mb-5" type="submit"> Lưu </button>
</form>         
            </div>

        </div>
    )
}

export default UserUpdateScreen

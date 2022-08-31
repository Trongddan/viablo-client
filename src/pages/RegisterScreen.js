import React, { useState, useEffect } from "react";
import { register } from "../actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

// CommonJS
const RegisterScreen = () => {
  const Swal = require("sweetalert2");

  const [taikhoan, setTaikhoan] = useState("");
  const [matkhau, setMatkhau] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const dispatch = useDispatch();

  const handleChoseAvatar =(e)=>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);
       // console.log(file.preview);
        setAvatar(file);
  }
  useEffect(()=>{
      return ()=>
      avatar&& URL.revokeObjectURL(avatar)
      
  },[avatar])
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: taikhoan,
        password: matkhau,
        email: email,
        avatar:avatar
      })
    );

  };
  const states = useSelector((state) => state.userRegister);
  const {loading,success,error} = states
  useEffect(()=>{
    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Thất bại do tên hoặc email đã tồn tại",
        showConfirmButton: false,
        timer: 2500,
      });
    }
      dispatch({
        type:"USER_REGISTER_RESET"
      })
  },[loading,success,error])
  if (loading === false) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Đăng ký thành công",
      showConfirmButton: false,
      timer: 2500,
    });
  }



  return (
    <div className="container text-center mt-5">
      <h4>Đăng ký người dùng</h4>
      <div className="register container">
        <form onSubmit={submitHandler} className="m-3 py-5 form" action="">
          <div className="row  m-3">
            <label className="col-sm-4"> Username:</label>
            <input
            required
              value={taikhoan}
              onChange={(e) => setTaikhoan(e.target.value)}
              className="form-control col-sm-5"
              type="text"
            />
          </div>
          <div className="row  m-3">
            <label className="col-sm-4"> Password:</label>
            <input
            required
              value={matkhau}
              onChange={(e) => setMatkhau(e.target.value)}
              className="form-control col-sm-5"
              type="password"
            />
          </div>
          <div className="row m-3">
            <label className="col-sm-4"> Email:</label>
            <input
            required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control col-sm-5"
            />
          </div>
          <div className="row m-3">
            <label className="col-sm-4"> Avatar:</label>
            <input
            type="file"
              required
              onChange={handleChoseAvatar}
              className="form-control col-sm-5"
            />
          </div>
          <button type="submit" className="btn btn-secondary m-3">
            Đăng ký
          </button>
          <button className="btn btn-secondary ml-5">Trở về</button>
        </form>
        {avatar && 
        <img className="img-preview" src={avatar.preview} alt=""/>
}
      </div>
    </div>
  );
};

export default RegisterScreen;

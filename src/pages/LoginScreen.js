import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { FaChromecast } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {login} from "../actions/actionUser"
const LoginScreen = () => {
    const history = useHistory()
        const [taikhoan,setTaikhoan] = useState("");
        const [matkhau,setMatkhau] =useState('');
        const dispatch = useDispatch();
        const userLogin = useSelector(state =>state.userLogin);
        const {userInfo} = userLogin
        if(userInfo){
            history.push("/")
        }
        const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login({
            username:taikhoan,
            password:matkhau
        }));
        
        }

    return (
        <div className="container text-center mt-5">
            <h4>Đăng ký người dùng</h4>
           <div className="register container">
                <form onSubmit={submitHandler} className="m-3 py-5 form" action="">
                    <div className="row  m-3">
                        <label className="col-sm-4"> Username:</label>
                        <input value={taikhoan} onChange={e=> setTaikhoan(e.target.value)} className="form-control col-sm-5" type="text" />
                    </div>
                    <div className="row  m-3">
                        <label className="col-sm-4"> Password:</label>
                        <input value={matkhau}  onChange={e => setMatkhau(e.target.value)} className="form-control col-sm-5" type="password" />
                    </div>
                    <button type="submit" className="btn btn-secondary m-3">Đăng nhập</button>
                    <button className="btn btn-secondary ml-5">Trở về</button>
                </form>
           </div>
        </div>
    )
}

export default LoginScreen

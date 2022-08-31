import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_RESET,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_RESET,
    USER_LOGOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_FAIL,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_RESET
} from "../actionconst/actionTypes"


export const UserRegisterReducer =(state = {},action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading : true};
        case USER_REGISTER_SUCCESS:
            return {loading:false,userInfo:action.payload};
        case USER_REGISTER_FAIL:
            return {loadingz:false, error:action.payload};
        case USER_REGISTER_RESET:
            return {};
        default:
            return state;                
    }
};

export const UserLoginReducer=(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true};
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload} 
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}   
        case USER_LOGOUT:
            return {};
        default:
            return state;            
    }
};

export const UserDetailReducer=(state ={}, action)=>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return { loading: true,user:{}};
        case USER_DETAILS_SUCCESS:
            return {loading:false,user:action.payload.data} 
        case USER_DETAILS_FAIL:
            return {loading:false,error:action.payload}   
        case USER_DETAILS_RESET:
            return {};
        default:
            return state;            
    }
}

export const UserFollowReducer=(state ={}, action)=>{
    switch(action.type){
        case USER_FOLLOW_REQUEST:
            return { loading: true};
        case USER_FOLLOW_SUCCESS:
            return {loading:false,success:true} 
        case USER_FOLLOW_FAIL:
            return {loading:false,error:action.payload}   
        case USER_FOLLOW_RESET:
            return {};
        default:
            return state;            
    }
}
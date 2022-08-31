import {
    USER_POST_SUCCESS, USER_POST_REQUEST,
    USER_POST_FAIL,
    USER_POST_RESET,
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
    POST_LIST_RESET,POST_DETAIL_FAIL,
    POST_DETAIL_REQUEST,
    POST_DETAIL_sUCCESS,
    POST_DETAIL_RESET,
    POST_BY_USER_REQUEST,
    POST_BY_USER_SUCCESS,
    USER_DELETE_POST_REQUEST,
    USER_DELETE_POST_SUCCESS,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
    ADD_COMMENT_FAIL,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAIL,
    GET_POST_BY_TAG_REQUEST,
    GET_POST_BY_TAG_SUCCESS,
    GET_POST_BY_TAG_FAIL,
    UPDATE_VIEW_REQUEST,
    UPDATE_VIEW_SUCCESS,
    UPDATE_VIEW_FAIL,
    UPDATE_CMT_SUCCESS,
    UPDATE_CMT_REQUEST,
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_FAIL,
    QUESTION_LIST_RESET,
    QUESTION_LIST_SUCCESS,
    SEARCH_POST_REQUEST,
    SEARCH_POST_SUCCESS,
    SEARCH_POST_FAIL
} from "../actionconst/PostTypes"
import apis from "../utils/Apis";


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };


export const UserPostPost = (newPost)=> async dispatch=>{
    try {
        dispatch({type:USER_POST_REQUEST});
        console.log(JSON.parse(localStorage.getItem('userInfo')).token)
        const {data} = await apis.post(
            "api/addnewPost",newPost,{
            headers:{
                'Authorization':`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
        dispatch({type:USER_POST_SUCCESS,payload:data})


    } catch (error) {
        dispatch({
            type:USER_POST_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }
}
export const ListPosts =(id)=> async dispatch =>{
    try {
        
        dispatch({type:POST_LIST_REQUEST});
        const {data} = await apis.get(`api/listpost/${id}`)
        dispatch({type:POST_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:POST_LIST_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
        
    }
}

export const ListQuestions =(id)=> async dispatch =>{
    try {
        dispatch({type:QUESTION_LIST_REQUEST});
        const {data} = await apis.get(`api/listpost/${id}`)
        dispatch({type:QUESTION_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:QUESTION_LIST_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
        
    }
}
export const PostDetails =(id)=> async dispatch =>{
    try {
        dispatch({type:POST_DETAIL_REQUEST});
        const {data} = await apis.get(`api/post/${id}`)
        dispatch({type:POST_DETAIL_sUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:POST_DETAIL_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }
}    

export const PostByUser=(id,cateId)=> async dispatch =>{
    try {
        dispatch({type : POST_BY_USER_REQUEST});
        const {data} = await apis.get(`api/post/u/${id}/c/${cateId}`)
        dispatch({type:POST_BY_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:POST_DETAIL_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
        
    }
}
export const UserDeletePost = (id)=> async dispatch =>{
    try {
        dispatch({type: USER_DELETE_POST_REQUEST});
        await apis.delete(`api/post/d/${id}`)
        dispatch({type:USER_DELETE_POST_SUCCESS})
    } catch (error) {
        dispatch({
            type:POST_DETAIL_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
        
    }
}

export const getComment = (id) => async dispatch =>{
    try {
        dispatch ({type:GET_COMMENT_REQUEST});
        const {data}  = await apis.get(`api/getcmt/p/${id}`)
        dispatch({type:GET_COMMENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:GET_COMMENT_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
        
    }
    
}

export const AddComment = (newCmt) => async dispatch =>{
    try {
        dispatch ({type:ADD_COMMENT_REQUEST});
        const {data}  = await apis.post("api/addcomment",newCmt)
        dispatch({type:ADD_COMMENT_SUCCESS})
    } catch (error) {
        dispatch({
            type:ADD_COMMENT_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }    
}

export const DeleteComment = (cmtId,userId) => async dispatch =>{
    try {
        dispatch ({type:DELETE_COMMENT_REQUEST});
        const {data}  = await apis.delete(`api/deletecmt/?cmt_id=${cmtId}&user_id=${userId}`)
        dispatch({type:DELETE_COMMENT_SUCCESS})
    } catch (error) {
        dispatch({
            type:DELETE_COMMENT_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }    
}

export const PostByTag=(id)=> async dispatch =>{
    try {
        dispatch({type:GET_POST_BY_TAG_REQUEST});
        const {data} = await apis.get(`api/post/tag/${id}`);
        dispatch({type:GET_POST_BY_TAG_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:GET_POST_BY_TAG_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }   
    
}

export const UpdateView=(id)=> async dispatch =>{
    try {
        dispatch({type:UPDATE_VIEW_REQUEST});
        const {data} = await apis.patch(`api/post/${id}`);
        dispatch({type:UPDATE_VIEW_SUCCESS})
    } catch (error) {
        dispatch({
            type:UPDATE_VIEW_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }   
    
}

export const UpdateCMT=(id,n)=> async dispatch =>{
    try {
        dispatch({type:UPDATE_CMT_REQUEST});
        const {data} = await apis.patch(`api/countcmt/${id}?n=${n}`);
        dispatch({type:UPDATE_CMT_SUCCESS})
    } catch (error) {
        dispatch({
            type:UPDATE_VIEW_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }   
    
}

export const searchPost=(search)=> async dispatch=>{
    try {
        dispatch({type:SEARCH_POST_REQUEST});
        const {data} = await apis.get(`api/search/?p=${search}`)
        dispatch({type:SEARCH_POST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:SEARCH_POST_FAIL,
            payload: error.response ? error.response.data : "There's a problem",})
    }   
    }


export const ResetAll = ()=>async dispatch =>{
   await dispatch({type:USER_POST_RESET});
 
}

import { Switch } from "react-router";
import { USER_DETAILS_SUCCESS } from "../actionconst/actionTypes";
import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAIL,
  USER_POST_RESET,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAIL_RESET,
  POST_DETAIL_sUCCESS,
  POST_DETAIL_FAIL,
  POST_DETAIL_REQUEST,
  POST_BY_USER_REQUEST,
  POST_BY_USER_SUCCESS,
  POST_BY_USER_RESET,
  USER_DELETE_POST_RESET,
  USER_DELETE_POST_FAIL,
  USER_DELETE_POST_SUCCESS,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  GET_COMMENT_RESET,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_RESET,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_RESET,
  GET_POST_BY_TAG_REQUEST,
  GET_POST_BY_TAG_SUCCESS,
  GET_POST_BY_TAG_FAIL,
  GET_POST_BY_TAG_RESET,
  UPDATE_VIEW_REQUEST,
  UPDATE_VIEW_RESET,
  UPDATE_VIEW_FAIL,UPDATE_VIEW_SUCCESS,
  UPDATE_CMT_FAIL,
  UPDATE_CMT_REQUEST,
  UPDATE_CMT_SUCCESS,
  UPDATE_CMT_RESET,
  QUESTION_LIST_FAIL,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_RESET,QUESTION_LIST_SUCCESS, SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS, SEARCH_POST_FAIL, SEARCH_POST_RESET
} from "../actionconst/PostTypes";

export const UserPostReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_POST_REQUEST:
      return { loading: true };
    case USER_POST_SUCCESS:
      return { loading: false, success: true };
    case USER_POST_RESET:
      return {};
    case USER_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ListPostReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload.data };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ListQuestionReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true, questions: [] };
    case QUESTION_LIST_SUCCESS:
      return { loading: false, questions: action.payload.data };
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload };  
    default:
      return state;
  }
};

export const PostDetailReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAIL_REQUEST:
      return { loading: true, post: {} };
    case POST_DETAIL_sUCCESS:
      return {
        loading: false,
        post: action.payload.data,
        user: action.payload.data.user,
      };
    case POST_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PostByUserReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_BY_USER_REQUEST:
      return { loading: true, posts: [] };
    case POST_BY_USER_SUCCESS:
      return { loading: false, posts: action.payload.data };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    case POST_BY_USER_RESET:
      return [];
    default:
      return state;
  }
};

export const DeletePostReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_POST_RESET:
      return { loading: true };
    case USER_DELETE_POST_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_POST_FAIL:
      return { loading: false, error: action.payload };
    case USER_DELETE_POST_RESET:
      return {};
    default:
      return state;
  }
};
export const GetCommentReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return { loading: true };
    case GET_COMMENT_SUCCESS:
      return { loading: false, comments: action.payload.data };
    case GET_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const AddCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return { loading: true };
    case ADD_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case ADD_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case ADD_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const DeleteCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMMENT_REQUEST:
      return { loading: true };
    case DELETE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const GetPostByTagReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_POST_BY_TAG_REQUEST:
      return { loading: true };
    case GET_POST_BY_TAG_SUCCESS:
      return { loading: false, posts: action.payload.data };
    case GET_POST_BY_TAG_FAIL:
      return { loading: false, error: action.payload };
    case GET_POST_BY_TAG_RESET:
      return {};
    default:
      return state;
  }
};

export const UpdateViewReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_VIEW_REQUEST:
      return { loading: true };
    case UPDATE_VIEW_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_VIEW_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_VIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const UpdateCMTReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_CMT_REQUEST:
        return { loading: true };
      case UPDATE_CMT_SUCCESS:
        return { loading: false, success: true };
      case UPDATE_CMT_FAIL:
        return { loading: false, error: action.payload };
      case UPDATE_CMT_RESET:
        return {};
      default:
        return state;
    }
  };

export const SearchPostReducer =(state={posts:[]},action)=>{
  switch (action.type){
      case SEARCH_POST_REQUEST:
        return {loading:true,posts:[]};
      case  SEARCH_POST_SUCCESS:
        return{loading:false,posts:action.payload.data}
      case SEARCH_POST_FAIL:
        return {loading:false,error:action.payload}
      case SEARCH_POST_RESET:
        return state;
      default:
        return state;      
  }
}  
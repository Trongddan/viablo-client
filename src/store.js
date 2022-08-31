import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { UserRegisterReducer, UserLoginReducer,UserDetailReducer ,UserFollowReducer} from "./reducers/UserReducer";
import {
  UserPostReducer,
  ListPostReducer,
  PostDetailReducer,
  PostByUserReducer,
  DeletePostReducer,
  GetCommentReducer,
  AddCommentReducer,
  DeleteCommentReducer,
  GetPostByTagReducer,
  UpdateViewReducer,
  UpdateCMTReducer,
  ListQuestionReducer,
  SearchPostReducer,
  
} from "./reducers/PostReducer";

const reducer = combineReducers({
  userRegister: UserRegisterReducer,
  userLogin: UserLoginReducer,
  userdetail:UserDetailReducer,
  userPostReducer: UserPostReducer,
  listPost: ListPostReducer,
  postDetail: PostDetailReducer,
  postByUser: PostByUserReducer,
  deletePost: DeletePostReducer,
  getComment: GetCommentReducer,
  addComment:AddCommentReducer,
  deleteCmt:DeleteCommentReducer,
  getPostByTag:GetPostByTagReducer,
  updateView:UpdateViewReducer,
  updateCmt:UpdateCMTReducer,
  listQuestion:ListQuestionReducer,
  userFollow:UserFollowReducer,
  searchPost:SearchPostReducer,
  
});
const userLoginLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userLoginLocalStorage }
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

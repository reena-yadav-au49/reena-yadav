import { combineReducers } from "redux";
import postReducer from "../reducers/posts_fetch";
import createPost from "../reducers/createPost";
import particularPost from "../reducers/fetchOne_post";

const AllReducer = combineReducers({
  post: postReducer,
  newPost: createPost,
  particularPostData: particularPost
});

export default AllReducer;

import AddPost from "../api/add_post";

function createPost(state = [], action) {
  if (action.type === "Add_Post") {
    AddPost(action.data.title, action.data.description);
  }
  return state;
}

export default createPost;

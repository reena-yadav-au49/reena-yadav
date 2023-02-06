import { particularPost } from "../api/fetch_post_api";

function particular_post(postData = {}, action) {
  if (action.type === "one_post") {
    particularPost(action.id);
  }
  if (action.type === "particular-post-fetched") {
    postData = action.data;
  }
  return postData;
}

export default particular_post;

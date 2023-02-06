import { fetchAllPost } from "../api/fetch_post_api";

function postReducer(posts = [], action) {
  if (action.type === "fetch_posts") {
    if (posts.length === 0) {
      fetchAllPost();
    } else {
      return posts;
    }
  }
  if (action.type === "posts_data") {
    posts = action.data;
  }
  if (action.type === "Post_Added") {
    posts = [action.data, ...posts];
    setTimeout(() => {
      alert("Post added go back to see it ...");
    }, 5000);
  }

  if (action.type === "edit_post") {
    posts = posts.map(post => {
      if (post.id === +action.id) {
        setTimeout(() => {
          alert("Post is Edited !!");
        }, 3000);
        return { ...post, ...action.data };
      } else {
        return post;
      }
    });
  }
  return posts;
}

export default postReducer;

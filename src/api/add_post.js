import { Store } from "../store/store";

function AddPost(title, description, userId = 1) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = {
    title: title,
    body: description,
    userId: userId
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => {
      Store.dispatch({
        type: "Post_Added",
        data: data
      });
    });
}

export default AddPost;

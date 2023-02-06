import { Store, StateMapper } from "../store/store";

function fetchAllPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then(data => data.json())
    .then(response => {
      return response.length > 0
        ? Store.dispatch({
            type: "posts_data",
            data: response
          })
        : [];
    });
}

function particularPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  fetch(url)
    .then(data => data.json())
    .then(response =>
      response
        ? Store.dispatch({
            type: "particular-post-fetched",
            data: response
          })
        : {}
    );
}

export { fetchAllPost, particularPost };

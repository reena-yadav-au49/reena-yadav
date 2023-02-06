import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div class="collection">
          <p class="collection-item active">Menu</p>
          <Link to="/post/new" class="collection-item ">
            Create New Post
          </Link>
          <a href="#!" class="collection-item">
            Alvin
          </a>
          <a href="#!" class="collection-item">
            Alvin
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;

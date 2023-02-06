import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../component/posts";
import CreatePost from "./createPost";
import Onepost from "./onepost";
import EditPost from "./editPost";

import { connect } from "react-redux";
import { StateMapper } from "../store/store";

class App extends React.Component {
  redirect = () => {
    return <Redirect to="/posts" />;
  };

  componentDidMount() {
    this.props.dispatch({
      type: "fetch_posts"
    });
  }

  render() {
    return (
      <Router>
        <Route exact path="/posts" component={Home}></Route>
        <Route exact path="/post/new" component={CreatePost}></Route>
        <Route exact path="/posts/:id" component={Onepost} />
        <Route path="/posts/edit/:id" component={EditPost} />
        {this.redirect()}
      </Router>
    );
  }
}

export default connect(StateMapper)(App);

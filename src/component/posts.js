import React from "react";
import "../styles/posts.css";
import { connect } from "react-redux";
import { StateMapper } from "../store/store";
import { Link } from "react-router-dom";
import Menu from "./menu";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let url;
    console.log(this.props.post);
    return (
      <div>
        <h3 style={{ color: "red", textAlign: "center" }}>
          Welcome to the Blog App
        </h3>
        <hr />
        <div className="row">
          <div className="col s3">
            <Menu />
          </div>
          <div className="col s9">
            {this.props.post.map(data => {
              return (
                <div class="col s12 m4">
                  <div class="card">
                    <Link to={"/posts/" + data.id}>
                      <span class="card-title ">
                        {data.title.substring(0, 10)}..
                      </span>
                    </Link>
                    <Link
                      to={"/posts/edit/" + data.id}
                      class="btn-floating halfway-fab waves-effect waves-light red"
                      href="/diljcl"
                    >
                      <i class="material-icons">add</i>
                    </Link>
                    <div class="card-content">
                      <p>{data.body.substring(0, 50)}...</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(StateMapper)(Home);

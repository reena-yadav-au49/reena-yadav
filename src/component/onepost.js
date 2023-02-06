import React from "react";
import { StateMapper } from "../store/store";
import { connect } from "react-redux";
import Menu from "./menu";

class Onepost extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    this.props.dispatch({
      type: "one_post",
      id: id
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "red", textAlign: "center" }}>
          {this.props.particularPostData.title}
        </h1>
        <hr />
        <div className="row">
          <div className="col s3">
            <Menu />
          </div>
          <div className="col s9">
            <p>
              {this.props.particularPostData.body}
              <span class="badge blue" style={{ color: "white" }}>
                userId : {this.props.particularPostData.userId}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(StateMapper)(Onepost);

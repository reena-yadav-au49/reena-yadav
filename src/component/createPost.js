import React from "react";
import Menu from "./menu";
import { StateMapper } from "../store/store";
import { connect } from "react-redux";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Desciption: ""
    };
  }

  addPost = event => {
    this.props.dispatch(
      {
        type: "Add_Post",
        data: {
          title: this.state.Title,
          description: this.state.Desciption
        }
      },
      this.props.post
    );
    event.preventDefault();
  };

  getInputValue = event => {
    if (event.target.name === "title") {
      this.setState({
        Title: event.target.value
      });
    } else {
      this.setState({
        Desciption: event.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <h3 style={{ color: "red", textAlign: "center" }}>Create New Post</h3>
        <hr />
        <div class="row">
          <div class="col s3">
            <Menu />
          </div>
          <div class="col s9">
            <div class="row">
              <form class="col s9" onSubmit={this.addPost}>
                <div class="row">
                  <div class="input-field col s9">
                    <input
                      id="input_text"
                      type="text"
                      data-length="10"
                      onChange={this.getInputValue}
                      name="title"
                    />
                    <label for="input_text">Enter Your Title</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                      name="description"
                      onChange={this.getInputValue}
                    ></textarea>
                    <label for="textarea2">Enter Desciption</label>
                  </div>
                </div>
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(StateMapper)(CreatePost);

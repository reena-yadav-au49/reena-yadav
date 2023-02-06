import React from "react";
import { connect } from "react-redux";
import { StateMapper } from "../store/store";
import Menu from "./menu";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
      id: ""
    };
  }

  getInputValue = event => {
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      });
    } else {
      this.setState({
        body: event.target.value
      });
    }
  };

  componentDidMount() {
    let obj = this.props.post.filter(x => x.id == this.props.match.params.id);
    this.setState({
      title: obj[0].title,
      body: obj[0].body,
      userId: obj[0].userId,
      id: obj[0].id
    });
  }

  EditPost = event => {
    // console.log(this.state.Title, this.state.Desciption);
    this.props.dispatch({
      type: "edit_post",
      data: this.state,
      id: this.props.match.params.id
    });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        {1 > 0 ? (
          <div className="container">
            <div>
              <h3 style={{ color: "red", textAlign: "center" }}>
                Edit Your Post Here
              </h3>
              <hr />
              <div class="row">
                <div class="col s3">
                  <Menu />
                </div>
                <div class="col s9">
                  <div class="row">
                    <form class="col s9" onSubmit={this.EditPost}>
                      <div class="row">
                        <div class="input-field col s6">
                          <input
                            value={this.state.title}
                            id="first_name2"
                            type="text"
                            class="validate"
                            name="title"
                            onChange={this.getInputValue}
                          />
                          <label class="active" for="first_name2">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea
                            id="textarea2"
                            class="materialize-textarea"
                            name="description"
                            onChange={this.getInputValue}
                            value={this.state.body}
                          ></textarea>
                          <label for="textarea2">Edit Desciption</label>
                        </div>
                      </div>
                      <button
                        class="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        Edit
                        <i class="material-icons right">send</i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}

export default connect(StateMapper)(EditPost);

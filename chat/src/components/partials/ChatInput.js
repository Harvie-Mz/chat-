import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./swag.css";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  sendMessage = (e) => {
    e.preventDefault();
    console.log("Input Props:", this.props);
    const msg = {
      threadId: this.props.match.params.threadId,
      userId: this.props.user.id,
      content: this.state.content,
      date: new Date(),
    };
    this.props.socket.send(
      JSON.stringify({
        type: "ADD_MESSAGE",
        threadId: msg.threadId,
        message: msg,
      })
    );
    this.setState({ content: "" });
  };

  render() {
    return (
      <form className="input-view" onSubmit={(e) => this.sendMessage(e)}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter text.."
            className="form-control"
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
          <button className="btn btn-send">
            <i className="zmdi zmdi-mail-send input-group-append" />
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChatInput));
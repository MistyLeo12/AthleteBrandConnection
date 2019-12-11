import React, { Component } from "react";
import { db } from "../fire";
import firebase from "firebase";
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        name: "",
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });
    let { comment } = this.state;
    var athleteid = db
      .collection("Reviews")
      .where("athleteName", "==", "Jack White")
      .get();
    athleteid.then(function(result) {
      db.collection("Reviews")
        .doc(result.docs[0])
        .collection("review")
        .add({
          name: comment.name,
          content: comment.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(docRef) {
          console.log("Document written with ID:", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document:", error);
        });
    });
    // (async function() {
    //   var result = await athleteid;
    //   console.log("Woo done!", result);
    // })();

    // persist the comments on server
    //let { comment } = this.state;
    // db.collection("Reviews")
    //   .doc(athleteid)
    //   .collection("review")
    //   .add({
    //     name: comment.name,
    //     content: comment.message,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID:", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document:", error);
    //   });
    this.setState({
      loading: false,
      comment: { ...comment, message: "" }
    });
    // fetch("http://localhost:7777", {
    //   method: "post",
    //   body: JSON.stringify(comment)
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.error) {
    //       this.setState({ loading: false, error: res.error });
    //     } else {
    //       // add time return from api and push comment to parent state
    //       comment.time = res.time;
    //       this.props.addComment(comment);

    //       // clear the message box
    // this.setState({
    //   loading: false,
    //   comment: { ...comment, message: "" }
    // });
    //     }
    //   })
    // .catch(err => {
    //   this.setState({
    //     error: "Something went wrong while submitting form.",
    //     loading: false
    //   });
    // });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form className="border-css" method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>
          <br />

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Review"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Review &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

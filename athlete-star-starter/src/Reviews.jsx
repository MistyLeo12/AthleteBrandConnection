import React, { Component, Fragment } from "react";
import logo from "./Tre_Jones.jpg";
//import "bootstrap/dist/css/bootstrap.css";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Paper,
  Image,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core/";
import "./App.css";
import { db } from "./fire";
import firebase from "firebase";
import Comment from "./components/Comment";

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      list: [],
      loading: false,
      athlete: "Tre Jones"
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });
    var docuID;
    var oldreview = [];

    // get all the comments
    db.collection("Reviews")
      .where("athleteName", "==", this.state.athlete)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          docuID = doc.id;
          db.collection("Reviews")
            .doc(docuID)
            .collection("review")
            .get()
            .then(snap => {
              const docs = snap.docs.map(doc => {
                doc["data"] = doc["data"]();
                oldreview.push(doc.data);
                return doc;
              });
            });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    this.setState({
      comments: oldreview,
      loading: false
    });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <Fragment>
        <div className="App">
          <div className="container">
            <Card className="our-player">
              <CardActionArea className="person">
                <CardMedia
                  component="img"
                  className="img-fluid"
                  image={logo}
                  title="University Logo"
                />
              </CardActionArea>
            </Card>
          </div>
          <header className="Form-header">
            <h1 className="App-title">Tre Jones #3</h1>
            <h2>Please let me know how to improve my services!</h2>
          </header>
          <div className="col-4  pt-3 border-right">
            <h4>Review Form</h4>
            <CommentForm addComment={this.addComment} />

            <div className="col-8  pt-3 bg-white">
              {console.log(this.state.comments)}

              {this.state.comments.map(comment => (
                <CommentList comments={comment.content} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Reviews;

export { Reviews };

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

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    db.collection("Reviews")
      .where("athleteReference", "==", true)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    // fetch("http://localhost:7777")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       comments: res,
    //       loading: false
    //     });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false });
    //   });
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
          <h2>Please leave a review if you enjoyed my services!</h2>
        </header>
        <div className="col-4  pt-3 border-right">
          <h4>Review Form</h4>
          <CommentForm addComment={this.addComment} />

          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Reviews;

export { Reviews };

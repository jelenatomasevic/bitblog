import React, { Component } from "react";
import { postsService } from "../../services/postsService";

class SinglePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    postsService.getSinglePost(id).then(post => {
      this.setState({ post });
    });
  }

  render() {
    return (
      <>
        <h1>Single Post</h1>
      </>
    );
  }
}

export default SinglePost;

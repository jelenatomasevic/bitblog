import React, { Component } from "react";
import { postsService } from "../../services/postsService";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    postsService.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <h1>Posts</h1>
        {posts.map(post => (
          <div>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </>
    );
  }
}

export default Home;

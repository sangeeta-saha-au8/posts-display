import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  state = {
    posts: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(data);
      this.setState({ loading: false, posts: data });
    } catch (e) {
      console.log("error fetching the data ", e);
    }
  }

  render() {
    const { loading, posts } = this.state;

    return (
      <div>
        <h1> Posts </h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}> {post.title} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;

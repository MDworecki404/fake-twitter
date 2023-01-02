import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const Phone = styled.div`
  width: 300px;
  height: 600px;
  outline: 5px solid black;
  border-radius: 20px;
  background-color: black;
  overflow: scroll;

  header {
    width: 100%;
    height: 8%;
    background-color: black;
    display: flex;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    justify-content: space-between;
    nav {
      width: 54%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .profile {
        width: 30px;
        border-radius: 100%;
        margin-left: 10%;
        cursor: pointer;
      }
      .logo {
        width: 30px;
        cursor: pointer;
      }
    }
  }
  hr {
    width: 100%;
    border: 0.5px solid;
    border-color: #3d3d3d66;
  }
`;
const Tweets = styled.section`
  width: 100%;
  color: white;
`;
const Tweet = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5%;

  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  .tweetContent {
    display: flex;
    flex-direction: column;
    gap: 11px;
    padding: 1%;
  }
  .username {
    font-weight: bold;

    span {
      font-size: 13px;
      margin-left: 1%;
      color: gray;
    }
  }
  .quoteContent {
    font-size: 15px;
  }
`;
const TweetBlock = styled.div`
  hr {
    border: 0.01px solid;
    border-color: #3d3d3d66;
  }
`;

interface UserData {
  avatar: string;
  username: string;
  results: any;
}

interface Quote {
  content: string;
  quoteContent: string;
}

class App extends React.Component {
  state: UserData & Quote = {
    content: "",
    quoteContent: "",
    username: "",
    avatar: "",
    results: [],
  };
  fetchUser() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data: UserData) => {
        this.setState({
          username: data.results[0].login.username,
          avatar: data.results[0].picture.large,
        });
      });
  }
  fetchQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data: Quote) => {
        this.setState({
          quoteContent: data.content,
          content: (
            <TweetBlock>
              <Tweet>
                <img src={this.state.avatar}></img>
                <div className="tweetContent">
                  <p className="username">
                    {this.state.username}{" "}
                    <span>{Math.round(Math.random() * 24)} h.</span>
                  </p>
                  <p className="quoteContent">{this.state.quoteContent}</p>
                </div>
              </Tweet>
              <br></br>
              <hr></hr>
            </TweetBlock>
          ),
        });
      });
  }
  componentDidMount() {
    this.fetchUser();
    this.fetchQuote();
  }

  render() {
    return (
      <div className="App">
        <Phone>
          <header>
            <nav>
              <img
                className="profile"
                src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg"
              ></img>
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
              ></img>
            </nav>
          </header>
          <hr></hr>
          <Tweets>{this.state.content}</Tweets>
        </Phone>
      </div>
    );
  }
}

export default App;

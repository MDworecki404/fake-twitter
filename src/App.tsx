import React from "react";
import styled from "styled-components";
import "./App.css";

const Phone = styled.div`
  width: 350px;
  height: 600px;
  outline: 5px solid black;
  border-radius: 20px;
  background-color: black;

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
    border: 0.5px solid gray;
  }
`;
const Tweets = styled.section`
  width: 100%;
  color: white;
`;

class App extends React.Component {
  state = {
    content: "",
  };
  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          content: data.content,
        })
      )
      .catch((err) => console.log(err));
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

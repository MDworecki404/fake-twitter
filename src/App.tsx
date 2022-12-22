import React from "react";
import styled from "styled-components";
import "./App.css";

const Phone = styled.div`
  width: 350px;
  height: 600px;
  border: 5px solid black;
  border-radius: 20px;
  background-color: white;

  header {
    width: 100%;
    height: 8%;
    background-color: #dbdbdb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      width: 54%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .profile {
        width: 2vw;
        border-radius: 100%;
        margin-left: 10%;
        cursor: pointer;
      }
      .logo {
        width: 2vw;
        cursor: pointer;
      }
    }
  }
`;

function App() {
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
      </Phone>
    </div>
  );
}

export default App;

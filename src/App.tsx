import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

const Phone = styled.div`
  width: 350px;
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
    width: 75px;
    height: 75px;
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
      font-size: 1.5vw;
      margin-left: 1%;
      color: gray;
    }
  }
  .quoteContent {
    font-size: 1.7vw;
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
}

interface Quote {
  content: string;
  quoteContent: string;
}

const App = () => {
  const [tweets, setTweets] = useState<Array<UserData & Quote>>([]);
  const tweetBlockRef = useRef<HTMLDivElement>(null);

  const addTweet = () => {
    fetchUser().then((userData: UserData) => {
      fetchQuote().then((quote: Quote) => {
        setTweets((prevTweets) => [
          ...prevTweets,
          {
            avatar: userData.avatar,
            username: userData.username,
            quoteContent: quote.content,
          },
        ]);
      });
    });
  };

  const fetchUser = () => {
    return fetch("https://random-data-api.com/api/v2/users").then((res) =>
      res.json()
    );
  };

  const fetchQuote = () => {
    return fetch("https://api.quotable.io/random").then((res) => res.json());
  };

  useEffect(() => {
    if (tweetBlockRef.current) {
      tweetBlockRef.current.addEventListener("scroll", () => {
        if (
          tweetBlockRef.current.scrollHeight -
            tweetBlockRef.current.scrollTop ===
          tweetBlockRef.current.clientHeight
        ) {
          addTweet();
        }
      });
    }
  }, []);

  useEffect(() => {
    addTweet();
  }, []);

  return (
    <div className="App">
      <Phone>
        <header>
          <nav>
            <img
              className="profile"
              src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-twitter-avatar.png"
              alt="profile"
            />
            <img
              className="logo"
              src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c8.png"
              alt="logo"
            />
          </nav>
        </header>
        <hr />
        <Tweets ref={tweetBlockRef}>
          {tweets.map((tweet) => (
            <TweetBlock key={tweet.username}>
              <Tweet>
                <img src={tweet.avatar} alt="avatar" />
                <div className="tweetContent">
                  <p className="username">
                    {tweet.username}{" "}
                    <span>{Math.round(Math.random() * 24)} h.</span>
                  </p>
                  <p className="quoteContent">{tweet.quoteContent}</p>
                </div>
              </Tweet>
              <br />
              <hr />
            </TweetBlock>
          ))}
        </Tweets>
      </Phone>
    </div>
  );
};

export default App;

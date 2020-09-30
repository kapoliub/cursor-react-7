import Axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import "./Tweets.css";

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => ({
  async getTweets() {
    const tweets = await Axios.get("http://domer.tech:9999/tweets");
    dispatch({
      type: "UPDATE_TWEETS_LIST",
      tweets: tweets.data.data,
    });
  },
  async getUsers() {
    const users = await Axios.get("http://domer.tech:9999/users");
    dispatch({
      type: "UPDATE_USERS_LIST",
      users: users.data.data,
    });
  },
});

const Tweets = (props) => {
  useEffect(() => {
    props.getTweets();
    props.getUsers();
  }, []);

  return (
    <div className="posts-page">
      <div>
        {props.tweetsPage.tweets?.map(
          (el, i) =>
            props.usersPage.users && (
              <Tweet
                key={i}
                post={el}
                author={props.usersPage?.users?.find(
                  (user) => user.id === el.userId
                )}
              />
            )
        )}
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Tweets);

import Axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./addTweet.css";

const AddTweet = (props) => {
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const changeHandler = (e) => {
    if (e.target.id === "userIdInput") {
      setUserId(+e.target.value);
    } else if (e.target.id === "contentInput") {
      setContent(e.target.value);
    } else if (e.target.id === "urlInput") {
      setUrl(e.target.value);
    }
  };

  const createNewTweetFunc = () => {
    if (userId && url && content) {
      props.createNewUser(userId, content, url);
      setUserId(props.usersPage.users[0].id);
      setContent("");
      setUrl("");
      alert("Added successfully");
    }
  };

  return (
    <div className="add-tweet-container">
      <div className="form-wrapper">
        <label>
          <span>User ID</span>
          <select
            type="text"
            id="userIdInput"
            value={userId}
            onChange={changeHandler}
          >
            {props.usersPage.users?.map((user, i) => (
              <option value={user.id} key={i}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Content</span>
          <textarea
            type="text"
            id="contentInput"
            value={content}
            onChange={changeHandler}
          ></textarea>
        </label>
        <label>
          <span>Image URL</span>
          <input
            type="text"
            id="urlInput"
            value={url}
            onChange={changeHandler}
          />
        </label>
        <button onClick={createNewTweetFunc}>ADD TWEET</button>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => ({
  createNewUser(userId, content, image) {
    Axios.post("http://domer.tech:9999/tweets/", {
      userId,
      content,
      image,
    });
    dispatch({
      type: "CREATE_NEW_USER",
    });
  },
});

export default connect(mapState, mapDispatch)(AddTweet);

import Axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import "./addUser.css";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [url, setUrl] = useState("");

  const changeHandler = (e) => {
    if (e.target.id === "nameInput") {
      setName(e.target.value);
    } else if (e.target.id === "nicknameInput") {
      setNickname(e.target.value);
    } else if (e.target.id === "urlInput") {
      setUrl(e.target.value);
    }
  };

  const createNewUserFunc = () => {
    if (name && url && nickname.length > 1) {
      props.createNewUser(name, nickname, url);
      setName("");
      setNickname("");
      setUrl("");
      alert("Added successfully");
    }
  };

  return (
    <div className="add-user-container">
      <div className="form-wrapper">
        <label>
          <span>Name</span>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={changeHandler}
          />
        </label>
        <label>
          <span>Nickname</span>
          <input
            type="text"
            id="nicknameInput"
            value={nickname}
            onChange={changeHandler}
          />
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
        <button onClick={createNewUserFunc}>ADD USER</button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  createNewUser(name, nickname, url) {
    Axios.post("http://domer.tech:9999/users/", {
      name: name,
      username: `@${nickname}`,
      avatar: url,
    });
    dispatch({
      type: "CREATE_NEW_USER",
    });
  },
});

export default connect(null, mapDispatch)(AddUser);

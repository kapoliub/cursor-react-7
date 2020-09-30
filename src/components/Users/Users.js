import Axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import User from "./User";

const UsersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => ({
    async getUsers() {
      const users = await Axios.get("http://domer.tech:9999/users");
      dispatch({
        type: "UPDATE_USERS_LIST",
        users: users.data.data,
      });
    },
});


const Users = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <UsersList>
      {props.usersPage.users?.map((el, i) => {
        return <User key={i} name={el.name} nickname={el.username} avatar={el.avatar}/>;
      })}
    </UsersList>
  );
};

export default connect(mapState, mapDispatch)(Users);

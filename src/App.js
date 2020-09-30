import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import AddTweet from "./components/AddTweet/AddTweet";
import AddUser from "./components/AddUsers/AddUser";
import Navbar from "./components/Navbar/Navbar";
import Tweets from "./components/Tweets/Tweets";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      {/* <Posts /> */}
      <HashRouter>
        <Navbar />
        <div className='content'>
          <Route path="/" exact>
            <Redirect to="/users" />
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/addUser" component={AddUser} />
          <Route path="/tweets" component={Tweets} />
          <Route path="/addTweet" component={AddTweet} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Card from "./Card";

//Display Data

class App extends React.Component {
  state = {
    username: "tzonglian",
    userData: {},
    userFollowers: [],
  };

  componentDidMount() {
    this.fetchUser(this.state.username);
    this.fetchFollowers(this.state.username);
  }

  //Fetch User's Data and Followers
  fetchUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          userData: data,
        });
        console.log(this.state);
      })
      .catch((err) => console.log("error: ", err));
  };

  fetchFollowers = (username) => {
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(this.state);
        this.setState({
          ...this.state,
          userFollowers: data,
        });
      })
      .catch((err) => console.log("error: ", err));
  };

  render() {
    console.log(this.state.userFollowers);
    return (
      <div className="App">
        <h1>Github User Card using React</h1>
        <br></br>
        <div className="cards">
          <Card data={this.state.userData} key={this.state.userData.id} />
          <h2>Followers:</h2>
          {this.state.userFollowers.map((person) => (
            <Card data={person} key={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

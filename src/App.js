import React from "react";

import "./App.css";
import UserInfo from "./components/UserInfo/UserInfo";

class App extends React.Component {
  state = {
    users: [],
    number: 0
  };

  getUsers = async i => {
    const url = `https://api.github.com/user/${i}`;

    // I limited numbers of users because I reached requests limits several times during development:)
    if (this.state.number <= 25) {
      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        this.setState({
          users: [...this.state.users, jsonData],
          number: (this.state.number += 1)
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      clearInterval(this.intervalData);
    }
  };

  //it is a good practice to fetch data in componentDidMount lifecycle method so I call get users from there
  componentDidMount() {
    this.intervalData = setInterval(() => {
      this.getUsers(this.state.number);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalData);
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => {
          return user.name ? (
            <UserInfo
              key={user.id}
              user={user}
              details={this.handleShowDetails}
            />
          ) : null;
        })}
      </div>
    );
  }
}

export default App;

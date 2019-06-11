import React from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    number: 0
  };

  getUsers = async i => {
    const url = `https://jsonplaceholder.typicode.com/users/${i}`;
    if (this.state.number <= 10) {
      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        this.setState({
          users: [...this.state.users, jsonData],
          number: this.state.number += 2
        });
        console.log(this.state.users, this.state.number);
      } catch (err) {
        console.log(err);
      } 
    } else {
      clearInterval(this.intervalData);
    }
  
  };

  //it is a good practice to fetch data in componentDidMount lifecycle method
  componentDidMount() {
    this.intervalData = setInterval(() => {
      this.getUsers(this.state.number);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalData);
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => {
          return user.name ? <UserInfo key={user.id} user={user} /> : null;
        })}
      </div>
    );
  }
}

export default App;

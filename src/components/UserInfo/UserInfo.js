import React from "react";

import "./UserInfo.css";
import RepoInfo from "../RepoInfo/RepoInfo";
import Modal from "../Modal/Modal";

export default class UserInfo extends React.Component {
  state = {
    repos: [],
    showModal: false
  };

  getRepos = async () => {
    const { id } = this.props.user;
    const url = `https://api.github.com/user/${id}/repos?per_page=5`;

    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState({
        repos: jsonData,
        showModal: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleModalHide = (e) => {
    this.setState({ showModal: false });
    e.stopPropagation();
  };

  render() {
    const { name, login } = this.props.user;
    return (
      <div className="single-tile" onClick={this.getRepos}>
        <h3>
          User Id: <span>{name}</span>
        </h3>
        <h3>
          User login: <span>{login}</span>
        </h3>
        {this.state.showModal ? (
          <Modal 
            onClose={this.handleModalHide}
            >
            <RepoInfo repos={this.state.repos} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

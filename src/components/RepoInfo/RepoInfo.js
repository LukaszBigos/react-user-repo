import React, { Component } from "react";

import "./RepoInfo.css";

export default class RepoInfo extends Component {
  render() {
    const repos = this.props.repos;

    return repos.map(repo => {
      return (
        <div className="repo-container" key={repo.id}>
          <h3>
            Repo Id: <span>{repo.id}</span>
          </h3>
          <h3>
            Full Name: <span>{repo.full_name}</span>
          </h3>
          <h3>
            Forks: <span>{repo.forks}</span>
          </h3>
        </div>
      );
    });
  }
}

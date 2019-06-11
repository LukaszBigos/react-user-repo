import React from 'react';
import './UserInfo.css';

export default function UserInfo(props) {
  const { name, username } = props.user;
  return (
    <div className="single-tile">
      <h3>User Id: <span>{ name }</span></h3>
      <h3>User login: <span>{username}</span></h3>
    </div>
  )
}

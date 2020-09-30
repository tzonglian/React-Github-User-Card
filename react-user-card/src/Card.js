import React from "react";

const Card = (props) => {
  console.log(props.data);
  return (
    <div className="card">
      <img src={props.data.avatar_url} alt={"user's profile picture"} />
      <div className="card-info">
        <h3 className="name">{props.data.name}</h3>
        <p className="username">{props.data.login}</p>
        <p>Location: {props.data.location}</p>
        <p>
          Profile:
          <a href={props.data.html_url}>{props.data.html_url}</a>
        </p>
        <p>Followers: {props.data.followers}</p>
        <p>Following: {props.data.following}</p>
        <p>Bio: {props.data.bio}</p>
      </div>
    </div>
  );
};

export default Card;

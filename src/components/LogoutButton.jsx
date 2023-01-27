import React from "react";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    window.location = '/login';
  };
  return <button onClick={handleClick} className="logoutButton" >Logout</button>;
}

export default LogoutButton;
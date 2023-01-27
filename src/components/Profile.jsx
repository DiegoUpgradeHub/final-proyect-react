import React from "react";

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <div className="homeDisplay">
      <h1>Profile</h1>
      <p>
        Email: {email}
      </p>
      <p>
        Password: {password}
      </p>
      <p>
        Name: {name}
      </p>
    </div>
  );
}

export default Profile;
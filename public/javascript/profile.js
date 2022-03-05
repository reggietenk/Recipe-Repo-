import React, { useState } from "react";
import "views\layouts\profile.css";

function Profile() {

  const [user] = useState(JSON.parse(sessionStorage.getItem("user")));
  const initials = (user.firstName + user.lastName);

  return (
    <div className="form animate__animated animate__fadeIn">
      <form className="field">
      <div className="card-content">

          <h2 id="name" className="">{user.firstName + " " + user.lastName}</h2>
                <p><i className=""></i> {user.email}</p>
                <p><i className=""></i> Group Chat: {user.firstName + " " + user.lastName}</p>
      </div>
  </form>
</div>


  );
}

export default Profile;
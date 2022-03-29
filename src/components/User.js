import React from "react";

function User({ user }) {
  return (
    <div className="user">
      {user.name} : {user.score}
    </div>
  );
}

export default User;

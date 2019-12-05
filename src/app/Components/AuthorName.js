import React from "react";

const AuthorName = props => {
  const { name, surname, email, phone } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>Username: Pera Peric</p>
      <p>Email: cooL@email.com</p>
      <p>phone: 9393939393</p>
    </div>
  );
};
export default AuthorName;

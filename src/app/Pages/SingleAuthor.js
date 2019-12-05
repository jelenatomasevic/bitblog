import React from "react";
import AuthorAddress from "../Components/AuthorAddress";
import AuthorCompany from "../Components/AuthorCompany";
import AuthorName from "../Components/AuthorName";

const SingleAuthor = () => {
  return (
    <div>
      <h1>Single Author</h1>
      {/* <AuthorName name={this.state.author.name}/> */}
      <AuthorName />
      <hr />
      <AuthorAddress />
      <hr />
      <AuthorCompany />
      <hr />
    </div>
  );
};

export default SingleAuthor;

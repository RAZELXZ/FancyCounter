/* eslint-disable no-unused-vars */
import React from "react";

const Title = ({ locked }) => {
  return (
    <h1 className="title">
      {!locked ? "Fancy Counter" : "Please Go PRO version!"}
    </h1>
  );
};

export default Title;

import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-wider text-white font-poppins">
        {title}
      </h1>
    </div>
  );
};

export default Heading;

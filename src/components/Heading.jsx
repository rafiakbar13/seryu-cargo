import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-wider text-white md:text-4xl font-poppins">
        {title}
      </h1>
    </div>
  );
};

export default Heading;

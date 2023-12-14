import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-wider text-white sm:text-2xl md:text-4xl font-poppins">
        {title}
      </h1>
    </div>
  );
};

export default Heading;

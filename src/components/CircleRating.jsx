import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="relative inline-block bg-white rounded-full">
      <div className="flex items-center justify-center circleRating">
        <CircularProgressbar
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({
            pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "blue",
            trailColor: "#d6d6d6",
          })}
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default CircleRating;

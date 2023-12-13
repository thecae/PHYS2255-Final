"use strict";

import React from "react";
import PropTypes from "prop-types";

const VelocitySlider = ({ onVelocityChange }) => {
  return (
    <div className="absolute top-5 right-5 text-center">
      <div className="italic text-nightfall-function">Velocity Control</div>
      <div className="flex items-center justify-between">
        <span className="text-nightfall-string">0</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => onVelocityChange(parseFloat(e.target.value))}
          className="slider-thumb slider-track"
        />
        <span className="text-nightfall-string">c</span>
      </div>
    </div>
  );
};

VelocitySlider.propTypes = {
  onVelocityChange: PropTypes.func.isRequired,
};

export default VelocitySlider;

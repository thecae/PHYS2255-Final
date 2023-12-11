"use strict";

import React from "react";
import { createRoot } from "react-dom/client";
import Three from "./Demo.js";

const App = () => {
  return <Three />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

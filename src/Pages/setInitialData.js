import React from "react";

import { data } from '../Api/Dummy';

export default function setInitialData() {
  function goHome() {
    window.location.href = "/";
  }
  localStorage.setItem("leveringen", JSON.stringify(data))
  setTimeout(goHome, 1000);
  return <h1>Initial data set.</h1>;
}

"use client";
import { useEffect } from "react";

const renderButton = () => {
  const buttonEl = document.createElement("button");
  const buttonTextEl = document.createElement("span");
  buttonEl.appendChild(buttonTextEl);
  buttonTextEl.innerText = "Click me!";
  buttonEl.onclick = () => {
    window.alert("Clicked...!");
  };
  buttonEl.style.border = "solid 1px black";
  buttonEl.style.borderRadius = "5px";
  buttonEl.style.padding = "10px";
  document.getElementById("test").appendChild(buttonEl);
};

export const Button = () => {
  useEffect(() => {
    renderButton();
  }, []);
  return <></>;
};

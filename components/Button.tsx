"use client";
import React from "react";

const callServerlessFunction = async () => {
  const res = await fetch("/api/hello");
  const json = await res.json();
  console.log(json);
};

export default function Button() {
  return (
    <button onClick={callServerlessFunction}>
      <h2>Click Me</h2>
    </button>
  );
}

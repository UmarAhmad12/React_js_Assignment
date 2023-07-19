import React from "react";

export default function Person({ name, age }) {
  return (
    <div>
      <p>
        Person's Name: {name} and Age: {age}
      </p>
    </div>
  );
}

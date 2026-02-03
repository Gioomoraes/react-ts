import React, { useState } from "react";

interface Props {}

const State = () => {
  const [text, setText] = useState();

  return (
    <div>
      <p>O texto é: {text}</p>
    </div>
  );
};

export default State;

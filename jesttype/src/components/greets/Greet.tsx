import React from "react";

type Iname = {
  name?: string;
};

const Greet = (props: Iname) => {
  return (
    <div>
      <p>Hello : {props.name}</p>
    </div>
  );
};

export default Greet;

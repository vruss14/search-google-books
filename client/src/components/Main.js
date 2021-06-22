import React from "react";

// The main section of the app (semantic HTML)

function Main(props) {
  return (
      <main>{props.children}</main>

  );
}

export default Main;
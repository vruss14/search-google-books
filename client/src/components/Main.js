import React from "react";

// The main section of the app (semantic HTML)

const style = {
  minHeight: "100vh"
}

function Main(props) {
  return (
      <main className="is-desktop is-vcentered" style={style}>{props.children}</main>

  );
}

export default Main;
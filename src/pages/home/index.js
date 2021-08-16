import React from "react";
//import './style.css'
import Header from "./components/Header";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />

      <div className="toolbar"></div>
      <main className="main">
        <div className="navbar">navbar</div>
        <div className="feed">feed</div>
      </main>
    </div>
  );
}

export default Home;

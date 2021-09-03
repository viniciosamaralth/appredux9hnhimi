import React from "react";
//import './style.css'
import { makeStyles } from "@material-ui/styles";
import Header from "./components/Header";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
  box: {
    display: "flex",
  },
});

function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <box className={classes.box} display="flex">
            <NavBar />
            <Feed />
          </box>
        </Container>
      </main>
    </div>
  );
}

export default Home;

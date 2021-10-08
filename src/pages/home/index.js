import React from "react";
//import './style.css'
import { makeStyles } from "@material-ui/styles";
import Header from "./components/Header/index";
import NewPost from "../Post/New";
import Feed from "../Feed";
import NotFound from "../NotFound";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

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
        <Switch>
          <Route exact path="/" component={Feed}></Route>
          <Route exact path="/post/new" component={NewPost}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default Home;

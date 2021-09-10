import React from "react";
import { makeStyles, Typography, Grid, Box } from "@material-ui/core";
import { AlignCenter } from "react-feather";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  left: {
    background: "white",
    flexBasis: "58%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    textAlign: "center",
  },
  right: {
    background: "yellow",
    flexBasis: "42%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "64px 32px",
    alignItems: "center",
  },
}));

function SignIn() {
  const classes = useStyle();

  return (
    <Grid>
      <Grid md={7}></Grid>
      <Grid md={5}></Grid>
    </Grid>
  );
}

export default SignIn;

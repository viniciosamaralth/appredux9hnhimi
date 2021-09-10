import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
    <div className={classes.root}>
      <div className={classes.left}>
        <img src="/images/background.png" alt="BackGround" />;
        <Typography
          style={{ color: "DimGray", fontSize: 35, lineHeight: "45px" }}
        >
          {" "}
          <strong>
            SISTEMA DE EMISSÃO DE NOTAS NA WEB É COM A AGILSOFT !!!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "Gray",
            marginTop: 30,
            fontSize: 15,
          }}
        >
          AGILSOFT INFORMATICA LTDA
        </Typography>
      </div>
      <div className={classes.right}>
        <form className={classes.form}>
          <h4>
            <strong>ACESSO</strong>
          </h4>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;

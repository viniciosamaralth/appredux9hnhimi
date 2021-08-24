import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyle = makeStyles({
  AppBar: {
    boxShadow: "yes",
  },
});

function Header() {
  const Classes = useStyle();

  return (
    <AppBar position="fixed" color="inherit" className={Classes.AppBar}>
      <Toolbar>
        {/* <div>
          <a href="/"> PROGRAMA DO VINI</a>
          <imput type="text"></imput>
        </div>
        <div>
          <Button color="primary" variant="contained">
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

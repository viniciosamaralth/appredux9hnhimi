import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Account from "./Account";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  AppBar: {
    boxShadow: "yes",
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "Center",
  },
  Button: {
    marginRight: 10,
  },
  Bell: {
    marginRight: 10,
  },
});

function Header() {
  const Classes = useStyle();
  const account = useSelector((state) => state.account);

  // useEffect(() => {
  //   console.log(account);
  // }, [account]);

  return (
    <AppBar position="fixed" color="inherit" className={Classes.AppBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={Classes.img} />
        <div className={Classes.grow}></div>
        <div className={Classes.userSection}>
          <Button
            color="primary"
            variant="contained"
            className={Classes.Button}
          >
            Novo Post
          </Button>
          <SvgIcon className={Classes.Bell}>
            <Bell />
          </SvgIcon>
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
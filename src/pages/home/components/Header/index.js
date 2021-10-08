import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Notification from "./Notifications";
import Account from "./Account";
import { useSelector } from "react-redux";
import WritePost from "./WritePost";
import { useHistory } from "react-router-dom";

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
});

function Header() {
  const Classes = useStyle();
  const account = useSelector((state) => state.account);
  const history = useHistory();

  const handleClick = async () => {
    history.push("/");
  };
  // useEffect(() => {
  //   console.log(account);
  // }, [account]);

  return (
    <AppBar position="fixed" color="inherit" className={Classes.AppBar}>
      <Toolbar>
        <img
          src="/images/logo.png"
          alt="logo"
          className={Classes.img}
          onClick={handleClick}
        />
        <div className={Classes.grow}></div>
        <div className={Classes.userSection}>
          <WritePost />
          <Box ml={2}>
            <Notification />
          </Box>
          <Box ml={2}>
            <Account />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

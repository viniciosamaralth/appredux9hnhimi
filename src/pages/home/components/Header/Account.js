import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { signOut } from "../../../../store/actions/accountActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthenticated = !!account.user;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    handleClose();
    dispatch(signOut());
    history.push("/sign-in");
    console.log("TINHA QUE TER IDO PARA A SIGN-IN!");

    //logoff no app através de uma action
  };

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt="Avatar"
        src
        src={account.user && account.user.avatar}
      />
      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>Conta</MenuItem>
          <MenuItem>Opção 2</MenuItem>
          <MenuItem>Opção 3</MenuItem>
          <MenuItem>Configurações</MenuItem>
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>ENTRAR</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Account;

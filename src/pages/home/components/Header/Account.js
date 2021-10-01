import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { signOut } from "../../../../store/actions/accountActions";
import { useDispatch } from "react-redux";

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

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
    //logoff no app através de uma action
  };

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
          <MenuItem onclick={handleSignOut}>Sair</MenuItem>
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

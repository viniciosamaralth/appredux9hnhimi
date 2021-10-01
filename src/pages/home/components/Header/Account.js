import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <MenuItem>Sair</MenuItem>
      </Menu>
    </>
  );
}

export default Account;

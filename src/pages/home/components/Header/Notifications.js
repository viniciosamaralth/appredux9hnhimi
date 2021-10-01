import React from "react";
import { useSelector } from "react-redux";
import { SvgIcon, IconButton } from "@material-ui/core/";
import { Bell } from "react-feather";

function Notification() {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  return (
    isAuthenticated && (
      <IconButton>
        <SvgIcon>
          <Bell />
        </SvgIcon>
      </IconButton>
    )
  );
}

export default Notification;

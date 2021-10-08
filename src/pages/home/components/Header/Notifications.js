import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SvgIcon, IconButton, Popover } from "@material-ui/core/";
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  User as ConnectionIcon,
} from "react-feather";
import { getNotifications } from "../../../../store/actions/notificationsActions";

function Notification() {
  const account = useSelector((state) => state.account);
  const notifications = useSelector((state) => state.notifications);
  const isAuthenticated = !!account.user;
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  console.log(notifications);

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <Bell />
          </SvgIcon>
        </IconButton>
        <Popover
          onClose={handleClose}
          open={isOpen}
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          The content of the Popover.
        </Popover>
      </>
    )
  );
}

export default Notification;

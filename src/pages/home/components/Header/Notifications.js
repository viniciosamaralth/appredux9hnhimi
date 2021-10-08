import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SvgIcon,
  IconButton,
  Popover,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core/";
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  User as ConnectionIcon,
} from "react-feather";
import { getNotifications } from "../../../../store/actions/notificationsActions";

const iconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon,
};

const useStyle = makeStyles((theme) => ({
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

function Notification() {
  const account = useSelector((state) => state.account);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const isAuthenticated = !!account.user;
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <BellIcon />
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
          <Box p={2}>
            <Typography variant="h6" color="textPrimary">
              Notificações
            </Typography>
          </Box>

          <List>
            {notifications.map((notification) => {
              const Icon = iconsMap[notification.type];
              return (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.icon}>
                      <SvgIcon>
                        <Icon />
                      </SvgIcon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "textPrimary",
                    }}
                    secondary={notification.description}
                  />
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </>
    )
  );
}

export default Notification;

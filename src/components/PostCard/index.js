import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  ListItem,
  ListItemText,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  CardActionArea,
  ListSubheader,
  IconButton,
} from "@material-ui/core/";
import {
  Favorite as FavoriteIcon,
  Bookmark as BookmarkIcon,
  Message as MessageIcon,
} from "@material-ui/icons/";
import { Tag } from "react-feather";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    display: "flex",
    alignItems: "center",
  },
  caption: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: "auto",
    marginBottom: theme.spacing(2),
    padding: "0 24px",
  },
  image: {
    height: 300,
    width: "100%",
    maxWidth: "100%",
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: "auto",
  },
}));

function PostCard({ post }) {
  const Classes = useStyle();

  return (
    <Card className={Classes.root}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <div className={Classes.subheader}>
            <Typography className={Classes.caption} variant="caption">
              {"Avaliado por:"}
            </Typography>
            <Typography className={Classes.caption} variant="subtitle2">
              {post.author.name}
            </Typography>
            <Typography className={Classes.caption} variant="caption">
              {post.date}
            </Typography>
          </div>
        }
      />

      <CardContent className={Classes.content}>
        <Typography className={Classes.message} variant="body1">
          {post.hasgtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} className={Classes.image} alt="img" />
        </CardActionArea>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: "pointer" }}
            color="textSecondary"
            variant="body2"
          >
            {10}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            className={Classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {30}
          </Typography>
        </IconButton>
        <IconButton aria-label="favorite" className={Classes.favorite}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;

import React from "react";
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
} from "@material-ui/core/";
import ListSubheader from "@material-ui/core/ListSubheader";
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
            <Typography variant="caption">{"Avaliado por:"}</Typography>
            <Typography variant="subtitle2">{post.author.name}</Typography>
            <Typography variant="caption">{post.date}</Typography>
          </div>
        }
      />

      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PostCard;

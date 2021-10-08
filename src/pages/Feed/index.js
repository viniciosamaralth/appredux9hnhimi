import React from "react";
//import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  ListItem,
  ListItemText,
  Container,
  Box,
} from "@material-ui/core/";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Tag } from "react-feather";
import PostCard from "../../components/PostCard";
import NavBar from "./NavBar";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
  box: {
    display: "flex",
  },
});

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "NOME AUTOR",
      username: "USUARIO1",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    title: "Criando um app do zero com node",
    date: "April 7, 2020",
    description: "TESTE PARA FEED DE NOTICIAS",
    hasgtags: "#dotnet, #javascript, #reactjs,",
    image: "/images/posts/post9.jpg",
  },
  {
    id: 2,
    author: {
      id: 2,
      name: "NOME AUTOR",
      username: "USUARIO1",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    title: "TESTE DE POSTAGEM 2",
    date: "April 7, 2020",
    description: "TESTE PARA FEED DE NOTICIAS",
    hasgtags: "#dotnet, #javascript, #reactjs,",
    image: "/images/posts/postagem.jpg",
  },
  {
    id: 3,
    author: {
      id: 3,
      name: "NOME AUTOR",
      username: "USUARIO1",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    title: "TESTE DE POSTAGEM 3",
    date: "April 7, 2020",
    description: "TESTE PARA FEED DE NOTICIAS",
    hasgtags: "#dotnet, #javascript, #reactjs,",
    image: "/images/posts/post9.jpg",
  },
];

function Feed() {
  const classes = useStyle();

  return (
    <Container maxWidth="lg">
      <Box className={classes.box} display="flex">
        <NavBar />
        <div className={classes.root}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;

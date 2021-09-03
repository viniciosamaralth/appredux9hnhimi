import React from "react";
//import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, ListItem, ListItemText } from "@material-ui/core/";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Tag } from "react-feather";
import PostCard from "../../../components/PostCard";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

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
    image: "/images/posts/post9.jpeg",
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
    image: "/images/posts/post9.jpeg",
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
    image: "/images/posts/post9.jpeg",
  },
];

function Feed() {
  const Classes = useStyle();

  return (
    <div className={Classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;

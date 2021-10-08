import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function WritePost() {
  const history = useHistory();

  const handleClick = async () => {
    history.push("/post/new");
  };

  return (
    <Button onClick={handleClick} color="primary" variant="contained">
      Novo Post
    </Button>
  );
}

export default WritePost;

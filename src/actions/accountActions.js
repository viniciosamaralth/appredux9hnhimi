const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN SUCCESS",
      payload: {
        user: {
          id: 1,
          name: "Vinicios Amaral",
          username: "viniciosamaral",
          email: "vinicios@agilsoft.com.br",
          avatar: "/images/avatars/avatar_vini.png",
        },
      },
    });
  };
};

export default signIn;

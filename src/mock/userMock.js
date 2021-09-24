import mock from "../utils/mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "TESTE",
//   email: "vinicios@agilsoft.com",
// });

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "vinicios@agilsoft.com.br" || password !== "1") {
    return [400, { message: "Seu email ou senha estão incorretos" }];
  }

  const user = {
    id: 1,
    name: "Vinicios Amaral",
    username: "viniciosamaral",
    email: "vinicios@agilsoft.com.br",
    avatar: "/images/avatars/avatar_vini.png",
  };

  return [200, { user }];
});

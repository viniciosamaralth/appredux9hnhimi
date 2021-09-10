import mock from "../utils/mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "TESTE",
//   email: "vinicios@agilsoft.com",
// });

mock.onPost("/api/home/login").reply((config) => {
  console.log(config);
  const { email, password } = JSON.parse(config.data);
  console.log(email, password);
  return [200, {}];
});

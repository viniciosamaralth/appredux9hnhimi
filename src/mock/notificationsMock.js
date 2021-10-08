import mock from "../utils/mock";
import moment from "moment";

mock.onGet("/api/notifications").reply(200, {
  notifications: [
    {
      id: "1111",
      title: "Novos Likes",
      description: "Voce Recebeu um novo like !",
      type: "like",
      createdAt: moment().subtract(3, "day").toDate().getTime(),
    },

    {
      id: "2222",
      title: "Novos seguidores",
      description: "Começaram a seguir voce, cuidado!",
      type: "connection",
      createdAt: moment().subtract(3, "day").toDate().getTime(),
    },
    {
      id: "3333",
      title: "Novos Comentarios",
      description: "Comentarios para voce!",
      type: "new_comment",
      createdAt: moment().subtract(3, "day").toDate().getTime(),
    },
  ],
});

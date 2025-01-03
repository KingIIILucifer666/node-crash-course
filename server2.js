import { createServer } from "http";
import { JsonMiddleware, Logger } from "./middleware/authUser.js";
import {
  createUserHandler,
  getUserByIdHandler,
  getUsersHandler,
} from "./Controllers/authControllers.js";
import { NotFound } from "./Controllers/notFound.js";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Monkie Uncle Senior" },
  { id: 2, name: "Monkie Uncle Jr." },
  { id: 3, name: "Monkie Dad" },
];

const server = createServer(async (req, res) => {
  Logger(req, res, () => {
    JsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res, users);
      } else if (req.url.match(/\/api\/users\/\d+/) && req.method === "GET") {
        getUserByIdHandler(req, res, users);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res, users);
      } else {
        NotFound(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

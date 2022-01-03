const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.frasesPath = "/frases";

    // Middleware
    this.middlewares();
    // Rutas
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(
      this.frasesPath,
      require("../routes/quote")
    );
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(
        "Servidor corriendo en puerto",
        this.port
      );
    });
  }
}

module.exports = Server;

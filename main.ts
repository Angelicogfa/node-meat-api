import * as restify from "restify";
import { environment } from "./common/environment";
import { Server } from "./servers/server";

const server: Server = new Server();
server
  .bootstrap()
  .then(servidor => {
    console.log(
      `Application is listening on: ${servidor.application.address()}`
    );
  })
  .catch(error => {
    console.log(`Error on start application: ${error.message}`);
  });

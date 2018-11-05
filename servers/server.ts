import * as restify from "restify";
import { environment } from "../common/environment";
import { Router } from "../common/router";

export class Server {
  application: restify.Server;

  private initRouter(routes: Router[] = []): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {

        this.application = restify.createServer({
          name: "meat-api",
          version: "1.0.0"
        });

        this.application.use(restify.plugins.bodyParser());

        routes.forEach(route => {
          route.applyRoutes(this.application);
        });

        this.application.listen(environment.port, () => {
          resolve(this.application);
        });

      } catch (error) {
        reject(error);
      }
    });
  }

  async bootstrap(routes: Router[] = []): Promise<Server> {
    await this.initRouter(routes);
    return this;
  }
}

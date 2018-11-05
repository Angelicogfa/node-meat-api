import * as restify from "restify";

export abstract class Router {
  abstract applyRoutes(server: restify.Server): void;
}

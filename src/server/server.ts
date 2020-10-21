import dotenv from 'dotenv';
import ApplicationError from '../errors/application-error';
import express, { Router } from 'express';
import log from '../config/winston';

interface singleRouter {
  path: string,
  stack: (Function | string | undefined)[]
}

const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env.default' });
}

export default class Server {
  public apiInstance: any
  constructor() {
    this.initializeApi();
  }

  initializeApi = () => {
    this.apiInstance = express();
  };

  extractPathAndMethod = (obj: singleRouter) => {
    for(let i = 0; i < obj.stack.length; i++) {
      log.info()
    }
  }

  addApiRoute = (method: string, uri: string, ...fn: object[]) => {
    const info = `Added route: [${method}] ${uri}`;
    this.apiInstance[method.toLowerCase()](uri, ...fn);
    log.info(info)
  };

  start = () => {
    log.info('Starting server...');
    this.apiInstance.listen(process.env.PORT, (err: ApplicationError) => {
      if (err) log.error(`Unable to start ${process.env.NAME} server:`, err);
      else {
        log.info(`${process.env.NAME} server is listening on ${process.env.PORT}`);
      }
    });
  };
}

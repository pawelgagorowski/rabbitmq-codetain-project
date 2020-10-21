import dotenv from 'dotenv';
import ApplicationError from '../errors/application-error';
import express from 'express';
import log from '../config/winston'

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

  addApiRoute = (method: string, uri: string, ...fn: object[]) => {
    const info = `Added route: [${method}] ${uri}`;

    this.apiInstance[method.toLowerCase()](uri, ...fn);
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
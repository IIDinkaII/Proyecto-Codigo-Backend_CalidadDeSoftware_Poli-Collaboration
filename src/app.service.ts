import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configProject: ConfigType<typeof config>,
    @Inject('PG') private clientPg: Client,
  ) {}

  getHello(): string {
    console.log(this.configProject.database.name);
    this.clientPg.query('SELECT * FROM Usuario', (err, resp) => {
      console.log(err);
      console.log(resp.rows);
    });
    return 'Proyecto A.D.A.M';
  }

  getUsuarios() {
    return new Promise((resolve, reject) => {
      console.log(this.clientPg);
      this.clientPg.query('SELECT * FROM Usuario', (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp.rows);
      });
    });
  }
}

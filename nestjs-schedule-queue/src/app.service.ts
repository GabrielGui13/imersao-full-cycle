import { Injectable } from '@nestjs/common';

@Injectable() //injetável em outros lugares
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

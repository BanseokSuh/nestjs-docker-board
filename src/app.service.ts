import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  printHelloWorld() {
    return 'Hello Banny';
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {
    this.appService = appService;
  }

  @Get()
  get(): any {
    return this.appService.printHelloWorld();
  }
}

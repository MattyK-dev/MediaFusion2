import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    try {
      const response = await axios.get('http://images:3000/api');
      console.log('Response from http://images:3001/api');
      console.log(response.data);
    } catch (error) {
      console.log('Error calling http://images:3001/api');
      console.log(error.message);
    }
    return this.appService.getData();
  }
}

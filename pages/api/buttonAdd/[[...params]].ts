import { buttonAddService } from '@/apiServices/buttonAdd';
import { Get, Param, createHandler } from 'next-api-decorators';
// import { Body, createHandler, Get, Param, Patch } from '@storyofams/next-api-decorators';

class ButtonAddHandler {
  @Get('/:userName')
  async getUserQuestionById(@Param('userName') userName: string) {
    return buttonAddService.getUserByName({ userName });
  }
}

export default createHandler(ButtonAddHandler);
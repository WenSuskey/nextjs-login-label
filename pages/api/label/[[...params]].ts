
import { labelServices } from '@/apiServices/label';
import { Label } from '@prisma/client';
import {  Body, createHandler, Get, Param, Patch } from 'next-api-decorators';

// SAMPLE API CONTROLLER

class UserHandler {
  @Get('/:userName')
  async getUserQuestionById(@Param('userName') userName: string) {
    return labelServices.getLabelByName({ userName });
  }
  @Patch('/:userName')
  async patchAnswer(@Body() data: Partial<Label>, @Param('userName') userName: string) {
    return labelServices.updateLabel({ userName, data });
  }
  
}

export default createHandler(UserHandler);
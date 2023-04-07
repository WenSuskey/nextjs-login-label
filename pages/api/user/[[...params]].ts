import { userServices } from '@/apiServices/user';
import type { User } from '@prisma/client';
import { Post, Body, createHandler, Get, Param } from 'next-api-decorators';

// SAMPLE API CONTROLLER

class UserHandler {
  @Post()
  async createUser(@Body() user: User) {
    return userServices.createUser({ user });
  }
  @Get('/:userName')
  async getUserQuestionById(@Param('userName') userName: string) {
    return userServices.getUserByName({ userName });
  }
}

export default createHandler(UserHandler);
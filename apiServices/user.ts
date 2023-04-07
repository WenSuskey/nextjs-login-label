import { createUser, getUserById } from '@/dao/user';
import { User } from '@prisma/client';

// SAMPLE SERVICES FOR CONTROLLERS

class UserServices {
  async createUser({ user }: { user: User }) {
    return createUser({ user });
  }

  async getUserByName({ userName }: { userName: string }) {
    return getUserById({ userName });
  }
}

export const userServices = new UserServices();
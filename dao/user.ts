
import { prisma } from "@/prisma";
import { User } from "@prisma/client";


export const createUser = ({ user }: { user:User }) => {
  return prisma.user.create({
     data: {
      userName : user.userName,
      passWord : user.passWord,
    },
  });
};

export const getUserById = ({ userName }: { userName: string }) => {
  return prisma.user.findFirst({
    where: {
      userName: userName,
    },
  });
};
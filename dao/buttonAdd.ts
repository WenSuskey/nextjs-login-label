import { Prisma } from ".prisma/client";
import { prisma } from "@/prisma";



export const getUserById = ({ userName }: { userName: string }) => {
    return prisma.buttonAdd.findFirst({
      where: {
        userName: userName,
      },
    });
  };
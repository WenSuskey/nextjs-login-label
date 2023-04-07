import { prisma } from "@/prisma";
import { Label } from "@prisma/client";



export const getLabelById = ({ userName }: { userName: string }) => {
    return prisma.label.findFirst({
        where: {
        userName: userName,
        },
    });
};

export const updateLabel = ({
    userName,
    data,
  }: {
    userName: string;
    data: Partial<Label>;
  }) => {
    return prisma.label.update({
      where: {
        userName: userName,
      },
      data: data,
    });
};
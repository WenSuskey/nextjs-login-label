import { request } from "@/utils";
import { Label } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetLabelByUser = (userName: string) => {
  return useQuery(
    ['user', userName],
    async () => {
      return request({
        pathname: '/api/label/' + userName,
        method: 'GET',
      }) as Promise<Label | null>;
    },
    {
      enabled: false,
    }
  );
};
export const useUpdateLabel= () => {
  return useMutation(
    async ({ userName, data }: { userName: string; data: Partial<Label> }) => {
      return request({
        pathname: '/api/label/' + userName,
        body: data,
        method: 'PATCH',
      }) as Promise<void>;
    }
  );
};

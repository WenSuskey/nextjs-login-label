
import { request } from '@/utils/api';
import { User } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCreateUser = () => {
  return useMutation(async ({ user }: { user: User }) => {
    return request({
      pathname: 'api/user',
      body: user,
      method: 'POST',
    }) as Promise<User>;
  });
};
export const useUserName = (userName: string) => {
  return useQuery(
    ['user', userName],
    async () => {
      return request({
        pathname: '/api/user/' + userName,
        method: 'GET',
      }) as Promise<User | null>;
    },
    {
      enabled: false,
    }
  );
};

import { request } from "@/utils/api";
import { ButtonAdd } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const useUserName = (userName: string) => {
  
    return useQuery(
      ['user', userName],
      async () => {
        
        return request({
          pathname: '/api/buttonAdd/' + userName,
          method: 'GET',
        }) as Promise<ButtonAdd | null>;
      },
      {
        enabled: false,
      }
    );
  };
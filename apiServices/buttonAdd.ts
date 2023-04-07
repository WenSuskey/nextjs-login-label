import { getUserById } from "@/dao/buttonAdd";

class ButtonAddService {
    async getUserByName({ userName }: { userName: string }) {
      return getUserById({ userName });
    }
  
  }
  
  export const buttonAddService = new ButtonAddService();
import { getLabelById, updateLabel } from "@/dao/label";
import { Label } from "@prisma/client";

class LabelServices {
  async getLabelByName({ userName }: { userName: string }) {
    return getLabelById({ userName });
  }

  async updateLabel({ userName, data }: { userName: string; data: Partial<Label> }) {
    await updateLabel({ userName, data });
    const answers = this.getLabelByName({ userName });
    return answers;
  }
}

export const labelServices = new LabelServices();
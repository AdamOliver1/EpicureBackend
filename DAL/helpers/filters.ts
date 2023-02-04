import { STATUS } from "../../models/status";

export const exists = (): {} => {
  return { status: STATUS.EXISTS };
};

export const disabled = (): {} => {
  return { status: STATUS.DISABLED };
};

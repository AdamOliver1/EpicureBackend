import { Status } from "../../models/status";

export const exists = (): {} => {
  return { status: Status.EXISTS };
};

export const disabled = (): {} => {
  return { status: Status.DISABLED };
};

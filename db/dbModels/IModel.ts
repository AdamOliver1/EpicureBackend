import { Status } from "../../models/status";

type IModel = {
  _id?: string;
  name: string;
  status?: Status;
};

export default IModel;

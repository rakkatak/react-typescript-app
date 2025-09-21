import { Gender } from "../enums/Gender";
import { Status } from "../enums/Status";

export interface Contact {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
}

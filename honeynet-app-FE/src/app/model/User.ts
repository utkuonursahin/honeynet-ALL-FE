import {Firm} from "./Firm";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  firm?: Firm;
}

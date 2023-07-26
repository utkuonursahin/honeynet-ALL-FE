import {EmailListenerStatus} from "../enum/EmailListenerStatus";

export interface EmailListener{
  id:string;
  email:string;
  password:string;
  status: EmailListenerStatus;
}

import Origin from "../interface/Origin";

export interface SuspiciousActivity {
  id: string;
  origin: Origin;
  category: string;
  potName: string;
  payload: {
    username?: string;
    password?: string;
    path?: string;
    targetElementId?: string;
    subject?: string;
    filename:string;
  };
  targetElementId: string;
  date: Date
}

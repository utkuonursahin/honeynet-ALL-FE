import {UserRole} from "../../enum/UserRole";

export default interface UserResponseDTO {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  firmRef?: string;
  firmName?: string;
}

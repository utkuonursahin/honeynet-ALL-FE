import UserResponseDTO from "./UserResponseDTO";

export interface UserUpdateResponseDTO{
  statusCode: number;
  message: string;
  user?:UserResponseDTO;
}

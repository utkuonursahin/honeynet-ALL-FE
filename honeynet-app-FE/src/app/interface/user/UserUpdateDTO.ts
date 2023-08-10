export default interface UserUpdateDTO {
  username?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  passwordConfirm?: string;
}

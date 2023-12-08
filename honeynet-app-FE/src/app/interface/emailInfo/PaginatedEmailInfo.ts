import {EmailInfo} from "../../model/EmailInfo";

export interface PaginatedEmailInfo{
  emailInfoList:EmailInfo[];
  currentPage: number;
  currentSize: number;
  totalPage: number;
  totalSize: number;

}

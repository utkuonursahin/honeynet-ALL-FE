import {EmailInfo} from "../model/Email-info";

export interface PaginatedEmailInfo{
  emailInfoList:EmailInfo[];
  currentPage: number;
  currentSize: number;
  totalPage: number;
  totalSize: number;

}

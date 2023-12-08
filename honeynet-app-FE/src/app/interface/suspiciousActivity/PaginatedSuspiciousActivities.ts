import {SuspiciousActivity} from "../model/SuspiciousActivity";

export interface PaginatedSuspiciousActivities {
  activityList: SuspiciousActivity[];
  currentPage: number;
  currentSize: number;
  totalPage: number;
  totalSize: number;
}

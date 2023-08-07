import {PotCategory} from "../enum/PotCategory";

export interface SuspiciousActivityFilter {
  originFilter: {};
  categoryFilters: PotCategory[];
  dateFilters: string[];
}

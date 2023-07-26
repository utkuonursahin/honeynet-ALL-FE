import {PotCategory} from "../enum/PotCategory";

export interface SuspiciousActivityFilter {
  originFilter: string;
  categoryFilters: PotCategory[];
  dateFilters: string[];
}

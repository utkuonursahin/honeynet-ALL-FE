import {PotCategory} from "../enum/PotCategory";

export interface SuspiciousActivityFilter {
  originFilter: {} | null;
  categoryFilters: PotCategory[];
  dateFilters: string[];
}

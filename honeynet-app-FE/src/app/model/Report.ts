import ReportCategory from "../interface/report/ReportCategory";
import ActivityCountries from "../interface/report/ReportCountry";
import ReportSource from "../interface/report/ReportSource";

export interface Report {
  id: string;
  activityCategories: ReportCategory[];
  activityCountries: ActivityCountries[];
  activitySources: ReportSource[];
  createdAt: Date;
  reportPath: string;
  reportCoverPath: string;
  firmRef: string;
}

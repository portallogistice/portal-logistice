import { ComponentType } from "react";

/** Icon type (e.g. from lucide-react or similar libraries) */
type IconType = ComponentType<any>;

/** Highlight item */
export interface ReportHighlight {
  titleAr: string;
  titleEn: string;
  valueAr: string;
  valueEn: string;
  icon: IconType;
}

/** Sub-point inside a section */
export interface ReportSubPoint {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

/** Main report section */
export interface ReportSection {
  id: number;
  titleAr: string;
  titleEn: string;
  icon: IconType;
  contentAr: string[];
  contentEn: string[];
  subPoints?: ReportSubPoint[];
}

/** Related report reference */
export interface RelatedReport {
  id: number;
  titleAr: string;
  titleEn: string;
}

/** Main report interface */
export interface ReportData {
  id: number;
  titleAr: string;
  titleEn: string;
  category: string;
  date: string;
  authorAr: string;
  authorEn: string;
  icon: IconType;
  summaryAr: string;
  summaryEn: string;
  highlights?: ReportHighlight[];
  sections: ReportSection[];
  conclusionAr: string;
  conclusionEn: string;
  relatedReports?: RelatedReport[];
}

import { TrendingUp } from "lucide-react";
import { Clock } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Target } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { ReportData } from "@/types/report";
export const reportsData: ReportData[] =
 [  
    {
    id: 1,
    titleAr: "تقرير: استراتيجية رحلة الريال في استثمار الأصول التشغيلية",
    titleEn: "Report: The Riyal Journey Strategy in Operating Asset Investment",
    category: "financial",
    date: "2025-01-15",
    author: "قسم الاستثمار - بوابة التسهيل للخدمات اللوجستية",
    authorEn: "Investment Department - Portal Logistics Services",
    readTime: "12 دقيقة",
    readTimeEn: "12 minutes",
    views: "2,547",
    icon: TrendingUp,
    
    // Executive Summary
    summaryAr: "تجسد رحلة الريال في نموذج عملنا التحول الذكي للمال من مجرد سيولة نقدية ساكنة معرضة للتآكل التضخمي، إلى أصل إنتاجي مدرّ للدخل، وذلك عبر دورة استثمارية محكمة ومؤمنة قانونياً تمر بثلاث مراحل استراتيجية.",
    summaryEn: "The Riyal Journey embodies the smart transformation of money from idle cash exposed to inflation erosion to a productive, income-generating asset through a tight and legally secured investment cycle passing through three strategic phases.",
    
    // Key highlights
    highlights: [
      {
        titleAr: "العائد المتوقع",
        titleEn: "Expected Return",
        valueAr: "150%+",
        valueEn: "150%+",
        icon: TrendingUp,
      },
      {
        titleAr: "مدة الاستثمار",
        titleEn: "Investment Period",
        valueAr: "3 سنوات",
        valueEn: "3 Years",
        icon: Clock,
      },
      {
        titleAr: "الدخل الشهري",
        titleEn: "Monthly Income",
        valueAr: "660 ريال",
        valueEn: "660 SAR",
        icon: DollarSign,
      },
      {
        titleAr: "مستوى المخاطر",
        titleEn: "Risk Level",
        valueAr: "منخفض",
        valueEn: "Low",
        icon: CheckCircle,
      },
    ],
    
    // Main sections with content
    sections: [
      {
        id: 1,
        titleAr: "مرحلة التأسيس والرسملة",
        titleEn: "Foundation and Capitalization Phase",
        icon: Target,
        contentAr: [
          "تبدأ الرحلة بضخ سيولة نقدية قدرها 6,600 ريال، وهي الخطوة التي تضع حجر الأساس لمشروعك.",
          "في هذه المرحلة، يتم تحصين حقوقك عبر مسارين قانونيين متزامنين:",
        ],
        contentEn: [
          "The journey begins with an injection of 6,600 SAR in cash, laying the foundation for your project.",
          "At this stage, your rights are secured through two simultaneous legal tracks:",
        ],
        subPoints: [
          {
            titleAr: "عقد المبايعة",
            titleEn: "Sales Contract",
            descAr: "تنتقل ملكية الأصل التشغيلي إليك مباشرة لضمان حماية رأس مالك",
            descEn: "Direct transfer of operating asset ownership to protect your capital",
          },
          {
            titleAr: "عقد التأجير",
            titleEn: "Lease Agreement",
            descAr: "يؤطر العلاقة الاستثمارية لمدة 3 سنوات بعقد رسمي موثق",
            descEn: "Frames the 3-year investment relationship with an official documented contract",
          },
          {
            titleAr: "الدور اللوجستي",
            titleEn: "Logistics Role",
            descAr: "تتولى الشركة كافة الأعباء التنظيمية والتجهيزات الميكانيكية",
            descEn: "Company handles all regulatory burdens and mechanical preparations",
          },
        ],
      },
      {
        id: 2,
        titleAr: "مرحلة الكفاءة التشغيلية",
        titleEn: "Operational Efficiency Phase",
        icon: BarChart3,
        contentAr: [
          "بمجرد اكتمال التجهيزات، ينتقل الأصل من مجرد ملكية ساكنة إلى محرك إيرادات فعال في قلب قطاع الخدمات اللوجستية المتنامي.",
          "تتولى الشركة إدارة كافة التفاصيل الميدانية وتوجيه الأصل نحو الفرص التشغيلية الأعلى طلباً.",
        ],
        contentEn: [
          "Once preparations are complete, the asset transforms from static ownership into an active revenue engine in the growing logistics services sector.",
          "The company manages all field details and directs the asset toward the highest-demand operational opportunities.",
        ],
      },
      {
        id: 3,
        titleAr: "مرحلة الحصاد والتدفق النقدي",
        titleEn: "Harvest and Cash Flow Phase",
        icon: DollarSign,
        contentAr: [
          "هنا تكتمل الدورة المالية؛ حيث يترجم النشاط الميداني والطلب المرتفع في السوق إلى عائد إيجاري شهري ثابت قدره 660 ريالاً.",
          "يتحقق مفهوم الدخل السلبي بأرقى صوره؛ حيث يعمل الريال بدلاً منك.",
        ],
        contentEn: [
          "Here the financial cycle completes; field activity and high market demand translate into a fixed monthly rental return of 660 SAR.",
          "The concept of passive income is realized in its finest form; money works instead of you.",
        ],
      },
    ],
    
    // Conclusion
    conclusionAr: "إن رحلة الريال مع بوابة التسهيل هي عملية هندسية لتحويل رأس المال الثابت إلى ثروة متحركة. هي استراتيجية تمنح المستثمر الذكي ميزتين جوهريتين: الأمان التشغيلي عبر تفويض أعباء الميدان لخبراء متخصصين، والسيادة القانونية من خلال التمسك بملكية الأصل والتمتع بعوائده الشهرية المجزية.",
    conclusionEn: "The Riyal Journey with Portal is an engineering process to transform fixed capital into mobile wealth. It's a strategy that gives the smart investor two essential advantages: operational security through delegating field burdens to specialized experts, and legal sovereignty through maintaining asset ownership and enjoying rewarding monthly returns.",
    
    // Related reports
    relatedReports: [
      { id: 2, titleAr: "خارطة التشغيل", titleEn: "Operations Map" },
      { id: 3, titleAr: "مسؤوليات المستثمر", titleEn: "Investor Responsibilities" },
      { id: 4, titleAr: "الخدمات التشغيلية", titleEn: "Operational Services" },
    ],
  },
  {
    id: 2,
    titleAr: "تقرير: استراتيجية رحلة الريال في استثمار الأصول التشغيلية",
    titleEn: "Report: The Riyal Journey Strategy in Operating Asset Investment",
    category: "financial",
    date: "2025-01-15",
    author: "قسم الاستثمار - بوابة التسهيل للخدمات اللوجستية",
    authorEn: "Investment Department - Portal Logistics Services",
    readTime: "12 دقيقة",
    readTimeEn: "12 minutes",
    views: "2,547",
    icon: TrendingUp,
    
    // Executive Summary
    summaryAr: "تجسد رحلة الريال في نموذج عملنا التحول الذكي للمال من مجرد سيولة نقدية ساكنة معرضة للتآكل التضخمي، إلى أصل إنتاجي مدرّ للدخل، وذلك عبر دورة استثمارية محكمة ومؤمنة قانونياً تمر بثلاث مراحل استراتيجية.",
    summaryEn: "The Riyal Journey embodies the smart transformation of money from idle cash exposed to inflation erosion to a productive, income-generating asset through a tight and legally secured investment cycle passing through three strategic phases.",
    
    // Key highlights
    highlights: [
      {
        titleAr: "العائد المتوقع",
        titleEn: "Expected Return",
        valueAr: "150%+",
        valueEn: "150%+",
        icon: TrendingUp,
      },
      {
        titleAr: "مدة الاستثمار",
        titleEn: "Investment Period",
        valueAr: "3 سنوات",
        valueEn: "3 Years",
        icon: Clock,
      },
      {
        titleAr: "الدخل الشهري",
        titleEn: "Monthly Income",
        valueAr: "660 ريال",
        valueEn: "660 SAR",
        icon: DollarSign,
      },
      {
        titleAr: "مستوى المخاطر",
        titleEn: "Risk Level",
        valueAr: "منخفض",
        valueEn: "Low",
        icon: CheckCircle,
      },
    ],
    
    // Main sections with content
    sections: [
      {
        id: 1,
        titleAr: "مرحلة التأسيس والرسملة",
        titleEn: "Foundation and Capitalization Phase",
        icon: Target,
        contentAr: [
          "تبدأ الرحلة بضخ سيولة نقدية قدرها 6,600 ريال، وهي الخطوة التي تضع حجر الأساس لمشروعك.",
          "في هذه المرحلة، يتم تحصين حقوقك عبر مسارين قانونيين متزامنين:",
        ],
        contentEn: [
          "The journey begins with an injection of 6,600 SAR in cash, laying the foundation for your project.",
          "At this stage, your rights are secured through two simultaneous legal tracks:",
        ],
        subPoints: [
          {
            titleAr: "عقد المبايعة",
            titleEn: "Sales Contract",
            descAr: "تنتقل ملكية الأصل التشغيلي إليك مباشرة لضمان حماية رأس مالك",
            descEn: "Direct transfer of operating asset ownership to protect your capital",
          },
          {
            titleAr: "عقد التأجير",
            titleEn: "Lease Agreement",
            descAr: "يؤطر العلاقة الاستثمارية لمدة 3 سنوات بعقد رسمي موثق",
            descEn: "Frames the 3-year investment relationship with an official documented contract",
          },
          {
            titleAr: "الدور اللوجستي",
            titleEn: "Logistics Role",
            descAr: "تتولى الشركة كافة الأعباء التنظيمية والتجهيزات الميكانيكية",
            descEn: "Company handles all regulatory burdens and mechanical preparations",
          },
        ],
      },
      {
        id: 2,
        titleAr: "مرحلة الكفاءة التشغيلية",
        titleEn: "Operational Efficiency Phase",
        icon: BarChart3,
        contentAr: [
          "بمجرد اكتمال التجهيزات، ينتقل الأصل من مجرد ملكية ساكنة إلى محرك إيرادات فعال في قلب قطاع الخدمات اللوجستية المتنامي.",
          "تتولى الشركة إدارة كافة التفاصيل الميدانية وتوجيه الأصل نحو الفرص التشغيلية الأعلى طلباً.",
        ],
        contentEn: [
          "Once preparations are complete, the asset transforms from static ownership into an active revenue engine in the growing logistics services sector.",
          "The company manages all field details and directs the asset toward the highest-demand operational opportunities.",
        ],
      },
      {
        id: 3,
        titleAr: "مرحلة الحصاد والتدفق النقدي",
        titleEn: "Harvest and Cash Flow Phase",
        icon: DollarSign,
        contentAr: [
          "هنا تكتمل الدورة المالية؛ حيث يترجم النشاط الميداني والطلب المرتفع في السوق إلى عائد إيجاري شهري ثابت قدره 660 ريالاً.",
          "يتحقق مفهوم الدخل السلبي بأرقى صوره؛ حيث يعمل الريال بدلاً منك.",
        ],
        contentEn: [
          "Here the financial cycle completes; field activity and high market demand translate into a fixed monthly rental return of 660 SAR.",
          "The concept of passive income is realized in its finest form; money works instead of you.",
        ],
      },
    ],
    
    // Conclusion
    conclusionAr: "إن رحلة الريال مع بوابة التسهيل هي عملية هندسية لتحويل رأس المال الثابت إلى ثروة متحركة. هي استراتيجية تمنح المستثمر الذكي ميزتين جوهريتين: الأمان التشغيلي عبر تفويض أعباء الميدان لخبراء متخصصين، والسيادة القانونية من خلال التمسك بملكية الأصل والتمتع بعوائده الشهرية المجزية.",
    conclusionEn: "The Riyal Journey with Portal is an engineering process to transform fixed capital into mobile wealth. It's a strategy that gives the smart investor two essential advantages: operational security through delegating field burdens to specialized experts, and legal sovereignty through maintaining asset ownership and enjoying rewarding monthly returns.",
    
    // Related reports
    relatedReports: [
      { id: 2, titleAr: "خارطة التشغيل", titleEn: "Operations Map" },
      { id: 3, titleAr: "مسؤوليات المستثمر", titleEn: "Investor Responsibilities" },
      { id: 4, titleAr: "الخدمات التشغيلية", titleEn: "Operational Services" },
    ],
  },   {
    id: 4,
    titleAr: "تقرير: استراتيجية رحلة الريال في استثمار الأصول التشغيلية",
    titleEn: "Report: The Riyal Journey Strategy in Operating Asset Investment",
    category: "financial",
    date: "2025-01-15",
    author: "قسم الاستثمار - بوابة التسهيل للخدمات اللوجستية",
    authorEn: "Investment Department - Portal Logistics Services",
    readTime: "12 دقيقة",
    readTimeEn: "12 minutes",
    views: "2,547",
    icon: TrendingUp,
    
    // Executive Summary
    summaryAr: "تجسد رحلة الريال في نموذج عملنا التحول الذكي للمال من مجرد سيولة نقدية ساكنة معرضة للتآكل التضخمي، إلى أصل إنتاجي مدرّ للدخل، وذلك عبر دورة استثمارية محكمة ومؤمنة قانونياً تمر بثلاث مراحل استراتيجية.",
    summaryEn: "The Riyal Journey embodies the smart transformation of money from idle cash exposed to inflation erosion to a productive, income-generating asset through a tight and legally secured investment cycle passing through three strategic phases.",
    
    // Key highlights
    highlights: [
      {
        titleAr: "العائد المتوقع",
        titleEn: "Expected Return",
        valueAr: "150%+",
        valueEn: "150%+",
        icon: TrendingUp,
      },
      {
        titleAr: "مدة الاستثمار",
        titleEn: "Investment Period",
        valueAr: "3 سنوات",
        valueEn: "3 Years",
        icon: Clock,
      },
      {
        titleAr: "الدخل الشهري",
        titleEn: "Monthly Income",
        valueAr: "660 ريال",
        valueEn: "660 SAR",
        icon: DollarSign,
      },
      {
        titleAr: "مستوى المخاطر",
        titleEn: "Risk Level",
        valueAr: "منخفض",
        valueEn: "Low",
        icon: CheckCircle,
      },
    ],
    
    // Main sections with content
    sections: [
      {
        id: 1,
        titleAr: "مرحلة التأسيس والرسملة",
        titleEn: "Foundation and Capitalization Phase",
        icon: Target,
        contentAr: [
          "تبدأ الرحلة بضخ سيولة نقدية قدرها 6,600 ريال، وهي الخطوة التي تضع حجر الأساس لمشروعك.",
          "في هذه المرحلة، يتم تحصين حقوقك عبر مسارين قانونيين متزامنين:",
        ],
        contentEn: [
          "The journey begins with an injection of 6,600 SAR in cash, laying the foundation for your project.",
          "At this stage, your rights are secured through two simultaneous legal tracks:",
        ],
        subPoints: [
          {
            titleAr: "عقد المبايعة",
            titleEn: "Sales Contract",
            descAr: "تنتقل ملكية الأصل التشغيلي إليك مباشرة لضمان حماية رأس مالك",
            descEn: "Direct transfer of operating asset ownership to protect your capital",
          },
          {
            titleAr: "عقد التأجير",
            titleEn: "Lease Agreement",
            descAr: "يؤطر العلاقة الاستثمارية لمدة 3 سنوات بعقد رسمي موثق",
            descEn: "Frames the 3-year investment relationship with an official documented contract",
          },
          {
            titleAr: "الدور اللوجستي",
            titleEn: "Logistics Role",
            descAr: "تتولى الشركة كافة الأعباء التنظيمية والتجهيزات الميكانيكية",
            descEn: "Company handles all regulatory burdens and mechanical preparations",
          },
        ],
      },
      {
        id: 2,
        titleAr: "مرحلة الكفاءة التشغيلية",
        titleEn: "Operational Efficiency Phase",
        icon: BarChart3,
        contentAr: [
          "بمجرد اكتمال التجهيزات، ينتقل الأصل من مجرد ملكية ساكنة إلى محرك إيرادات فعال في قلب قطاع الخدمات اللوجستية المتنامي.",
          "تتولى الشركة إدارة كافة التفاصيل الميدانية وتوجيه الأصل نحو الفرص التشغيلية الأعلى طلباً.",
        ],
        contentEn: [
          "Once preparations are complete, the asset transforms from static ownership into an active revenue engine in the growing logistics services sector.",
          "The company manages all field details and directs the asset toward the highest-demand operational opportunities.",
        ],
      },
      {
        id: 3,
        titleAr: "مرحلة الحصاد والتدفق النقدي",
        titleEn: "Harvest and Cash Flow Phase",
        icon: DollarSign,
        contentAr: [
          "هنا تكتمل الدورة المالية؛ حيث يترجم النشاط الميداني والطلب المرتفع في السوق إلى عائد إيجاري شهري ثابت قدره 660 ريالاً.",
          "يتحقق مفهوم الدخل السلبي بأرقى صوره؛ حيث يعمل الريال بدلاً منك.",
        ],
        contentEn: [
          "Here the financial cycle completes; field activity and high market demand translate into a fixed monthly rental return of 660 SAR.",
          "The concept of passive income is realized in its finest form; money works instead of you.",
        ],
      },
    ],
    
    // Conclusion
    conclusionAr: "إن رحلة الريال مع بوابة التسهيل هي عملية هندسية لتحويل رأس المال الثابت إلى ثروة متحركة. هي استراتيجية تمنح المستثمر الذكي ميزتين جوهريتين: الأمان التشغيلي عبر تفويض أعباء الميدان لخبراء متخصصين، والسيادة القانونية من خلال التمسك بملكية الأصل والتمتع بعوائده الشهرية المجزية.",
    conclusionEn: "The Riyal Journey with Portal is an engineering process to transform fixed capital into mobile wealth. It's a strategy that gives the smart investor two essential advantages: operational security through delegating field burdens to specialized experts, and legal sovereignty through maintaining asset ownership and enjoying rewarding monthly returns.",
    
    // Related reports
    relatedReports: [
      { id: 2, titleAr: "خارطة التشغيل", titleEn: "Operations Map" },
      { id: 3, titleAr: "مسؤوليات المستثمر", titleEn: "Investor Responsibilities" },
      { id: 4, titleAr: "الخدمات التشغيلية", titleEn: "Operational Services" },
    ],
  }
]
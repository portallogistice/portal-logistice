// src/lib/reportsData.ts
import { 
  TrendingUp, Clock, DollarSign, CheckCircle, Target, 
  BarChart3, Map, Users, ShieldCheck, Box, 
  Zap, Globe, HardDrive, LayoutGrid, RefreshCw, Calculator,
  FileText, ArrowUpRight
} from "lucide-react";
import { ReportData } from "@/types/report";

export const reportsData: ReportData[] = [
  {
    id: 1,
    titleAr: "تقرير: استراتيجية رحلة الريال في استثمار الأصول التشغيلية",
    titleEn: "Report: The Riyal Journey Strategy in Operating Asset Investment",
    category: "strategic",
    date: "2025-01-15",
    authorAr: "قسم الاستثمار - بوابة التسهيل للخدمات اللوجستية",
    authorEn: "Investment Department - Portal Logistics Services",
    icon: TrendingUp,
    summaryAr: "تجسد رحلة الريال التحول الذكي للمال من سيولة ساكنة معرضة للتضخم إلى أصل إنتاجي مدر للدخل عبر دورة استثمارية محكمة تمر بثلاث مراحل استراتيجية.",
    summaryEn: "The Riyal Journey embodies the smart transformation of money from idle cash to a productive income-generating asset through a 3-phase strategic cycle.",
    highlights: [
      { titleAr: "قيمة الوحدة", titleEn: "Unit Value", valueAr: "6,600 ريال", valueEn: "6,600 SAR", icon: DollarSign },
      { titleAr: "العائد الشهري", titleEn: "Monthly Income", valueAr: "660 ريال", valueEn: "660 SAR", icon: TrendingUp },
      { titleAr: "مدة الاستثمار", titleEn: "Duration", valueAr: "3 سنوات", valueEn: "3 Years", icon: Clock },
      { titleAr: "حماية رأس المال", titleEn: "Protection", valueAr: "ملكية مادية", valueEn: "Physical Asset", icon: ShieldCheck },
    ],
    sections: [
      {
        id: 1,
        titleAr: "1. مرحلة التأسيس والرسملة (تحويل النقد إلى أصل)",
        titleEn: "1. Foundation and Capitalization Phase",
        icon: Target,
        contentAr: [
          "تبدأ الرحلة بضخ سيولة نقدية قدرها 6,600 ريال، وهي الخطوة التي تضع حجر الأساس لمشروعك.",
          "في هذه المرحلة، يتم تحصين حقوقك عبر مسارين قانونيين متزامنين:"
        ],
        contentEn: [
          "The journey starts with 6,600 SAR, laying the foundation of your project.",
          "Your rights are secured through two simultaneous legal tracks:"
        ],
        subPoints: [
          { titleAr: "عقد المبايعة", titleEn: "Sales Contract", descAr: "تنتقل ملكية الأصل التشغيلي (الدراجة) إليك مباشرة لضمان حماية رأس مالك بملكية مادية ملموسة.", descEn: "Direct transfer of asset ownership (motorcycle) to protect your capital with tangible assets." },
          { titleAr: "عقد التأجير", titleEn: "Lease Agreement", descAr: "يؤطر العلاقة الاستثمارية لمدة 3 سنوات بعقد رسمي موثق عبر المنصات الحكومية.", descEn: "Frames the 3-year investment relationship with an officially documented contract." },
          { titleAr: "الدور اللوجستي", titleEn: "Logistics Role", descAr: "تتولى الشركة كافة الأعباء التنظيمية (تسجيل، تراخيص، تجهيزات) ليتحول مالك لوحدة جاهزة للإنتاج.", descEn: "Company handles all regulatory burdens, turning your money into a production-ready unit." }
        ]
      },
      {
        id: 2,
        titleAr: "2. مرحلة الكفاءة التشغيلية (إدارة المنفعة)",
        titleEn: "2. Operational Efficiency Phase",
        icon: Zap,
        contentAr: [
          "بمجرد اكتمال التجهيزات، ينتقل الأصل من مجرد ملكية ساكنة إلى محرك إيرادات فعال.",
          "تتولى الشركة إدارة كافة التفاصيل الميدانية (توظيف السائقين، المتابعة اللحظية) مما يمنحك الراحة التامة."
        ],
        contentEn: [
          "Once ready, the asset transforms into an active revenue engine.",
          "The company manages all field operations (hiring, real-time tracking) giving you total peace of mind."
        ]
      },
      {
        id: 3,
        titleAr: "3. مرحلة الحصاد والتدفق النقدي (العائد المستدام)",
        titleEn: "3. Harvest and Cash Flow Phase",
        icon: DollarSign,
        contentAr: [
          "هنا تكتمل الدورة المالية؛ حيث يترجم النشاط الميداني إلى عائد إيجاري شهري ثابت قدره 660 ريالاً يودع في حسابك.",
          "يتحقق مفهوم الدخل السلبي بأرقى صوره؛ حيث يعمل الريال بدلاً منك."
        ],
        contentEn: [
          "The financial cycle completes; field activity translates into a fixed 660 SAR monthly rent.",
          "Passive income is realized at its best; your money works instead of you."
        ]
      }
    ],
    conclusionAr: "إن رحلة الريال هي عملية هندسية لتحويل رأس المال الثابت إلى ثروة متحركة، تمنحك الأمان التشغيلي والسيادة القانونية الكاملة.",
    conclusionEn: "The Riyal Journey is an engineering process to transform fixed capital into mobile wealth, granting operational security and legal sovereignty.",
  },
  {
    id: 2,
    titleAr: "تقرير: خارطة التشغيل (أين تعمل أصولك الاستثمارية؟)",
    titleEn: "Report: Operations Map (Where do your assets work?)",
    category: "operational",
    date: "2025-01-16",
    authorAr: "إدارة العمليات - بوابة التسهيل",
    authorEn: "Operations Management - Portal",
    icon: Map,
    summaryAr: "تعتمد الشركة استراتيجية مرنة قائمة على تنويع الشراكات لضمان دوران الأصل 24/7 عبر قطاعات التوصيل والمطاعم والتجزئة.",
    summaryEn: "The company adopts a flexible strategy based on diversifying partnerships to ensure 24/7 asset rotation across delivery, restaurants, and retail.",
    sections: [
      {
        id: 1,
        titleAr: "القطاعات التشغيلية الرئيسية",
        titleEn: "Main Operational Sectors",
        icon: LayoutGrid,
        contentAr: ["تعمل أصولك في أكثر القطاعات نمواً في المملكة:"],
        contentEn: ["Your assets operate in the fastest-growing sectors in the Kingdom:"],
        subPoints: [
          { titleAr: "تطبيقات التوصيل", titleEn: "Delivery Apps", descAr: "التعاقد مع المنصات الكبرى لتجاوز التحديات المرورية.", descEn: "Partnering with major platforms to bypass traffic challenges." },
          { titleAr: "قطاع المطاعم", titleEn: "Restaurant Sector", descAr: "تمثيل العمود الفقري لسلاسل الوجبات السريعة.", descEn: "Representing the backbone of fast-food chains." },
          { titleAr: "أسواق التجزئة", titleEn: "E-Grocery", descAr: "تلبية طلبات الميل الأخير للصيدليات والسوبر ماركت.", descEn: "Meeting last-mile demands for pharmacies and supermarkets." }
        ]
      }
    ],
    conclusionAr: "هذا التنوع هو الضمانة الحقيقية لأن يكون عائد الـ 660 ريالاً الصافي شهرياً مستقراً وآمناً وبعيداً عن تقلبات السوق الفردية.",
    conclusionEn: "This diversification is the true guarantee that the 660 SAR monthly return remains stable, secure, and away from market fluctuations.",
  },
  {
    id: 3,
    titleAr: "تقرير: تحديد مسؤوليات المستثمر (الشريك المالي الصامت)",
    titleEn: "Report: Investor Responsibilities (The Silent Partner)",
    category: "strategic",
    date: "2025-01-17",
    authorAr: "قسم الحوكمة والاستثمار",
    authorEn: "Governance & Investment Dept",
    icon: Users,
    summaryAr: "يعتمد نجاحنا على الفصل التام بين الإدارة والتمويل، حيث تنحصر مسؤوليتك في التمويل والرقابة الاستراتيجية فقط.",
    summaryEn: "Our success relies on total separation between management and finance; your role is limited to financing and strategic oversight.",
    sections: [
      {
        id: 1,
        titleAr: "1. الالتزام الرأسمالي",
        titleEn: "1. Capital Commitment",
        icon: Calculator,
        contentAr: ["توفير رأس مال الوحدة (6,600 ريال) لإطلاق دورة الاستثمار."],
        contentEn: ["Providing unit capital (6,600 SAR) to launch the investment cycle."]
      },
      {
        id: 2,
        titleAr: "2. الرقابة والحوكمة",
        titleEn: "2. Oversight & Governance",
        icon: ShieldCheck,
        contentAr: ["متابعة استلام الإيداعات الشهرية والاطلاع على التقارير السنوية لاتخاذ قرارات التخارج أو التجديد."],
        contentEn: ["Monitoring monthly deposits and reviewing annual reports for exit or renewal decisions."]
      }
    ],
    conclusionAr: "أنت الممول والمالك، والشركة هي المشغل والمسؤول. تبدأ مسؤوليتك وتنتهي عند اتخاذ القرار المالي الاستراتيجي.",
    conclusionEn: "You are the financier and owner, the company is the operator. Your role starts and ends with strategic financial decisions.",
  },
  {
    id: 4,
    titleAr: "تقرير: الخدمات التشغيلية المتكاملة",
    titleEn: "Report: Integrated Operational Services",
    category: "operational",
    date: "2025-01-18",
    authorAr: "قطاع العمليات والخدمات اللوجستية",
    authorEn: "Operations & Logistics Sector",
    icon: RefreshCw,
    summaryAr: "نتولى إدارة الدورة التشغيلية الكاملة، محملين عنك كافة المخاطر والأعباء الإدارية عبر حزمة خدمات شاملة.",
    summaryEn: "We manage the full operational cycle, absorbing all risks and administrative burdens through a comprehensive service package.",
    sections: [
      {
        id: 1,
        titleAr: "الحماية والامتثال",
        titleEn: "Protection & Compliance",
        icon: ShieldCheck,
        contentAr: ["نقدم خدمات نظامية وتأمين شامل وإدارة كاملة للقوى العاملة."],
        contentEn: ["We provide regulatory services, comprehensive insurance, and full workforce management."],
        subPoints: [
          { titleAr: "التأمين الشامل", titleEn: "Full Insurance", descAr: "حماية الأصل من الحوادث والسرقة والتلفيات.", descEn: "Protecting the asset from accidents, theft, and damage." },
          { titleAr: "الصيانة الوقائية", titleEn: "Preventive Maintenance", descAr: "إطالة العمر الافتراضي وضمان تدفق الدخل دون انقطاع.", descEn: "Extending life-cycle and ensuring uninterrupted income flow." }
        ]
      }
    ],
    conclusionAr: "خدماتنا هي الدرع القانوني والفني الذي يحمي استثمارك، لتتحول الدراجة من مسؤولية مقلقة إلى رقم نمو في حسابك.",
    conclusionEn: "Our services are the legal and technical shield protecting your investment, turning the asset into a growth number.",
  },
  {
    id: 5,
    titleAr: "تقرير: لماذا الدراجات النارية؟ (الفرصة الكبرى)",
    titleEn: "Report: Why Motorcycles? (The Big Opportunity)",
    category: "financial",
    date: "2025-01-19",
    authorAr: "قسم تحليل السوق",
    authorEn: "Market Analysis Dept",
    icon: Zap,
    summaryAr: "قرار استراتيجي مبني على كفاءة الوقت واقتصاديات التشغيل وريادة قطاع التجارة الإلكترونية في المملكة.",
    summaryEn: "A strategic decision based on time efficiency, operating economics, and e-commerce leadership in the Kingdom.",
    sections: [
      {
        id: 1,
        titleAr: "المزايا التنافسية للأصل",
        titleEn: "Asset Competitive Advantages",
        icon: BarChart3,
        contentAr: ["تتفوق الدراجات النارية في كسر حاجز الازدحام وتقليص مصاريف التشغيل مقارنة بالسيارات."],
        contentEn: ["Motorcycles excel in bypassing congestion and reducing operating costs compared to cars."]
      }
    ],
    conclusionAr: "الدراجة النارية هي شريان الحياة للتجارة الإلكترونية الحديثة، واستثمارك فيها مدعوم بحاجة حقيقية وطلب هائل.",
    conclusionEn: "The motorcycle is the lifeline of modern e-commerce; your investment is backed by real need and massive demand.",
  },
  {
    id: 6,
    titleAr: "تقرير: الارتباط الاستراتيجي برؤية المملكة 2030",
    titleEn: "Report: Strategic Link to Vision 2030",
    category: "strategic",
    date: "2025-01-20",
    authorAr: "وحدة التخطيط الاستراتيجي",
    authorEn: "Strategic Planning Unit",
    icon: Globe,
    summaryAr: "مشروعك يساهم فعلياً في تحويل المملكة لمنصة لوجستية عالمية عبر مأسسة قطاع النقل وتمكين الاقتصاد الرقمي.",
    summaryEn: "Your project contributes to transforming the Kingdom into a global logistics hub through institutionalizing transport.",
    sections: [
      {
        id: 1,
        titleAr: "نقاط التقاطع مع الرؤية",
        titleEn: "Vision Intersection Points",
        icon: Target,
        contentAr: ["المساهمة في توطين النقل ورفع كفاءة سلاسل الإمداد وخدمة الميل الأخير."],
        contentEn: ["Contributing to transport localization and improving last-mile supply chain efficiency."]
      }
    ],
    conclusionAr: "أنت اليوم لست مجرد مستثمر، بل شريك في نهضة اقتصادية وطنية طموحة لا تطلعات لها إلا القمة.",
    conclusionEn: "Today you are not just an investor, but a partner in an ambitious national economic renaissance.",
  },
  {
    id: 7,
    titleAr: "تقرير: الأمان المادي.. الأصول الملموسة vs الرقمية",
    titleEn: "Report: Physical Security.. Tangible vs Digital Assets",
    category: "financial",
    date: "2025-01-21",
    authorAr: "قسم تحليل المخاطر",
    authorEn: "Risk Analysis Dept",
    icon: HardDrive,
    summaryAr: "لماذا تظل الأصول الملموسة هي الملاذ الآمن تاريخياً مقارنة بالمضاربات الرقمية المتقلبة؟",
    summaryEn: "Why do tangible assets remain a safe haven historically compared to volatile digital speculation?",
    sections: [
      {
        id: 1,
        titleAr: "وجود القيمة الذاتية",
        titleEn: "Intrinsic Value",
        icon: ShieldCheck,
        contentAr: ["الدراجة أصل مادي له قيمة سوقية مرتبطة بالسلعة عالمياً، لا تختفي بضغطة زر."],
        contentEn: ["The motorcycle is a physical asset with global market value; it doesn't disappear with a click."]
      }
    ],
    conclusionAr: "الفرق هو بين من يشتري سراباً ومن يشتري آلة إنتاجية (مصنع صغير) ينتج المال بانتظام ويحفظ رأس المال.",
    conclusionEn: "The difference is between buying a mirage and buying a production machine (small factory) that generates regular money.",
  },
  {
    id: 8,
    titleAr: "تقرير: استراتيجية بناء الأسطول (المحفظة اللوجستية)",
    titleEn: "Report: Fleet Building Strategy (Logistics Portfolio)",
    category: "strategic",
    date: "2025-01-22",
    authorAr: "قسم التخطيط المالي",
    authorEn: "Financial Planning Dept",
    icon: LayoutGrid,
    summaryAr: "منهجية التوسع المنظم عبر التراكم الذكي، من مستثمر فردي إلى صاحب محفظة تدر عوائد ضخمة.",
    summaryEn: "A methodology for organized expansion through smart accumulation, from individual investor to portfolio owner.",
    sections: [
      {
        id: 1,
        titleAr: "استراتيجية التوسع العائلي",
        titleEn: "Family Expansion Strategy",
        icon: Users,
        contentAr: ["يمكن امتلاك 30 دراجة عبر 3 أفراد لتحقيق دخل يتجاوز 19,800 ريال شهرياً مع الحفاظ على صبغة الاستثمار الميسر."],
        contentEn: ["Owning 30 bikes via 3 members can yield 19,800 SAR monthly while maintaining easy investment status."]
      }
    ],
    conclusionAr: "بناء الأسطول يشبه بناء برج استثماري أفقياً. الدراجة الأولى هي حجر الأساس نحو الاستقلال المالي.",
    conclusionEn: "Building a fleet is like building an investment tower horizontally. The first bike is the cornerstone to financial independence.",
  },
  {
    id: 9,
    titleAr: "تقرير: المقارنة الاستراتيجية (الاستدامة vs التجديد)",
    titleEn: "Report: Strategic Comparison (Sustainability vs Renewal)",
    category: "operational",
    date: "2025-01-23",
    authorAr: "قسم تحليل العوائد والمخاطر",
    authorEn: "Return & Risk Analysis Dept",
    icon: RefreshCw,
    summaryAr: "تحليل الفوارق بين الاحتفاظ بالأصل لـ 3 سنوات أو استبداله سنوياً لضمان كفاءة المحفظة.",
    summaryEn: "Analyzing the differences between holding the asset for 3 years or replacing it annually for portfolio efficiency.",
    sections: [
      {
        id: 1,
        titleAr: "خيار التجديد السنوي",
        titleEn: "Annual Renewal Option",
        icon: Zap,
        contentAr: ["دفع فارق استهلاك بسيط لاستلام دراجة (0 كم) يضمن تصفير المخاطر التشغيلية وبقاء الأصول تحت الضمان."],
        contentEn: ["Paying a small consumption difference for a new bike (0 km) ensures zero operational risk."]
      }
    ],
    conclusionAr: "الخطة الأولى توفير لحظي، والثانية استراتيجية تعظيم ثروة واستدامة أرباح دون أعطال.",
    conclusionEn: "The first plan is immediate saving; the second is a wealth maximization and profit sustainability strategy.",
  },
  {
    id: 10,
    titleAr: "تقرير: تحليل الأرباح الكلية (دورة الـ 3 سنوات)",
    titleEn: "Report: Total Profit Analysis (3-Year Cycle)",
    category: "financial",
    date: "2025-01-24",
    authorAr: "إدارة التحليل المالي",
    authorEn: "Financial Analysis Dept",
    icon: Calculator,
    summaryAr: "هيكل مالي يوضح كيفية تحقيق صافي ربح تراكمي يقدر بـ 16,510 ريال من استثمار 6,600 ريال فقط.",
    summaryEn: "A financial structure showing how to achieve 16,510 SAR net profit from a 6,600 SAR investment.",
    sections: [
      {
        id: 1,
        titleAr: "الأرقام النهائية للدورة",
        titleEn: "Final Cycle Figures",
        icon: TrendingUp,
        contentAr: [
          "إجمالي الإيرادات: 23,760 ريال.",
          "مصاريف الصيانة التراكمية: 7,500 ريال.",
          "صافي الربح مع القيمة المتبقية: 16,510 ريال."
        ],
        contentEn: [
          "Total Revenue: 23,760 SAR.",
          "Cumulative Maintenance: 7,500 SAR.",
          "Net Profit with Residual Value: 16,510 SAR."
        ]
      }
    ],
    conclusionAr: "كفاءة العائد تتجاوز 150%، مما يجعلها الخيار المثالي لمن يبحث عن استثمار طويل الأمد.",
    conclusionEn: "Return efficiency exceeds 150%, making it the ideal choice for long-term investors.",
  }
];
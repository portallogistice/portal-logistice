import ReportDetailPage from "@/components/reports/reportdetails";
import { reportsData } from "@/lib/reportsData";
import { Metadata } from "next";
import { notFound } from "next/navigation"; 
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const reportData=reportsData.find((report) => report.id === parseInt(id));
    if (!reportData) {
        return {
            title: "تقرير غير موجود",
            description: "تقرير غير موجود",
            icons: {
                icon: "/images/logo.webp",
            },
            openGraph: {
                title: "تقرير غير موجود",
                description: "تقرير غير موجود",
            },
        }
    }
    return {
        title: reportData.titleAr + " - تقرير",
        description: reportData.summaryAr,
        icons: {
            icon: "/images/logo.webp",
        },
        openGraph: {
            title: reportData.titleAr + " - تقرير",
            description: reportData.summaryAr,
        },
    }
}
export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  
    return <ReportDetailPage reportId={parseInt(id)} />;
}
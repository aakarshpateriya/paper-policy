import DashboardLayout from "../components/DashboardLayout";
import RequestsSection from "../components/RequestsSection";
import DocumentsSection from "../components/DocumentsSection";

export default function Home() {
  return (
    <DashboardLayout>
      <RequestsSection />
      <div className="mt-8">
        <DocumentsSection />
      </div>
    </DashboardLayout>
  );
}

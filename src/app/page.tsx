import DashboardLayout from "../components/DashboardLayout";
import DocumentsSection from "../components/DocumentsSection";
import SubmitRequest from "../components/SubmitRequest";
import RequestsSection from "../components/RequestsSection";
import BuyingSection from "../components/BuyingSection";

export default function Home() {
  return (
    <DashboardLayout>
      <DocumentsSection />
      <SubmitRequest uploadedFiles={[]} />
      <BuyingSection />
      <RequestsSection />
    </DashboardLayout>
  );
}

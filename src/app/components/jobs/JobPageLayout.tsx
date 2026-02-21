import JobFilterSidebar from "./JobFilterSidebar";
import JobResultsSection from "./JobResultSection";

export default function JobsLayout() {
  return (
    <div className="grid grid-cols-[300px_1fr] gap-6">
      <JobFilterSidebar />
      <JobResultsSection />
    </div>
  );
}

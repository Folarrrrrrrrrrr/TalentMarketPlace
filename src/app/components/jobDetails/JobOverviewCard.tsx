import { JobDetails } from "@/app/types/jobDetails";

export default function JobOverviewCard({ job }: { job: JobDetails }) {
  return (
    <div className="bg-teal-50 rounded p-4">
      <h3 className="font-bold mb-2">Job Overview</h3>
      <ul className="text-sm space-y-6">
        <li>Category: {job.category}</li>
        <li>Type: {job.type}</li>
        <li>Salary: {job.salary}</li>
        <li>Location: {job.location}</li>
      </ul>
    </div>
  );
}

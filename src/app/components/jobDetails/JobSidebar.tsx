import { JobDetails } from "@/app/types/jobDetails";
import JobOverviewCard from "./JobOverviewCard";
import ContactFormCard from "./ContactFormCard";
import Button from "../Button";
export default function JobSidebar({ job }: { job: JobDetails }) {
  return (
    <aside className="space-y-4">
      <div className=" p-4 rounded text-center">
        <Button 
         btnLabel="Apply Now"
         variant="secondary"
         className="w-full mt-2 hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer transition text-white px-2  rounded-lg flex items-center gap-2 md:w-auto"
         //onClick={() => alert("Apply Now clicked!")}
        />
      </div>

      <JobOverviewCard job={job} />
      <ContactFormCard />
    </aside>
  );
}

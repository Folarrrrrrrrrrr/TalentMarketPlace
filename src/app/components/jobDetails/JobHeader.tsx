import { mockJobDetails } from "@/app/lib/mockJobDetails";
import { JobDetails } from "@/app/types/jobDetails";
import Button from "../Button";
export default function JobHeader({ job }: { job: JobDetails }) {
  return (
    <div className="rounded-lg p-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-500">{job.company}</p>

      <div className="flex gap-4 mt-2 text-sm">
        <span>{job.category}</span>
        <span>{job.type}</span>
        <span>{job.salary}</span>
        <span>{job.location}</span>
      </div>

      <Button 
         btnLabel="Apply Now"
         variant="secondary"
         className="w-full mt-2 hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer transition text-white px-2  rounded-lg flex items-center gap-2 md:w-auto"
         //onClick={() => alert("Apply Now clicked!")}
        />
    </div>
  );
}

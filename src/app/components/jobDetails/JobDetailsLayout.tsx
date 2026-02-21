"use client";

import { JobDetails } from "@/app/types/jobDetails";
import JobHeader from "./JobHeader";
import JobDescription from "./JobDescription";
import JobResponsibilities from "./JobResponsibilities";
import JobQualifications from "./JobQualification";
import JobTags from "./JobTags";
import ShareJob from "./ShareJob";
import RelatedJobs from "./RelatedJobs";
import JobSidebar from "./JobSidebar";


interface Props {
  job: JobDetails;
}


export default function JobDetailsLayout( {job}: Props) {
  return (
    <div className="grid grid-cols-[1fr_320px] gap-6">
      {/* Main Content */}
      <div className="space-y-6">
        <JobHeader job={job}/>
        <JobDescription  description={job.description}/>
        <JobResponsibilities items={job.responsibilities} />
        <JobQualifications items={job.qualifications} />
        <JobTags tags={job.tags} />
        <ShareJob />
        <RelatedJobs />
      </div>

      {/* Sidebar */}
      <JobSidebar job={job} />
    </div>
  );
}
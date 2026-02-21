import { getJobById } from "@/app/lib/jobsService";
import JobDetailsLayout from "@/app/components/jobDetails/JobDetailsLayout";
import { JobDetails } from "@/app/types/jobDetails";

interface Props {
  params: { id: string };
}

export default async function JobDetailsPage({ params }: Props) {
  const job: JobDetails = await getJobById(params.id);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Details</h1>
      <JobDetailsLayout job={job} />
    </main>
  );
}

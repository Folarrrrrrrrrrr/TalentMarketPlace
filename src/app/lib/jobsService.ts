import { JobDetails } from "@/app/types/jobDetails";

export async function getJobById(id: string): Promise<JobDetails> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }

  return res.json();
}

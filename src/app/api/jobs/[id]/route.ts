import { NextResponse } from "next/server";
import { JobDetails } from "@/app/types/jobDetails";

const jobs: JobDetails[] = [
  {
    id: "1",
    title: "Corporate Solutions Executive",
    company: "Slack and Spotify",
    category: "Commerce",
    type: "Full Time",
    salary: "$50000-$80000",
    location: "New York, USA",
    postedAt: "10 mins ago",
    description: "Nam sodales posuere libero vitae tincidunt elit.",
    responsibilities: [
      "Develop and manage client relationships",
      "Identify new business opportunities",
      "Collaborate with internal teams",
    ],
    qualifications: [
      "Bachelor’s degree",
      "3+ years experience",
      "Strong communication skills",
    ],
    tags: ["Commerce", "Full Time", "New York"],
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const job = jobs.find(j => j.id === params.id);

  if (!job) {
    return NextResponse.json({ message: "Job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
}

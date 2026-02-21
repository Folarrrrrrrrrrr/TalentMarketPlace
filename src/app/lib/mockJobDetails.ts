import { JobDetails } from "@/app/types/jobDetails";

export const mockJobDetails: JobDetails = {
  id: "1",
  title: "Corporate Solutions Executive",
  company: "Slack and Spotify",
  category: "Commerce",
  type: "Full Time",
  salary: "$50000-$80000",
  location: "New York, USA",
  postedAt: "10 mins ago",
  description:
    "Nam sodales posuere libero, vitae tincidunt elit. Donec non libero euismod, faucibus libero at, viverra urna.",
  responsibilities: [
    "Develop and manage client relationships",
    "Identify new business opportunities",
    "Collaborate with internal teams",
    "Prepare reports and presentations",
  ],
  qualifications: [
    "Bachelor’s degree in Business or related field",
    "3+ years of experience",
    "Strong communication skills",
    "Problem solving abilities",
  ],
  tags: ["Commerce", "Full Time", "New York", "Location"],
};

import { Job } from "@/app/types/job";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Forward Security Director",
    company: "Slack, Spotify and Dropbox",
    category: "Business",
    type: "Full Time",
    salary: "$40000-$60000",
    location: "New York, USA",
    postedAt: "10 mins ago",
    tags: ["Security", "Director"],
    logo: "/png/slack.png"
  },
  {
    id: "2",
    title: "Regional Creative Facilitator",
    company: "Adobe Inc",
    category: "Design",
    type: "Part Time",
    salary: "$30000-$50000",
    location: "Los Angeles, USA",
    postedAt: "1 hour ago",
    tags: ["Creative", "Design"],
    logo: "/png/adobe.png"
  },
];

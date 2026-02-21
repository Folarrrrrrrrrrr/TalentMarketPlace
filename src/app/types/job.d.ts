export interface Job {
  id: string;
  title: string;
  company: string;
  category: string;
  type: "Full Time" | "Part Time" | "Freelance";
  salary: string;
  location: string;
  postedAt: string;
  tags: string[];
  logo: string;
}

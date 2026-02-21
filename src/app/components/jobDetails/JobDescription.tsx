// import { mockJobDetails } from "@/app/lib/mockJobDetails";

export default function JobDescription({description}: {description: string}) {
  return (
    <section>
      <h3 className="font-bold mb-2">Job Description</h3>
      <p>{description}</p>
    </section>
  );
}

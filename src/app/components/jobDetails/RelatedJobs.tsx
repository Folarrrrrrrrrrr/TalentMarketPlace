import RelatedJobCard from "./RelatedJobsCard";

export default function RelatedJobs() {
  return (
    <section>
      <h3 className="font-bold mb-4">Related Jobs</h3>
      <div className="space-y-4">
        <RelatedJobCard />
        <RelatedJobCard />
      </div>
    </section>
  );
}

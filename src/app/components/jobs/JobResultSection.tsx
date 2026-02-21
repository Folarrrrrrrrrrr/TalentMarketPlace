"use client";


import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import ResultsHeader from "./ResultHeader";
import Pagination from "@/app/components/Pagination";

export default function JobResultsSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (e) {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <section>
      <ResultsHeader total={jobs.length} />
      {loading ? (
        <div>Loading jobs...</div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job: any) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
      <Pagination />
    </section>
  );
}

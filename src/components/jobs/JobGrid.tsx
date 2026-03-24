import { MOCK_JOBS } from "@/src/data/mockData";
import { JobCard } from "./JobCard";

export function JobGrid() {
  return (
    <div>
      {MOCK_JOBS.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
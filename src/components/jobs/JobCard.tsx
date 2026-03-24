
interface JobCardProps {
  job: Job; 
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
}

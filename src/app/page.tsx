import { JobGrid } from "../components/jobs/JobGrid";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Job Dashboard</h1>
      <JobGrid/>
    </div>
  );
}

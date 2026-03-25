import { MOCK_JOBS } from "@/src/data/mockData";
import { JobCard } from "./JobCard";

export function JobGrid() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      
      {/* Visual Hierarchy: Adding a clear section header before the grid */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Recommended Roles</h1>
        <p className="text-gray-400 mt-2">Explore opportunities that match your technical stack.</p>
      </div>

      {MOCK_JOBS.length > 0 ? (
        // Whitespace: gap-8 (32px) follows the 4px base unit system
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        // Empty State: Turning an empty state into a clean, informative UI
        <div className="flex flex-col items-center justify-center p-12 rounded-2xl border border-white/10 bg-white/5 border-dashed">
          <p className="text-gray-400">No open positions found at the moment.</p>
        </div>
      )}
    </section>
  );
}
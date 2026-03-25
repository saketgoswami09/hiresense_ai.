interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
  
  {/* Visual Cue: Company Logo/Icon Placeholder */}
  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </div>
  
  <div className="flex flex-col gap-1">
    {/* High Contrast Title */}
    <h2 className="text-lg font-semibold text-white leading-tight">
      {job.title}
    </h2>
    
    {/* Grouped Metadata using Proximity & Visual Cues */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
      {/* Company */}
      <div className="flex items-center gap-1.5 text-sm text-gray-300">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        {job.company}
      </div>
      
      {/* Location */}
      <div className="flex items-center gap-1.5 text-sm text-gray-400">
        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {job.location}
      </div>
    </div>
  </div>
</div>
  );
}

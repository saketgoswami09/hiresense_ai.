import { Building2, X } from 'lucide-react'
import React from 'react'
import { timeAgo } from '@/lib/utils';

const JobModal = () => {
  return (
    <div>
      <div className="sticky top-0 bg-[#0f1117]/95 backdrop-blur-md border-b border-white/10 p-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 border border-white/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">{selectedJob.company}</h2>
                  <p className="text-xs text-slate-400">{timeAgo(selectedJob.postedAt)}</p>
                </div>
              </div>
              <button  className="p-2 rounded-xl hover:bg-white/8 text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
    </div>
  )
}

export default JobModal

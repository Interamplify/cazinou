import { CalendarDays, UserCircle, Info } from 'lucide-react';
import { authorInfo } from '@/data/content';

export function AuthorBar() {
  return (
    <div className="border-y border-gray-100 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <UserCircle className="h-4 w-4 text-orange-400" />
            <span className="font-medium text-gray-700">{authorInfo.name}</span>
            <span className="hidden sm:inline text-gray-400">— {authorInfo.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-orange-400" />
            <span>{authorInfo.lastUpdated}</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Info className="h-4 w-4 text-orange-400" />
            <span>{authorInfo.updateCadence}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

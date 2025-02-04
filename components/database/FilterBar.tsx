'use client';

import { Filter, Calendar, Tag, Bookmark } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface FilterBarProps {
  filters: {
    device: string;
    date: string;
    tag: string;
    marked: boolean;
  };
  setFilters: (filters: any) => void;
}

export function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <ScrollArea className="w-full border-b bg-gray-50">
      <div className="flex items-center p-2 gap-2">
        <div className="flex-none flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border text-sm">
          <Filter className="w-4 h-4" />
          <select 
            value={filters.device}
            onChange={(e) => setFilters({ ...filters, device: e.target.value })}
            className="outline-none bg-transparent"
          >
            <option value="">设备</option>
            <option value="DEV-001">设备 1</option>
            <option value="DEV-002">设备 2</option>
          </select>
        </div>

        <div className="flex-none flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border text-sm">
          <Calendar className="w-4 h-4" />
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="outline-none bg-transparent w-[90px]"
          />
        </div>

        <div className="flex-none flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border text-sm">
          <Tag className="w-4 h-4" />
          <select
            value={filters.tag}
            onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
            className="outline-none bg-transparent"
          >
            <option value="">All Tags</option>
            <option value="Pest">Pest</option>
            <option value="Weed">Weed</option>
            <option value="Drought">Drought</option>
            <option value="Flood">Flood</option>
          </select>
        </div>

        <button
          onClick={() => setFilters({ ...filters, marked: !filters.marked })}
          className={`flex-none flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${
            filters.marked ? 'bg-blue-50 border-blue-200' : 'bg-white'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${filters.marked ? 'text-blue-500' : ''}`} />
          <span>标记</span>
        </button>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
} 
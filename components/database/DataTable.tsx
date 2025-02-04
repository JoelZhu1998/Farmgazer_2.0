'use client';

import Image from 'next/image';
import { Bookmark } from 'lucide-react';

interface DataTableProps {
  data: any[];
  filters: {
    device: string;
    date: string;
    tag: string;
    marked: boolean;
  };
}

export function DataTable({ data, filters }: DataTableProps) {
  const filteredData = data.filter(item => {
    if (filters.device && item.deviceId !== filters.device) return false;
    if (filters.date && !item.timestamp.includes(filters.date)) return false;
    if (filters.tag && item.tag !== filters.tag) return false;
    if (filters.marked && !item.marked) return false;
    return true;
  });

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Pest':
        return 'bg-red-100 text-red-700';
      case 'Weed':
        return 'bg-green-100 text-green-700';
      case 'Drought':
        return 'bg-yellow-100 text-yellow-700';
      case 'Flood':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="divide-y">
        {filteredData.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 bg-white hover:bg-gray-50">
            <div className="relative w-24 aspect-video flex-none">
              <Image
                src={item.imageUrl}
                alt={item.tag}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 text-sm font-medium rounded-md ${getTagColor(item.tag)} whitespace-nowrap`}>
                  {item.tag}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-600">{item.deviceId}</span>
                <span className="text-sm text-gray-500">{formatDate(item.timestamp)}</span>
              </div>
            </div>
            <button className="flex-none p-2 hover:bg-gray-100 rounded-full">
              <Bookmark 
                className={`w-5 h-5 ${item.marked ? 'fill-blue-500 text-blue-500' : 'text-gray-400'}`} 
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 
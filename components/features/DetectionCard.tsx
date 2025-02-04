'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CategoryTag } from './CategoryTag';

interface DetectionCardProps {
  id: string;
  imageUrl: string;
  deviceId: string;
  timestamp: string;
  category: string;
}

export function DetectionCard({ id, imageUrl, deviceId, timestamp, category }: DetectionCardProps) {
  const router = useRouter();
  
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div 
      className="w-[213px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => router.push(`/detail/${id}`)}
    >
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={category}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 213px, 213px"
        />
        <div className="absolute bottom-2 right-2">
          <CategoryTag category={category} />
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-900">{deviceId}</span>
          <span className="text-xs text-gray-500">{formatDate(timestamp)}</span>
        </div>
      </div>
    </div>
  );
}
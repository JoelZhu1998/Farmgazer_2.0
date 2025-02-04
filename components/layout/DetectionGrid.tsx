'use client';

import { DetectionCard } from '@/components/features/DetectionCard';

interface Detection {
  id: string;
  imageUrl: string;
  deviceId: string;
  timestamp: string;
  category: string;
}

interface DetectionGridProps {
  detections: Detection[];
}

export function DetectionGrid({ detections }: DetectionGridProps) {
  // 按类别分组
  const groupedDetections = detections.reduce((acc, detection) => {
    const { category } = detection;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(detection);
    return acc;
  }, {} as Record<string, Detection[]>);

  return (
    <div className="space-y-4">
      {Object.entries(groupedDetections).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h2 className="text-lg font-semibold px-4">{category}</h2>
          <div className="flex overflow-x-auto pb-4">
            <div className="flex gap-4 px-4">
              {items.map((detection) => (
                <div key={detection.id} className="flex-none">
                  <DetectionCard
                    id={detection.id}
                    imageUrl={detection.imageUrl}
                    deviceId={detection.deviceId}
                    timestamp={detection.timestamp}
                    category={detection.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
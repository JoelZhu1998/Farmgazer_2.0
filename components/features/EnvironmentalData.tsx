'use client';

import { Thermometer, Droplets, Clock, MapPin } from 'lucide-react';

interface EnvironmentalDataProps {
  timestamp: string;
  location: string;
  temperature: number;
  humidity: number;
}

export function EnvironmentalData({ timestamp, location, temperature, humidity }: EnvironmentalDataProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
        <Clock className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Time</div>
          <div className="text-sm font-medium">{formatDate(timestamp)}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
        <MapPin className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Location</div>
          <div className="text-sm font-medium">{location}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
        <Thermometer className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Temperature</div>
          <div className="text-sm font-medium">{temperature}°C</div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
        <Droplets className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Humidity</div>
          <div className="text-sm font-medium">{humidity}%</div>
        </div>
      </div>
    </div>
  );
} 
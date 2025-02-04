'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronDown, Flag } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { EnvironmentalData } from '@/components/features/EnvironmentalData';
import { AIAnalysis } from '@/components/features/AIAnalysis';
import { CategoryTag } from '@/components/features/CategoryTag';

type Priority = 'high' | 'low' | 'ignore' | null;

interface MockData {
  imageUrl: string;
  deviceId: string;
  timestamp: string;
  location: string;
  temperature: number;
  humidity: number;
  category: string;
  priority: Priority;
  analysis: {
    phenomenon: string[];
    indication: string;
    interpretation: string;
  };
}

// 更新 mock 数据，添加 priority 字段
const mockDataMap: Record<string, MockData> = {
  '1': {
    imageUrl: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=80',
    deviceId: 'DEV-001',
    timestamp: '2024-03-26 10:30',
    location: 'Field A',
    temperature: 25,
    humidity: 65,
    category: 'Pest',
    priority: null,
    analysis: {
      phenomenon: [
        'Irregular yellow spots on leaves',
        'Small holes in leaf tissue',
        'Presence of small insects on undersides'
      ],
      indication: 'Early stage pest infestation detected',
      interpretation: 'The symptoms suggest an aphid infestation in its early stages. The yellow spots and small holes are typical signs of pest feeding damage. The presence of insects on the leaf undersides confirms active infestation.'
    }
  },
  '2': {
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
    deviceId: 'DEV-002',
    timestamp: '2024-03-26 10:35',
    location: 'Field B',
    temperature: 28,
    humidity: 70,
    category: 'Weed',
    priority: null,
    analysis: {
      phenomenon: [
        'Dense clusters of unwanted plants',
        'Competition with crop plants',
        'Rapid spread pattern'
      ],
      indication: 'Significant weed infestation detected',
      interpretation: 'The presence of invasive weeds is competing with the main crop for nutrients and water. Immediate weed control measures are recommended to prevent yield loss.'
    }
  },
  '3': {
    imageUrl: 'https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?w=800&q=80',
    deviceId: 'DEV-003',
    timestamp: '2024-03-26 10:40',
    location: 'Field C',
    temperature: 32,
    humidity: 45,
    category: 'Drought',
    priority: null,
    analysis: {
      phenomenon: [
        'Wilting leaves',
        'Dry soil surface',
        'Stunted growth'
      ],
      indication: 'Drought stress detected',
      interpretation: 'The plants are showing clear signs of water stress. The combination of high temperature and low humidity has led to excessive water loss. Immediate irrigation is recommended.'
    }
  }
  // ... 可以继续添加其他设备的数据
};

export default function DetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [currentData, setCurrentData] = useState(mockDataMap[id] || mockDataMap['1']);
  
  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-50 border-red-200';
      case 'low':
        return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'ignore':
        return 'text-gray-400 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-400 bg-white border-gray-200';
    }
  };

  const handlePriorityChange = (newPriority: Priority) => {
    setCurrentData(prev => ({
      ...prev,
      priority: newPriority
    }));
    // 在实际应用中，这里应该调用 API 来更新数据库
  };

  return (
    <div className="flex-1 overflow-auto pb-16">
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="h-[env(safe-area-inset-top,20px)]" />
        <div className="flex items-center h-12 px-4">
          <button className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 flex items-center justify-between ml-2">
            <span className="text-base font-medium">{currentData.deviceId}</span>
            <button className="flex items-center gap-1 text-sm text-gray-600">
              Change device
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="aspect-video relative bg-gray-100">
          <Image
            src={currentData.imageUrl}
            alt="Field image"
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <div className="relative group">
              <button 
                className={`p-2 rounded-lg border ${getPriorityColor(currentData.priority)} bg-white/90 backdrop-blur-sm`}
              >
                <Flag className="w-5 h-5" />
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block">
                <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                  <button 
                    className="px-4 py-2 hover:bg-gray-50 w-full text-left text-sm flex items-center gap-2"
                    onClick={() => handlePriorityChange('high')}
                  >
                    <Flag className="w-4 h-4 text-red-500" />
                    High Priority
                  </button>
                  <button 
                    className="px-4 py-2 hover:bg-gray-50 w-full text-left text-sm flex items-center gap-2"
                    onClick={() => handlePriorityChange('low')}
                  >
                    <Flag className="w-4 h-4 text-yellow-500" />
                    Low Priority
                  </button>
                  <button 
                    className="px-4 py-2 hover:bg-gray-50 w-full text-left text-sm flex items-center gap-2"
                    onClick={() => handlePriorityChange('ignore')}
                  >
                    <Flag className="w-4 h-4 text-gray-400" />
                    Ignore
                  </button>
                  {currentData.priority && (
                    <button 
                      className="px-4 py-2 hover:bg-gray-50 w-full text-left text-sm border-t"
                      onClick={() => handlePriorityChange(null)}
                    >
                      Clear Priority
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <CategoryTag category={currentData.category} />
          </div>
        </div>

        <div className="space-y-4 px-4">
          <EnvironmentalData
            timestamp={currentData.timestamp}
            location={currentData.location}
            temperature={currentData.temperature}
            humidity={currentData.humidity}
          />

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">AI Analysis</h2>
            <AIAnalysis
              phenomenon={currentData.analysis.phenomenon}
              indication={currentData.analysis.indication}
              interpretation={currentData.analysis.interpretation}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
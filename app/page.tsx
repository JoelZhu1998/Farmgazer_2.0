'use client';

import { DetectionGrid } from '@/components/layout/DetectionGrid';

const mockDetections = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=80', // rice field
    deviceId: 'DEV-001',
    timestamp: '2024-03-26 10:30',
    category: 'Pest',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80', // wheat field
    deviceId: 'DEV-002',
    timestamp: '2024-03-26 10:35',
    category: 'Weed',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?w=800&q=80', // dry field
    deviceId: 'DEV-003',
    timestamp: '2024-03-26 10:40',
    category: 'Drought',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', // flooded field
    deviceId: 'DEV-004',
    timestamp: '2024-03-26 10:45',
    category: 'Flood',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', // rice field
    deviceId: 'DEV-005',
    timestamp: '2024-03-26 11:00',
    category: 'Pest',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80', // wheat field
    deviceId: 'DEV-006',
    timestamp: '2024-03-26 11:15',
    category: 'Weed',
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&q=80', // dry field
    deviceId: 'DEV-007',
    timestamp: '2024-03-26 11:30',
    category: 'Drought',
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800&q=80', // flooded field
    deviceId: 'DEV-008',
    timestamp: '2024-03-26 11:45',
    category: 'Flood',
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', // field
    deviceId: 'DEV-009',
    timestamp: '2024-03-26 12:00',
    category: 'Pest',
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', // field
    deviceId: 'DEV-010',
    timestamp: '2024-03-26 12:15',
    category: 'Weed',
  }
];

export default function HomePage() {
  return (
    <div className="flex-1 overflow-auto pb-16">
      <DetectionGrid detections={mockDetections} />
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Filter, Calendar, Tag, Bookmark } from 'lucide-react';
import { DataTable } from '@/components/database/DataTable';
import { FilterBar } from '@/components/database/FilterBar';

const mockData = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=80', // rice field
    deviceId: 'DEV-001',
    timestamp: '2024-03-26 10:30',
    tag: 'Pest',
    marked: true,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80', // wheat field
    deviceId: 'DEV-002',
    timestamp: '2024-03-26 10:35',
    tag: 'Weed',
    marked: false,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?w=800&q=80', // dry field
    deviceId: 'DEV-003',
    timestamp: '2024-03-26 10:40',
    tag: 'Drought',
    marked: true,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', // flooded field
    deviceId: 'DEV-004',
    timestamp: '2024-03-26 10:45',
    tag: 'Flood',
    marked: false,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', // rice field
    deviceId: 'DEV-005',
    timestamp: '2024-03-26 11:00',
    tag: 'Pest',
    marked: true,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e8e0?w=800&q=80', // wheat field
    deviceId: 'DEV-006',
    timestamp: '2024-03-26 11:15',
    tag: 'Weed',
    marked: false,
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&q=80', // dry field
    deviceId: 'DEV-007',
    timestamp: '2024-03-26 11:30',
    tag: 'Drought',
    marked: true,
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1583475020831-fb4fdf405db7?w=800&q=80', // flooded field
    deviceId: 'DEV-008',
    timestamp: '2024-03-26 11:45',
    tag: 'Flood',
    marked: false,
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', // field
    deviceId: 'DEV-009',
    timestamp: '2024-03-26 12:00',
    tag: 'Pest',
    marked: true,
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', // field
    deviceId: 'DEV-010',
    timestamp: '2024-03-26 12:15',
    tag: 'Weed',
    marked: false,
  }
];

export default function DatabasePage() {
  const [filters, setFilters] = useState({
    device: '',
    date: '',
    tag: '',
    marked: false,
  });

  return (
    <div className="flex flex-col h-[100dvh]">
      <FilterBar filters={filters} setFilters={setFilters} />
      <DataTable data={mockData} filters={filters} />
    </div>
  );
} 
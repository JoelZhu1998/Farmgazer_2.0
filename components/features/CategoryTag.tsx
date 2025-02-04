interface CategoryTagProps {
  category: string;
}

const getCategoryColor = (category: string) => {
  switch (category) {
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

export function CategoryTag({ category }: CategoryTagProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${getCategoryColor(category)} whitespace-nowrap`}>
      {category}
    </span>
  );
}
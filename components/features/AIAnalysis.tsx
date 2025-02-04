'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AIAnalysisProps {
  phenomenon: string[];
  indication: string;
  interpretation: string;
}

export function AIAnalysis({ phenomenon, indication, interpretation }: AIAnalysisProps) {
  const [isPhenomenonExpanded, setIsPhenomenonExpanded] = useState(false);
  const [isInterpretationExpanded, setIsInterpretationExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border overflow-hidden">
        <button
          className="flex items-center justify-between w-full p-4"
          onClick={() => setIsPhenomenonExpanded(!isPhenomenonExpanded)}
        >
          <h3 className="text-sm font-medium">Phenomenon</h3>
          {isPhenomenonExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isPhenomenonExpanded && (
          <div className="px-4 pb-4">
            <ul className="list-disc list-inside space-y-1">
              {phenomenon.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h3 className="text-sm font-medium mb-2">Indication</h3>
        <p className="text-sm text-gray-600">{indication}</p>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <button
          className="flex items-center justify-between w-full p-4"
          onClick={() => setIsInterpretationExpanded(!isInterpretationExpanded)}
        >
          <h3 className="text-sm font-medium">Interpretation</h3>
          {isInterpretationExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isInterpretationExpanded && (
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-600">{interpretation}</p>
          </div>
        )}
      </div>

      <button className="w-full text-sm text-gray-500 hover:text-gray-600">
        Report inaccurate information
      </button>
    </div>
  );
} 
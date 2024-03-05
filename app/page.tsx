'use client';

import { useState, useEffect } from 'react';
import ColorForm from '@/components/ColorForm';
import Message from '@/components/Message';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState<{ title: string; content: string }[]>([]);

  useEffect(() => {
    if (localStorage) {
      const localApiResponse = localStorage.getItem('apiResponse');
      if (localApiResponse) {
        setApiResponse(JSON.parse(localApiResponse));
      }
    }
    setIsLoading(false);
  }, []);

  const handleApiResponse = (title: string, content: string) => {
    setApiResponse([...apiResponse, { title, content }]);
    const currentApiResponse = localStorage.getItem('apiResponse');
    const local = currentApiResponse ? JSON.parse(currentApiResponse) : [];
    localStorage.setItem('apiResponse', JSON.stringify([...local, { title, content }]));
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-shrink-0 w-1/3 bg-gray-200 p-4">
        <div className="w-1/3 fixed left-0 top-0 h-full bg-white p-4 shadow-md">
          <ColorForm handleApiResponse={handleApiResponse} />
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          apiResponse.map((message, index) => (
            <Message key={index} title={message.title} content={message.content} />
          ))
        )}
      </div>
    </div>
  );
}

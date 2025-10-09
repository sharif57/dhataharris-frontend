'use client';

import { useSeriesDetailsQuery } from '@/redux/feature/seriesSlice';
import { useParams } from 'next/navigation';
import React from 'react';

interface SeriesItem {
  id: number;
  title: string;
  video_url: string;
  description: string;
  author_name: string;
}

const getEmbedUrl = (url: string) => {
  try {
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('watch?v=')) {
      const videoId = url.split('watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      return url;
    }
  } catch {
    return url;
  }
};

export default function SeriesDetails() {
  const params = useParams();
  const id = Number(params?.id);
  const { data, isLoading, isError } = useSeriesDetailsQuery(id);
  console.log(data)

  const selectedSeries: SeriesItem | undefined = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Loading series details...</p>
      </div>
    );
  }

  if (isError || !selectedSeries) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-lg">Failed to load series details.</p>
      </div>
    );
  }

  return (
    <div className=" px-4 md:px-6">
      <main className="min-h-screen max-w-6xl mx-auto pt-10">
        {/* ✅ Video Player */}
        <div className="relative w-full h-[200px] md:h-[440px] rounded-3xl overflow-hidden shadow-md">
          <iframe
            src={getEmbedUrl(selectedSeries.video_url)}
            title={selectedSeries.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-t-2xl"
          ></iframe>
        </div>

        {/* ✅ Series Details */}
        <div className="py-6 text-justify">
          <h1 className="text-xl md:text-4xl font-semibold underline text-gray-900 mb-4">
            {selectedSeries.title}
          </h1>
          <p>Author Name: {selectedSeries.author_name}</p>
          <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
            <p>{selectedSeries.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

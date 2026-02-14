import React from 'react';
import HeaderShields from '@/components/HeaderShields';
import ContentCard from '@/components/ContentCard';

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderShields newCount={68} grudenCount="10万" goldenHitCount={14} currentVibe="祭" />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black mb-10 border-l-8 border-red-600 pl-4 uppercase">Category Feed</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard thumbnailUrl="/images/video1.jpg" title="COMING SOON: NEXT GEN VIBE" link="#" />
          <ContentCard thumbnailUrl="/images/ad_device.jpg" title="【PR】PREMIUM ACCESS" link="#" isAd={true} />
        </div>
      </main>
    </div>
  );
}

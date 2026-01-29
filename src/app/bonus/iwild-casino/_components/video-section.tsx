import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 flex items-center justify-center gap-3">
            <Play className="h-7 w-7 text-orange-500" />
            Video Recenzie iWild Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Vezi prezentarea video completă a cazinoului, bonusurilor și funcțiilor disponibile
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <iframe
              src="https://www.youtube.com/embed/LyHAMz_zNm8"
              title="iWild Casino Video Recenzie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-mono">
            Vizionează recenzia noastră video pentru detalii despre iWild Casino
          </p>
        </div>
      </div>
    </section>
  );
}

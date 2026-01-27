import { introContent } from '@/data/content';

export function IntroSection() {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 mb-5">
            {introContent.heading}
          </h2>
          <div className="space-y-4">
            {introContent.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

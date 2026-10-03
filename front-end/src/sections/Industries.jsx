import IndustryCard from '../components/industries/IndustryCard';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <section id="industries" className="py-8 lg:py-10 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
            Industries
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            Industries We Serve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

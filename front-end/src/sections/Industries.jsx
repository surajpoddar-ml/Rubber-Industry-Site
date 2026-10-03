import SectionHeader from '../components/common/SectionHeader';
import IndustryCard from '../components/industries/IndustryCard';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Rubber Solutions Across Industries"
          description="We supply rubber products and components to companies across a wide range of industrial and commercial sectors."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

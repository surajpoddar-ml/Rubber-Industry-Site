import StatCard from '../components/common/StatCard';

const stats = [
  { value: '10', suffix: '+', label: 'Years of Experience' },
  { value: '50', suffix: '+', label: 'Product Solutions' },
  { value: '20', suffix: '+', label: 'Industrial Applications' },
  { value: '100', suffix: '%', label: 'Quality Focus' },
];

export default function Statistics() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal-900" aria-label="Company statistics">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} light />
          ))}
        </div>
        <p className="text-center text-xs text-charcoal-600 mt-8">
          * Placeholder values — replace with actual company statistics.
        </p>
      </div>
    </section>
  );
}

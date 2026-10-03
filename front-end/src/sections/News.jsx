import { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import NewsCard from '../components/news/NewsCard';
import NewsModal from '../components/news/NewsModal';
import { news } from '../data/news';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-10 lg:py-14 bg-charcoal-50">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
            News & Insights
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            Latest Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              index={index}
              onReadMore={setSelectedArticle}
            />
          ))}
        </div>

        <NewsModal
          article={selectedArticle}
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </section>
  );
}

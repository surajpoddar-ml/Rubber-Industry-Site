import { useState } from 'react';
import NewsCard from '../components/news/NewsCard';
import NewsModal from '../components/news/NewsModal';
import { news } from '../data/news';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-5 lg:py-7 bg-charcoal-50">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-0.5">
            News & Insights
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal-900 leading-tight">
            Latest Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

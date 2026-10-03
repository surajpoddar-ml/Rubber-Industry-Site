import { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import NewsCard from '../components/news/NewsCard';
import NewsModal from '../components/news/NewsModal';
import { news } from '../data/news';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-20 lg:py-28 bg-charcoal-50">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="News & Insights"
          title="Latest Updates"
          description="Stay informed about company developments, industry insights, and manufacturing updates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

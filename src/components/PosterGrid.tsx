import { useState, useEffect } from 'react';
import { Poster } from '@/types/poster';
import { getPosters } from '@/lib/posterStorage';
import PosterDetailModal from './PosterDetailModal';

const PosterGrid = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  useEffect(() => {
    setPosters(getPosters());
  }, []);

  if (posters.length === 0) return null;

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Latest Offers & Events</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">Discover our newest travel packages, special events, and exclusive offers handpicked just for you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posters.map((poster) => (
              <div key={poster.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedPoster(poster)}>
                <div className="relative h-56">
                  <img src={poster.image} alt={poster.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {poster.offer && poster.offerPrice ? poster.offerPrice : poster.price}
                  </div>
                  {poster.offer && (
                    <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">OFFER</div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-heading font-semibold mb-2 line-clamp-2">{poster.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{poster.description}</p>
                  {poster.location && <p className="text-xs text-muted-foreground mb-2">{poster.location}</p>}
                  {poster.offer && poster.offerPrice && poster.originalPrice && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">{poster.offerPrice}</span>
                      <span className="text-xs text-muted-foreground line-through">{poster.originalPrice}</span>
                    </div>
                  )}
                  <p className="text-xs text-accent">{poster.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPoster && (
        <PosterDetailModal poster={selectedPoster} onClose={() => setSelectedPoster(null)} />
      )}
    </>
  );
};

export default PosterGrid;

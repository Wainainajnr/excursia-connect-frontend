import { MapPin, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Poster } from '@/types/poster';

interface PosterDetailModalProps {
  poster: Poster;
  onClose: () => void;
}

const PosterDetailModal = ({ poster, onClose }: PosterDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="relative">
          <img
            src={poster.image}
            alt={poster.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{poster.title}</h2>

          <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
            {poster.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{poster.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{poster.date}</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-primary">{poster.price}</span>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground whitespace-pre-line">{poster.description}</p>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterDetailModal;

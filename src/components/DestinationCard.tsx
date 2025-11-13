import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  price: string;
  link?: string;
}

const DestinationCard = ({ image, title, location, description, price, link = '#' }: DestinationCardProps) => {
  return (
    <div className="destination-card bg-card rounded-xl overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center space-x-1 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => window.location.href = link}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;

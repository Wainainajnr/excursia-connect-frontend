import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

// Import destination images
import destMountains from '@/assets/destination-mountains.jpg';
import destIsland from '@/assets/destination-island.jpg';
import destCity from '@/assets/destination-city.jpg';
import destCoastal from '@/assets/destination-coastal.jpg';
import heroSafari from '@/assets/hero-safari.jpg';
import heroBeach from '@/assets/hero-beach.jpg';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock destination data (in production, this would come from an API)
  const destinations: Record<string, any> = {
    'kenya-safari': {
      id: 'kenya-safari',
      image: heroSafari,
      title: 'Kenya Safari Experience',
      location: 'Maasai Mara, Kenya',
      description: 'Witness the spectacular Great Migration and encounter the Big Five in one of Africa\'s most renowned wildlife reserves.',
      price: 'From KShs 312,000',
      longDescription: 'Embark on an unforgettable journey through the iconic Maasai Mara National Reserve. This premium safari experience offers you the chance to witness the annual Great Migration, where millions of wildebeest, zebras, and gazelles traverse the plains in search of greener pastures. Our expert guides will take you on game drives to spot the Big Five - lions, elephants, buffalo, leopards, and rhinos - in their natural habitat.',
      highlights: [
        'Professional safari guide and comfortable 4x4 safari vehicle',
        'Morning and evening game drives',
        'Visit to a traditional Maasai village',
        'Sundowner drinks in the savannah',
        'Hot air balloon safari (optional)',
      ],
      included: [
        'Airport transfers',
        'Luxury tented camp accommodation',
        'All meals and beverages',
        'Park entrance fees',
        'Professional guide services',
      ],
    },
    'zanzibar-beach': {
      id: 'zanzibar-beach',
      image: heroBeach,
      title: 'Zanzibar Beach Paradise',
      location: 'Zanzibar, Tanzania',
      description: 'Relax on pristine white sand beaches, explore spice plantations, and snorkel in crystal-clear turquoise waters.',
      price: 'From KShs 175,000',
      longDescription: 'Experience the magic of Zanzibar, where pristine white sand beaches meet crystal-clear turquoise waters. This tropical paradise offers a perfect blend of relaxation and adventure. Spend your days lounging on powdery beaches, snorkeling in vibrant coral reefs, and exploring the historic Stone Town with its winding alleys and Arabic architecture.',
      highlights: [
        'Private beach access',
        'Snorkeling and diving in coral reefs',
        'Spice plantation tour',
        'Stone Town historical tour',
        'Sunset dhow cruise',
      ],
      included: [
        'Beachfront resort accommodation',
        'Daily breakfast and dinner',
        'Airport transfers',
        'Guided tours',
        'Water sports equipment',
      ],
    },
    'kilimanjaro-trek': {
      id: 'kilimanjaro-trek',
      image: destMountains,
      title: 'Mount Kilimanjaro Trek',
      location: 'Tanzania',
      description: 'Conquer Africa\'s highest peak with experienced guides on this challenging and rewarding mountain adventure.',
      price: 'From KShs 400,000',
      longDescription: 'Challenge yourself to reach the "Roof of Africa" on this epic trek up Mount Kilimanjaro. At 5,895 meters, Kilimanjaro is the highest free-standing mountain in the world. Our experienced guides will lead you through five distinct climate zones, from tropical rainforest to arctic summit, ensuring your safety and maximizing your chances of reaching Uhuru Peak.',
      highlights: [
        'Professional mountain guides and porters',
        'Machame Route (Whiskey Route)',
        '7-day acclimatization schedule',
        'Summit certificate upon completion',
        'Pre-trek briefing and equipment check',
      ],
      included: [
        'All camping equipment',
        'Three meals daily on the mountain',
        'Park fees and rescue fees',
        'Experienced guide team',
        'Pre and post-trek accommodation',
      ],
    },
    'seychelles-island': {
      id: 'seychelles-island',
      image: destIsland,
      title: 'Seychelles Island Escape',
      location: 'Seychelles',
      description: 'Experience luxury on stunning tropical islands with world-class resorts, pristine beaches, and exceptional diving.',
      price: 'From KShs 500,000',
      longDescription: 'Discover the ultimate island paradise in the Seychelles, where granite boulders meet powder-white beaches and lush tropical forests. This luxury escape takes you to the most beautiful islands in the Indian Ocean, offering world-class resorts, exceptional diving, and some of the most photographed beaches on Earth.',
      highlights: [
        'Island hopping to Praslin and La Digue',
        'Visit Vallée de Mai UNESCO site',
        'Snorkeling at Anse Lazio',
        'Giant tortoise encounters',
        'Private beach dinners',
      ],
      included: [
        '5-star luxury resort accommodation',
        'All meals and premium beverages',
        'Inter-island transfers',
        'Guided excursions',
        'Spa treatments',
      ],
    },
    'marrakech-tour': {
      id: 'marrakech-tour',
      image: destCity,
      title: 'Marrakech Cultural Tour',
      location: 'Morocco',
      description: 'Explore vibrant souks, historic palaces, and authentic Moroccan cuisine in this enchanting ancient city.',
      price: 'From KShs 137,000',
      longDescription: 'Immerse yourself in the vibrant colors, sounds, and scents of Marrakech. This cultural tour takes you through the heart of Morocco\'s most enchanting city, from the bustling souks of the Medina to the serene beauty of the Majorelle Garden. Experience authentic Moroccan hospitality, savor traditional cuisine, and explore magnificent palaces and mosques.',
      highlights: [
        'Guided tour of the Medina and souks',
        'Visit to Bahia Palace and Saadian Tombs',
        'Majorelle Garden and Yves Saint Laurent Museum',
        'Traditional Moroccan cooking class',
        'Sunset at Jemaa el-Fnaa square',
      ],
      included: [
        'Boutique riad accommodation',
        'Daily breakfast and select dinners',
        'Professional guide',
        'Entrance fees to all sites',
        'Airport transfers',
      ],
    },
    'lamu-coastal': {
      id: 'lamu-coastal',
      image: destCoastal,
      title: 'Coastal Village Retreat',
      location: 'Lamu, Kenya',
      description: 'Discover a tranquil coastal town with centuries-old Swahili architecture and a laid-back island atmosphere.',
      price: 'From KShs 200,000',
      longDescription: 'Step back in time on the enchanting island of Lamu, a UNESCO World Heritage Site. This coastal retreat offers a unique blend of Swahili culture, Arabic influence, and pristine beaches. With no cars on the island, explore narrow streets by foot or traditional dhow, visit ancient mosques, and relax on secluded beaches.',
      highlights: [
        'Dhow sailing excursions',
        'Visit to Lamu Old Town',
        'Traditional Swahili cooking experience',
        'Snorkeling at Manda Toto',
        'Sunset beach walks',
      ],
      included: [
        'Beachfront hotel accommodation',
        'All meals',
        'Boat transfers',
        'Guided cultural tours',
        'Water activities',
      ],
    },
  };

  const destination = id ? destinations[id] : null;

  if (!destination) {
    return (
      <Layout>
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold mb-6">Destination Not Found</h1>
            <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/destinations')}>Back to Destinations</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
              {destination.title}
            </h1>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-xl">{destination.location}</span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="absolute top-24 left-4 bg-background/90 hover:bg-background"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Price Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-4xl font-bold text-primary">{destination.price}</div>
              <Button 
                size="lg" 
                className="btn-pill bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => window.location.href = 'tel:0724415820'}
              >
                Book Now
              </Button>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">About This Experience</h2>
              <p className="text-muted-foreground">{destination.longDescription}</p>
            </div>

            {/* Highlights */}
            {destination.highlights && (
              <div className="mb-12">
                <h3 className="text-2xl font-heading font-bold mb-6">Experience Highlights</h3>
                <div className="grid gap-4">
                  {destination.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included */}
            {destination.included && (
              <div className="bg-muted p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-heading font-bold mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.included.map((item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready for Your Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to customize this package or get more information
              </p>
              <Button 
                size="lg" 
                className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;

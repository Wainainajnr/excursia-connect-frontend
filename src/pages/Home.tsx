import { Compass, Shield, Users, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import DestinationCard from '@/components/DestinationCard';
import Newsletter from '@/components/Newsletter';
import PosterGrid from '@/components/PosterGrid';
import { Button } from '@/components/ui/button';

// Import destination images
import destMountains from '@/assets/destination-mountains.jpg';
import destIsland from '@/assets/destination-island.jpg';
import destCity from '@/assets/destination-city.jpg';
import destCoastal from '@/assets/destination-coastal.jpg';

const Home = () => {
  const featuredServices = [
    {
      icon: Compass,
      title: 'Custom Itineraries',
      description: 'Tailored travel plans designed specifically for your preferences and budget.',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Travel with confidence knowing your safety and security are our top priorities.',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Knowledgeable local guides who bring destinations to life with authentic experiences.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in customer service and unforgettable travel experiences.',
    },
  ];

  const topDestinations = [
    {
      image: destMountains,
      title: 'Mountain Adventures',
      location: 'East African Highlands',
      description: 'Explore breathtaking mountain landscapes with misty peaks and lush green valleys perfect for hiking and adventure.',
      price: 'From KShs 150,000',
    },
    {
      image: destIsland,
      title: 'Tropical Paradise',
      location: 'Indian Ocean Islands',
      description: 'Discover pristine beaches, crystal-clear waters, and vibrant coral reefs on exclusive island getaways.',
      price: 'From KShs 225,000',
    },
    {
      image: destCity,
      title: 'Cultural Heritage',
      location: 'Historic Cities',
      description: 'Immerse yourself in rich history and stunning architecture in ancient cities with cobblestone streets.',
      price: 'From KShs 112,000',
    },
  ];

  const recommendedPackages = [
    {
      image: destCoastal,
      title: 'Coastal Village Retreat',
      location: 'Mediterranean Coast',
      description: 'Charming coastal villages with serene harbors and spectacular sunset views.',
      price: 'From KShs 187,000',
    },
    {
      image: destMountains,
      title: 'Highland Expedition',
      location: 'Mountain Ranges',
      description: 'Trek through stunning highland terrain with expert guides and premium camping.',
      price: 'From KShs 262,000',
    },
    {
      image: destIsland,
      title: 'Island Hopping Adventure',
      location: 'Archipelago',
      description: 'Discover multiple tropical islands with snorkeling, diving, and beach activities.',
      price: 'From KShs 300,000',
    },
  ];

  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Welcome to Excursia Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Where epic travel meets epic expectations. We specialize in creating unforgettable journeys that transform the way you experience the world.
            </p>
            <p className="text-muted-foreground">
              From thrilling safaris to peaceful beach retreats, from cultural explorations to seamless relocation services—we're your partner in every adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Why Choose Excursia Connect?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Top Destinations
            </h2>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => window.location.href = '/destinations'}
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended for You - Horizontal Scroll */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Recommended for You
          </h2>

          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {recommendedPackages.map((pkg, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-start">
                <DestinationCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin-Added Posters */}
      <PosterGrid />

      {/* Newsletter Signup */}
      <Newsletter />
    </Layout>
  );
};

export default Home;

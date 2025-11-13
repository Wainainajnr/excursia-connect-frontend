import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';

// Import destination images
import destMountains from '@/assets/destination-mountains.jpg';
import destIsland from '@/assets/destination-island.jpg';
import destCity from '@/assets/destination-city.jpg';
import destCoastal from '@/assets/destination-coastal.jpg';
import heroSafari from '@/assets/hero-safari.jpg';
import heroBeach from '@/assets/hero-beach.jpg';

const Destinations = () => {
  const allDestinations = [
    {
      image: heroSafari,
      title: 'Kenya Safari Experience',
      location: 'Maasai Mara, Kenya',
      description: 'Witness the spectacular Great Migration and encounter the Big Five in one of Africa\'s most renowned wildlife reserves.',
      price: 'From $2,500',
    },
    {
      image: heroBeach,
      title: 'Zanzibar Beach Paradise',
      location: 'Zanzibar, Tanzania',
      description: 'Relax on pristine white sand beaches, explore spice plantations, and snorkel in crystal-clear turquoise waters.',
      price: 'From $1,400',
    },
    {
      image: destMountains,
      title: 'Mount Kilimanjaro Trek',
      location: 'Tanzania',
      description: 'Conquer Africa\'s highest peak with experienced guides on this challenging and rewarding mountain adventure.',
      price: 'From $3,200',
    },
    {
      image: destIsland,
      title: 'Seychelles Island Escape',
      location: 'Seychelles',
      description: 'Experience luxury on stunning tropical islands with world-class resorts, pristine beaches, and exceptional diving.',
      price: 'From $4,000',
    },
    {
      image: destCity,
      title: 'Marrakech Cultural Tour',
      location: 'Morocco',
      description: 'Explore vibrant souks, historic palaces, and authentic Moroccan cuisine in this enchanting ancient city.',
      price: 'From $1,100',
    },
    {
      image: destCoastal,
      title: 'Coastal Village Retreat',
      location: 'Lamu, Kenya',
      description: 'Discover a tranquil coastal town with centuries-old Swahili architecture and a laid-back island atmosphere.',
      price: 'From $1,600',
    },
  ];

  const recommendedPackages = [
    {
      image: destMountains,
      title: 'Highland Expedition',
      location: 'Ethiopian Highlands',
      description: 'Trek through stunning highland terrain with expert guides and experience authentic local culture.',
      price: 'From $2,100',
    },
    {
      image: destIsland,
      title: 'Mauritius Luxury Package',
      location: 'Mauritius',
      description: 'All-inclusive luxury resort experience with water sports, spa treatments, and gourmet dining.',
      price: 'From $3,500',
    },
    {
      image: destCoastal,
      title: 'Coastal Road Trip',
      location: 'South African Coast',
      description: 'Drive the spectacular Garden Route with stops at charming coastal towns and scenic viewpoints.',
      price: 'From $2,800',
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Explore Our Destinations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From pristine beaches to thrilling safaris, discover handpicked destinations that promise unforgettable experiences and epic adventures.
          </p>
        </div>
      </section>

      {/* All Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Top Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Recommended for You
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Based on popular choices and current travel trends, these handpicked packages offer exceptional value and unforgettable experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedPackages.map((pkg, index) => (
              <DestinationCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;

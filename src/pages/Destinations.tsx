import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';
import PosterGrid from '@/components/PosterGrid';

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
      id: 'kenya-safari',
      image: heroSafari,
      title: 'Kenya Safari Experience',
      location: 'Maasai Mara, Kenya',
      description: 'Witness the spectacular Great Migration and encounter the Big Five in one of Africa\'s most renowned wildlife reserves.',
      price: 'From KShs 312,000',
      link: '/destinations/kenya-safari',
    },
    {
      id: 'zanzibar-beach',
      image: heroBeach,
      title: 'Zanzibar Beach Paradise',
      location: 'Zanzibar, Tanzania',
      description: 'Relax on pristine white sand beaches, explore spice plantations, and snorkel in crystal-clear turquoise waters.',
      price: 'From KShs 175,000',
      link: '/destinations/zanzibar-beach',
    },
    {
      id: 'kilimanjaro-trek',
      image: destMountains,
      title: 'Mount Kilimanjaro Trek',
      location: 'Tanzania',
      description: 'Conquer Africa\'s highest peak with experienced guides on this challenging and rewarding mountain adventure.',
      price: 'From KShs 400,000',
      link: '/destinations/kilimanjaro-trek',
    },
    {
      id: 'seychelles-island',
      image: destIsland,
      title: 'Seychelles Island Escape',
      location: 'Seychelles',
      description: 'Experience luxury on stunning tropical islands with world-class resorts, pristine beaches, and exceptional diving.',
      price: 'From KShs 500,000',
      link: '/destinations/seychelles-island',
    },
    {
      id: 'marrakech-tour',
      image: destCity,
      title: 'Marrakech Cultural Tour',
      location: 'Morocco',
      description: 'Explore vibrant souks, historic palaces, and authentic Moroccan cuisine in this enchanting ancient city.',
      price: 'From KShs 137,000',
      link: '/destinations/marrakech-tour',
    },
    {
      id: 'lamu-coastal',
      image: destCoastal,
      title: 'Coastal Village Retreat',
      location: 'Lamu, Kenya',
      description: 'Discover a tranquil coastal town with centuries-old Swahili architecture and a laid-back island atmosphere.',
      price: 'From KShs 200,000',
      link: '/destinations/lamu-coastal',
    },
  ];

  const recommendedPackages = [
    {
      id: 'ethiopian-highlands',
      image: destMountains,
      title: 'Highland Expedition',
      location: 'Ethiopian Highlands',
      description: 'Trek through stunning highland terrain with expert guides and experience authentic local culture.',
      price: 'From KShs 262,000',
      link: '/destinations/ethiopian-highlands',
    },
    {
      id: 'mauritius-luxury',
      image: destIsland,
      title: 'Mauritius Luxury Package',
      location: 'Mauritius',
      description: 'All-inclusive luxury resort experience with water sports, spa treatments, and gourmet dining.',
      price: 'From KShs 437,000',
      link: '/destinations/mauritius-luxury',
    },
    {
      id: 'garden-route',
      image: destCoastal,
      title: 'Coastal Road Trip',
      location: 'South African Coast',
      description: 'Drive the spectacular Garden Route with stops at charming coastal towns and scenic viewpoints.',
      price: 'From KShs 350,000',
      link: '/destinations/garden-route',
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

      {/* Admin Uploaded Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <PosterGrid />
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;

import { Home, Package, MapPin, CheckCircle, Plane, FileText } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import relocationHero from '@/assets/relocation-hero.jpg';
import destCoastal from '@/assets/destination-coastal.jpg';
import heroBeach from '@/assets/hero-beach.jpg';
import destCity from '@/assets/destination-city.jpg';

const RelocationOffers = () => {
  const relocationServices = [
    {
      icon: Home,
      title: 'Housing Assistance',
      description: 'Find your perfect home with our comprehensive property search and viewing services.',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Navigate visa requirements, work permits, and all necessary legal documentation.',
    },
    {
      icon: MapPin,
      title: 'Area Orientation',
      description: 'Get acquainted with local neighborhoods, schools, healthcare, and amenities.',
    },
    {
      icon: Plane,
      title: 'Moving Logistics',
      description: 'Coordinated shipping, packing, and transportation of your belongings.',
    },
  ];

  const specialOffers = [
    {
      image: heroBeach,
      title: 'Coastal Getaway Package',
      location: 'Mombasa, Kenya',
      originalPrice: 'KShs 300,000',
      discountedPrice: 'KShs 212,000',
      discount: '30% OFF',
      features: ['5 nights all-inclusive', 'Airport transfers', 'Water sports activities', 'Spa treatment'],
    },
    {
      image: destCity,
      title: 'Cultural Heritage Tour',
      location: 'Stone Town, Zanzibar',
      originalPrice: 'KShs 225,000',
      discountedPrice: 'KShs 162,000',
      discount: '28% OFF',
      features: ['4 nights boutique hotel', 'Guided city tours', 'Spice farm visit', 'Sunset dhow cruise'],
    },
    {
      image: destCoastal,
      title: 'Island Hopping Adventure',
      location: 'Lamu Archipelago',
      originalPrice: 'KShs 400,000',
      discountedPrice: 'KShs 300,000',
      discount: '25% OFF',
      features: ['7 nights island hopping', 'Snorkeling excursions', 'Traditional dhow sailing', 'Beach activities'],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={relocationHero}
            alt="Relocation services - beautiful home in Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Relocation Services & Special Offers
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Seamlessly transition to your new life in Kenya with our comprehensive relocation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Service Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Relocation Service
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* Replace with your company description */}
                At Excursia Connect, we understand that relocating to a new country is both exciting and challenging. Our dedicated relocation team specializes in helping Kenyans living abroad make a smooth transition back home. Whether you're planning to retire in Kenya, start a new business, or simply return to your roots, we're here to make the process seamless.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                With years of experience in international relocation services, we provide comprehensive support from initial planning through settling in. Our local expertise and extensive network ensure you'll have everything you need to start your new chapter with confidence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From finding the perfect neighborhood to navigating legal requirements, securing quality schools for your children, and connecting you with essential services—we handle every detail so you can focus on what matters most: enjoying your homecoming.
              </p>
            </div>

            {/* Service Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {relocationServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Special Travel Offers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Limited-time packages featuring incredible destinations at unbeatable prices. Book now and save big on your next adventure!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {offer.discount}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{offer.location}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-semibold mb-3">{offer.title}</h3>

                  <div className="flex items-baseline space-x-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{offer.discountedPrice}</span>
                    <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RelocationOffers;

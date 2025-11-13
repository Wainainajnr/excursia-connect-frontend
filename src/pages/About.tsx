import { Heart, Globe, Users, Target } from 'lucide-react';
import Layout from '@/components/Layout';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We love what we do and it shows in every journey we craft for our clients.',
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Extensive knowledge of destinations worldwide, combined with local insights.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your satisfaction and memorable experiences are at the heart of everything we do.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service and unforgettable adventures.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={aboutHero}
            alt="Our team at Excursia Connect"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  About Excursia Connect
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Your trusted partner in creating extraordinary travel experiences and seamless relocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              {/* Replace with your actual company description */}
              <p className="text-lg leading-relaxed">
                Founded in 2015, Excursia Connect emerged from a simple vision: to transform the way people experience travel. What started as a small tour operation in Nairobi has grown into a comprehensive travel and relocation service provider, serving clients across the globe.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our team of passionate travel experts brings together decades of combined experience in tourism, hospitality, and international relocation services. We've helped thousands of travelers discover the magic of Africa while providing seamless support for those making Kenya their home.
              </p>
              
              <p className="text-lg leading-relaxed">
                At Excursia Connect, we believe that travel is more than just visiting new places—it's about creating lasting memories, forming meaningful connections, and experiencing personal transformation. Whether you're embarking on an epic safari adventure, relaxing on pristine beaches, or relocating to your dream destination, we're committed to making your journey extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              To deliver exceptional travel experiences and relocation services that exceed expectations, while promoting sustainable tourism and creating positive impacts in the communities we serve.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center">
              Our Values
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Why Choose Excursia Connect?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-xl mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of East African destinations with insider access to hidden gems and authentic experiences.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-xl mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Every journey is tailored to your unique preferences, ensuring a truly personalized adventure.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-xl mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock assistance ensures you're never alone, no matter where your travels take you.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-xl mb-3">Sustainable Tourism</h3>
                <p className="text-muted-foreground">
                  Committed to responsible travel practices that protect wildlife, culture, and local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Show success message (no backend integration)
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } else {
      toast.error('Please fix the errors in the form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Spur Mall — 2nd Floor',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '0724415820',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'karibu@excursiaconnect.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about your next adventure? We're here to help plan your perfect journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.details}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Social */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.name ? 'border-destructive' : 'border-input'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? 'border-destructive' : 'border-input'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.subject ? 'border-destructive' : 'border-input'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      placeholder="Safari Tour Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message ? 'border-destructive' : 'border-input'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                      placeholder="Tell us about your travel plans..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit"
                    className="w-full btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Social & Additional Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">Follow Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay connected and get inspired with travel tips, destination highlights, and exclusive offers.
                </p>
                
                <div className="space-y-3">
                  <a 
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-accent" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-accent" />
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-accent" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl shadow-lg text-white">
                <h3 className="font-heading font-semibold text-xl mb-3">Ready to Book?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Call us now to speak with one of our travel experts and start planning your dream vacation.
                </p>
                <Button className="w-full btn-pill bg-white text-primary hover:bg-white/90">
                  Call +254 700 000 000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </Layout>
  );
};

export default Contact;

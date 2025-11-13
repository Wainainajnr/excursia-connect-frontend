import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Show success message (no backend integration)
    toast.success('Successfully subscribed! Check your email for exclusive offers.');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-background/20 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get Exclusive Travel Deals
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our newsletter and receive amazing offers, travel tips, and destination inspiration directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="input-field flex-1 bg-white"
              aria-label="Email address"
            />
            <Button 
              type="submit"
              className="btn-pill bg-secondary text-secondary-foreground hover:bg-secondary/90 whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

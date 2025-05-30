import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Mail, Phone, MapPin, Send } from 'lucide-react';
    import { useToast } from "@/components/ui/use-toast";

    const ContactPage = () => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic form validation or submission logic would go here
        // For now, just show a success toast
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
          variant: "default", // 'default' or 'destructive'
        });
        e.target.reset(); // Reset form fields
      };

      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We're here to answer your questions, discuss collaborations, or simply chat about the future of motivation and tech. Reach out to us!
            </p>
          </motion.section>

          <section className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <motion.div 
                className="bg-slate-50 p-8 rounded-xl shadow-xl border border-slate-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <Input type="text" id="name" name="name" required className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <Input type="email" id="email" name="email" required className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <Input type="text" id="subject" name="subject" required className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">Contact Information</h2>
                <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-100 flex items-start space-x-4 hover:shadow-primary/10 transition-shadow">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700">Email Us</h3>
                    <p className="text-slate-600">hello@novaspark.example.com</p>
                    <a href="mailto:hello@novaspark.example.com" className="text-sm text-primary hover:underline">Send an email</a>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-100 flex items-start space-x-4 hover:shadow-primary/10 transition-shadow">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700">Call Us</h3>
                    <p className="text-slate-600">(123) 456-7890</p>
                    <p className="text-sm text-slate-500">Mon - Fri, 9am - 5pm EST</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-100 flex items-start space-x-4 hover:shadow-primary/10 transition-shadow">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700">Our Office</h3>
                    <p className="text-slate-600">123 Innovation Drive, Tech City, TX 75001</p>
                    <a href="#" className="text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">Get directions (Illustrative)</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default ContactPage;

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom section">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Office Location</h3>
                  <p className="text-gray-600">
                    123 Design Avenue<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600 mb-1">Email: hello@pixelcraft.com</p>
                  <p className="text-gray-600 mb-1">Phone: +1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600 mb-1">Saturday - Sunday: Closed</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-agency-blue transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-600 hover:text-agency-blue transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-600 hover:text-agency-blue transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="mr-2"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-agency-blue hover:underline">
                          privacy policy
                        </a>
                      </label>
                    </div>
                    
                    <Button type="submit" className="bg-agency-blue hover:bg-agency-lightBlue w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="mb-3">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our office or drop us a line. We're always happy to hear from you.
            </p>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-500 text-lg">Interactive Map Would Be Displayed Here</p>
              <p className="text-gray-500">123 Design Avenue, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "The timeline for each project varies based on its complexity and scope. A standard website typically takes 4-6 weeks, while more complex web applications can take 3-4 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer both project-based and retainer pricing models. For one-time projects, we provide a detailed quote after understanding your requirements. For ongoing services, we offer monthly retainer packages. All pricing is transparent with no hidden fees."
              },
              {
                question: "Do you offer maintenance services after the project is completed?",
                answer: "Yes, we offer various maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally. These range from basic technical support to comprehensive management including content updates and performance optimization."
              },
              {
                question: "What industries do you specialize in?",
                answer: "While we work with clients across various industries, we have particular expertise in technology, healthcare, e-commerce, education, and professional services. Our diverse experience allows us to bring fresh perspectives while understanding industry-specific challenges."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your question here?{" "}
              <Button variant="link" className="text-agency-blue p-0">
                Contact our support team
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life and create digital experiences that drive results.
          </p>
          <Button size="lg" className="bg-agency-gold hover:bg-amber-600 text-agency-blue font-bold">
            Schedule a Call
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;

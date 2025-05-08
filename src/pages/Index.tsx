import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="font-bold">
                Crafting Digital <span className="text-agency-gold">Experiences</span> That Inspire
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                We're a full-service digital agency specializing in UI/UX design, web development, branding, and digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-agency-gold hover:bg-amber-600 text-agency-blue font-bold">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-agency-blue">
                  Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Digital Agency Workspace"
                className="rounded-lg shadow-xl object-cover w-full h-[400px] fade-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-agency-blue">10+ Years Experience</p>
                <p className="text-gray-600 text-sm">Award-winning agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "We create responsive, high-performance websites tailored to your business needs.",
                icon: "💻"
              },
              {
                title: "UI/UX Design",
                description: "Our design team creates intuitive, engaging user experiences that convert.",
                icon: "🎨"
              },
              {
                title: "Digital Marketing",
                description: "Data-driven strategies to increase your brand visibility and drive growth.",
                icon: "📊"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-agency-blue hover:bg-agency-lightBlue">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Our Team"
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-4">
              <h2>Who We Are</h2>
              <p className="text-lg text-gray-600">
                PixelCraft is a team of creative professionals passionate about digital innovation and design excellence.
              </p>
              <p className="text-gray-600">
                Since 2015, we've helped businesses of all sizes establish their digital presence and achieve their growth objectives.
                Our collaborative approach ensures that each project reflects the client's unique vision while incorporating industry best practices.
              </p>
              <Button asChild variant="outline" className="border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-agency-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "PixelCraft transformed our online presence completely. Their attention to detail and strategic approach delivered results beyond our expectations.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc."
              },
              {
                quote: "Working with PixelCraft was a game-changer for our brand. The team is responsive, creative, and truly cares about delivering excellence.",
                author: "Michael Chen",
                role: "Marketing Director, Evolve Media"
              },
              {
                quote: "Their ability to translate our vision into a stunning website while improving user experience has significantly increased our conversion rates.",
                author: "Emma Rodriguez",
                role: "Founder, Artisan Collective"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help elevate your digital presence and achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-agency-gold hover:bg-amber-600 text-agency-blue font-bold">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

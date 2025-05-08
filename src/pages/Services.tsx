
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom section">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive digital solutions tailored to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section">
        <div className="container-custom">
          <Tabs defaultValue="web-development" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="web-development">Web Development</TabsTrigger>
                <TabsTrigger value="ui-ux-design">UI/UX Design</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="digital-marketing">Digital Marketing</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="web-development">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Web Development"
                    className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                  />
                </div>
                <div className="space-y-4">
                  <h2>Web Development</h2>
                  <p className="text-lg text-gray-600">
                    We create custom, high-performance websites and web applications tailored to your specific business needs.
                  </p>
                  <p className="text-gray-600">
                    Our development team specializes in creating responsive, scalable, and secure digital solutions that provide an exceptional user experience while achieving your business objectives.
                  </p>
                  <h3 className="text-xl mt-6">Our Web Development Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Custom website development</li>
                    <li>E-commerce solutions</li>
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Content Management Systems (CMS)</li>
                    <li>Web application development</li>
                    <li>API development and integration</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ui-ux-design">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="UI/UX Design"
                    className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                  />
                </div>
                <div className="space-y-4">
                  <h2>UI/UX Design</h2>
                  <p className="text-lg text-gray-600">
                    We create intuitive, engaging user experiences that convert visitors into customers and enhance brand loyalty.
                  </p>
                  <p className="text-gray-600">
                    Our design approach combines aesthetics with functionality, ensuring that every digital touchpoint is not only visually appealing but also easy to navigate and optimized for conversion.
                  </p>
                  <h3 className="text-xl mt-6">Our UI/UX Design Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>User research and persona development</li>
                    <li>Information architecture</li>
                    <li>Wireframing and prototyping</li>
                    <li>Visual design and branding</li>
                    <li>Interaction design</li>
                    <li>Usability testing</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="branding">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
                    alt="Branding"
                    className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                  />
                </div>
                <div className="space-y-4">
                  <h2>Branding</h2>
                  <p className="text-lg text-gray-600">
                    We help businesses establish a strong, cohesive brand identity that resonates with their target audience and sets them apart from competitors.
                  </p>
                  <p className="text-gray-600">
                    Our branding services are designed to create memorable brand experiences that build trust, foster loyalty, and drive business growth.
                  </p>
                  <h3 className="text-xl mt-6">Our Branding Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Brand strategy and positioning</li>
                    <li>Logo and visual identity design</li>
                    <li>Brand guidelines and style guides</li>
                    <li>Brand messaging and tone of voice</li>
                    <li>Brand collateral design</li>
                    <li>Brand experience design</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digital-marketing">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8f5f989"
                    alt="Digital Marketing"
                    className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                  />
                </div>
                <div className="space-y-4">
                  <h2>Digital Marketing</h2>
                  <p className="text-lg text-gray-600">
                    We develop data-driven marketing strategies that increase your brand visibility, engage your target audience, and drive measurable business results.
                  </p>
                  <p className="text-gray-600">
                    Our digital marketing approach combines creative content with strategic distribution and continuous optimization to ensure maximum ROI for your marketing investment.
                  </p>
                  <h3 className="text-xl mt-6">Our Digital Marketing Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Pay-Per-Click (PPC) advertising</li>
                    <li>Social media marketing</li>
                    <li>Content marketing</li>
                    <li>Email marketing</li>
                    <li>Analytics and performance tracking</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver successful projects every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, objectives, target audience, and competition."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs."
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings the strategy to life through design, development, and content creation."
              },
              {
                step: "04",
                title: "Optimization",
                description: "We measure results, gather feedback, and continuously improve for optimal performance."
              }
            ].map((process, index) => (
              <Card key={index} className="relative overflow-hidden border-none shadow-lg">
                <div className="absolute top-0 right-0 bg-agency-blue text-white p-2 rounded-bl-lg text-sm font-bold">
                  {process.step}
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible options to suit businesses of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$1,999",
                description: "Perfect for small businesses just getting started.",
                features: [
                  "5-page responsive website",
                  "Basic SEO setup",
                  "Contact form integration",
                  "3 rounds of revisions",
                  "Google Analytics setup",
                  "30-day support"
                ]
              },
              {
                name: "Professional",
                price: "$4,999",
                description: "Ideal for established businesses looking to grow.",
                features: [
                  "10-page responsive website",
                  "Advanced SEO optimization",
                  "Content Management System",
                  "Custom form integration",
                  "Social media integration",
                  "E-commerce functionality (up to 50 products)",
                  "5 rounds of revisions",
                  "90-day support"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large businesses with complex requirements.",
                features: [
                  "Unlimited pages",
                  "Custom web application development",
                  "Advanced e-commerce functionality",
                  "Custom integrations",
                  "Dedicated project manager",
                  "Comprehensive digital strategy",
                  "Unlimited revisions",
                  "12-month support and maintenance"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-shadow ${
                  plan.highlighted ? 'border-agency-blue shadow-lg relative overflow-hidden' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-agency-blue text-white py-1 px-4 text-sm">
                    Most Popular
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/project</span>}
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={plan.highlighted ? "w-full bg-agency-blue" : "w-full"} 
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 text-gray-600">
            <p>Need a custom solution? <a href="/contact" className="text-agency-blue hover:underline">Contact us</a> for a personalized quote.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business goals and stand out in the digital landscape.
          </p>
          <Button asChild size="lg" className="bg-agency-gold hover:bg-amber-600 text-agency-blue font-bold">
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;

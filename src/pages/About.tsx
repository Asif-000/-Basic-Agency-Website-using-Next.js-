
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom section">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="mb-6">About PixelCraft</h1>
            <p className="text-xl opacity-90">
              We're a team of designers, developers, strategists, and digital
              innovators passionate about creating remarkable digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2>Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2015, PixelCraft began as a small team of passionate
                designers and developers with a vision to create digital solutions
                that make a real difference.
              </p>
              <p className="text-gray-600">
                What started as a three-person operation in a small office has grown
                into a full-service digital agency with a team of 25+ specialists
                across multiple disciplines. Throughout our growth, we've maintained
                our core values: creative excellence, client partnership, and
                innovative thinking.
              </p>
              <p className="text-gray-600">
                Today, we work with businesses of all sizes—from startups to
                Fortune 500 companies—helping them achieve their digital objectives
                and create meaningful connections with their audiences.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1074"
                alt="Our Story"
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Excellence",
                description: "We push creative boundaries and strive for excellence in every project we undertake.",
              },
              {
                title: "Client Partnership",
                description: "We view our clients as partners and work collaboratively to achieve shared goals.",
              },
              {
                title: "Innovative Thinking",
                description: "We embrace emerging technologies and innovative approaches to solve complex problems.",
              },
              {
                title: "Integrity",
                description: "We believe in honest communication and delivering on our promises.",
              },
              {
                title: "Continuous Learning",
                description: "We're committed to staying at the forefront of industry trends and best practices.",
              },
              {
                title: "Impact-Driven",
                description: "We focus on creating solutions that drive real business impact and meaningful results.",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who bring our projects to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1470",
              },
              {
                name: "Sophia Chen",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1470",
              },
              {
                name: "Marcus Johnson",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1974",
              },
              {
                name: "Olivia Rodriguez",
                role: "Marketing Strategist",
                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=1974",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="mt-4 font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to work with innovative companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Company A", "Company B", "Company C", "Company D", "Company E", "Company F", "Company G", "Company H"].map(
              (company, index) => (
                <div
                  key={index}
                  className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm"
                >
                  <span className="text-xl font-bold text-gray-400">{company}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;

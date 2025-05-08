
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "10 UI/UX Design Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends that will shape user experiences in the coming year.",
    category: "Design",
    date: "May 3, 2025",
    author: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 2,
    title: "The Future of Web Development: What to Expect",
    excerpt: "From WebAssembly to AI-driven development, discover the technologies shaping the future of the web.",
    category: "Development",
    date: "April 28, 2025",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 3,
    title: "Building a Successful Digital Marketing Strategy",
    excerpt: "Learn how to create a comprehensive digital marketing strategy that drives results for your business.",
    category: "Marketing",
    date: "April 20, 2025",
    author: "Olivia Rodriguez",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 4,
    title: "The Psychology of Color in Branding",
    excerpt: "How color choices influence consumer perception and behavior, and how to leverage this in your branding.",
    category: "Branding",
    date: "April 15, 2025",
    author: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1560780552-ba54683cb263?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 5,
    title: "Accessibility in Web Design: Best Practices",
    excerpt: "Why accessibility matters and how to implement it effectively in your web projects.",
    category: "Design",
    date: "April 10, 2025",
    author: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 6,
    title: "How AI is Transforming the Digital Agency Landscape",
    excerpt: "Explore the impact of artificial intelligence on creative work and agency operations.",
    category: "Technology",
    date: "April 5, 2025",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470",
  }
];

const categories = ["All", "Design", "Development", "Marketing", "Branding", "Technology"];

const Blog = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agency-blue to-agency-lightBlue text-white">
        <div className="container-custom section">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="mb-6">Our Blog</h1>
            <p className="text-xl opacity-90">
              Insights, strategies, and industry trends from our team of digital experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section">
        <div className="container-custom">
          {/* Blog Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 mb-4 md:mb-0 w-full md:w-auto">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-agency-blue" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="w-full md:w-64">
              <Input placeholder="Search articles..." />
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="overflow-hidden h-64 md:h-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm text-agency-blue font-semibold mb-2">{blogPosts[0].category}</span>
                  <h2 className="text-2xl md:text-3xl mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].date} • {blogPosts[0].author}</span>
                    <Button>Read More</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-agency-blue font-semibold mb-2">{post.category}</span>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                &larr;
              </Button>
              <Button variant="default" size="sm" className="bg-agency-blue">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="icon">
                &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with our latest insights and industry news. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input placeholder="Your email address" className="flex-1" />
              <Button className="bg-agency-blue hover:bg-agency-lightBlue">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;

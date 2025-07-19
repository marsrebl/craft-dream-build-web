import { Calendar, Users, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "../../public/images/Agrasen_Ki_Baoli_Panorama.jpg";

const Home = () => {
  const upcomingEvents = [
    {
      title: "Diwali Celebration 2081",
      date: "Kartik 15, 2081",
      location: "Kathmandu Community Center",
      description:
        "Join us for the grand Diwali celebration with traditional foods, cultural programs, and community bonding.",
    },
    {
      title: "Youth Committee Meeting",
      date: "Kartik 20, 2081",
      location: "Pokhara Branch",
      description:
        "Monthly meeting to discuss upcoming initiatives and community development projects.",
    },
    {
      title: "Cultural Heritage Workshop",
      date: "Mangsir 5, 2081",
      location: "Chitwan Branch",
      description:
        "Learn about Agrawal traditions, customs, and heritage preservation through interactive sessions.",
    },
  ];

  const communityStats = [
    { number: "2,500+", label: "Active Members", icon: Users },
    { number: "15", label: "Locations", icon: MapPin },
    { number: "50+", label: "Annual Events", icon: Calendar },
    { number: "25", label: "Years of Service", icon: Heart },
  ];

  return (
    <>
      {/* Enhanced animation styles */}
      <style>
        {`
          @keyframes slowZoomPan {
            0% {
              transform: scale(1) translate(0, 0);
            }
            50% {
              transform: scale(1.05) translate(10px, 10px);
            }
            100% {
              transform: scale(1) translate(0, 0);
            }
          }
          @keyframes floatingOrbs {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .bg-animated {
            animation: slowZoomPan 30s ease-in-out infinite;
            will-change: transform;
          }
          .floating-orb {
            animation: floatingOrbs 6s ease-in-out infinite;
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="min-h-screen scroll-smooth">
        {/* Enhanced Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75 bg-animated"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-label="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
          
          {/* Floating orbs animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full floating-orb" style={{ animationDelay: '0s' }} />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full floating-orb" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-primary/5 rounded-full floating-orb" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-8xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg fade-in-up">
              Nepal Agrawal{" "}
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Samaj
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md fade-in-up" style={{ animationDelay: '0.3s' }}>
              Uniting our community through tradition, culture, and shared values. Building
              bridges across generations and locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <Link to="/register">
                  Become a Member
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary transform transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Community Stats */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-background relative overflow-hidden">
          {/* Background animation elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-default transform transition-all duration-500 hover:scale-110 fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Community,{" "}
                  <span className="text-primary">Our Heritage</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  For over 25 years, Agrawal Samaj has been the cornerstone of our
                  community, preserving traditions while embracing progress. We connect
                  Agrawal families across Nepal and beyond, fostering unity, cultural pride,
                  and mutual support.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From organizing cultural festivals to supporting education and business
                  initiatives, we create opportunities for our members to thrive while
                  staying rooted in our values.
                </p>
                <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
                  <Link to="/about">
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 ml-1 inline" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="space-y-6">
                    {[
                      {
                        icon: Heart,
                        title: "Community Support",
                        desc: "Supporting each other through all of life's moments",
                        bg: "bg-primary",
                      },
                      {
                        icon: Users,
                        title: "Cultural Preservation",
                        desc: "Keeping our traditions alive for future generations",
                        bg: "bg-accent",
                      },
                      {
                        icon: MapPin,
                        title: "Global Network",
                        desc: "Connecting communities across different locations",
                        bg: "bg-success",
                      },
                    ].map(({ icon: Icon, title, desc, bg }, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className={`${bg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{title}</h3>
                          <p className="text-muted-foreground">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/3 rounded-full blur-2xl animate-ping" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in celebrating our culture and strengthening our community bonds
                through these upcoming events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group transition-all duration-500 hover:scale-[1.03] hover:shadow-xl cursor-pointer fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="border-0 bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Link to="/events">
                  View All Events
                  <Calendar className="w-5 h-5 ml-1 inline" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Become part of a thriving community that celebrates tradition, supports each other, and
              builds a brighter future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg transition duration-300 hover:scale-105"
                asChild
              >
                <Link to="/register">Join as Member</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary shadow-lg transition duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

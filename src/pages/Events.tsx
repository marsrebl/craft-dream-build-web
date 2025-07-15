import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const eventTypes = ["All", "Business", "Cultural", "Social Work", "Youth", "Women"];

  const upcomingEvents = [
    {
      id: 1,
      name: "Diwali Celebration 2081",
      date: "October 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Kathmandu Community Center",
      description: "Join us for the grand Diwali celebration with traditional foods, cultural programs, dance performances, and community bonding. Experience the joy of lights with traditional rituals.",
      type: "Cultural",
      image: "/images/diwali-event.jpg",
      registered: 150,
      capacity: 300,
    },
    {
      id: 2,
      name: "Business Networking Summit",
      date: "October 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Hotel Annapurna, Kathmandu",
      description: "Annual business networking event for Agrawal entrepreneurs and professionals. Workshops on digital marketing, financial planning, and business growth strategies.",
      type: "Business",
      image: "/images/business-event.jpg",
      registered: 85,
      capacity: 150,
    },
    {
      id: 3,
      name: "Youth Committee Meeting",
      date: "October 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Pokhara Branch Office",
      description: "Monthly meeting to discuss upcoming initiatives, community development projects, and youth engagement programs. Open to all youth members.",
      type: "Youth",
      image: "/images/youth-event.jpg",
      registered: 45,
      capacity: 80,
    },
    {
      id: 4,
      name: "Women Empowerment Workshop",
      date: "November 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Chitwan Branch",
      description: "Skill development workshop focusing on entrepreneurship, leadership, and financial independence for women in our community.",
      type: "Women",
      image: "/images/women-event.jpg",
      registered: 65,
      capacity: 100,
    },
    {
      id: 5,
      name: "Community Clean-up Drive",
      date: "November 12, 2024",
      time: "7:00 AM - 12:00 PM",
      location: "Bagmati River Bank",
      description: "Environmental awareness program with community service. Join us in making our city cleaner and spreading awareness about environmental conservation.",
      type: "Social Work",
      image: "/images/cleanup-event.jpg",
      registered: 120,
      capacity: 200,
    },
    {
      id: 6,
      name: "Cultural Heritage Workshop",
      date: "November 18, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Lalitpur Cultural Center",
      description: "Learn about Agrawal traditions, customs, and heritage preservation through interactive sessions, storytelling, and traditional craft workshops.",
      type: "Cultural",
      image: "/images/heritage-event.jpg",
      registered: 75,
      capacity: 120,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      name: "Annual Sports Tournament 2024",
      date: "September 15, 2024",
      image: "/images/sports-past.jpg",
      type: "Youth",
      attendees: 200,
    },
    {
      id: 2,
      name: "Krishna Janmashtami Celebration",
      date: "August 26, 2024",
      image: "/images/janmashtami-past.jpg",
      type: "Cultural",
      attendees: 350,
    },
    {
      id: 3,
      name: "Health Awareness Camp",
      date: "August 10, 2024",
      image: "/images/health-past.jpg",
      type: "Social Work",
      attendees: 180,
    },
    {
      id: 4,
      name: "Women's Day Celebration",
      date: "March 8, 2024",
      image: "/images/womens-day-past.jpg",
      type: "Women",
      attendees: 125,
    },
    {
      id: 5,
      name: "Business Excellence Awards",
      date: "February 20, 2024",
      image: "/images/awards-past.jpg",
      type: "Business",
      attendees: 100,
    },
    {
      id: 6,
      name: "Holi Festival Celebration",
      date: "March 25, 2024",
      image: "/images/holi-past.jpg",
      type: "Cultural",
      attendees: 400,
    },
  ];

  const filteredUpcomingEvents = selectedFilter === "All" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedFilter);

  const filteredPastEvents = selectedFilter === "All" 
    ? pastEvents 
    : pastEvents.filter(event => event.type === selectedFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Business": return "bg-blue-500";
      case "Cultural": return "bg-purple-500";
      case "Social Work": return "bg-green-500";
      case "Youth": return "bg-orange-500";
      case "Women": return "bg-pink-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us in celebrating our culture, building connections, and making a positive impact 
            in our community through meaningful events and gatherings.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by type:</span>
            </div>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting upcoming events. Register now to secure your spot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 bg-card/50 backdrop-blur">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-t-lg flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-primary/60" />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getTypeColor(event.type)} text-white`}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{event.registered}/{event.capacity}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {event.name}
                  </CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">
                      Register Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredUpcomingEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No upcoming events found
              </h3>
              <p className="text-muted-foreground">
                No events match your current filter. Try selecting a different event type.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Past Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at our recent successful events and the wonderful moments we've shared together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPastEvents.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="w-8 h-8 text-primary/60" />
                  </div>
                  <Badge 
                    className={`absolute top-2 left-2 ${getTypeColor(event.type)} text-white text-xs`}
                  >
                    {event.type}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {event.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPastEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No past events found
              </h3>
              <p className="text-muted-foreground">
                No past events match your current filter. Try selecting a different event type.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Never miss an event! Join our community to get updates about upcoming events, 
            registration information, and exclusive member benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Join Community
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, Calendar, Camera, ArrowLeft, Mail } from 'lucide-react';
import { getLocationById } from '@/data/locations';
import LazyImage from '@/components/LazyImage';

const LocationDetail = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const location = locationId ? getLocationById(locationId) : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!location) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Location Not Found</h1>
          <Link to="/locations">
            <Button>Back to Locations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-background py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-6 animate-fade-in">
            <Link to="/locations">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Locations
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {location.name}
            </h1>
             <h2 className="text-2xl md:text-3xl font-bold text-foreground">{location.leader}</h2>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2" />
              
              <span className="text-lg">{location.region}</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-1" />
                Total Members: {location.members.yuva + location.members.mahila + location.members.kanya}
              </Badge>
              {location.adminEmail && (
                <Badge variant="outline" className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-1" />
                  {location.adminEmail}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Member Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Yuva (Youth)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{location.members.yuva}</div>
                <p className="text-primary">Active youth members</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Mahila (Women)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{location.members.mahila}</div>
                <p className="text-muted-foreground">Women community leaders</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Kanya (Girls)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{location.members.kanya}</div>
                <p className="text-primary">Young female members</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="features" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.features.map((feature, index) => (
                  <Card key={feature.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-primary mr-2">✦</span>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
                {location.features.length === 0 && (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No features available yet.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.events.map((event, index) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {event.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <LazyImage src={event.image} alt={event.title} className="w-full h-full" />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{event.title}</CardTitle>
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
                {location.events.length === 0 && (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No events scheduled yet.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.gallery.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square overflow-hidden">
                        <LazyImage src={item.image} alt={item.title} className="w-full h-full" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                {location.gallery.length === 0 && (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No gallery items available yet.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDetail;

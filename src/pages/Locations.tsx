
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Camera, Sparkles } from 'lucide-react';
import { nepaleseLocations } from '@/data/locations';

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', ...Array.from(new Set(nepaleseLocations.map(loc => loc.region)))];

  const filteredLocations = nepaleseLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || location.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-primary/5 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-scale-in">
              Our Locations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover Agrawal communities across 18 cities in Nepal, each with unique contributions to our collective growth
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location, index) => (
              <Card key={location.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </CardTitle>
                      <div className="flex items-center mt-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{location.region}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {location.members.yuva + location.members.mahila + location.members.kanya}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Member Categories */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-lg font-semibold text-primary">{location.members.yuva}</div>
                      <div className="text-xs text-muted-foreground">Yuva</div>
                    </div>
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <div className="text-lg font-semibold text-accent-foreground">{location.members.mahila}</div>
                      <div className="text-xs text-muted-foreground">Mahila</div>
                    </div>
                    <div className="p-2 bg-secondary/50 rounded-lg">
                      <div className="text-lg font-semibold text-secondary-foreground">{location.members.kanya}</div>
                      <div className="text-xs text-muted-foreground">Kanya</div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{location.events.length} Events</span>
                    </div>
                    <div className="flex items-center">
                      <Camera className="w-4 h-4 mr-1" />
                      <span>{location.gallery.length} Photos</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span>{location.features.length} Features</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  {location.features.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <div className="flex flex-wrap gap-1">
                        {location.features.slice(0, 2).map((feature) => (
                          <Badge key={feature.id} variant="outline" className="text-xs">
                            {feature.title}
                          </Badge>
                        ))}
                        {location.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{location.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link to={`/locations/${location.id}`}>
                    <Button className="w-full mt-4 group-hover:bg-primary/90 transition-colors">
                      Explore {location.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground text-lg">No locations found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Locations;

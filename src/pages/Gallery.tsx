
import { useState } from "react";
import { X, Play, Calendar, Users, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  interface GalleryItem {
    id: number;
    title: string;
    category: string;
    type: 'image' | 'video';
    thumbnail: string;
    fullImage?: string;
    videoUrl?: string;
    description: string;
    date: string;
    tags: string[];
  }

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Annual Business Summit 2024",
      category: "Business Events",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
      description: "Successful business networking event bringing together Agrawal entrepreneurs from across the region.",
      date: "March 2024",
      tags: ["networking", "business", "summit"]
    },
    {
      id: 2,
      title: "Diwali Cultural Festival",
      category: "Cultural Celebrations",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80",
      description: "Community celebration of Diwali with traditional performances and cultural activities.",
      date: "November 2023",
      tags: ["festival", "culture", "diwali"]
    },
    {
      id: 3,
      title: "Community Workshop Series",
      category: "Business Events",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      description: "Educational workshop on entrepreneurship and business development for community members.",
      date: "February 2024",
      tags: ["workshop", "education", "skills"]
    },
    {
      id: 4,
      title: "Heritage Building Restoration",
      category: "Social Work",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
      description: "Community-led initiative to restore and preserve historical buildings in the area.",
      date: "January 2024",
      tags: ["heritage", "restoration", "community"]
    },
    {
      id: 5,
      title: "Youth Leadership Program",
      category: "Youth & Women Activities",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80",
      description: "Empowering young community members through leadership training and mentorship programs.",
      date: "April 2024",
      tags: ["youth", "leadership", "empowerment"]
    },
    {
      id: 6,
      title: "Women Entrepreneurship Meet",
      category: "Youth & Women Activities",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
      fullImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
      description: "Supporting women entrepreneurs in the Agrawal community with resources and networking opportunities.",
      date: "May 2024",
      tags: ["women", "entrepreneurship", "support"]
    }
  ];

  const filterCategories = [
    { name: "All", icon: Sparkles },
    { name: "Business Events", icon: Users },
    { name: "Cultural Celebrations", icon: Heart },
    { name: "Social Work", icon: Heart },
    { name: "Youth & Women Activities", icon: Users }
  ];

  const filteredItems = selectedFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-background py-16 md:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-primary/5 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-scale-in">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Capturing moments of unity, celebration, and growth in our vibrant Agrawal community
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/50 border-b border-border backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filterCategories.map((category, index) => (
              <Button
                key={category.name}
                variant={selectedFilter === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category.name)}
                className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <LazyImage
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-6xl max-h-[90vh] w-full animate-scale-in">
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video max-h-[70vh] overflow-hidden">
                <img
                  src={lightboxItem.fullImage || lightboxItem.thumbnail}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {lightboxItem.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {lightboxItem.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{lightboxItem.date}</span>
                      </div>
                      <Badge variant="outline">{lightboxItem.category}</Badge>
                    </div>
                  </div>
                </div>
                
                {lightboxItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {lightboxItem.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

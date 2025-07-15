
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: [
        "Agrawal Samaj Nepal",
        "New Baneshwor, Kathmandu",
        "Nepal"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+977-1-4567890",
        "+977-1-4567891",
        "+977-9851234567"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses", 
      details: [
        "info@agrawalsamaj.org",
        "president@agrawalsamaj.org",
        "support@agrawalsamaj.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Public Holidays: Closed"
      ]
    }
  ];

  const branches = [
    {
      name: "Kathmandu Branch",
      address: "New Baneshwor, Kathmandu",
      phone: "+977-1-4567890",
      email: "kathmandu@agrawalsamaj.org"
    },
    {
      name: "Pokhara Branch", 
      address: "Lakeside, Pokhara",
      phone: "+977-61-567890",
      email: "pokhara@agrawalsamaj.org"
    },
    {
      name: "Chitwan Branch",
      address: "Bharatpur, Chitwan",
      phone: "+977-56-567890", 
      email: "chitwan@agrawalsamaj.org"
    },
    {
      name: "Butwal Branch",
      address: "Traffic Chowk, Butwal",
      phone: "+977-71-567890",
      email: "butwal@agrawalsamaj.org"
    }
  ];

  return (
    <>
      {/* Animation styles */}
      <style>
        {`
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
          @keyframes floatingElements {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .floating {
            animation: floatingElements 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="min-h-screen bg-background">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/15 via-accent/8 to-background py-16 md:py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-primary/8 rounded-full floating" />
            <div className="absolute top-3/4 right-1/6 w-32 h-32 bg-accent/8 rounded-full floating" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary/5 rounded-full floating" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to help and answer any questions you might have. 
                Reach out to us and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Enhanced Contact Form */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 fade-in-up">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Send us a message and we'll get back to you
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12 transition-all duration-300 focus:scale-[1.02]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 transition-all duration-300 focus:scale-[1.02]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px] transition-all duration-300 focus:scale-[1.02]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Branch Locations */}
          <section className="mb-20">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Branch Locations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit any of our branch offices for in-person assistance and community services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {branches.map((branch, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/70 backdrop-blur-sm hover:scale-105 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {branch.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{branch.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground break-all">{branch.email}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;

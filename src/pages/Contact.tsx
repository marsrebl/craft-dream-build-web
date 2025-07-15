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
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have. 
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-elegant border-0">
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
                    className="h-12"
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
                    className="h-12"
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
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
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

        {/* Branch Locations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Branch Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit any of our branch offices for in-person assistance and community services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
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
  );
};

export default Contact;
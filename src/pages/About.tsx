import { Users, Heart, Globe, Star, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Unity & Support",
      description: "We believe in standing together as one community, supporting each other through all phases of life."
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich Agrawal traditions, customs, and cultural values."
    },
    {
      icon: Globe,
      title: "Global Connection", 
      description: "Connecting Agrawal families worldwide while maintaining our roots and identity."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Encouraging excellence in education, business, and personal development among our members."
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description: "Agrawal Samaj was established in Kathmandu with 50 founding members."
    },
    {
      year: "2005",
      title: "First Branch",
      description: "Expanded to Pokhara, establishing our first branch outside Kathmandu."
    },
    {
      year: "2010",
      title: "Youth Committee",
      description: "Formed dedicated youth and women committees to engage all age groups."
    },
    {
      year: "2015",
      title: "National Network",
      description: "Reached 10 locations across Nepal with over 1,000 members."
    },
    {
      year: "2020",
      title: "Digital Era",
      description: "Launched digital initiatives and virtual events during challenging times."
    },
    {
      year: "2023",
      title: "25 Years Strong",
      description: "Celebrating 25 years of service with 2,500+ members across 15 locations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Agrawal Samaj</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we have been the heart of the Agrawal community, 
              fostering unity, preserving traditions, and creating opportunities for growth and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-transparent shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To unite the Agrawal community globally by preserving our cultural heritage, 
                  promoting mutual support, and creating opportunities for social, educational, 
                  and economic development while maintaining our traditional values and customs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-accent/10 to-transparent shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To be the leading global platform for the Agrawal community, where tradition 
                  meets progress, and where every member feels connected, supported, and empowered 
                  to achieve their fullest potential while staying rooted in our cultural identity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our community culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-card/70 backdrop-blur">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving community - here's how we've grown together.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                  
                  {/* Content */}
                  <div className={`lg:${index % 2 === 0 ? 'text-right pr-8' : 'col-start-2 pl-8'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/70 backdrop-blur">
                      <CardHeader>
                        <div className="flex items-center space-x-3 lg:justify-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                          </div>
                          <div>
                            <div className="text-primary font-bold text-lg">{milestone.year}</div>
                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Together, we've achieved remarkable milestones and continue to make a difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">Scholarships Awarded</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1,250+</div>
              <div className="text-white/90">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/90">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;